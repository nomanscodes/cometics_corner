import Head from "next/head";
import React from "react";
import Layout from "@/Layouts/Layout";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { SlPlus, SlMinus } from "react-icons/sl"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Bottom from "@/components/PhoneBottom/Bottom";
import { useRouter } from "next/router";
import EmptyCart from "@/components/CartPage/EmptyCart";
import ProductCart from "@/components/Home/Products/ProductCard";


const Cart = () => {
  const { asPath, pathname } = useRouter();

  const scrollLeft = () => {
    document.getElementById("suggestedContent").scrollLeft -= 600;
  };
  const scrolRight = () => {
    document.getElementById("suggestedContent").scrollLeft += 600;
  };

  return (
    <Layout>
      <Head>
        <title>Cometics Center Cart_page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-4 px-2 md:px-6 ">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[2px]  text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            <Link href={""} className="uppercase">
              Home
            </Link>
            <FiChevronRight size={14} />
          </div>
          <div className="flex items-center gap-[2px] text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Link href={""} className="uppercase">
              cart
            </Link>
            <FiChevronRight size={14} />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:grid grid-cols-7 mt-1 md:mt-3">
          <div className="mobileCardSection md:hidden ">
            <div className="grid grid-cols-5 p-2 mt-4 items-center gap-2 bg-white shadow-md">
              <picture className="col-span-1">
                <img
                  src="/demo/p/p1.avif"
                  alt="product"
                  className="
                h-[60px] rounded"
                />
              </picture>
              <div className="col-span-3 flex flex-col gap-2">
                <h3 className="capitalize text-xs font-medium opacity-80">
                  americn women hair jell (500ml) only use for night{" "}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <h5 className="price text-xs font-medium opacity-80">
                      484 TK
                    </h5>
                    <RxCross2 size={11} className="opacity-80" />
                    <select className="border-none focus:outline-0 bg-gray-100 text-xs font-medium opacity-80 capitalize px-2">
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="1"
                      >
                        1
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="2"
                      >
                        2
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="3"
                      >
                        3
                      </option>
                    </select>
                  </span>
                  <h5 className="Totalprice text-sm  font-semibold opacity-80">
                    484 TK
                  </h5>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center gap-1">
                <AiTwotoneDelete
                  size={22}
                  className="cursor-pointer opacity-80"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 p-2 mt-4 items-center gap-2 bg-white shadow-md">
              <picture className="col-span-1">
                <img
                  src="/demo/p/p2.avif"
                  alt="product"
                  className="
                w-full h-[60px] rounded"
                />
              </picture>
              <div className="col-span-3 flex flex-col gap-2">
                <h3 className="capitalize text-xs font-medium opacity-80">
                  americn women hair jell (500ml) only use for night{" "}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <h5 className="price text-xs font-medium opacity-80">
                      484 TK
                    </h5>
                    <RxCross2 size={11} className="opacity-80" />
                    <select className="border-none focus:outline-0 bg-gray-100 text-xs font-medium opacity-80 capitalize px-2">
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="1"
                      >
                        1
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="2"
                      >
                        2
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="3"
                      >
                        3
                      </option>
                    </select>
                  </span>
                  <h5 className="Totalprice text-sm  font-semibold opacity-80">
                    484 TK
                  </h5>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center gap-1">
                <AiTwotoneDelete
                  size={22}
                  className="cursor-pointer opacity-80"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 p-2 mt-4 items-center gap-2 bg-white shadow-md">
              <picture className="col-span-1">
                <img
                  src="/demo/p/p3.avif"
                  alt="product"
                  className="
                h-[60px] rounded"
                />
              </picture>
              <div className="col-span-3 flex flex-col gap-2">
                <h3 className="capitalize text-xs font-medium opacity-80">
                  americn women hair jell (500ml) only use for night{" "}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <h5 className="price text-xs font-medium opacity-80">
                      484 TK
                    </h5>
                    <RxCross2 size={11} className="opacity-80" />
                    <select className="border-none focus:outline-0 bg-gray-100 text-xs font-medium opacity-80 capitalize px-2">
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="1"
                      >
                        1
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="2"
                      >
                        2
                      </option>
                      <option
                        className="text-xs font-medium opacity-80 capitalize"
                        value="3"
                      >
                        3
                      </option>
                    </select>
                  </span>
                  <h5 className="Totalprice text-sm  font-semibold opacity-80">
                    484 TK
                  </h5>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center gap-1">
                <AiTwotoneDelete
                  size={22}
                  className="cursor-pointer opacity-80"
                />
              </div>
            </div>
          </div>
          <div className="pcCartSection md:col-span-5 hidden md:block bg-white p-3">
            <h1 className="text-[27px] font-[450]">Shopping Cart</h1>
            <hr className="w-full mt-2" />
            <div className="cartItem flex items-center gap-2 border-b mt-1 pb-3">
              <picture>
                <img src="/demo/p/p4.avif" className="w-44" alt="" />
              </picture>
              <div className="flex flex-col gap-1 w-full">
                <span className="w-full flex items-center justify-between">
                  <h3 className="text-[16px] font-[490]">
                    Amazon Basics Moisture Rich Conditioner, 28 Fluid Ounce
                  </h3>
                  <h3 className="text-[12px] font-[400]">
                    Delivery by Thu Jun 22 | <span className="text-green-900">Free</span>
                  </h3>
                </span>
                <h4 className="text-[16px] font-medium text-bgColor">
                  In Stock
                </h4>
                <span className="flex items-center gap-2">
                  <input
                    id="red-checkbox"
                    value=""
                    type="checkbox"
                    className="checked w-3 h-3 accent-bgColor"
                  />
                  <h4 className="text-[13px] font-[500] opacity-90">
                    This is a gift
                  </h4>
                </span>
                <h4 className="">
                  <span className="text-[14px] font-[600]">Size:</span>
                  <span className="text-[13px] opacity-80 pl-[4px]">28 Fl Oz (Pack of 1)</span>
                </h4>
                <span className="flex items-center py-3">
                  <span className="text-[12px] font-[600] line-through opacity-70">&#2547; 453</span>
                  <span className="text-[14px] font-[600] opacity-95 mx-2">&#2547; 674</span>
                  <span className="text-[13px] text-green-900">62% Off</span>
                </span>
                <div className="w-full flex items-center gap-1 mt-1">

                  <span className="flex items-center">
                    <SlMinus size={21} className="opacity-90 cursor-pointer" />
                    <span className="h-[22px] w-9 border border-gray-300 flex items-center justify-center text-[13px] font-medium mx-1">05</span>
                    <SlPlus size={21} className="opacity-90 cursor-pointer" />
                  </span>
                  <hr className="w-4 bg-slate-700 rotate-90" />
                  <h3 className="text-xs font-medium opacity-95 text-bgColor cursor-pointer hover:underline">Delete</h3>
                  <hr className="w-4 bg-slate-700 rotate-90" />
                  <h3 className="text-xs font-medium opacity-95 text-bgColor cursor-pointer hover:underline">Save fo later</h3>

                  <hr className="w-4 bg-slate-700 rotate-90" />
                  <h3 className="text-xs font-medium opacity-95 text-bgColor cursor-pointer hover:underline">Share</h3>

                </div>
              </div>
            </div>
          </div>
          <div className="summarySection md:col-span-2">
            <div className=" bg-white shadow-md">
              <div className=" py-[9px] w-full">
                <h3 className="text-sm font-semibold opacity-90 uppercase px-2">
                  PRICE DETAILS
                </h3>
                <hr className="w-full mt-2" />
              </div>
              <div className="mt-2 px-4">
                <span className="flex items-center justify-between ">
                  <h1 className="text-xs font-bold opacity-75 uppercase ">
                    total 2
                  </h1>
                  <h1 className="text-xs font-bold opacity-75 uppercase ">
                    3500 TK
                  </h1>
                </span>
                <span className="flex flex-col gap-2 mt-5">
                  <h1 className="text-xs font-bold opacity-75 uppercase">
                    shipping
                  </h1>
                  <select className="border-none focus:outline-0 bg-gray-100 py-[4px] text-xs font-medium opacity-80 capitalize">
                    <option
                      className="text-xs font-medium opacity-80 capitalize py-[2px]"
                      value="1"
                    >
                      standerd delivery 50 tk
                    </option>
                    <option
                      className="text-xs font-medium opacity-80 capitalize"
                      value="2"
                    >
                      express delivery 80 tk
                    </option>
                    <option
                      className="text-xs font-medium opacity-80 capitalize"
                      value="3"
                    >
                      manual delivery 35 tk
                    </option>
                  </select>
                </span>
                <span className="flex flex-col gap-2 mt-5">
                  <h1 className="text-xs font-bold opacity-75 uppercase">
                    give code
                  </h1>
                  <div className="flex w-full relative mt-2">
                    <input
                      type="text"
                      className="flex items-center bg-gray-200 w-full p-[5px] px-4 focus:outline-none text-sm"
                      placeholder="Enter your coupon"
                    />
                    <FaLongArrowAltRight className="absolute right-0 mt-2 opacity-75 mr-1 cursor-pointer" />
                  </div>
                </span>
                <hr className="mt-6 w-full opacity-90" />
                <span className="flex items-center justify-between mt-4">
                  <h1 className="text-xs font-bold opacity-75 uppercase ">
                    total price
                  </h1>
                  <h1 className="text-xs font-bold opacity-75 uppercase ">
                    3500 TK
                  </h1>
                </span>
                <button className="w-full py-[6px] bg-bgColor uppercase text-white text-sm font-medium rounded mt-4 mb-1">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <div className="bg-white px-3 py-2 md:px-6 flex items-center justify-between">
          <span>
            <h1 className="text-xs md:text-sm font-medium uppercase opacity-90">
              recomanded for you
            </h1>
            <h4 className="xxsFont font-medium uppercase mt-1 opacity-70">
              based on your activity
            </h4>
          </span>
          <div className="hidden md:flex items-center gap-2 text-white">
            <button
              onClick={scrollLeft}
              className="bg-bgColor px-1 md:px-2 md:py-1"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={scrolRight}
              className="bg-bgColor px-1 md:px-2 md:py-1"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          id="suggestedContent"
          className="suggestedContent flex items-center justify-start gap-1 md:gap-2 overflow-x-auto scroll-smooth mt-2 md:mt-4 px-3 md:px-6"
        >
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
      {/* <EmptyCart /> */}
      <Bottom cartPath={pathname} />
    </Layout>
  );
};

export default Cart;
