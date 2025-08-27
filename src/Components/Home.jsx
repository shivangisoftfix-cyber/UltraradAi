import background from "../assets/images/background.png";
import LogoImage2 from "../assets/images/images2.png";
import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Climet from "./Climet";
import Plan from "./Plan";
import Textmove from "./Textmove";
import Box from "./Box";
import Frequnce from "./Frequnce";
import Latestar from "./Latestar";
import End from "./Doctorh";
import Doctorh from "./Doctorh";

function Home() {
  return (
    <div
      className="space-y-24 min-h-[120vh] pt-44 w-full"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      {/* Hero Section */}
      <section className="flex flex-row justify-between px-6">
        {/* Left Text Section */}
        <div className="w-1/2 text-left">
          <h1 className="text-blue-900 text-5xl font-extrabold">
            Revolutionizing <br />
            Radiology With AI <br />
            Intelligence
          </h1>

          <p className="text-lg max-w-2xl text-blue-900 mt-6">
            Empowering radiology with cutting-edge intelligent tools that not
            only save valuable time, but also elevate diagnostic accuracy,
            streamline complex workflows, and restore complete control over
            every stage of the imaging and reporting process.
          </p>

          <div className="flex gap-2 my-10 text-xl text-blue-800 hover:underline">
            <AiFillCaretRight className="w-12 h-12 text-blue-800 border-2 rounded-full p-2" />
            <span className="my-4">Watch Demo</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={LogoImage2}
            alt="Radiology AI"
            className="h-[700px] w-[800px] object-contain"
          />
        </div>
      </section>

      {/* Contact Box Section */}
      <div className="flex relative items-center justify-center">
        <div
          className="w-4/6 h-auto shadow-2xl rounded-xl px-6 md:px-20 bg-white
   dark:bg-gray-500 relative  top-0 md:absolute md:-top-50 py-8"
        >
          <div className="flex flex-wrap justify-start items-center gap-10 py-8">
            {/* Item 1 */}
            <div className="flex items-center gap-3">
              <CiPhone className="w-12 h-12 bg-blue-500 text-white rounded-full p-2" />
              <span>
                <b>Hotline</b> <br /> 123-456-7890
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3">
              <MdOutlineMailOutline className="w-12 h-12 bg-blue-500 text-white rounded-full p-2" />
              <span>
                <b>Email</b>
                <br />
                Support@ultraradai.com
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3">
              <BiShareAlt className="w-12 h-12 bg-blue-500 text-white rounded-full p-2" />
              <span>
                <b>Follow Us</b>
                <br />
                @ultraradai
              </span>
            </div>

            <Link
              to="/register"
              className="bg-blue-500 px-6 py-3 rounded-full flex items-center text-white text-lg 
              font-semibold shadow-md hover:bg-blue-600 transition"
            >
              Get Started{" "}
              <AiOutlineArrowRight className="ml-2 text-xl arrow-slide" />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee with Rotating + */}
      <div className="w-full mt-10  md:mt-0 relative -top-10">
        <marquee className="w-full ">
          <Textmove text={"Diagonastic"} />
          <span className="mx-4 inline-block  text-6xl font-bold">+</span>
          <Textmove text={"Radiologist"} />
          <span className="mx-4 inline-block animate-spin-slow text-6xl font-bold">
            +
          </span>
          <Textmove text={"MEDICAL"} />
        </marquee>
      </div>

      {/* Other Sections */}
      <div className="bg-blue-200 py-20">
        <Box />
        <Climet />
        <Plan />
        <Frequnce />
        <Latestar />
        <Doctorh/>
      </div>
    </div>
  );
}

export default Home;
