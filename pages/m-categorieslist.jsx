import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Layout from "@/Layouts/Layout";
import Bottom from "@/components/PhoneBottom/Bottom";
import CategoryCart from "@/components/Home/Cetagory/CategoryCard";
import VendorCart from "@/components/Home/TopVendor/VendorCart";


const catData = [
    {
        id: 1,
        image: "/demo/c/c1.jpg",
        name: "Eyes"
    },
    {
        id: 2,
        image: "/demo/c/c2.avif",
        name: "Hand Wash"
    },
    {
        id: 3,
        image: "/demo/c/c3.avif",
        name: "Nails"
    },
    {
        id: 4,
        image: "/demo/c/c4.avif",
        name: "Hair Care"
    },
    {
        id: 1,
        image: "/demo/c/c1.jpg",
        name: "Eyes"
    },
    {
        id: 2,
        image: "/demo/c/c2.avif",
        name: "Hand Wash"
    },
    {
        id: 3,
        image: "/demo/c/c3.avif",
        name: "Nails"
    },
    {
        id: 4,
        image: "/demo/c/c4.avif",
        name: "Hair Care"
    },
    {
        id: 1,
        image: "/demo/c/c1.jpg",
        name: "Eyes"
    },
    {
        id: 2,
        image: "/demo/c/c2.avif",
        name: "Hand Wash"
    },
    {
        id: 2,
        image: "/demo/c/c2.avif",
        name: "Hand Wash"
    }

]

const MobileCategorieslist = () => {
    const { asPath, pathname } = useRouter()

    return (
        <Layout>
            <Head>
                <title>Cometics Center</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white">
                <div className="categorySection">
                    <div className="flex items-center p-2">
                        <h1 className="uppercase text-sm font-medium opacity-90">all categories</h1>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        <div className="w-full">
                            <span className="flex items-center gap-2 w-full">
                                <h1 className="uppercase text-xs font-medium whitespace-nowrap text-bgColor">Face & mackup</h1>
                                <hr className="w-full" />
                            </span>
                            <div className="mt-2 grid grid-cols-5 sm:grid-cols-6 gap-2">
                                {catData.map((item) => (
                                    <div key={item.id}>
                                        <CategoryCart item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full">
                            <span className="flex items-center gap-2 w-full">
                                <h1 className="uppercase text-xs font-medium whitespace-nowrap text-bgColor">Face & mackup</h1>
                                <hr className="w-full" />
                            </span>
                            <div className="mt-2 grid grid-cols-5 sm:grid-cols-6 gap-2">
                                {catData.map((item) => (
                                    <div key={item.id}>
                                        <CategoryCart item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full">
                            <span className="flex items-center gap-2 w-full">
                                <h1 className="uppercase text-xs font-medium whitespace-nowrap text-bgColor">Face & mackup</h1>
                                <hr className="w-full" />
                            </span>
                            <div className="mt-2 grid grid-cols-5 sm:grid-cols-6 gap-2">
                                {catData.map((item) => (
                                    <div key={item.id}>
                                        <CategoryCart item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trendingStoreSetion mt-2">
                    <div className="flex items-center gap-2 p-2">
                        <h1 className="uppercase text-sm font-medium opacity-90 whitespace-nowrap"> trending store</h1>
                        <hr className="w-full" />
                    </div>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-5 px-2">
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                        <VendorCart />
                    </div>
                </div>
            </div>

            <Bottom categoryPath={pathname} />
        </Layout>
    );
};

export default MobileCategorieslist;