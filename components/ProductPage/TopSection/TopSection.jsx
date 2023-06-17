/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProductDetailsCerosule from "./ProductDetailsCerosule";
import Link from "next/link";
import TopCart from "./TopCart";

const TopSection = () => {
  return (
    <div className="mt-3 flex px-6">
      <div className=" w-1/2 pr-2 ">
        <ProductDetailsCerosule />
      </div>
      <div className=" w-1/2 px-2">
        <div className="flex flex-col gap-2">
          <div className="title&vendorname&rating">
            <h1 className="title text-xl font-[450]">
              Amazon Basics Shea Butter & Oatmeal Body Wash, 24 Fl
            </h1>
            <div className="vendorName mt-2">
              <Link
                href={""}
                className="text-[15px] font-medium text-green-700 hover:underline duration-300"
              >
                Visit Huan_Cosmetics Store
              </Link>
            </div>
            <span className="rating flex items-center gap-2 mt-1">
              <span className="flex items-center gap-2">
                <picture className="flex items-center gap-[4px] mb-[3px]">
                  <img src="/SVG/star.svg" className="h-3" alt="" />
                  <img src="/SVG/star.svg" className="h-3" alt="" />
                  <img src="/SVG/star.svg" className="h-3" alt="" />
                  <img src="/SVG/star.svg" className="h-3" alt="" />
                </picture>
                <h2 className="text-sm font-medium opacity-80">4.0</h2>
              </span>
              <h1 className="text-sm font-medium text-bgColor">428 ratings</h1>
            </span>
          </div>
          <hr />
          <span>
            <h1 className="price font-[500] text-sm">
              <span className="opacity-80 pr-2">Price :</span>
              894 TK
            </h1>
            <h1 className="size font-[500] text-sm">
              <span className="opacity-80 pr-2">Size :</span>24 Fl Oz (Pack of
              1)
            </h1>
            <div className="deliveryDate mt-1">
              <h1 className="text-xs font-[400] capitalize mt-2 line-clamp-4">
                Delivery
                <span className="text-sm font-medium px-1">Friday, June 23</span>
                Order within
                <span className="text-bgColor ml-1">12 hrs 7 mins</span>
              </h1>
            </div>
          </span>

          <div className="Varient flex items-center gap-2 mt-1">
            <span className="flex flex-col gap-[2px] p-[6px] border border-bgColor cursor-pointer">
              <h1 className="text-xs font-medium opacity-95">
                24 Fl Oz (Pack of 1)
              </h1>
              <h1 className="text-xs font-[600] text-bgColor">TK 758</h1>
              <h1 className="text-xs font-[600] text-bgColor">
                TK 64 (Discount)
              </h1>
            </span>
            <span className="flex flex-col gap-[2px] p-[6px] border border-gray-300 cursor-pointer">
              <h1 className="text-xs font-medium opacity-95">
                24 Fl Oz (Pack of 1)
              </h1>
              <h1 className="text-xs font-[600] opacity-80">TK 758</h1>
              <h1 className="text-xs font-[600] opacity-80">
                TK 64 (Discount)
              </h1>
            </span>
          </div>
          <div className="productDetails w-full">
            <table className=" w-fit mt-2">
              <tbody>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Item Type
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">Cream</td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    skin type
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">dry</td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    brand
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">
                    lorem's
                  </td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Material Feature
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">
                    plastic bottol
                  </td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Date First Available
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">
                    April 18, 2022
                  </td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Country of OriginAvailable
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">india</td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Manufacturer
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">
                    Amazon.com Services, Inc.
                  </td>
                </tr>
                <tr className="mt-[2px]">
                  <td className="text-[14px] font-[500] capitalize pr-5">
                    Product Code
                  </td>
                  <td className="text-[13px] font-[400]  capitalize">
                    B09HHD9X4B
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="mt-2" />
          <div className="aboutThisProduct mt-2 ">
            <h1 className="capitalize text-base font-semibold opacity-95">
              about this product
            </h1>
            <ul>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                One 24-fluid ounce bottle of body wash with shea butter and
                oatmeal
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                Hypoallergenic
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                Helps cleanse and moisturize dry skin in the bath or shower
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                Contains shea butter and oatmeal
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                Not tested on animals. Made in the U.S.A. with U.S. and foreign
                components.
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                If you like St. Ives Soothing Oatmeal & Shea Butter Body Wash,
                we invite you to try Amazon Basics Shea Butter and Oatmeal Body
                Wash
              </li>
              <li className="text-[13px] font-[400] mt-[6px] list-disc ml-5">
                Alexa voice shopping enabled: to place your next order, just
                say, “Alexa, reorder Amazon Basics Body Wash"
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-span-1">
          <TopCart />
        </div> */}
      </div>
    </div>
  );
};

export default TopSection;
