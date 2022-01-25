import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import logo from '/public/logoc.png';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-mirage text-white pt-16">
      <div className="container px-4 flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:gap-x-8">
        <div className="flex-1">
          <div className="">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className="w-auto  invert-1 brightness-0"
                  alt="logo"
                  width={400}
                  height={200}
                />
              </a>
            </Link>
          </div>
          <ul className="flex gap-x-1 justify-center flex-nowrap mt-3">
            <li className="bg-aqua text-white w-8 h-8 cursor-pointer rounded-sm text-xl flex items-center justify-center">
              <Link href="https://www.facebook.com/qhrei">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-8 h-8 cursor-pointer rounded-sm text-xl flex items-center justify-center">
              <Link href="https://twitter.com/ReimaginedLlc">
                <a>
                  <BsTwitter />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-8 h-8 cursor-pointer rounded-sm text-xl flex items-center justify-center">
              <Link href="https://www.youtube.com/channel/UCpMjg_eXB8oGYCuLfGUlX6g">
                <a>
                  <BsYoutube />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-8 h-8 cursor-pointer rounded-sm text-xl flex items-center justify-center">
              <Link href="https://www.linkedin.com/company/qhrei">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-8 h-8 cursor-pointer rounded-sm text-xl flex items-center justify-center">
              <Link href="https://www.instagram.com/qualityhomesreimagined/">
                <a>
                  <BsInstagram />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold font-asap uppercase text-lg border-b border-b-iron-gray pb-4">
            our company
          </h3>
          <ul className="mt-5 font-asap font-medium pl-3.5">
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">How it works</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Services</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold font-asap uppercase text-lg border-b border-b-iron-gray pb-4">
            services
          </h3>
          <ul className="mt-5 capitalize font-medium font-asap pl-3.5">
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Locations</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Agents</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">Investors</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">contractors</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="transition-all hover:text-aqua">FAQs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold font-asap uppercase text-lg border-b border-b-iron-gray pb-4">
            contact us
          </h3>
          <div className="mt-5 flex flex-col gap-y-3 font-sans">
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <HiLocationMarker />
              </div>
              <p className="font-semibold text-white flex-1">
                21370 SW Langer Farms Pkwy Suite 142-277, Sherwood, OR 97140
              </p>
            </div>
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <AiOutlineMail />
              </div>
              <Link href="mailto:">
                <a className="font-semibold text-white flex-1">
                  info@qhrei.com
                </a>
              </Link>
            </div>
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <MdCall />
              </div>
              <Link href="tel:">
                <a className="font-semibold text-white flex-1">
                  (503) 610-8828
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row px-4 border-t font-asap font-medium py-5 border-t-white border-b border-b-iron-gray mt-8">
        <div className="flex-1">
          <p>
            Copyright &copy;{year} Quality Homes Reimagined, LLC. All rights
            reserved. Powered by Top Results Consulting
          </p>
        </div>
        <div className="font-asap font-semibold">
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
          <span className="px-1">|</span>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
