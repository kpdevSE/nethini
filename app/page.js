import Image from "next/image";
import womanLogo from "../public/nethini/womalogo.png";
import MainHome from "./components/mainHome";

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
        <h1 className="text-3xl tracking-widest font-bold ">Sudu Manika</h1>
      </div>
      {/* End Of Navigation Section  */}

      {/* Main Home Section */}
      <div className="flex items-center justify-between w-[90%] mx-auto h-full mt-24 ">
        <MainHome />
      </div>
      {/* End Of Main Home Section */}
    </>
  );
}
