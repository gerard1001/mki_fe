import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { FaHeart, FaMessage } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { posts } from "../../utils/dummies";
import { Button } from "antd";
import "../../assets/styles/slick-courses/slick.styles.css";
import "../../assets/styles/slick-courses/slick-theme.styles.css";

const Courses: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    speed: 700,
    infinite: true,
    centerPadding: "10px",
    rows: 2,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    afterChange: (index: number) => {
      console.log("Active index:", index);
      setIndex(index);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`border-[1px] border-[#0284c7] rounded-[4px] flex items-center gap-5 justify-center w-7 ${
          i === index / 4
            ? "bg-[#0284c7] text-zinc-100"
            : "bg-zinc-100 text-[#0284c7]"
        }`}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          customPaging: (i: any) => (
            <div
              className={`border-[1px] border-[#0284c7] rounded-[4px] flex items-center gap-5 justify-center w-7 ${
                i === index / 3
                  ? "bg-[#0284c7] text-zinc-100"
                  : "bg-zinc-100 text-[#0284c7]"
              }`}
            >
              {i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          customPaging: (i: any) => (
            <div
              className={`border-[1px] border-[#0284c7] rounded-[4px] flex items-center gap-5 justify-center w-7 ${
                i === index / 2
                  ? "bg-[#0284c7] text-zinc-100"
                  : "bg-zinc-100 text-[#0284c7]"
              }`}
            >
              {i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customPaging: (i: any) => (
            <div
              className={`border-[1px] border-[#0284c7] rounded-[4px] flex items-center gap-5 justify-center w-7 ${
                i === index
                  ? "bg-[#0284c7] text-zinc-100"
                  : "bg-zinc-100 text-[#0284c7]"
              }`}
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };
  const PreviousBtn = (props: any) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <HiChevronLeft className="text-slate-600 text-lg" />
      </div>
    );
  };

  const NextBtn = (props: any) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <HiChevronRight className="text-slate-600 text-lg" />
      </div>
    );
  };

  return (
    <>
      <div className="h-screen">
        <div
          className="relative flex items-center mt-5 w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex-grow border-t border-gray-400"></div>
          <h1 className="text-4xl uppercase text-center text-gray-700 flex-shrink mx-6">
            Recent free courses
          </h1>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div data-aos="fade-up">
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            {...settings}
            className="courses w-[95%] max-w-[1200px] mx-auto flex gap-2 flex-wrap content-center justify-center"
          >
            {posts.map((values) => {
              return (
                <div
                  className="max-w-xs min-h-[396px] rounded overflow-hidden shadow-sm hover:shadow-md p-2 relative"
                  key={values.id}
                >
                  <div
                    className="relative w-full"
                    style={{
                      backgroundImage: `url(${values.picture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "200px",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className={`absolute w-[50px] aspect-square rounded-[50%] flex flex-col items-center justify-center text-zinc-100 left-[90%] top-[78%] -translate-x-[50%] ${
                        values.fees !== "Free"
                          ? "bg-yellow-400"
                          : "bg-[#0284c7]"
                      }`}
                    >
                      {values.fees}
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-3 pt-2">
                    <div className="flex items-center text-slate-500">
                      <FaStar className="text-yellow-400 text-xl mr-1" />
                      <span className="font-semibold">{values.reviews}</span>
                      (45)
                    </div>
                    <div className="flex items-center text-slate-500">
                      <FaHeart className="text-red-400 text-xl mr-1" />
                      <span className="font-semibold">{values.likes}</span>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <FaMessage className="text-sky-500 text-xl mr-1" />
                      <span className="font-semibold">{values.comments}</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 pb-10">
                    <div className="font-bold text-xl mb-2 text-slate-700 line-clamp-3">
                      {values.title}
                    </div>
                  </div>
                  <div className="absolute left-[50%] bottom-0 -translate-x-[50%] px-6 py-4 w-full flex flex-col items-center">
                    <Button className="uppercase font-semibold border-[1px] border-sky-600 text-sky-600">
                      Take course
                    </Button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Courses;
