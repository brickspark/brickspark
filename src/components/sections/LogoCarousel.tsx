const logos = [{
  name: "StartupXYZ",
  style: "font-bold"
}, {
  name: "TechCorp",
  style: "font-semibold tracking-tight"
}, {
  name: "InnovateCo",
  style: "font-bold italic"
}, {
  name: "FutureWorks",
  style: "font-semibold"
}, {
  name: "GrowthLabs",
  style: "font-bold tracking-wide"
}, {
  name: "ScaleUp Inc",
  style: "font-semibold"
}, {
  name: "Agile Teams",
  style: "font-bold"
}, {
  name: "NextLevel",
  style: "font-semibold tracking-tight"
}];
export const LogoCarousel = () => {
  return <section className="py-16 bg-card border-y border-border overflow-hidden">
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
            {logos.map((logo, index) => {})}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 gap-16 items-center px-8">
            {logos.map((logo, index) => <div key={`second-${index}`} className="">
                {logo.name}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};