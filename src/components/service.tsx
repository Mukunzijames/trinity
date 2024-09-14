import React from 'react';
import Image from 'next/image';
import service from '@/assets/service.svg';
import what from  '@/assets/what.svg';

import { Users, Heart, GraduationCap, Sparkles } from 'lucide-react';

const services = [
  { name: 'Family support', icon: Users },
  { name: 'Health benefits', icon: Heart },
  { name: 'Scholarships', icon: GraduationCap },
  { name: 'Therapy', icon: Sparkles },
];



const ChildrenServices = () => {
  return (
    <div className="w-[1500px] h-[901px] bg-[#FDF6E3] p-12 flex">
      <div className="flex-1 pr-12">
      <Image
          src={what}
          alt="Child with headphones"
          width={150} height={60}
        />     
         <h1 className="text-black font-bold text-[42px] mb-8 font-roboto ml-[100px]">
          Some services we provide for our children
        </h1>
        <p className="text-[#666] text-xl mb-12 ml-[100px] font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
          eros elementum tristique.
        </p>
        <div className="space-y-8 ml-[100px] font-roboto">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center mr-4">
                <service.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-black font-semibold text-2xl mb-2">{service.name}</h3>
                <p className="text-[#666] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={service}
          alt="Child with headphones"
          width={480}
          height={658}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ChildrenServices;