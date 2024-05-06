import Image from 'next/image'
import ImageOne from '../../public/nethini/sexy.jpg'

export default function MainHome()
{
    return (
        <div className='lg:flex lg:flex-row lg:items-start lg:justify-between md:flex-col md:justify-center md:items-start flex-col items-start justify-center'>
            <div className='lg:w-[50%] w-full lg:flex lg:items-center lg:justify-start flex items-center justify-center '>
                <Image src={ImageOne} className='w-[400px] h-[500px] rounded-[30px] shadow-xl shadow-indigo-500 ...' />
            </div>
            <div className='lg:w-[50%] md:w-full w-full mt-14'>
                <p className="font-mono text-lg text-center">You have one of the most genuinely caring hearts I've ever encountered. She's the type of person who remembers the little details about everyone she meets and goes out of her way to make them feel valued and appreciated. Whether it's sending a heartfelt text message just to check in, surprising a friend with their favorite treat when they're feeling down, or simply being there to listen without judgment, Emily's love and kindness know no bounds. Her warmth and compassion create an environment where everyone feels seen and loved, and her ability to spread joy is truly infectious.</p>
                <br /><br />                <p className="font-mono text-lg text-center"> Whether it's organizing impromptu gatherings with friends, hosting unforgettable parties that are talked about for months afterward, or simply striking up conversations with strangers wherever she goes, Emily's outgoing nature ensures that there's never a dull moment when she's around. Her genuine interest in others and her ability to connect on a deep level make her someone that everyone wants to be around. Emily's social calendar is always full, but she somehow manages to make time for everyone, making each person she encounters feel like the most important person in the room.</p>
            </div>
        </div>
    )
}