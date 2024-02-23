const VideoSection = () => {
    return (
        <section
            className=" py-10 bg-gradient-to-r 
      from gray-00  to-gray-200 spacey-10"
        >
            <div className="container mx-auto text-center">
                <p
                    className="text-lg md:text-xl md-10 font-bold
          bg-gradient-to-r from-black to-dark
          bg-clip-text text-transparent
          "
                >
                    We are a team of talented professionals who are passionate about delivering the best services to our clients.
                </p>

                <div className="pt-10 w-full">
                    <video className="rounded-xl" muted loop autoPlay playsInline>
                        <source src="/content/hero-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;