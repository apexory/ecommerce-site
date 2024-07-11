import image from '../public/img/toppng 3.png';

export default function Cart() {
    return (
        <div className="flex flex-col gap-3 justify-center mt-8 px-2 lg:flex-row">
            <div className="bg-card p-5 rounded-3xl order-last lg:order-first">
                <p className="text-2xl font-semibold">Your Shopping Cart</p>
                <p className="text-base text-[#494848] font-normal">Let's see what's on the shopping list</p>

                <div className="flex flex-col mt-5">
                    <div className="flex flex-col justify-center py-3.5 px-4 bg-item rounded-3xl lg:flex-row lg:justify-between">
                        <div className="flex gap-7">
                            <div className="flex gap-1">
                                <img className="h-20 lg:h-24" src={ image } />
                                <div className="flex flex-col justify-center">
                                    <p className="text-[#444444] font-normal text-xs lg:text-sm">Smartphone</p>
                                    <p className="font-medium text-sm lg:text-lg">Smartphone</p>
                                    <p className="font-medium text-sm lg:text-lg">$1234.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-3 lg:gap-[25px]">
                                <div className="flex gap-1 *:h-7 *:w-7 *:lg:h-9 *:lg:w-9">
                                    <div className="buttonT2"><a>-</a></div>
                                    <div className="buttonT1"><a>1</a></div>
                                    <div className="buttonT2"><a>+</a></div>
                                </div>
                                <div className="buttonT2 h-7 w-7 lg:h-9 lg:w-9">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-card p-6 rounded-3xl order-first lg:order-last">
                <p className="text-2xl font-semibold">Order Summary</p>
                <p className="text-base text-[#494848] font-normal">It's time to pay</p>

                <div className="bg-[#E2E2E2] rounded-t-3xl p-5 font-normal mt-5 h-32">
                    <div className="flex flex-col justify-center items-center px-3">
                        <p>Products<span className="text-[#B5B5B5]">..........................</span>$1199</p>
                        <p>Shipping<span className="text-[#B5B5B5]">................................</span>$0</p>
                    </div>
                </div>
                <div className="bg-[#2D2D2D] rounded-3xl p-5 font-normal h-32 text-white mt-[-25px]">
                    <div className="flex flex-col justify-between px-3 items-center">
                        <p>Total<span className="text-[#B5B5B5]">....................................</span>$1199</p>
                        <a className="hover:bg-[#dcdcdc] transition-all cursor-pointer bg-white text-black py-2 px-12 rounded-xl mt-6">Checkout</a>
                    </div>
                </div>

            </div>
        </div>
    )
}