import banner from '/public/banner.jpg';

export default function BlogBanner() {
  return (
    <section
      className="w-full py-22 flex items-center relative"
      style={{
        background: `linear-gradient(180deg,rgba(38,38,38,0.92) 0%,rgba(38,38,38,0.84) 100%), url(${banner.src}) center/cover no-repeat`,
      }}
    >
      <div className="flex container flex-col md:mt-16">
        <div className="flex-1 flex flex-col text-center gap-y-1">
          <h4 className="text-aqua font-asap text-lg font-bold uppercase">
            QUALITY HOMES REIMAGINED, LLC
          </h4>
          <h2 className="text-white font-amiko font-bold text-4xl md:text-6xl">
            Blog
          </h2>
        </div>
      </div>
    </section>
  );
}
