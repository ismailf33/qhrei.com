import { useForm } from 'react-hook-form';
import { TiTick } from 'react-icons/ti';
import { showErr } from '../../helpers/ErrHandler';
import banner from '/public/banner.jpg';
import toast from 'react-hot-toast';

const features = [
  {
    icon: <TiTick />,
    text: 'Fair Cash Offer In 48 Hours or Less',
  },
  {
    icon: <TiTick />,
    text: 'Zero Commission Fees',
  },
  {
    icon: <TiTick />,
    text: 'We Buy In As-Is-Condition',
  },
  {
    icon: <TiTick />,
    text: 'We Pay Cash For Your House',
  },
];

export default function Banner() {
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
    <section
      className="w-full py-44 flex items-center relative"
      style={{
        background: `linear-gradient(180deg,rgba(38,38,38,0.92) 0%,rgba(38,38,38,0.84) 100%), url(${banner.src}) center/cover no-repeat`,
      }}
    >
      <div className="flex container flex-col md:flex-row px-4 lg:gap-x-24 md:mt-4">
        <div className="flex-1 flex flex-col mb-8 mb:mb-0">
          <h2 className="text-white text-3xl md:text-5xl mb-4 font-bold font-amiko">
            We Buy Houses Fast For Cash
          </h2>
          <p className="text-white font-asap leading-8 mb-7">
            Sell your house fast with Quality Homes Reimagined, LLC regardless
            of the condition. No realtors, no hidden fees, no commissions & no
            repairs. Fill out the short form below to find out how much we can
            offer for your home today!
          </p>
          <div className="border-2 w-48 border-white mb-9" />
          <ul className="flex flex-col gap-y-3 font-sans font-semibold">
            {features.map((feature, i) => (
              <li
                className="text-white flex items-center gap-x-3 text-lg font-semibold"
                key={i}
              >
                {feature.icon} <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="max-w-md mx-auto md:mx-0 bg-procelain shadow-sm px-5 py-7">
            <div className="text-center">
              <h3 className="text-aqua text-2xl font-bold mb-3 font-amiko">
                Get Your Full Cash Offer
              </h3>
              <p className="font-semibold text-sm text-black font-asap">
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
              <button className="bg-aqua text-white uppercase font-bold font-asap text-lg p-4">
                get your full cash offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
