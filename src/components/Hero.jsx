import { motion } from "motion/react";
import { LocateIcon, ArrowRight } from "lucide-react";
import Header from "./Header";

const Hero = () => {
    return (
        <div className="sticky inset-0 z-5">
            <Header />
        <section className="px-10 py-16 w-full h-full sticky inset-0">
            <div className="flex justify-between items-end h-full">
                <div className="flex flex-col justify-between h-full space-y-6">
                    <div className="flex flex-col text-6xl font-regular leading-[1.2] tracking-0">
                        <span>Creative Agency</span>
                        <span>crossing brands with <span className="text-[#92ff4b]">people</span></span>
                    </div>
                    <span className="flex items-center gap-3 text-2xl tracking-tight"><LocateIcon /> {"  "} New York, Miami, Los Angeles, Chile Mexico, & Buenos Aires</span>
                </div>
                <div className="flex flex-col justify-between h-full text-end space-y-4">
                    <div className="flex flex-col justify-between h-full gap-6">
                        <div className="group flex justify-end items-center gap-2 text-3xl hover:text-4xl hover:text-[#92ff4b] text-[#555555] transition-all duration-300 cursor-pointer">
                            <span>Schedule a meeting</span>
                            <div className="w-8 h-8 rounded-full bg-[#555555] group-hover:bg-[#92ff4b] group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                        </div>
                        <div className="flex justify-end items-center gap-2 text-4xl "><span>Founded by</span><span className="underline">{" "}Linus Torvalds</span></div>
                    </div>
                    <span className="text-2xl h-full">0.1% of women-founded creative agencies</span>
                </div>
            </div>
            <div className="flex justify-center items-end text-white text-[16rem] leading-[1.4] font-monument-bold">
                <span>NAJCODE</span>
            </div>
        </section>
        </div>
    );
};

export default Hero;


// const Header = () => {
//     const navItems = [
//         {
//             name: "capabilities"
//         },
//         {
//             name: "capabilities"
//         },
//         {
//             name: "capabilities"
//         },
//         {
//             name: "capabilities"
//         },
//     ]
//     return (
//         <header className="px-10 py-7 w-full uppercase z-50 sticky top-0 left-0 right-0">
//             <div className="flex justify-between">
//                 <div>
//                     {/* <img src="https://www.najcode.com/logo.png" alt="" /> */}
//                     <p className="text-2xl font-bold text-white cursor-pointer">NAJCODE</p>
//                 </div>
//                 <div>
//                     <ul className="flex gap-4 text-sm">
//                         {
//                             navItems.map((item) => (
//                                 <li className="px-3 py-0.5 rounded-full border broder-white uppercase flex items-center hover:bg-[#92ff4b] hover:border-[#92ff4b] hover:text-black cursor-pointer">{item.name}</li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//                 <div className="group uppercase px-3 py-0 border border-white bg-white text-black hover:bg-[#92ff4b] hover:border-[#92ff4b] rounded-full text-xs font-regular flex items-center space-x-3 cursor-pointer transition-all">
//                     <button className="text-xs uppercase leading-[100%] tracking-0">Join our newsletter</button>
//                     <ArrowRight
//                         className="group-hover:rotate-[320deg] transition-all"
//                         width={16} height={16} />
//                 </div>
//             </div>
//         </header>
//     );
// };
