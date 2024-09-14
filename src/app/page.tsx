import Image from "next/image";

import NavBar from '@/components/NavBar';
import Landing from "@/components/Landing";
import About from "@/components/About";

export default function Home() {
  return (
 <div className="bg-white"><NavBar/><Landing/><About/></div>
  
  );
}
