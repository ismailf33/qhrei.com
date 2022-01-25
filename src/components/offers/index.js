import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { showErr } from '../../helpers/ErrHandler';
import toast from 'react-hot-toast';

export default function Offers() {

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
        toast.success('Email send successfully')
      }
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col gap-y-12 md:gap-y-0 md:flex-row px-4 md:gap-x-5">
        <div className="flex-1 flex flex-col gap-y-5 md:w-4/6">
          <h className="text-aqua font-bold text-2xl md:text-4xl font-amiko">
            We Want to Offer You Cash for Your House Today!
          </h>
          <p className="font-medium text-iron-gray font-asap">
            We are professional cash home buyers. We specialize in helping
            homeowners relieve the pressure of owning a home they no longer
            want. We offer cash for your house in its ‘As-Is’ condition.
          </p>
          <p className="font-medium text-iron-gray font-asap">
            We are local investors who seek to simplify the process of selling
            your house. We use our own funds to make our offers. We buy houses
            and we are ready to buy your house for cash today!
          </p>
          <p className="font-medium text-iron-gray font-asap">
            Agents take way too long to list and sell your house and they charge
            you 6% commission in the process. We are professional home buyers
            only interested in buying your house for cash, which will save you
            time, money and effort.
          </p>
          <p className="font-medium text-iron-gray font-asap">
            We also allow you to close on a day that&apos;s convenient for you.
            Our process is designed to give you full control of how you sell
            your home.
          </p>
        </div>
        <div className="md:w-2/6">
          <div className="bg-procelain lg:w-96 shadow-sm px-5 py-7">
            <div className="text-center">
              <h3 className="text-aqua text-2xl font-bold mb-3 font-amiko">
                Get Your Full Cash Offer
              </h3>
              <p className="font-semibold font-asap text-sm text-black">
                No Hidden Fees. No Agent Commissions.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              action=""
              className="w-full flex flex-col gap-y-4 mt-3 font-asap font-normal"
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
                {...register('phone', { required: 'Phone is required' })}
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
                {...register('textarea', { required: 'Property adress is required' })}
              />
              <button className="bg-aqua text-white uppercase font-bold text-lg font-asap p-4">
                get your full cash offer
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-y-12 md:gap-y-0 md:flex-row px-4 md:gap-x-5 mt-20">
        <div className="flex-1 flex flex-col gap-y-5 md:w-4/6">
          <h className="text-aqua font-bold text-2xl md:text-4xl font-amiko">
            We Buy Homes on your terms Without Commissions or Fees
          </h>
          <p className="font-medium text-iron-gray font-asap leading-7">
            While a traditional real estate agent may seem like the logical way
            to sell your house fast, the stress and frustration that comes as
            part of the process makes it more hassle than it’s worth. We remove
            the uncertainty from the process by using our own cash and in a very
            quick turnaround time. Once we evaluate the property, we then
            present a written offer that is fair based on the condition of the
            house. If you decide to move forward with the deal, we’ll give you
            100% cash for your house. At Quality Homes Reimagined, LLC, we
            strive to make every aspect of selling your home easier. We are real
            estate investors who work hard and fast to provide you with the best
            result and service possible!
          </p>
          <p className="font-medium text-iron-gray font-asap leading-7">
            You will find many benefits in our unique method of buying homes for
            cash, such as:
          </p>
          <ul className="flex flex-col gap-y-5 list-disc pl-3.5 font-asap">
            <li className="font-medium text-iron-gray">
              You will not need to lift a finger or pay a dime for repairs or
              cleaning, even if the home has been damaged by fire or subjected
              to a hoarding situation.
            </li>
            <li className="font-medium text-iron-gray">
              We do not list homes, we only buy them, so you will not spend
              months waiting for a buyer.
            </li>
            <li className="font-medium text-iron-gray">
              We do not work with banks so there are no financing approvals to
              wait for.
            </li>
            <li className="font-medium text-iron-gray">
              We do not bind you to a lengthy contract with tons of paperwork to
              fill out.
            </li>
          </ul>
          <p className="font-medium text-iron-gray font-asap leading-7">
            If you have ever thought or even asked these questions to yourself,
            “how do I sell my house fast?” Or “who buys houses fast for cash?”
            Then we can help!
          </p>
          <p className="font-medium text-iron-gray font-asap leading-7">
            We have funds available and are looking to buy houses in your area
            right now! It’s FREE to get a cash offer from us, you have nothing
            to lose. Call us today:
            <Link href="tel:">
              <a className="text-aqua">(503) 610-8828 </a>
            </Link>
            .
          </p>
        </div>
        <div className="flex md:w-2/6 flex-col gap-y-7">
          <div className="bg-aqua px-8 py-10 lg:w-96">
            <h3 className="text-white uppercase font-bold font-sans text-lg mb-3">
              LIST WITH A REALTOR OR SELL TO A CASH BUYER?
            </h3>
            <ul className="list-disc pl-3.5 text-white mb-8 font-sans">
              <li>Which option is quicker?</li>
              <li>Puts more cash in your pocket?</li>
              <li>Guaranteed less hassle?</li>
            </ul>
            <button
              className="bg-white rounded-full whitespace-nowrap  px-7 py-4 uppercase text-sm font-sans font-semibold text-aqua"
              type="submit"
            >
              see the diffrence
            </button>
          </div>
          <div className="bg-aqua px-8 py-10 lg:w-96">
            <h3 className="text-white uppercase font-bold font-amiko text-lg mb-3">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <ul className="text-white font-sans mb-8">
              <li>Which option is quicker?</li>
              <li>Puts more cash in your pocket?</li>
              <li>Guaranteed less hassle?</li>
            </ul>
            <button
              className="bg-white rounded-full text-sm font-sans px-8 whitespace-nowrap py-4 uppercase font-semibold text-aqua"
              type="submit"
            >
              still have questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
