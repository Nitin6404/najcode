const Newsletter = () => {
    return (
        <div className="w-full h-full bg-black z-10 px-10 py-16 border border-[#555555] flex ">
            <div className="w-[50%] h-full flex flex-col justify-start items-start text-start gap-3">
                <h1 className="text-base uppercase">JOIN OUR NEWSLETTER</h1>
                <h1 className="text-5xl font-bold leading-[1.2]">Sign up for our latest news</h1>
            </div>
            <div className="w-[50%] h-full flex flex-col justify-start items-start gap-4">
                <div className="w-full h-full flex flex-col">
                <label htmlFor="email" className="text-xl text-[#555555]">Your email</label>
                <input
                    id="email"
                    type="text" className="w-full h-16 px-4 border-b border-[#555555] bg-black focus:border-none" />
                </div>
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" name="" id="subscribe" className="border border-[#555555] text-black  w-5 h-5 checked:bg-black" />
                    <label htmlFor="subscribe" className="text-xl font-medium">Yes, subscribe me to your newsletter.</label>
                </div>
                <button className="w-full px-4 py-3 bg-[#555555] text-xl uppercase font-bold rounded-full">Send</button>
            </div>
        </div>
    );
};

export default Newsletter;