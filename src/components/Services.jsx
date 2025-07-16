import { ArrowDownLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Services = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const services = [
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        },
        {
            name: "Web Design & Development",
            details: Array(18).fill("Core Creative Idea")
        }
    ];

    return (
        <div className="flex flex-col w-full h-full bg-black z-50 text-white">
            <div className="px-10 py-10 flex flex-col justify-start items-start gap-2">
                <h1 className="uppercase leading-[1.2]">Services</h1>
                <div className="flex items-center gap-2 text-4xl">
                    <p className="font-bold">Our Capabilities</p>
                    <ArrowDownLeft className="w-10 h-10 text-[#92ff4b]" />
                </div>
            </div>

            <div className="flex flex-col divide-y divide-[#555555] border border-[#555555]">
                {services.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="transition-all duration-300">
                            {/* Accordion Header */}
                            <div
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center text-3xl md:text-5xl px-10 py-12 hover:bg-[#555555]/40 cursor-pointer transition-all"
                            >
                                <h1>{item.name}</h1>
                                {isOpen ? (
                                    <ChevronUp strokeWidth="3" className="w-8 h-8" />
                                ) : (
                                    <ChevronDown strokeWidth="3" className="w-8 h-8" />
                                )}
                            </div>

                            {/* Accordion Body */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out px-10 ${isOpen ? "max-h-[20rem] py-6" : "max-h-0"
                                    }`}
                            >
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
