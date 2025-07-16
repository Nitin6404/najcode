const IntroVideo = () => {
    return (
        <div className="py-10 w-full h-full bg-black z-10">
        <video src="/intro.mp4" autoPlay loop muted className="w-full h-full" />
    </div>
    );
}

export default IntroVideo;
