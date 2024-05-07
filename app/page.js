import Image from "next/image";
import womanLogo from "../public/nethini/womalogo.png";
import Footer from "./components/footer";
import Images from "./components/images";
import MainHome from "./components/mainHome";
import ThankYou from "./components/thankyou";

export default function Home() {
  return (
    <>
      {/* Navigation Section */}
      <div className="flex items-center justify-between w-[90%] mx-auto h-[60-px] ">
        <Image
          src={womanLogo}
          alt="woman logo"
          className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px]"
        />
        <h1 className="text-3xl tracking-widest font-bold ">With GIRL</h1>
      </div>
      {/* End Of Navigation Section  */}

      {/* Main Home Section */}
      <div className="flex items-center justify-between w-[90%] mx-auto h-full mt-24 ">
        <MainHome />
      </div>
      {/* End Of Main Home Section */}

      {/* Image Gallery */}
      <div className="w-[90%] mx-auto h-full mt-40 ">
        <h1 className="text-5xl font-bold font-mono text-center">
          Pic Gallery
        </h1>
        <div className="mt-16 mx-auto w-full flex items-center justify-center">
          <Images />
        </div>
      </div>
      {/* End of Image Gallery Section */}

      {/* Thank You Section */}
      <div className="w-[90%] mx-auto h-full mt-40 ">
        <h1 className="font-mono lg:text-5xl font-bold text-center text-4xl">
          Thanks for being with me
        </h1>
        <div className="mt-16">
          <ThankYou />
        </div>
      </div>
      {/* End OF Thank You Section */}

      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
