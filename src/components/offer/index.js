import Image from 'next/image';
import Link from 'next/link';
import sale from '/public/sale.jpg';

export default function Offer({ show, setShow }) {
  return (
    <section className="py-24">
      <div className="container flex flex-col-reverse md:flex-row gap-y-5 lg:gap-y-0 px-4 gap-x-5">
        <div className="flex-1 flex flex-col gap-y-4 items-start">
          <h2 className="text-aqua text-2xl md:text-4xl font-bold font-amiko">
            Need To Sell Your House Fast For Cash?
          </h2>
          <p className="text-iron-gray font-medium font-asap leading-7">
            Sometimes when life sneaks up on us, we may not be financially
            prepared to handle the challenges ahead. If you are at a point where
            you are thinking, “I need to sell my house fast for cash,” then you
            need a better solution than hoping to sell your house the
            traditional way. Using a realtor to sell your house is not always
            the right fit for everyone. An alternative solution to consider is
            to find the right cash home buyer in your area, such as Quality
            Homes Reimagined, LLC, that can offer you the best cash offer and a
            quick close. At Quality Homes Reimagined, LLC we buy houses on your
            terms
          </p>
          <p className="text-iron-gray font-medium font-asap leading-7">
            Our process does not involve getting pre-qualified by a mortgage
            bank in order to obtain a home loan or listing the property on the
            MLS or any other listing platform. The reason our team at Quality
            Homes Reimagined, LLC is able to purchase properties very quickly is
            because we use our own money, which means the sale is more secure
            and we can close faster than a traditional buyer.
          </p>
          <p className="text-iron-gray font-medium font-asap leading-7">
            Once we provide you a FAIR CASH OFFER for your house, the decision
            to accept or decline our offer is completely up to you. The best
            part of our process is that it&apos;s absolutely FREE. You are in no
            way obligated to take our cash offer if it does not align with your
            expectations. To find out more about our home buying program, please
            call us today:{' '}
            <Link href="tel:">
              <a className="text-aqua font-medium font-asap">(503) 610-8828</a>
            </Link>
          </p>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="bg-aqua text-xl text-white font-medium font-asap uppercase px-6 py-5 rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
        <div className="flex-1">
          <div>
            <Image
              src={sale}
              alt=""
              width={450}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
