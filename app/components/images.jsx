import Image from "next/image";
import imageThree from '../../public/nethini/blue.jpg';
import imageTwo from '../../public/nethini/imageTwo.jpg';
import imageOne from '../../public/nethini/padurupartyia.jpg';
import imageFour from '../../public/nethini/withme2.jpg';

export default function Images()
{
    return (
        <div className="lg:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center place-content-center">
            <Image src={imageOne} alt="" className="w-[220px] h-[300px] rounded-3xl lg:mt-0 mt-6  shadow-xl shadow-indigo-500 ..." />
            <Image src={imageTwo} alt="" className="w-[300px] h-[200px] rounded-3xl lg:mt-0 mt-6  shadow-xl shadow-indigo-500 ..." />
            <Image src={imageThree} alt="" className="w-[220px] h-[300px] rounded-3xl lg:mt-0 mt-6  shadow-xl shadow-indigo-500 ..." />
            <Image src={imageFour} alt="" className="w-[300px] h-[200px] rounded-3xl lg:mt-0 mt-6  shadow-xl shadow-indigo-500 ..." />
        </div>
    )
}