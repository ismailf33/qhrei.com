import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { showErr } from '../../helpers/ErrHandler';
import toast from 'react-hot-toast';
import bg from '/public/banner.jpg';

export default function Modal({ show, setShow }) {

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
    <div
      className={`bg-black bg-opacity-70 transition-transform flex items-center justify-center fixed h-full w-full z-50 top-0 bottom-0 ${show ? '' : 'scale-0'
        } left-0 right-0`}
    >
      <div
        style={{
          background: `linear-gradient(112deg,rgba(0,0,0,0.66) 59%,rgba(0,0,0,0.66) 26%),url(${bg.src}) center/cover no-repeat`,
        }}
        className="max-w-full w-800 py-7 mx-auto border-2 border-white relative"
      >
        <div className="px-5 py-7 w-4/5 mx-auto">
          <div className="text-center">
            <h3 className="text-aqua text-base font-bold mb-3 font-amiko">
              Get Your Full Cash Offer
            </h3>
            <p className="font-bold text-2xl text-white font-amiko">
              No Hidden Fees. No Agent Commissions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            action=""
            className="w-full flex flex-col gap-y-2 mt-3 font-asap font-normal"
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
              {...register('textarea', { required: 'Property adress is required' })}
            />
            <button className="bg-aqua text-white uppercase font-bold font-asap text-lg p-4">
              get your full cash offer
            </button>
          </form>
        </div>
        <button
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 bg-cross w-7 h-7 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
