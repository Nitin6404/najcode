import { ArrowDown } from "lucide-react";

const JoiningUs = () => {
    const joiningList = [
        { team: "Brands", email: "Schedule a meeting or email anggie@croing.com" },
        { team: "Referral partner", email: "Email referral@croing.com" },
        { team: "Future Nerds", email: "Email hiring@najcode.com" }
    ];
    return (
        <div className="px-10 flex flex-col bg-black z-10">
            <div className="w-full flex flex-col justify-start items-start text-start text-[6rem] leading-[1] font-bold">
                <h1 className="">Are you</h1>
                <div className="flex items-center gap-2">
                    <h1 className="">joining us?</h1>
                    <ArrowDown className="w-24 h-24 text-[#92ff4b]" />
                </div>
            </div>

            <div className="w-full flex justify-between items-center pb-16">
                <div className="w-full h-full">
                    {
                        joiningList.map((item, index) => (
                            <div key={index} className="flex flex-col justify-start items-start text-start pt-16">
                                <h1 className="text-3xl font-bold">{item.team}</h1>
                                <p className="text-2xl leading-[1.2]">{item.email}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full h-full bg-white flex items-center justify-center">
                    <iframe
                        title="Embedded Content" name="htmlComp-iframe" allow="fullscreen"
                        data-src=""
                        src="https://www-croing-com.filesusr.com/html/bfb249_dd56fa99d2129280f74bf53707048bb3.html"
                        allowTransparency="true"
                        className="w-full h-full"
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
            </div>

        </div>
    );
};

export default JoiningUs;