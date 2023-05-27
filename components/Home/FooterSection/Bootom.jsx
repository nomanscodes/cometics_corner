import Link from "next/link";
import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

const Bootom = () => {
  return (
    <div className=" bg-[#334131] text-white px-6 py-1">
      <div className="flex items-center justify-center gap-4 footerText">
        <span className="flex items-center gap-2 ">
          <MdOutlineLanguage size={16} />
          <p>Bangla</p>
        </span>
        <span className="flex items-center gap-1">
          <p>&#2547;</p>
          <p>BDT -Bangaladeshi TK</p>
        </span>
      </div>
      <div className=" flex items-center justify-center gap-2 footerText">
        <picture>
          <img src="/SVG/BdFlag.svg" className="w-4" alt="" />
        </picture>
        <p>Bangladesh</p>
      </div>
      <div className="flex items-center justify-center mt-2 footerText">
        <p>Allready a customar? <Link href={""}>Sign In</Link></p>
      </div>
      <div className="mt-3 ">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <Link className="whitespace-nowrap footerText" href={":"}>Conditions of USE </Link>
          <Link className="whitespace-nowrap footerText" href={":"}>Privacy Notice </Link>
          <Link className="whitespace-nowrap footerText" href={":"}>
            Your Ads Privacy Choice
          </Link>
        </div>
        <h1 className=" text-xs flex items-center justify-center mt-1">© 2023-Present<Link className="hover:underline font-medium ml-[4px]" href={""}> MeNom.com </Link>  - Inc.or its affiliate</h1>
      </div>

    </div>


  );
};

export default Bootom;
