import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import logo from '/public/logoc.png';

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState({ isAbout: false, isService: false })
  const headerRef = useRef(null);

  useEffect(() => {
    let height = headerRef.current.getBoundingClientRect().height;
    window.addEventListener('scroll', () => {
      if (window.scrollY > height) {
        setFixed(true);
      } else setFixed(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);



  return (
    <>
      <header
        ref={headerRef}
        className={`${fixed ? 'bg-white' : ''
          } fixed z-50 px-8 pt-3 w-full flex items-center transition-all font-asap`}
      >
        <div className="flex w-full justify-between relative">
          {/* logo */}
          <div className="cursor-pointer w-24 md:w-52">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className={`w-auto ${fixed ? '' : 'invert-1 brightness-0'} `}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          {/* desktop menu */}
          <nav className="hidden xl:block flex-1 w-full mr-5">
            <ul
              className={`${fixed ? 'text-black pt-10' : 'text-white pt-9'
                } flex justify-end items-center gap-x-6 font-semibold capitalize transition-all`}
            >
              <li className=" py-3">
                <Link href="/">
                  <a className="pb-8">sell your house</a>
                </Link>
              </li>
              <li className=" py-3 ">
                <Link href="/blogs">
                  <a className="pb-8">how it works</a>
                </Link>
              </li>
              <li className="py-3 ">
                <Link href="/blogs">
                  <a className="pb-8">compare</a>
                </Link>
              </li>
              <li onMouseMove={() => setDropdown({ isAbout: true, isService: false })} onMouseOut={() => setDropdown({ isAbout: false, isService: false })} className=" py-3">
                <Link href="/blogs">
                  <a className="flex gap-2 items-center pb-4 pt-4">
                    about us

                    <span>
                      <svg className="text-white h-4 w-4" fill={`${fixed ? 'black' : 'white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </span>
                  </a>
                </Link>


                <div className={`${dropdown.isAbout ? 'block' : 'hidden'} absolute`}>
                  <ul className={`${fixed ? 'bg-blue text-white mt-3' : 'bg-white mt-2'}   border-t-4 border-aqua px-5 py-3 absolute  text-black `}>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500 `}>
                      <Link href="/review">
                        <a>Review</a>
                      </Link>

                    </li>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500  mt-2`}>

                      <Link href="/faqs">
                        <a> FAQs</a>
                      </Link>

                    </li>
                  </ul>
                </div>

              </li>
              <li onMouseMove={() => setDropdown({ isAbout: false, isService: true })} onMouseOut={() => setDropdown({ isAbout: false, isService: false })} className="py-3 ">
                <Link href="/blogs">
                  <a className="flex gap-2 items-center pb-4 pt-4">services

                    <span>
                      <svg className="text-white h-4 w-4" fill={`${fixed ? 'black' : 'white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </span>
                  </a>
                </Link>

                <div className={`${dropdown.isService ? 'block' : 'hidden'} absolute `}>
                  <ul className={`${fixed ? 'bg-blue text-white mt-3' : 'bg-white mt-2'}  border-t-4 border-aqua px-5 py-3 absolute  text-black`}>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500 `}>
                      <Link href="/buyers">
                        <a>Buyers</a>
                      </Link>

                    </li>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500  mt-2`}>

                      <Link href="/contractors">
                        <a> Contractors</a>
                      </Link>

                    </li>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500 `}>
                      <Link href="/agents">
                        <a>Agents</a>
                      </Link>

                    </li>
                    <li className={`${fixed && 'text-white hover:bg-aqua'} hover:bg-gray px-2 py-1 rounded-sm transition-all duration-500  mt-2`}>

                      <Link href="/investors">
                        <a> Investors</a>
                      </Link>

                    </li>
                  </ul>
                </div>

              </li>
              <li className="py-3">
                <Link href="/blogs">
                  <a className="pb-8">blog</a>
                </Link>
              </li>
              <li className="py-3 ">
                <Link href="/blogs">
                  <a className="pb-8">contact us</a>
                </Link>
              </li>
              <Link href="tel:(503) 610-8828">
                <a className="flex items-center hover:underline font-asap flex-nowrap bg-aqua text-white font-semibold rounded-full px-5 py-3 cursor-pointer">
                  <GiRotaryPhone />
                  (503) 610-8828
                </a>
              </Link>
            </ul>
          </nav>
          {/* mobile menu button */}
          <div className={`flex-1 pt-3 md:pt-10 flex justify-end  xl:hidden`}>
            <div
              className="cursor-pointer text-2xl text-aqua"
              onClick={() => setToggle(!toggle)}
            >
              <FaBars />
            </div>
          </div>
          {/* mobile menu */}
          <div
            className={`absolute z-50 top-full xl:hidden mt-4 bg-mirage w-full ${toggle ? 'h-auto opacity-100' : 'h-0 opacity-0'
              } transition-all p-3.5 border-t-4 border-t-aqua`}
          >
            <ul
              className={`font-bold text-white flex mt-4 flex-col items-start h-auto gap-y-7 pl-3.5 text-sm capitalize text-left`}
            >
              <li className="transition-all hover:text-iron-gray">
                <Link href="/">
                  <a>sell your house</a>
                </Link>
              </li>
              <li className="transition-all hover:text-iron-gray">
                <Link href="/blogs">
                  <a>how it works</a>
                </Link>
              </li>
              <li className="transition-all hover:text-iron-gray">
                <Link href="/blogs">
                  <a>compare</a>
                </Link>
              </li>
              <li onClick={() => setDropdown({ isAbout: !dropdown.isAbout, isService: false })} className="">
                <Link href="/blogs">
                  <a className="flex gap-2 items-center justify-between">
                    about us
                    <span>
                      {dropdown.isAbout ?
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg> :

                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                      }
                    </span>
                  </a>
                </Link>
                <ul className={` ${dropdown.isAbout ? 'block' : 'hidden'}  px-5 py-1  text-black `}>
                  <li className={` px-2 text-white py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/review">
                      <a>Review</a>
                    </Link>

                  </li>
                  <li className={` px-2 text-white  py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/faqs">
                      <a>FAQs</a>
                    </Link>

                  </li>
                </ul>
              </li>
              <li onClick={() => setDropdown({ isAbout: false, isService: !dropdown.isService })} className="">
                <Link href="/blogs">
                  <a className="flex gap-2 items-center justify-between">
                    Services
                    <span>
                      {dropdown.isService ? <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg> :

                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                      }
                    </span>
                  </a>
                </Link>
                <ul className={` ${dropdown.isService ? 'block' : 'hidden'}  px-5 py-1  text-black `}>
                  <li className={` px-2 text-white py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/review">
                      <a>Buyers</a>
                    </Link>

                  </li>
                  <li className={` px-2 text-white  py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/faqs">
                      <a>Contrators</a>
                    </Link>

                  </li>
                  <li className={` px-2 text-white  py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/faqs">
                      <a>Agents</a>
                    </Link>

                  </li>
                  <li className={` px-2 text-white  py-1 rounded-sm transition-all duration-500 `}>
                    <Link href="/faqs">
                      <a>Investors</a>
                    </Link>

                  </li>
                </ul>
              </li>
              <li className="transition-all hover:text-iron-gray">
                <Link href="/blogs">
                  <a>blog</a>
                </Link>
              </li>
              <li className="transition-all hover:text-iron-gray">
                <Link href="/blogs">
                  <a>contact us</a>
                </Link>
              </li>
              <Link href="tel:(503) 610-8828">
                <a className="flex items-center flex-nowrap bg-aqua text-white font-medium rounded-full px-5 py-3 cursor-pointer">
                  <GiRotaryPhone />
                  (503) 610-8828
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
