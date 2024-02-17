const VideoSection = () => {
    return (
        <section
            className="md:py-20 py-10 bg-gradient-to-r 
      from gray-00  to-gray-200 spacey-10"
        >
            <div className="container mx-auto text-center">
                {/* <div
                    className="text-6xl flex justify-center font-bold md:px-20 pb-10 
              text-gradient bg-gradient-to-r from-[#ffa31d] to-[#ed1c24]
              bg-clip-text text-transparent
          "
                >
                    Our agile process is ability to adapt and respond to change
                </div> */}

                <p
                    className="text-lg md:text-xl md-10 font-bold
          bg-gradient-to-r from-white to-gray-400
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