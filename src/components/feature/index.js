import { GiBackwardTime } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { MdOutlinePayment } from 'react-icons/md';
import { SiVlcmediaplayer } from 'react-icons/si';

const features = [
  {
    icon: <IoIosHome />,
    title: 'SELL YOUR HOUSE QUICKLY',
    desc: 'Receive a cash offer for your house in as little as 48 hours or less and in some cases close in as little as 14 days.',
  },
  {
    icon: <MdOutlinePayment />,
    title: 'PAY NO FEES OR COMMISSIONS',
    desc: 'Avoid paying any unnecessary real estate commissions, appraisal fees, application fees, or any miscellaneous fees.',
  },
  {
    icon: <SiVlcmediaplayer />,
    title: 'AVOID HOME INSPECTIONS',
    desc: 'We will not pick apart your house. Instead, we will buy your house in its current condition without any inspections.',
  },
  {
    icon: <GiBackwardTime />,
    title: 'FAST AND EASY CLOSING',
    desc: `We&apos;ll cover all your closing costs, provide free clean out services, and even pay moving costs for our qualified sellers if needed.`,
  },
];

export default function Feature({ show, setShow }) {
  return (
    <section className="py-10 md:py-28">
      <div className="container px-4">
        {/* section title */}
        <div className="text-center flex flex-col gap-y-5">
          <h2 className="text-aqua font-bold text-4xl capitalize font-amiko">
            it&apos;s never been easier to sell your house fast
          </h2>
          <p className="font-medium text-iron-gray font-asap">
            Learn how the team at Quality Homes Reimagined, LLC can help you
            sell your house quickly for a fair price without spending a dime on
            repairs, commissions, or inspections.
          </p>
        </div>
        {/* all features */}
        <div className="grid grid-cols-1 gap-y-10 mt-16 md:grid-cols-4">
          {features &&
            features.map((feature, i) => (
              <div className="flex-1  p-1 py-8 text-center" key={i}>
                <div className="w-22 h-22 mx-auto rounded-full bg-aqua flex items-center justify-center text-white text-5xl">
                  {feature.icon}
                </div>
                <h2 className=" my-5 font-bold font-amiko text-lg text-gray-dark">
                  {feature.title}
                </h2>
                <p className="font-medium font-asap text-iron-gray">
                  {feature.desc}
                </p>
              </div>
            ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setShow(!show)}
            type="submit"
            className="bg-aqua px-7 py-4 text-xl text-white uppercase font-medium font-asap rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
      </div>
    </section>
  );
}
