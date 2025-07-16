import { ArrowDownLeft } from "lucide-react";

const TestComponent = () => {
    const brand = [
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
        {
            name: "sony",
            image: "/sony.svg"
        },
    ]
    return (
        <div className="px-10 w-full h-full bg-black z-10 flex flex-col">
            <div className="py-10 flex flex-col justify-start items-start border-t-[1px] border-[#555555]">
                <h1 className="uppercase leading-[1.2]">Clients</h1>
                <div className="flex items-center gap-2 text-3xl">
                    <p className="font-bold">Brand we work with</p>
                    <ArrowDownLeft className="w-10 h-10 text-[#92ff4b]" />
                </div>
            </div>

            <div className="w-full flex justify-end items-center py-4">
                <div className="group flex justify-end items-center gap-2 text-3xl hover:text-4xl hover:text-[#92ff4b] text-[#555555] transition-all duration-300 cursor-pointer">
                    <span>Schedule a meeting</span>
                    <div className="w-8 h-8 rounded-full bg-[#555555] group-hover:bg-[#92ff4b] group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                </div>
            </div>

            <div className="grid grid-cols-4 grid-rows-3 gap-12 px-20 py-10">
                {
                    brand.map((item, index) => (
                        <div key={index} className="flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out">
                            <img src={item.image} alt={item.name} className="w-40 h-40" />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default TestComponent;