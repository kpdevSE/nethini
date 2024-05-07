import Image from "next/image"
import Badminton from '../../public/nethini/badminton.jpg'
import BlueOne from '../../public/nethini/blue.jpg'
import Saree from '../../public/nethini/sare.jpg'

export default function ThankYou()
{
    return (
        <div className="flex flex-col items-start justify-between lg:flex-row ">
            <div className="flex flex-col-reverse lg:flex-col gap-10">
                <p className="font-mono text-lg lg:w-[50%]">
                    I never thought that I would be such a good friend to you.. But it happened.. I started talking to you because I can't live like other girls. Not every girl will come. Some people say that the reason for making this is because you like to get things like before. But now it has improved a bit.. So I decided to give this one.. I don't know if you will like it.

                    Thank you very much for being so fit and close to me</p>
                <div className="flex lg:items-start lg:justify-start w-full mt-4 gap-3 p-2 flex-col lg:flex-row items-center justify-center">
                    <Image src={BlueOne} className="lg:w-[330px] lg:h-[400px] rounded-3xl  shadow-xl shadow-indigo-500 ... w-[200px] h-[300px]" />
                    <Image src={Badminton} className="lg:w-[330px] lg:h-[400px] rounded-3xl  shadow-xl shadow-indigo-500 ... w-[200px] h-[300px]" />
                </div>
            </div>
            <Image src={Saree} className="w-[500px] rounded-3xl  shadow-xl shadow-indigo-500 ... lg:mt-0 mt-8 flex item-center justify-center" />
        </div>
    )
}