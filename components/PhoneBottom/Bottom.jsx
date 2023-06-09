import Link from "next/link";
import React from "react";

const Bottom = ({ shopPath, homePath, categoryPath, cartPath, accountPath }) => {
    return (
        <div className="fixed bottom-0 left-0 z-40 w-full bg-white border-t shadow-2xl md:hidden ">
            <div className="flex items-center justify-between px-3 sm:px-6">
                <Link href={"/"} className="flex flex-col items-center p-1">
                    {homePath ? (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/activeHome.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2  text-[#41583d]">Home</p>
                        </>
                    ) : (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/home.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2  text-[#A1A0A0]">Home</p>
                        </>
                    )}
                </Link>
                <Link
                    href={"/m-categorieslist"}
                    className="flex flex-col items-center p-1"
                >
                    {categoryPath ? (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/activeCategory.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#41583d]">Category</p>
                        </>
                    ) : (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/category.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Category</p>
                        </>
                    )}
                </Link>
                <Link href={"/shop"} className="flex flex-col items-center p-1">
                    {shopPath ? (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/activeShop.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#41583d]">Shop</p>
                        </>
                    ) : (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/shop.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Shop</p>
                        </>
                    )}
                </Link>

                <Link href={"/cart"} className="flex flex-col items-center p-1">
                    {cartPath ? (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/activeBottomcart.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Cart</p>
                        </>
                    ) : (
                        <>
                            <picture>
                                <img className="w-5" src="/SVG/bottomcart.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Cart</p>
                        </>
                    )}
                </Link>
                <Link href={"/profile/noman"} className="flex flex-col items-center p-1">
                    {accountPath ? (
                        <>
                            <picture>
                                <img
                                    className="w-5"
                                    src="/SVG/activeAccount.svg" alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Profile</p>
                        </>
                    ) : (
                        <>
                            <picture>
                                <img
                                    className="w-5"
                                    src="/SVG/bottomaccount.svg"
                                    alt="home" />
                            </picture>
                            <p className="font-medium footerText2 text-[#A1A0A0]">Profile</p>
                        </>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Bottom;
