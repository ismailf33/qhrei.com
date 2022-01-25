import bg from '/public/Oregon-We-Buy-Houses-Fast-For-Cash.jpg';

export default function Subcription({ show, setShow }) {
  return (
    <section
      className="py-20"
      style={{
        background: ` linear-gradient(180deg,rgba(38,38,38,0.45) 0%,rgba(38,38,38,0.63) 100%), url(${bg.src}) left/cover no-repeat`,
      }}
    >
      <div className="container px-4 flex flex-col md:flex-row md:items-center gap-y-6 md:gap-y-0 md:gap-x-7">
        <div className="flex-1 text-white">
          <h2 className="font-bold font-amiko text-white text-2xl md:text-4xl mb-3">
            What’s Your Home Worth?
          </h2>
          <p className="text-white font-semibold font-asap">
            Get your FREE no obligation cash offer in 24 hours or less!
          </p>
        </div>
        <div className="">
          <button
            onClick={() => setShow(!show)}
            type="submit"
            className="bg-aqua px-7 py-4 font-asap text-xl text-white uppercase font-semibold rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
      </div>
    </section>
  );
}
