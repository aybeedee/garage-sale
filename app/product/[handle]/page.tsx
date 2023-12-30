'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { sampleProductsList } from '@/utils/constants';

export default function ProductPage(
  {
    params,
  }:
    {
      params: { handle: string; };
    }
) {

  const product = sampleProductsList.find((product) => (product.handle === params.handle));

  if (!product) {

    return notFound();
  }

  const [accordionOpen, setAccordionOpen] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <div className="w-full items-center px-2 py-12 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:px-10">

      <div className="flex flex-row justify-center w-[100%] p-4 sm:py-10 sm:px-28 rounded-xl border border-gray-200 shadow-lg bg-white max-lg:flex-wrap">

        <div className="flex flex-row p-2 min-w-[55%] float-left box-border h-[100%]">

          <div className="flex flex-col gap-8 items-end grow-0 shrink-0 h-[100%]">
            {
              product.images.map((imageSrc, index) => (
                (mainImageIndex !== index) &&
                <img 
                  key={index} 
                  src={imageSrc} 
                  className="cursor-pointer object-contain h-[10vh] rounded-xl" 
                  onClick={() => {
                    setMainImageIndex(index);
                  }}
                />
              ))
            }
          </div>

          <div className="ml-8 grow shrink basis-auto relative block box-border h-full">
            <img src={product.images[mainImageIndex]} className="object-contain h-full max-h-[75vh] rounded-xl" />
          </div>

        </div>

        <div className="flex flex-col ml-6 p-2 max-w-[750px] gap-12">

          <div className="flex flex-col">

            <p className="mb-1 font-extrabold text-lg bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">NEW</p>
            <h1 className="font-semibold text-5xl mb-4">{product.name}</h1>

            <div className="flex justify-between mb-3">
              <h2 className="font-semibold text-3xl text-gray-700">Rs. {product.price}</h2>
              {
                product.quantity > 0 ?
                  <p className="text-primaryColor text-2xl font-semibold">In Stock</p>
                  :
                  <p className="text-primaryColor text-2xl font-semibold">Sold Out</p>
              }
            </div>

            <p className="text-base mb-6 text-neutral-800">{product.description}</p>

            <div className="rounded-md border border-neutral-200 bg-white">
              <h2 className="mb-0">
                <button
                  className={`${accordionOpen
                    ? `[box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                    : `transition-none rounded-b-md`
                    } group relative flex w-full items-center rounded-t-md border-0 bg-white px-5 py-4 text-left text-lg font-normal text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                  type="button"
                  onClick={() => {
                    setAccordionOpen(!accordionOpen);
                  }}>
                  Shipping & Returns
                  <span
                    className={`${accordionOpen
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529]`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              {
                accordionOpen &&
                <div
                  className="!visible">
                  <div className="px-5 py-4 text-neutral-800">
                    We ensure swift processing and dispatch within <strong>1-2 business days</strong> reaching you within <strong>5-7 days</strong>. If you're not completely satisfied, our hassle-free return policy allows you to initiate returns within <strong>30 days</strong>, with exchanges for damaged items accepted within <strong>14 days</strong>.
                  </div>
                </div>
              }
            </div>

          </div>

          <div className="flex flex-col">

            <div className="flex mb-4">

              <div className="w-full xs:w-4/12 md:w-3/12 xs:mb-0">
                <div className="h-full xs:w-full rounded-md inline-flex items-center justify-between bg-neutral-800">
                  <button type="button"
                    className="text-white transition duration-200 px-4 hover:scale-125"
                    onClick={() => {
                      if (itemCount > 1) {
                        setItemCount(prevItemCount => (prevItemCount - 1));
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" strokeWidth="1" stroke="currentColor">
                      <path d="M12.6667 7.49988H3.33341C3.1566 7.49988 2.98703 7.57012 2.86201 7.69514C2.73699 7.82016 2.66675 7.98973 2.66675 8.16654C2.66675 8.34336 2.73699 8.51292 2.86201 8.63795C2.98703 8.76297 3.1566 8.83321 3.33341 8.83321H12.6667C12.8436 8.83321 13.0131 8.76297 13.1382 8.63795C13.2632 8.51292 13.3334 8.34336 13.3334 8.16654C13.3334 7.98973 13.2632 7.82016 13.1382 7.69514C13.0131 7.57012 12.8436 7.49988 12.6667 7.49988Z" fill="currentColor"></path>
                    </svg>
                  </button>
                  <span className="text-base text-black bg-white h-full w-full px-6 py-3 border border-neutral-800">{itemCount}</span>
                  <button type="button"
                    className="text-white transition duration-200 px-4 hover:scale-125"
                    onClick={() => {
                      if (itemCount < product.quantity) {
                        setItemCount(prevItemCount => (prevItemCount + 1));
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" strokeWidth="1" stroke="currentColor">
                      <path d="M12.6667 7.4998H8.66675V3.4998C8.66675 3.32299 8.59651 3.15342 8.47149 3.02839C8.34646 2.90337 8.17689 2.83313 8.00008 2.83313C7.82327 2.83313 7.6537 2.90337 7.52868 3.02839C7.40365 3.15342 7.33341 3.32299 7.33341 3.4998V7.4998H3.33341C3.1566 7.4998 2.98703 7.57003 2.86201 7.69506C2.73699 7.82008 2.66675 7.98965 2.66675 8.16646C2.66675 8.34327 2.73699 8.51284 2.86201 8.63787C2.98703 8.76289 3.1566 8.83313 3.33341 8.83313H7.33341V12.8331C7.33341 13.0099 7.40365 13.1795 7.52868 13.3045C7.6537 13.4296 7.82327 13.4998 8.00008 13.4998C8.17689 13.4998 8.34646 13.4296 8.47149 13.3045C8.59651 13.1795 8.66675 13.0099 8.66675 12.8331V8.83313H12.6667C12.8436 8.83313 13.0131 8.76289 13.1382 8.63787C13.2632 8.51284 13.3334 8.34327 13.3334 8.16646C13.3334 7.98965 13.2632 7.82008 13.1382 7.69506C13.0131 7.57003 12.8436 7.4998 12.6667 7.4998Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <button className="ml-10 w-full block px-5 text-lg font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-md hover:bg-neutral-700">
                Add to Cart
              </button>

            </div>

            <button className="w-full block px-5 py-[11px] text-lg font-medium tracking-wider text-center text-neutral-800 transition-colors duration-300 transform bg-white border border-neutral-800 rounded-md hover:text-white hover:bg-neutral-800">
              Buy Now
            </button>

          </div>

        </div>

      </div>

      <div className="flex flex-row justify-center mb-52 p-2 bg-yellow-300">

        <div className="flex flex-row p-2 bg-green-300">

          <div className="flex flex-col items-end bg-red-300">
            <img src={product.images[1]} className="object-contain h-[22vh] w-[200px] max-w-[200px] rounded-xl" />
            <img src={product.images[2]} className="object-contain h-[22vh] w-[200px] max-w-[200px] rounded-xl" />
            <img src={product.images[3]} className="object-contain h-[22vh] w-[200px] max-w-[200px] rounded-xl" />
          </div>

          <img src={product.images[0]} className="ml-2 object-contain h-[44vh] rounded-xl" />

        </div>

        <div className="flex flex-col ml-4 p-2 bg-gray-300">
          <h2>DETAILS</h2>
          <p className="text-sm mb-6">Pariatur ex aliqua elit ut enim consequat amet non do ut. Ad aute deserunt fugiat qui Lorem in quis velit labore voluptate.</p>
        </div>

      </div>

      <div className="flex flex-row w-full p-4 sm:p-6 rounded-xl border border-gray-200 shadow-lg max-lg:flex-wrap">
        <div className="flex flex-row h-full border border-red-500 bg-yellow-600">
          <div className="flex flex-col gap-y-2 items-end max-h-[720px] border border-red-500 bg-green-400">
            <div className="h-[15%] px-2">
              <button className="h-full">
                <img className="h-full rounded-xl" src={product.images[1]} />
              </button>
            </div>
            <div className="h-[15%] px-2">
              <button className="h-full">
                <img className="h-full rounded-xl" src={product.images[2]} />
              </button>
            </div>
            <div className="h-[15%] px-2">
              <button className="h-full">
                <img className="h-full rounded-xl" src={product.images[3]} />
              </button>
            </div>
            <div className="h-[15%] px-2">
              <button className="h-full">
                <img className="h-full rounded-xl" src={product.images[0]} />
              </button>
            </div>
          </div>
          <img className="rounded-xl max-h-[720px] object-contain bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur border border-green-600" src={product.images[0]} />
        </div>
        <div className="lg:ml-4 border border-red-500">
          <h1 className="text-rhino-700 font-semibold text-4xl mb-2 font-heading">Nike Dark SuperSpeed&trade; sneakers</h1>
          <p className="text-sm font-medium mb-6">Nike Sport</p>
          <p className="text-sm mb-6">Pariatur ex aliqua elit ut enim consequat amet non do ut. Ad aute deserunt fugiat qui Lorem in quis velit labore voluptate.</p>
          <div className="flex gap-4 mb-6">
            <h2 className="text-4xl font-semibold">$ 199.00</h2>
            <p className="font-extrabold text-sm">$ 249.00</p>
          </div>
          <div className="flex -mx-2 flex-wrap mb-10">
            <div className="w-full xs:w-4/12 md:w-3/12 px-2 mb-4 xs:mb-0">
              <div className="h-full xs:w-full py-3 px-4 rounded-sm border border-coolGray-200 gap-4 inline-flex items-center justify-between">
                <div className="cursor-pointer text-coolGray-300 hover:text-coolGray-400 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M12.6667 7.49988H3.33341C3.1566 7.49988 2.98703 7.57012 2.86201 7.69514C2.73699 7.82016 2.66675 7.98973 2.66675 8.16654C2.66675 8.34336 2.73699 8.51292 2.86201 8.63795C2.98703 8.76297 3.1566 8.83321 3.33341 8.83321H12.6667C12.8436 8.83321 13.0131 8.76297 13.1382 8.63795C13.2632 8.51292 13.3334 8.34336 13.3334 8.16654C13.3334 7.98973 13.2632 7.82016 13.1382 7.69514C13.0131 7.57012 12.8436 7.49988 12.6667 7.49988Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="text-coolGray-700 text-sm">2</span>
                <div className="cursor-pointer text-coolGray-300 hover:text-coolGray-400 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M12.6667 7.4998H8.66675V3.4998C8.66675 3.32299 8.59651 3.15342 8.47149 3.02839C8.34646 2.90337 8.17689 2.83313 8.00008 2.83313C7.82327 2.83313 7.6537 2.90337 7.52868 3.02839C7.40365 3.15342 7.33341 3.32299 7.33341 3.4998V7.4998H3.33341C3.1566 7.4998 2.98703 7.57003 2.86201 7.69506C2.73699 7.82008 2.66675 7.98965 2.66675 8.16646C2.66675 8.34327 2.73699 8.51284 2.86201 8.63787C2.98703 8.76289 3.1566 8.83313 3.33341 8.83313H7.33341V12.8331C7.33341 13.0099 7.40365 13.1795 7.52868 13.3045C7.6537 13.4296 7.82327 13.4998 8.00008 13.4998C8.17689 13.4998 8.34646 13.4296 8.47149 13.3045C8.59651 13.1795 8.66675 13.0099 8.66675 12.8331V8.83313H12.6667C12.8436 8.83313 13.0131 8.76289 13.1382 8.63787C13.2632 8.51284 13.3334 8.34327 13.3334 8.16646C13.3334 7.98965 13.2632 7.82008 13.1382 7.69506C13.0131 7.57003 12.8436 7.4998 12.6667 7.4998Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full xs:w-5/12 md:w-7/12 px-2 mb-4 xs:mb-0"><a className="block w-full px-3 py-4 rounded-sm text-center text-white text-sm font-medium bg-purple-500 hover:bg-purple-600 transition duration-200" href="#" data-config-id="auto-txt-11-1">Add to cart</a></div>
            <div className="w-full xs:w-3/12 md:w-2/12 px-2">
              <a className="border border-purple-600 rounded-sm text-purple-500 py-4 px-6 xs:px-1 inline-flex h-full xs:w-full items-center justify-center hover:bg-purple-500 hover:text-white transition duration-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <g clipPath="url(#clip0_1925_4216)">
                    <path d="M14.1942 3.24105C13.8537 2.90039 13.4494 2.63015 13.0045 2.44578C12.5595 2.2614 12.0826 2.1665 11.6009 2.1665C11.1192 2.1665 10.6423 2.2614 10.1973 2.44578C9.75236 2.63015 9.34807 2.90039 9.00757 3.24105L8.3009 3.94772L7.59423 3.24105C6.90644 2.55326 5.97359 2.16686 5.0009 2.16686C4.02821 2.16686 3.09536 2.55326 2.40757 3.24105C1.71977 3.92885 1.33337 4.8617 1.33337 5.83439C1.33337 6.80708 1.71977 7.73993 2.40757 8.42772L3.11423 9.13439L8.3009 14.3211L13.4876 9.13439L14.1942 8.42772C14.5349 8.08722 14.8051 7.68293 14.9895 7.23796C15.1739 6.79298 15.2688 6.31605 15.2688 5.83439C15.2688 5.35273 15.1739 4.87579 14.9895 4.43082C14.8051 3.98584 14.5349 3.58156 14.1942 3.24105V3.24105Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs><clipPath id="clip0_1925_4216"><rect width="16" height="16" fill="white" transform="translate(0 0.166504)"></rect></clipPath></defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">

        <div className="h-full w-full flex flex-col">

          <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
            <Image
              className="h-full w-full object-contain border border-red-600"
              src={product.images[0]}
              alt={product.name}
              sizes="(min-width: 1024px) 66vw, 100vw"
              fill
              priority={true}
            />
            {/* {images[imageIndex] && (
              <Image
                className="h-full w-full object-contain"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                alt={images[imageIndex]?.altText as string}
                src={images[imageIndex]?.src as string}
                priority={true}
              />
            )} */}
          </div>

          {
            product.images.length > 1 ?
              (
                <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
                  {
                    product.images.map((imageUrl, index) => (
                      <li key={imageUrl} className="h-20 w-20">
                        <Image
                          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 border border-red-600"
                          src={imageUrl}
                          alt={product.name}
                          width={80}
                          height={80}
                        />
                        {/* <Link
                          aria-label="Enlarge product image"
                          href={createUrl(pathname, imageSearchParams)}
                          scroll={false}
                          className="h-full w-full"
                        >
                          <GridTileImage
                            alt={image.altText}
                            src={image.src}
                            width={80}
                            height={80}
                            active={isActive}
                          />
                        </Link> */}
                      </li>
                    ))}
                </ul>
              )
              : null
          }
        </div>

        <div className="flex flex-col">

          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
            {params.handle}
            <br />
            {product.name}
          </h2>

          <p>{product.description}</p>

        </div>
      </div>

    </div>
  )
}
