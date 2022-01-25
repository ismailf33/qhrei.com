import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { showErr } from '../../helpers/ErrHandler';
import toast from 'react-hot-toast'
import img from '/public/Can-I-Sell-my-Salem-Home-without-Any-Equity_-OG-2-400x250.jpg';

export default function BlogDetails({ show, setShow }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()


  const onError = err => showErr(err)
  const onSubmit = (data) => {
    fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        toast.success('Email send suuccessfully')
      }
    })
  }

  return (
    <section className="py-20 bg-white-smoke">
      <div className="container px-4 flex flex-col lg:flex-row gap-x-16 gap-y-10 lg:gap-y-0">
        <div className="flex-1 bg-white shadow-sm p-12 flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-5 font-asap leading-7">
            <p className="font-medium text-iron-gray">
              Contrary to popular belief, there are ways to sell your house fast
              even with extensive repairs in Salem, Oregon. Although you’ll
              likely have to sell it for much less, finding a buyer isn’t
              impossible. Some people would settle for cheaper properties only
              to renovate these themselves later on, or might even be interested
              in flipping properties for their own profit. Regardless of their
              intentions, this market is out there and waiting for your offer to
              come in!
            </p>
            <p className="font-medium text-iron-gray">
              Here’s what to remember while selling a house with major repairs:
            </p>
          </div>
          <div className="flex flex-col font-asap leading-7 gap-y-5">
            <h3 className="text-dune font-amiko font-medium text-3xl">
              Contact clients who are interested in fixer-uppers
            </h3>
            <p className="font-medium text-iron-gray">
              When looking for how to sell your house with extensive repairs,
              you might want to check for fixer-upper clients in Salem, Oregon.
            </p>
            <p className="font-medium text-iron-gray">
              What’s a fixer-upper you might ask? These people are either
              budding interior designers or simply creative homemakers who want
              to remake a less-than-perfect home themselves. They’re normally
              okay with houses in need of repairs or contain other issues, only
              because they have no problem renovating these homes themselves.
            </p>
            <p className="font-medium text-iron-gray">
              Try to see if you can find fixer-upper Facebook groups to post
              photos of your property in, or you can ask for a direct referral
              for a quick sale.
            </p>
          </div>
          <div className="flex flex-col font-asap leading-7 gap-y-5">
            <h3 className="text-dune font-medium font-amiko text-3xl">
              Intend to disclose everything about the property before you sell
            </h3>
            <p className="font-medium text-iron-gray">
              Even though your buyers know you’ll be selling a home with issues,
              make sure that every detail is disclosed to them and that they
              understand the kind of property they’re looking at. You don’t want
              to be on the sore end of a potential lawsuit by failing to
              disclose a leaking roof or a bathroom that needs a plumbing
              overhaul
            </p>
            <p className="font-medium text-iron-gray">
              If you’re unable to make a thorough inspection yourself, feel free
              to set aside a part of your budget to hire a home inspector.
              Normally, they help buyers inspect a potential future home for any
              issues that need clearing up, but can also assist sellers if they
              need to disclose all of their issues to potential buyers.
            </p>
          </div>
          <div className="flex flex-col font-asap leading-7 gap-y-5">
            <h3 className="text-dune font-amiko font-medium text-3xl">
              Hire an excellent real estate agent
            </h3>
            <p className="font-medium text-iron-gray">
              This is a great tip for sellers of any kind of property, whether
              it be brand new or with issues that need addressing. A good real
              estate agent not only has an excellent track record but is
              familiar with the real estate market landscape surrounding a
              certain area.
            </p>
            <p className="font-medium text-iron-gray">
              Clients who would take a chance on a property with issues usually
              have very specific needs for finding these. A real estate agent
              can connect you with these clients more effortlessly, for a small
              fee of what you will eventually take home when the deal has been
              completed.
            </p>
          </div>
          <div className="flex flex-col font-asap leading-7 gap-y-5">
            <h3 className="text-dune font-amiko font-medium text-3xl">
              Make easy and cheap repairs
            </h3>
            <p className="font-medium text-iron-gray">
              Although there are clients that would purchase your home as-is,
              it’s always a better idea to do some light repairs if you can
              afford to do so. This can marginally increase the value of your
              home so you can sell it at a higher price than you initially
              intended.
            </p>
            <p className="font-medium text-iron-gray">
              Here are some cheap repairs you can make before putting your house
              up for sale:
            </p>
            <ul className="list-disc text-iron-gray font-medium p-3.5">
              <li>Painting</li>
              <li>Landscaping</li>
              <li>Updating your light fixtures</li>
              <li>Replacing window coverings and treatments</li>
              <li>Cleaning and replacing carpets</li>
            </ul>
            <p className="font-medium text-iron-gray">
              Not all of these repairs need to be made on your own, if you’re
              lucky with the client you end up talking to! It’s entirely
              possible for you and your buyer to work repairs out together such
              that they can cover some of the repairs themselves. This is
              normally something that fixer-upper clients won’t have trouble
              accepting, especially if they’re eager to tidy up their new home
              as best as they can with some help from you as the seller.
            </p>
          </div>
          <div className="flex flex-col font-asap leading-7 gap-y-5">
            <h3 className="text-dune font-amiko font-medium text-3xl">
              Sell to a professional home buyer!
            </h3>
            <p className="font-medium text-iron-gray">
              The quickest, easiest way to secure a sale for a home in need of
              repair is to immediately contact a cash home buyer in Salem,
              Oregon. Quality Homes Reimagined, LLC is able to attend to your
              needs immediately, regardless of what state your house is in!
            </p>
            <p className="font-medium text-iron-gray">
              We accept homes in any condition whatsoever, so you don’t have to
              worry about realtors, fees, commissions, repairs, and cleaning the
              property. We take care of all of these for you!
            </p>
            <p className="font-medium text-iron-gray">
              When you contact us, expect to receive a fair cash offer in 48
              hours or less, with us covering all the closing costs. Visit our
              website and contact us today!
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => setShow(!show)}
              type="submit"
              className="bg-aqua px-7 py-4 text-white uppercase font-medium font-asap text-xl rounded-full"
            >
              get your fair cash offer
            </button>
          </div>
        </div>
        <aside className="flex items-end flex-col gap-y-7">
          <form action="" className="block w-full">
            <div className="flex flex-nowrap border border-inp w-full">
              <input
                type="search"
                name="search"
                id="search"
                className="border-0 focus-within:border-0 focus:outline-0 flex-1 pl-2.5"
              />
              <input
                type="submit"
                value="Search"
                className="bg-aqua text-sm font-sans text-white py-2 px-5 cursor-pointer"
              />
            </div>
          </form>
          <div className="px-5 w-full py-4 bg-aqua flex flex-col gap-y-10 text-white">
            <h4 className="text-center font-sans text-white capitalize font-bold text-xl">
              Recent Blog Post
            </h4>
            <div className="flex font-amiko font-medium items-center gap-x-4">
              <Link href="/single" passHref>
                <a>
                  <Image src={img.src} alt="" width={90} height={50} />
                </a>
              </Link>
              <Link href="/single" passHref>
                <a>
                  <h4 className="text-white font-medium">
                    Can I Sell my Salem Home without Any Equity?
                  </h4>
                </a>
              </Link>
            </div>
            <div className="flex font-amiko font-medium items-center gap-x-4">
              <Link href="/single" passHref>
                <a>
                  <Image src={img.src} alt="" width={90} height={50} />
                </a>
              </Link>
              <Link href="/single" passHref>
                <a>
                  <h4 className="text-white font-medium">
                    Can I Sell my Salem Home without Any Equity?
                  </h4>
                </a>
              </Link>
            </div>
            <div className="flex font-amiko font-medium items-center gap-x-4">
              <Link href="/single" passHref>
                <a>
                  <Image src={img.src} alt="" width={90} height={50} />
                </a>
              </Link>
              <Link href="/single" passHref>
                <a>
                  <h4 className="text-white font-medium">
                    Can I Sell my Salem Home without Any Equity?
                  </h4>
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-procelain w-full shadow-sm px-5 py-7">
            <div className="text-center">
              <h3 className="text-aqua font-amiko text-2xl font-bold mb-3">
                Get Your Full Cash Offer
              </h3>
              <p className="font-semibold font-asap text-base text-black">
                No Hidden Fees. No Agent Commissions.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              action=""
              className="w-full flex flex-col font-asap gap-y-4 mt-3"
            >
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="text"
                placeholder="full name*"
                {...register('text', { required: 'Name is required' })}
              />
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="phone"
                placeholder="phone*"
                {...register('phone', { required: 'Phone number is required' })}
              />
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="email"
                placeholder="email*"
                {...register('email', { required: 'Email is required' })}
              />
              <textarea
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                placeholder="property adress*"
                {...register('textarea', { required: 'Adress is required' })}
              />
              <button className="bg-aqua flex transition-all gap-x-2 items-center justify-center text-white font-asap uppercase font-bold text-lg p-4">
                get your full cash offer
                <MdOutlineArrowForwardIos className="text-lg transition-all" />
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
