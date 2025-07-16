import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const contactLinks = [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nitin6404/",
        },{
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nitin6404/",
        },{
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nitin6404/",
        },{
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nitin6404/",
        },
    ]
    return (
        <footer className="w-full h-full bg-black px-10 py-10 flex flex-col gap-16 z-10">
            <div className="w-full h-full flex flex-col justify-start items-center gap-2">
                <h1 className="w-full text-start text-base uppercase">Follow us here as well</h1>
                <div className="w-full flex justify-between items-center gap-4">
                    {
                        contactLinks.map((link, index) => (
                            <Link 
                            key={index} 
                            target="_blank"
                            rel="noopener noreferrer"
                            to={link.url} 
                            className="text-white text-4xl hover:text-[#92ff4b] hover:scale-95 transition-all duration-300 ease-in-out">
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <h1 className="uppercase text-base ">Let&apos;s get started!</h1>
                <div className="flex items-center gap-2">
                    <Copyright className="w-4 h-4" />
                <h1 className="uppercase text-base ">NAJCODE, 2025</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;