import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/Layouts/Layout";
import Link from "next/link";
import AddressCard from "@/components/Checkout.jsx/AddressCard";
import { AiOutlinePlus, AiOutlineCalendar } from "react-icons/ai";
import InputField from "@/components/ReuseableComponent/BaseInput";
import { RxCross2 } from "react-icons/rx";

const Checkout = () => {
    const [openTab, setOpenTab] = useState("address");
    const [showAddressModal, setShowAddressModal] = useState(false);

    return (
        <Layout>
            <Head>
                <title>Cometics Center checkout_page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white px-2 md:px-6 py-3 ">
                <h1 className="flex items-center justify-center md:text-[23px] font-semibold text-gray-800 capitalize">
                    shipping address
                </h1>
                <div className="tabSection flex justify-center mt-2 md:mt-4 h-12 md:h-20 pb-2 bg-[#eae9e5] rounded shadow-md">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className="h-5 w-5 md:h-9 md:w-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                                <picture>
                                    <img src="/SVG/whitecart.svg" className="w-3 md:w-5" alt="" />
                                </picture>
                            </div>
                            <h2 className="text-[11px] font-medium text-gray-800 absolute mt-5 md:mt-9">
                                Cart
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="h-[2px] w-[60px] md:w-[100px] bg-gray-800"></span>
                        <div className="flex flex-col items-center">
                            <div
                                onClick={() => setOpenTab("address")}
                                className="h-5 w-5 md:h-9 md:w-9 bg-gray-800 rounded-full flex items-center justify-center  cursor-pointer"
                            >
                                <picture>
                                    <img src="/SVG/whiteaddress.svg" className="w-3 md:w-5" alt="" />
                                </picture>
                            </div>
                            <h2 className="text-[11px] font-medium text-gray-800 absolute mt-5 md:mt-9">
                                Address
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="h-[2px] w-[60px] md:w-[100px] bg-gray-800"></span>
                        <div className="flex flex-col items-center ">
                            <div
                                onClick={() => setOpenTab("payment")}
                                className="h-5 w-5 md:h-9 md:w-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer"
                            >
                                <picture>
                                    <img src="/SVG/whitepayment.svg" className="w-3 md:w-5" alt="" />
                                </picture>
                            </div>
                            <h2 className="text-[11px] font-medium text-gray-800 absolute mt-5 md:mt-9">
                                Payment
                            </h2>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <span className="h-[2px] w-[60px] md:w-[100px] bg-gray-800"></span>
                        <div className="flex flex-col items-center">
                            <div
                                onClick={() => setOpenTab("confirmation")}
                                className="h-5 w-5 md:h-9 md:w-9 bg-gray-800 rounded-full flex items-center justify-center  cursor-pointer"
                            >
                                <picture>
                                    <img src="/SVG/confirmation.svg" className="w-3 md:w-5" alt="" />
                                </picture>
                            </div>
                            <h2 className="text-[11px] font-medium text-gray-800 absolute mt-5 md:mt-9">
                                Confirmation
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="contentSection mt-4">
                    <div className={`shippingAdress  ${openTab === "address" ? `block` : `hidden`}`} >
                        <div className="w-full md:flex md:gap-4">
                            <div className="left md:w-4/6 h-fit bg-[#eae9e5] p-2 rounded shadow-md">
                                <div className=" md:flex items-center justify-center gap-3 mt-3">
                                    <InputField
                                        label="Full Name"
                                        placeholder={"Full name"}
                                    />
                                    <InputField
                                        label="Mobile"
                                        placeholder={"Mobile number"}
                                    />
                                </div>
                                <div className=" md:flex items-center justify-center gap-3 mt-3">
                                    <InputField
                                        label="Country"
                                        value={"Bangladesh"}
                                    />
                                    <div className=" flex flex-col justify-center mt-[10px]">
                                        <h1 className="text-[12px] md:text-[14px] opacity-90">Division</h1>
                                        <select className="md:w-[400px] py-[6px] md:py-[8px] text-[13px] pl-3 focus:outline-none" name="division" id="">
                                            <option value="Dhaka ">Dhaka</option>
                                            <option value="Barisl ">Barisal</option>
                                            <option value="Khulna ">Khulna</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" md:flex items-center justify-center gap-3 mt-3">
                                    <div className=" flex flex-col justify-center mt-[10px]">
                                        <h1 className="text-[12px] md:text-[14px] opacity-90">Distric</h1>
                                        <select className="md:w-[400px] py-[6px] md:py-[8px] text-[13px] pl-3 focus:outline-none" name="Distric" id="">
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Barisl">Barisal</option>
                                            <option value="Khulna">Khulna</option>
                                        </select>
                                    </div>
                                    <div className=" flex flex-col justify-center mt-[10px]">
                                        <h1 className="text-[12px] md:text-[14px] opacity-90">Sub Distric</h1>
                                        <select className="md:w-[400px] py-[6px] md:py-[8px] text-[13px] pl-3 focus:outline-none" name="sub_distric" id="">
                                            <option value="Dhaka ">Dhaka</option>
                                            <option value="Barisl ">Barisal</option>
                                            <option value="Khulna ">Khulna</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" md:flex items-center justify-center gap-3 mt-3 mb-3">
                                    <InputField
                                        label="Address"
                                        placeholder={"Distric"}
                                    />
                                    <InputField
                                        label="Zip code"
                                        placeholder={"Zip Code"}
                                    />
                                </div>
                            </div>
                            <div className="right mt-2 md:mt-0 md:w-2/6 h-fit">
                                <div className="productsCard bg-[#eae9e5] rounded shadow-md p-4">
                                    <h3 className="text-[13px] font-medium text-gray-700">
                                        Order Items
                                        <span className="text-[12px] opacity-80">(6)</span>
                                    </h3>
                                    <div className="h-[2px] w-[96px] bg-gray-700 mt-1"></div>
                                    <div className="Card mt-3 ">
                                        <div className="mt-2 grid grid-cols-6 gap-3 bg-gray-100 p-2 rounded-md shadow">
                                            <picture className="col-span-1">
                                                <img
                                                    src="/product1.avif"
                                                    className="rounded-sm"
                                                    alt=""
                                                />
                                            </picture>
                                            <div className="col-span-3 flex flex-col justify-center">
                                                <h3 className="text-[11px] font-semibold text-gray-700">
                                                    European Beauty Mackup
                                                </h3>
                                                <h3 className="text-[11px] font-medium text-gray-700">
                                                    <span className="opacity-80">Color :</span> Red and
                                                    white
                                                </h3>
                                            </div>
                                            <div className="col-span-2 flex flex-col justify-center">
                                                <span className="flex items-center gap-1">
                                                    <h3 className="text-[11px] font-medium text-gray-700">
                                                        &#2547; 236{" "}
                                                    </h3>
                                                    <picture>
                                                        <img
                                                            src="/SVG/multi.svg"
                                                            className="h-2"
                                                            alt=""
                                                        />
                                                    </picture>
                                                    <h3 className="text-[11px] font-medium text-gray-700">
                                                        1
                                                    </h3>
                                                </span>
                                                <h3 className="text-[11px] font-semibold text-gray-700">
                                                    &#2547; 236
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cuponCard bg-[#eae9e5] rounded shadow-md p-4 mt-4">
                                    <h3 className="text-[13px] font-medium text-gray-700">
                                        Coupon Code
                                        <span className="text-[12px] opacity-80">(6)</span>
                                    </h3>
                                    <div className="h-[2px] w-[96px] bg-gray-700 mt-1"></div>
                                    <div className="mt-3">
                                        <div className="mt-4 flex items-center gap-3">
                                            <input
                                                type="text"
                                                placeholder="Gift card or discount code"
                                                className="w-full py-2 pl-4 border border-gray-300 bg-gray-100 focus:outline-none rounded  text-[12px] font-medium"
                                            />
                                            <button className="px-3 py-2 bg-gray-800 text-white rounded shadow-md text-xs ">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="amountSection bg-[#eae9e5] rounded shadow-md p-4 mt-4">
                                    <div className="bg-gray-100 p-6 rounded-md">
                                        <span className="flex items-center justify-between mt-2">
                                            <h3 className="text-[12px] font-semibold text-gray-700">
                                                Sub Total
                                            </h3>
                                            <h3 className="text-[12px] font-medium text-gray-700">
                                                &#2547; 343
                                            </h3>
                                        </span>
                                        <span className="flex items-center justify-between mt-2">
                                            <h3 className="text-[12px] font-semibold text-gray-700">
                                                Shipping Cost
                                            </h3>
                                            <h3 className="text-[12px] font-medium text-gray-700">
                                                &#2547; 60
                                            </h3>
                                        </span>
                                        <span className="flex items-center justify-between mt-2">
                                            <h3 className="text-[12px] font-semibold text-gray-700">
                                                Tax
                                            </h3>
                                            <h3 className="text-[12px] font-medium text-gray-700">
                                                &#2547; 22
                                            </h3>
                                        </span>
                                        <span className="flex items-center justify-between mt-2">
                                            <h3 className="text-[12px] font-semibold text-gray-700">
                                                Discount
                                            </h3>
                                            <h3 className="text-[12px] font-medium text-gray-700">
                                                &#2547; 30
                                            </h3>
                                        </span>
                                        <hr className="w-full bg-gray-600 mt-3" />
                                        <span className="flex items-center justify-between mt-2">
                                            <h3 className="text-[16px] font-semibold text-gray-700">
                                                Total
                                            </h3>
                                            <h3 className="text-[16px] font-semibold text-gray-700">
                                                &#2547; 30
                                            </h3>
                                        </span>
                                    </div>
                                    <div className="Message bg-gray-100 rounded shadow-md p-6 mt-4">
                                        <h1 className="text-[11px] font-medium text-green-700">
                                            How we are calculate shipping cost?
                                        </h1>
                                        <h1 className="text-[11px] font-medium opacity-80 mt-2">
                                            Express Delivery method has been applied to your order
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setOpenTab("payment")}
                                    className="flex items-center justify-center p-3 w-full text-xs font-medium bg-bgColor text-white mt-2 rounded shadow-md cursor-pointer"
                                >
                                    Proceed To Payment
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`paymentDetails   ${openTab === "payment" ? `block` : `hidden`
                            } `}
                    >
                        I am payment deaatils
                    </div>
                    <div
                        className={`orderConfirmation  ${openTab === "confirmation" ? `block` : `hidden`
                            } `}
                    >
                        I am Order confirmation
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
