import React from 'react';
import Image from 'next/image';

import AboutImage from '@/assets/about.svg';
import logo1 from '@/assets/logo1.svg';
import logoTwo from '@/assets/logoTwo.svg';
import logoThree from '@/assets/logoThree.svg';
import logoFour from '@/assets/logofour.svg';
import logoFive from '@/assets/logoFive.svg';
import logoSix from '@/assets/logosix.svg';
import known from '@/assets/known.svg';
import supportes from '@/assets/supportes.svg';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-10">
      <div className="max-w-[1280px] w-full">
        <div className="mb-4">
        <Image src={known} alt="logo 1" width={150} height={60} />  
        
              </div>

        <div className="flex justify-between">
          <div className="text-left">
            <h2 className="font-roboto font-bold text-[40px] leading-[57.6px] mb-4 text-black w-[500px] ml-[100px]">
              We provide a place for children with special needs
            </h2>
            <p className="font-roboto text-[16px] leading-[25.6px] mb-10 text-black ml-[100px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...
            </p>
            <p className="font-roboto text-[16px] leading-[25.6px] mb-10 text-black ml-[100px] w-[700px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aut maxime, nisi enim vel cum facilis quo ullam commodi eveniet quod, voluptates alias minima laboriosam iure et quaerat quam est?
            </p>
          </div>

          <div className="relative mb-10">
            <Image src={AboutImage} alt="Children playing" width={410} height={80} className="rounded-tl-[20px]" />
          </div> 
        </div>

        <div className="mb-6 ml-[100px]">
          <button className="bg-orange-400 text-black py-4 px-8 rounded-[4px_0_0_0] hover:bg-blue-700 transition duration-300">
            Learn more
          </button>
        </div>

        <div className="mb-3 pt-10">
        <Image src={supportes} alt="Children playing" width={1500} height={60} className="rounded-tl-[20px]" />
        </div>

        <div className="flex justify-between items-center  pt-4">
          <Image src={logo1} alt="logo 1" width={100} height={50} />
          <Image src={logoTwo} alt="logo 2" width={100} height={50} />
          <Image src={logoThree} alt="logo 3" width={100} height={50} />
          <Image src={logoFour} alt="logo 4" width={100} height={50} />
          <Image src={logoFive} alt="logo 5" width={100} height={50} />
          <Image src={logoSix} alt="logo 6" width={100} height={50} />
        </div>
      </div>
    </div>
  );
}
