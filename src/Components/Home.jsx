import background from "../assets/images/background.png";
import LogoImage2 from "../assets/images/images2.png";

function Home() {
  return (
    <div
      className="space-y-24 min-h-[100vh] pt-44 w-full"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <section className="h-screen flex flex-row  justify-between px-6 ">
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

          
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex justify-between items-center mt-3
        mb-50 ">
          <img
            src={LogoImage2}
            alt="Radiology AI"
            className="h-[900px] w-[1000px] object-contain"
          />
        </div>
          {/* box */}
        
</section>
 <div className="flex flex-row ">
  <div className="h-32  items-center justify-between mx-36  border rounded-xl px-20 bg-white w-full">

  </div>


          </div>
    </div>
  );
}

export default Home;
