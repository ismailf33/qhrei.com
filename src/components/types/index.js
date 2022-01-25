import { TiTick } from 'react-icons/ti';
import { lists1, lists2, lists3, lists4 } from '../../fakedata';
import bg from '/public/We-Buy-Houses-Fast-For-Cash-In-Oregon.jpg';

export default function Houses() {
  return (
    <section
      className="py-16 md:py-28"
      style={{
        background: `linear-gradient(180deg,rgba(38,38,38,0.82) 0%,rgba(38,38,38,0.82) 100%),url(${bg.src}) center/cover no-repeat`,
      }}
    >
      <div className="container px-4">
        <div className="text-white text-center">
          <h2 className="font-bold capitalize text-2xl md:text-4xl mb-8 font-amiko">
            what type of houses do we buy?
          </h2>
          <p className="font-medium font-asap leading-7">
            Avoid agent commissions, closing costs, walk-throughs, open houses,
            uncertainties, or costly repairs. We buy houses on your terms no
            matter what your reasons for selling:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 gap-y-10 md:gap-y-0 md:gap-x-4 md:pb-20">
          <ul className="text-white flex flex-col gap-y-3">
            {lists1 &&
              lists1.map((list, i) => (
                <li className="flex gap-x-3 font-amiko font-semibold" key={i}>
                  <span className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <TiTick />
                  </span>
                  {list}
                </li>
              ))}
          </ul>
          <ul className="text-white flex flex-col gap-y-3">
            {lists2 &&
              lists2.map((list, i) => (
                <li className="flex font-amiko gap-x-3 font-semibold" key={i}>
                  <span className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <TiTick />
                  </span>
                  {list}
                </li>
              ))}
          </ul>
          <ul className="text-white flex flex-col gap-y-3">
            {lists3 &&
              lists3.map((list, i) => (
                <li className="flex font-amiko gap-x-3 font-semibold" key={i}>
                  <span className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <TiTick />
                  </span>
                  {list}
                </li>
              ))}
          </ul>
          <ul className="text-white flex flex-col gap-y-3">
            {lists4 &&
              lists4.map((list, i) => (
                <li className="flex font-amiko gap-x-3 font-semibold" key={i}>
                  <span className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <TiTick />
                  </span>
                  {list}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
