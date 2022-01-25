import Image from 'next/image';
import { TiTick } from 'react-icons/ti';
import trustbg from '/public/trust.jpg';

const lists = [
  {
    title: 'A Local Business - ',
    desc: 'We know like the back of our hand. Our knowledge of local real estate enables us to make an accurate and fair cash offer for your property.',
  },
  {
    title: 'BBB-Accredited - ',
    desc: 'Our processes are quicker, and we anticipate any home-buying issues you’ll encounter in . Trust that we have a ready solution.',
  },
  {
    title: 'Convenient - ',
    desc: ' We buy your house for cash, take care of inspection, and shoulder the closing costs. All you have to do is give us a call, and you’ll get an offer within 24 hours!',
  },
  {
    title: 'A Business that Treats You Like Family - ',
    desc: 'We have your best interests at heart. We provide a fair cash offer and tell you all the necessary details of the transaction. Transparency is important to us.',
  },
];

export default function Trusted() {
  return (
    <section className="py-16">
      <div className="container px-4 flex flex-col md:flex-row gap-x-16 gap-y-6">
        <div className="flex-1">
          <Image
            src={trustbg}
            alt=""
            width={350}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="flex-1 flex flex-col gap-y-3 lg:gap-y-5">
          <h2 className="text-aqua font-bold text-2xl md:text-3xl font-amiko">
            Choose Trusted Cash Home Buyers
          </h2>
          <p className="text-iron-gray font-medium font-asap leading-7">
            Don&apos;t simply choose someone who&apos;ll offer you cash for your
            house. Partner with a trusted company, like us, and you&apos;ll get
            the most out of the deal.
          </p>
          <p className="text-aqua font-medium font-amiko">
            Quality Homes Reimagined, LLC takes pride in being:
          </p>
          <ul className="flex flex-col gap-y-4">
            {lists &&
              lists.map((list, i) => (
                <li className="flex gap-x-4 text-aqua" key={i}>
                  <TiTick className="text-5xl" />
                  <p>
                    <strong className="text-iron-gray whitespace-nowrap font-sans font-bold">
                      {list.title}
                    </strong>
                    <span className="text-iron-gray font-medium font-sans">
                      {list.desc}
                    </span>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
