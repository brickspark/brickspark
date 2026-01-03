import australianUnityLogo from "@/assets/logos/australian-unity.webp";
import boralLogo from "@/assets/logos/boral.png";
import channel9Logo from "@/assets/logos/channel-9.png";
import sensisLogo from "@/assets/logos/sensis.png";
import worksafeLogo from "@/assets/logos/worksafe.png";
import yellowPagesLogo from "@/assets/logos/yellow-pages.jpeg";

const logos = [
  { name: "Australian Unity", src: australianUnityLogo },
  { name: "Boral", src: boralLogo },
  { name: "Channel 9", src: channel9Logo },
  { name: "Sensis", src: sensisLogo },
  { name: "WorkSafe Victoria", src: worksafeLogo },
  { name: "Yellow Pages", src: yellowPagesLogo },
];

export const LogoCarousel = () => {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container px-4 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by Forward-Thinking Teams
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex shrink-0 gap-16 items-center px-8">
            {logos.map((logo, index) => (
              <img 
                key={`first-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 gap-16 items-center px-8">
            {logos.map((logo, index) => (
              <img 
                key={`second-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
