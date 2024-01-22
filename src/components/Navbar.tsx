import React, { useState } from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaMap, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Select } from "antd";
import CustomSelect from "./CustomSelect/CustomSelect";

const { Option } = Select;

const Navbar: React.FC = () => {
  const [navBar, setNavBar] = useState(false);

  const scrollAction = () => {
    if (window.scrollY >= 40) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", scrollAction);

  return (
    <>
      <div className={`flex items-center bg-slate-100 mb-0`}>
        <div className="flex flex-col items-center justify-center w-fit px-10">
          {<SlSocialVkontakte className="text-[80px] text-sky-600" />}
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between p-2">
            <div className="flex items-center justify-evenly gap-3">
              <div className="flex items-center gap-3 text-slate-500">
                <FaMap className="text-[#00A399]" />
                <div>
                  <span className="font-semibold">Address: </span>KN 4 Ave,
                  Kigali
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <FaPaperPlane className="text-[#00A399]" />
                <div>
                  <span className="font-semibold">Email: </span>{" "}
                  maxkinginstitute@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <FaPhoneAlt className="text-[#00A399]" />
                <div>
                  <span className="font-semibold">Phone: </span>+250 788 389 098
                </div>
              </div>
            </div>
            <div>
              <CustomSelect
                prefixIcon={<BsGlobe2 className="text-slate-700" />}
                suffixIcon={
                  <MdArrowDropDown className="text-slate-700 text-lg" />
                }
                defaultValue="English"
                onClick={(e) => console.log(e)}
              >
                <Option value="jack">English</Option>
                <Option value="lucy">Francais</Option>
                <Option value="Yiminghe">Deutch</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
              </CustomSelect>
              {/* <Select
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
                
              /> */}
            </div>
          </div>
          <div
            className={` ${
              navBar ? "fixed top-0 right-0 left-0  no-clip-path" : "clip-path"
            } bg-[#00A399] w-full text-zinc-50 flex items-center justify-evenly divide-x ease-in duration-300 transition-all z-50`}
          >
            <Link
              to="/"
              className={`flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600  ${
                navBar ? "pl-0" : "pl-8 text-2xl"
              }}`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600"
            >
              ABOUT US
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600"
            >
              TRAINING CENTER
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600"
            >
              MKI PROGRAMS
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600"
            >
              MKI COMMUNITY
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600"
            >
              CONTACT US
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center justify-center w-full py-2 hover:bg-sky-600 bg-sky-600"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
