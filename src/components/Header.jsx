import { ArrowRight } from "lucide-react";

const Header = () => {
    const navItems = [
        {
            name: "capabilities"
        },
        {
            name: "capabilities"
        },
        {
            name: "capabilities"
        },
        {
            name: "capabilities"
        },
    ]
    return (
        <header className="px-10 py-7 w-full uppercase sticky inset-0">
            <div className="flex justify-between">
                <div>
                    {/* <img src="https://www.najcode.com/logo.png" alt="" /> */}
                    <p className="text-2xl font-bold text-white cursor-pointer">NAJCODE</p>
                </div>
                <div>
                    <ul className="flex gap-4 text-sm">
                        {
                            navItems.map((item) => (
                                <li className="px-3 py-0.5 rounded-full border broder-white uppercase flex items-center hover:bg-[#92ff4b] hover:border-[#92ff4b] hover:text-black cursor-pointer transition-all duration-300 ease-in-out">{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="group uppercase px-3 py-0 border border-white bg-white text-black hover:bg-[#92ff4b] hover:border-[#92ff4b] rounded-full text-xs font-regular flex items-center space-x-3 cursor-pointer transition-all duration-300 ease-in-out">
                    <button className="text-xs uppercase leading-[100%] tracking-0">Join our newsletter</button>
                    <ArrowRight
                        className="group-hover:rotate-[320deg] transition-all ease-in-out"
                        width={16} height={16} />
                </div>
            </div>
        </header>
    );
};

export default Header;