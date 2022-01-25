import { features } from '../../fakedata';

export default function Additional() {
  return (
    <section className="py-9 md:py-28">
      <div className="container px-4">
        <div className="text-center lg:w-3/5 mx-auto">
          <h2 className="text-aqua font-bold capitalize font-amiko text-2xl md:text-4xl mb-3">
            Additional Services
          </h2>
          <p className="font-medium text-iron-gray font-asap">
            The team at Quality Homes Reimagined, LLC does more than just buy
            houses. We also sell wholesale properties, partner with local agents
            to expand our network and provide investing opportunities for
            investors.
          </p>
        </div>
        <div className="grid gap-y-6 mt-12 md:grid-cols-3 gap-x-6">
          {features &&
            features.map((feature, i) => (
              <div className="text-center shadow-sm p-5 py-7" key={i}>
                <div className="w-22 h-22 text-4xl flex items-center justify-center mx-auto mb-5 rounded-full bg-aqua text-white">
                  {feature.icon}
                </div>
                <h3 className="text-dark-gray font-semibold font-amiko text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="mb-3 text-gray-light font-asap font-medium">
                  {feature.desc}
                </p>
                <button className="font-semibold text-black font-asap transition-all hover:tracking-wider uppercase text-sm">
                  View More
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
