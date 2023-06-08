import React from 'react'

const Featured = () => {
    return (
        <div className='mt-4 hidden md:block'>
            <div class="px-6 bg-white p-2">
                <div class="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-center">
                    <div class="border flex justify-center items-center gap-5 bg-white py-4 shadow-lg">
                        <picture>
                            <img src="/SVG/shipping.svg" class="w-12 h-12 object-contain" alt="" />
                        </picture>
                        <div>
                            <h4 class="font-medium capitalize text-lg">Free Shopping</h4>
                            <p class="text-five text-sm">Order over $200</p>
                        </div>
                    </div>

                    <div class="border border-praimary flex justify-center items-center gap-5  bg-white py-4 shadow-lg">
                        <picture>
                            <img src="/SVG/money.svg" class="w-12 h-12 object-contain" alt="" />
                        </picture>
                        <div>
                            <h4 class="font-medium capitalize text-lg">Money returns</h4>
                            <p class="text-five text-sm">30 Days money returns</p>
                        </div>
                    </div>
                    <div class="border border-praimary flex justify-center items-center gap-5  bg-white py-4 shadow-lg">
                        <picture>
                            <img src="/SVG/support.svg" class="w-12 h-12 object-contain" alt="" />
                        </picture>
                        <div>
                            <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                            <p class="text-five text-sm">Customer Support</p>
                        </div>
                    </div>
                    <div class="border border-praimary flex justify-center items-center gap-5  bg-white py-4 shadow-lg">
                        <picture>
                            <img src="/SVG/payment.svg" class="w-12 h-12 object-contain" alt="" />
                        </picture>
                        <div>
                            <h4 class="font-medium capitalize text-lg">Securre Payment</h4>
                            <p class="text-five text-sm">We ensure secure payment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured
