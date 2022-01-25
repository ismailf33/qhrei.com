import Link from 'next/link';
import bg from '/public/fixedbg.jpg';

export default function Steps({ show, setShow }) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: `url(${bg.src}) center / cover fixed no-repeat` }}
    >
      <div className="container px-4">
        <div className="md:text-center">
          <h2 className="text-white whitespace-nowrap font-bold text-4xl font-amiko">
            Easy 3 Step Process To Get Your Cash Offer Now!
          </h2>
        </div>
        <div className="flex flex-col md:flex-row mt-12 gap-y-12 lg:gap-y-0 gap-x-6 lg:mt-20">
          <div className="flex-1 py-5">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-7xl">1</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl font-amiko">
                  call or fill out the form
                </h2>
                <p className="font-medium font-asap">
                  Request your cash offer by submitting your contact information
                  to us or calling us direct at:{' '}
                  <Link href="tel:">
                    <a className="text-aqua font-asap font-medium">
                      (503) 610-8828
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 py-5">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-7xl">2</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl font-amiko">
                  WE&apos;LL GIVE YOU A CASH OFFER
                </h2>
                <p className="font-medium font-asap">
                  We&apos;ll schedule a property viewing and make you a fair,
                  no-obligation, all cash offer in a as little as 48 hours or
                  less.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 py-5">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-7xl">3</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl font-amiko">
                  YOU CHOOSE CLOSING DATE
                </h2>
                <p className="font-medium font-asap">
                  In some cases, we can close escrow and transfer your money in
                  as little as 14 days of accepting our offer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <button
            onClick={() => setShow(!show)}
            type="submit"
            className="bg-aqua px-7 py-4 text-white uppercase font-medium font-asap rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
      </div>
    </section>
  );
}
