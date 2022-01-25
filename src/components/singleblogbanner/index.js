import banner from '/public/January-2022-QHREI-BLOG-1-400x250.jpg';

export default function SingleBlogBanner() {
  return (
    <section
      className="w-full py-32 flex items-center relative"
      style={{
        background: `linear-gradient(180deg,rgba(0,0,0,0.66) 0%,rgba(0,0,0,0.66) 100%), url(${banner.src}) center/cover no-repeat`,
      }}
    >
      <div className="flex container flex-col md:mt-16">
        <div className="flex-1 flex flex-col gap-y-5 text-white ">
          <h2 className="text-white font-amiko font-bold text-3xl md:text-5xl md:w-3/4">
            Selling A House With Major Repairs? What to Remember
          </h2>
          <p className="font-medium font-asap">by Steven Allen | Jan 5, 2022</p>
        </div>
      </div>
    </section>
  );
}
