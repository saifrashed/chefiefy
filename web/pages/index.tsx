import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';

import Meta from '@/components/Meta'
import Testimonials from '@/components/Testimonials';

function Landing() {

  const [targetPosition, setTargetPosition] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);


  useEffect(() => {
    if (targetPosition) {
      const element = document.getElementById(targetPosition);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setTargetPosition(null);
      }
    }
  }, [targetPosition]);

  return (
    <>
      <main>
        <Meta title='Monetize your cooking talent, easy. | Chefiefy' />

        <header className="bg-[#f79305]">
          {/* Navigation Menu */}
          <nav className="mx-auto flex items-center justify-between max-w-7xl p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Chefiefy</span>
                <img className="h-12 w-auto" src="/images/logo.png" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  console.log(menuOpen)
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a onClick={() => setTargetPosition('features')} className="text-sm font-semibold leading-6 text-white">Features</a>
              <a onClick={() => setTargetPosition('pricing')} className="text-sm font-semibold leading-6 text-white">Pricing</a>
              <a onClick={() => setTargetPosition('help')} className="text-sm font-semibold leading-6 text-white">Help</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/auth/login" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div role="dialog" aria-modal="true" className={"lg:hidden fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white bg-slate-900 transition-all " + (menuOpen ? "translate-x-0" : "translate-x-full")}>
            <div className="flex items-center justify-between">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">Tailwindgrabber</span>
                <img className="h-12 w-auto" src="/images/icon.png" alt="Tailwindgrabber icon" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  console.log(menuOpen);
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a onClick={() => { setTargetPosition('features'); setMenuOpen(!menuOpen); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Features</a>
                  <a onClick={() => { setTargetPosition('pricing'); setMenuOpen(!menuOpen); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Pricing</a>
                  <a onClick={() => { setTargetPosition('help'); setMenuOpen(!menuOpen); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Help</a>
                </div>
                <div className="py-6">
                  <Link href="/auth/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8  lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                      <a href="#" className="whitespace-nowrap font-semibold ">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Cook, share, sell.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-[#f79305] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                      Create your own page
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src="https://as1.ftcdn.net/v2/jpg/03/89/59/56/1000_F_389595650_pnE5ZpVb5S4LGMmLpiKWu9VxyRFnagXG.jpg"
              alt=""
            />
          </div>
        </div>



        <div className="bg-[#f79305] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 text-white">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                <dt className="text-base leading-7 ">Transactions every 24 hours</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">Assets under holding</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">New users annually</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
              </div>

            </dl>
          </div>
        </div>


        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 ">Deploy faster</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path>
                        </svg>
                        Push to deploy.
                      </dt>
                      <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path>
                        </svg>
                        SSL certificates.
                      </dt>
                      <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"></path>
                          <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd"></path>
                        </svg>
                        Database backups.
                      </dt>
                      <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
                    </div>

                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <img src="https://i.pinimg.com/originals/7e/1d/9b/7e1d9b3c3f94bde8dec627127e4dfc2e.png" alt="Product screenshot" className="w-[48rem] max-w-none  ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
              </div>
            </div>
          </div>
        </div>


        <section className="bg-[#f79305] my-5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-white">
                    <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img className="h-14 w-14 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <div className="text-base">
                      <div className="font-semibold text-white">Judith Black</div>
                      <div className="mt-1 text-white">CEO of Tuple</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                <img className="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="" />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-white">
                    <p>“Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.”</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img className="h-14 w-14 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <div className="text-base">
                      <div className="font-semibold text-white">Joseph Rodriguez</div>
                      <div className="mt-1 text-white">CEO of Reform</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>


        <div className="bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
              <h2 className="inline sm:block lg:inline xl:block">Want to start monetizing?</h2>
              <p className="inline sm:block lg:inline xl:block">Sign up for the waitlist.</p>
            </div>
            <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
              <div className="flex gap-x-4">
                <label className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" required className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder="Enter your email" />
                <button type="submit" className="flex-none rounded-md bg-[#f79305] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f79305] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 f">Join</button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-900">We care about your data. Read our <a href="#" className="font-semibold text-black hover:text-black">privacy&nbsp;policy</a>.</p>
            </form>
          </div>
        </div>



        <footer className=" bg-[#f79305] text-white">
          <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="/" className="flex items-center mb-4 sm:mb-0">
                <img src="/images/logo.png" className="h-12 mr-3" />
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
                <li>
                  <a className="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
                </li>
                <li>
                  <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                  <a onClick={() => setTargetPosition('features')} className="mr-4 hover:underline md:mr-6">Features</a>
                </li>
                <li>
                  <a onClick={() => setTargetPosition('pricing')} className="mr-4 hover:underline md:mr-6">Pricing</a>
                </li>
                <li>
                  <a onClick={() => setTargetPosition('help')} className="mr-4 hover:underline md:mr-6 ">Help</a>
                </li>
                <li>
                  <Link href="/auth/login" className="hover:underline">Log in </Link>
                </li>
              </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-white lg:my-8" />
            <span className="block text-sm sm:text-center text-white">© {new Date().getFullYear()} <a href="#" className="hover:underline">Chefiefy</a>. All Rights Reserved.</span>
          </div>
        </footer>
      </main >
    </>
  )
}


export default Landing