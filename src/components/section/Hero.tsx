interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({ videoSrc, imageSrc, title, description }: HeroProps) {
  return (
    <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mb-6 md:mb-8">
      {/* Background Video/Image */}
      {videoSrc ? (
        <video 
          className="absolute inset-0 w-full h-full object-cover ml-4 md:ml-8"
          autoPlay 
          muted 
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img 
          src={imageSrc}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover ml-4 md:ml-8"
        />
      )}
      
      {/* Black overlay shade */}
      <div className="absolute inset-0 bg-black/40 ml-4 md:ml-8"></div>
      
      {/* Title - aligned with navbar */}
      <div className="absolute top-4 md:top-6 lg:top-8 left-0 right-0 z-10">
        <div className="container-responsive">
          <h1 className="text-white max-w-[250px] md:max-w-[400px] lg:max-w-[600px] text-2xl md:text-4xl lg:text-[64px] font-[400] leading-tight md:leading-snug lg:leading-[70px] font-signifier">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Blue background with margin - text aligned with navbar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 ml-4 mr-4 md:ml-8 md:mr-8">
        <div className="bg-primary bg-opacity-20 backdrop-blur-md px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 border border-primary border-opacity-30">
          <div className="container-responsive">
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-[250px] md:max-w-[400px] lg:max-w-[500px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
