import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider4.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import library from "../../assets/images/library.jpg";
import educ from "../../assets/images/educ.jpg";
import categ1 from "../../assets/images/categ1.png";
import categ2 from "../../assets/images/categ2.png";
import categ3 from "../../assets/images/categ3.png";
import categ4 from "../../assets/images/categ4.png";
import categ5 from "../../assets/images/categ5.png";
import categ6 from "../../assets/images/categ6.png";
import categ7 from "../../assets/images/categ7.png";
import categ8 from "../../assets/images/categ8.png";
import benefits1 from "../../assets/images/tutorial.png";
import benefits2 from "../../assets/images/elib.png";
import benefits3 from "../../assets/images/assessment.png";
import benefits4 from "../../assets/images/certificate.png";
import benefits5 from "../../assets/images/mentorsupport.png";
import benefits6 from "../../assets/images/anywheretime.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineDoubleArrow, MdPlayLesson } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Courses from "../../components/Home/Courses";
import "../../assets/styles/slick-main/slick.styles.css";
import "../../assets/styles/slick-main/slick-theme.styles.css";

const benefits = [
  {
    title: "Online tutorials",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits1}`,
  },
  {
    title: "Free e-library",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits2}`,
  },
  {
    title: "Online evaluation",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits3}`,
  },
  {
    title: "Get certified",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits4}`,
  },
  {
    title: "Mentor support",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits5}`,
  },
  {
    title: "anywhere, anytime",
    descr:
      "MKI is committed to Social economic sustainable development through education.",
    img: `${benefits6}`,
  },
];

const array = [
  {
    title: "Biomedical",
    img: `${categ1}`,
    tutorials: 22,
    learners: 129,
  },
  {
    title: "Phisiology",
    img: `${categ2}`,
    tutorials: 34,
    learners: 99,
  },
  {
    title: "PublicHealth",
    img: `${categ3}`,
    tutorials: 19,
    learners: 100,
  },
  {
    title: "Epidemiology",
    img: `${categ4}`,
    tutorials: 9,
    learners: 129,
  },
  {
    title: "Biochemistry",
    img: `${categ5}`,
    tutorials: 9,
    learners: 129,
  },
  {
    title: "Biology",
    img: `${categ6}`,
    tutorials: 9,
    learners: 129,
  },
  {
    title: "Pharmacology",
    img: `${categ7}`,
    tutorials: 9,
    learners: 129,
  },
  {
    title: "Anatomy",
    img: `${categ8}`,
    tutorials: 9,
    learners: 129,
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const slides = [
    {
      title: "EXCELLENT EDUCATION",
      descr: "WE HAVE THE BEST PROGRAMS  AND COURSES FOR YOU",
      img: `${slider1}`,
    },
    {
      title: "IMPACT AND MEANINGFUL CHANGE",
      descr:
        "MKI is committed to Social economic sustainable development through education.",
      img: `${slider2}`,
    },
    {
      title: "We inspire, we empower",
      descr:
        "Get involved, connect and learn from other members’ experience, Share yours across the globe.",
      img: `${slider3}`,
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const PreviousBtn = (props: any) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <MdOutlineDoubleArrow className="text-zinc-50 text-8xl transform -scale-x-100" />
      </div>
    );
  };

  const NextBtn = (props: any) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <MdOutlineDoubleArrow className="text-zinc-50 text-8xl" />
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="w-full">
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          {...settings}
        >
          {slides.map((values, idx) => {
            return (
              <div key={idx} className="wrapper relative">
                <div className="flex flex-col justify-center w-[40%] aspect-[16/7] bg-[#000000aa] absolute top-[50%] left-[70%] -translate-x-2/4 -translate-y-2/4 text-white p-2 z-10">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl uppercase text-center">
                      {values.title}
                    </h1>
                    <h1 className="text-xl font-thin text-zinc-300 uppercase  text-center mt-3 pb-3 border-b">
                      {values.descr}
                    </h1>
                  </div>
                  <div className="flex items-center justify-end gap-1 hover:underline hover:text-slate-400 cursor-pointer">
                    Learn more
                    <IoIosArrowRoundForward className="text-2xl" />
                  </div>
                </div>
                <div className="!w-full !h-[50%] fill relative mx-auto">
                  {" "}
                  <img
                    src={values.img}
                    alt=""
                    className="object-cover  border border-[#afafaf33] w-[100%] md:h-[560px] aspect-[16/9]"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="w-full h-screen">
        <div className="w-full h-[60px] relative">
          <div
            className="w-1/2 h-[90px] z-30 bg-white absolute -top-[50px] left-[25%] -translate-x-2/4 -translate-y-2/4 shadow-lg rounded-md flex items-center justify-evenly gap-2"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-2">
              <RiGraduationCapFill className="text-[36px] text-[#00A399]" />
              <div className="flex flex-col">
                <h1 className="text-slate-800 text-2xl font-bold">297</h1>
                <h1 className="text-slate-500">Trainees</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-[36px] text-[#00A399]" />
              <div className="flex flex-col">
                <h1 className="text-slate-800 text-2xl font-bold">15</h1>
                <h1 className="text-slate-500">Mentors</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdPlayLesson className="text-[36px] text-[#00A399]" />
              <div className="flex flex-col">
                <h1 className="text-slate-800 text-2xl font-bold">96</h1>
                <h1 className="text-slate-500">Courses</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center w-[80%] mx-auto rounded-xl h-[20%] min-h-80 relative py-10"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${educ})`,
            backgroundPositionY: "bottom",
            backgroundSize: "cover",
          }}
          data-aos="fade-up"
        >
          <div className="relative flex items-center mb-7 ">
            <div className="flex-grow border-t border-gray-400"></div>
            <h1 className="text-4xl uppercase text-center text-gray-500 flex-shrink mx-6">
              what you gain being with us
            </h1>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="text-center text-xl text-zinc-400 w-[70%] mx-auto">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              libero fugit unde, voluptas saepe natus temporibus magnam illum
              odio soluta, a reiciendis porro, quos consequatur labore?
              Quibusdam, quod architecto. Obcaecati.
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap content-center pt-16 w-fit mx-auto gap-2"
          data-aos="fade-up"
        >
          {benefits.map((values, idx) => {
            return (
              <div
                className="group flex flex-col relative items-center justify-center gap-5 w-[250px] mx-auto mb-10 bg-teal-600/0 rounded-xl p-4 cursor-default hover:bg-teal-600/80 hover:shadow-xl ease-in transition-all duration-200  hover:scale-105"
                key={idx}
              >
                <div className="w-[80px] h-[80px] absolute left-[50%] -top-[25%] -translate-x-[50%] bg-sky-600/0 group-hover:bg-teal-600 crazy-round flex flex-col justify-center items-center  ease-in transition-all duration-500">
                  <img
                    src={values.img}
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-xl"
                  />
                </div>
                <div className="w-full text-center">
                  <h1 className="text-2xl font-semibold text-slate-800 group-hover:text-zinc-100 capitalize my-1">
                    {values.title}
                  </h1>
                  <h1 className="text-lg text-zinc-700 group-hover:text-zinc-200">
                    {values.descr}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="max-h-[1000px] w-full relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${library})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="relative flex items-center mt-5 w-[80%] mx-auto"
            data-aos="fade-up"
          >
            <div className="flex-grow border-t border-gray-400"></div>
            <h1 className="text-4xl uppercase text-center text-gray-300 flex-shrink mx-6">
              Our course categories
            </h1>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center content-center w-fit mx-auto min-h-screen p-2">
            {array?.map((values, idx) => {
              return (
                <div
                  className="group h-60 w-60 [perspective:1000px]"
                  key={idx + 1}
                  data-aos={"fade-up"}
                >
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(-180deg)]">
                    <div className="absolute inset-0">
                      <div className="w-full h-full flex flex-col gap-5 items-center justify-center bg-white/15 border border-teal-600 rounded-xl">
                        <div className="h-[80px] w-[80px] bg-teal-600 p-3  crazy-round">
                          <img
                            src={values.img}
                            alt=""
                            className="w-full h-full rounded-xl object-cover invert"
                          />
                        </div>
                        <h1 className="uppercase text-xl font-semibold text-zinc-200">
                          {values.title}
                        </h1>
                      </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-teal-600/80 px-12 text-center text-slate-200 [transform:rotateX(-180deg)] [backface-visibility:hidden] cursor-default">
                      <div className="flex flex-col justify-center h-full gap-3">
                        <h1 className="text-lg flex items-center gap-2">
                          <MdPlayLesson className="text-[20px] text-slate-700" />
                          {values.tutorials} Tutorials
                        </h1>
                        <h1 className="text-lg flex items-center gap-2">
                          <FaUsers className="text-[20px] text-slate-700" />
                          {values.learners} Learners
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Courses />
        </div>
      </div>
    </>
  );
};

export default Home;
