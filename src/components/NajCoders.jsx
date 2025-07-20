import { ArrowDownLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ScrollRevealText from "./ui/ScrollRevealText";

const NajCoders = () => {
    const scrollRef = useRef(null);
    const [colorStyle, setColorStyle] = useState("rgb(255, 255, 255)");


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 3600;
            const progress = Math.min(scrollY / maxScroll, 1); // Clamp between 0 - 1

            // From white (255,255,255) to #92ff4b (146,255,75)
            const r = Math.round(255 - (255 - 146) * progress);
            const g = Math.round(255 - (255 - 255) * progress);
            const b = Math.round(255 - (255 - 75) * progress);

            setColorStyle(`rgb(${r}, ${g}, ${b})`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const najcoders = [
        { name: "Nitin Chaudhary", position: "Founder", image: "nitin.jpg", linkedin: "https://linkedin.com/in/nitin6404" },
        { name: "Nitin Chaudhary", position: "Founder", image: "nitin.jpg", linkedin: "https://linkedin.com/in/nitin6404" },
        { name: "Nitin Chaudhary", position: "Founder", image: "nitin.jpg", linkedin: "https://linkedin.com/in/nitin6404" },
        { name: "Nitin Chaudhary", position: "Founder", image: "nitin.jpg", linkedin: "https://linkedin.com/in/nitin6404" },
        { name: "Nitin Chaudhary", position: "Founder", image: "nitin.jpg", linkedin: "https://linkedin.com/in/nitin6404" },
    ]
    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const interval = setInterval(() => {
            if (!container) return;

            scrollAmount += 300;
            container.scrollLeft = scrollAmount;

            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0; // reset scroll to start
            }
        }, 4000); // adjust speed

        return () => clearInterval(interval); // cleanup
    }, []);


    return (
        <div className="flex flex-col w-full h-full bg-black z-50">
            <div className="px-10 py-10 flex flex-col justify-start items-start gap-2">
                <h1 className="uppercase leading-[1.2]">NajCoders</h1>
                <div className="flex items-center gap-2 text-4xl">
                    <p className="font-bold">Currently led by Nerds</p>
                    <ArrowDownLeft className="w-10 h-10 text-[#92ff4b]" />
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex gap-4 py-3 pl-10 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
            >

                {najcoders.map((najcoder, index) => (
                    <Link
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        to={najcoder.linkedin}
                        className="relative w-[24rem] h-[24rem] rounded-3xl overflow-hidden flex-shrink-0">
                        <img src={najcoder.image} alt={najcoder.name} className="w-full h-full object-cover rounded-3xl" />
                        <div className="absolute bottom-10 left-10 flex flex-col justify-start items-start text-start z-10 gap-4">
                            <div className="flex flex-col justify-start items-start text-start">
                                <h2 className="text-2xl font-bold">{najcoder.name}</h2>
                                <p className="text-lg font-semibold leading-[1.2]">{najcoder.position}</p>
                            </div>
                            <button className="border-2 border-white px-6 py-3 text-base rounded-full hover:bg-white/10 hover:text-white/50">
                                Connect on LinkedIn
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                    </Link>
                ))}
            </div>
            <div className="my-16 py-40 text-center border border-[#555555]">
                <h1
                    className="text-6xl w-[70%] mx-auto transition-colors duration-200"
                >
                    <ScrollRevealText
                        baseOpacity={10}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        rotationEnd="bottom bottom"
                        wordAnimationEnd="bottom bottom"
                    >

                        We’re here to influence the creative
                        industry to become one that truly cares
                        about people, showing that it works.
                        {/* When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                        No! When he ate a soup made out of a poisonous mushroom?
                        No! A man dies when he is forgotten! */}
                    </ScrollRevealText>
                </h1>
            </div>
        </div>
    );
};

export default NajCoders;