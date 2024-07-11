import image from '../public/img/toppng 3.png';

export default function Wishlist() {
    return (
        <div className="flex justify-center p-8">
            <div className="bg-card p-6 rounded-3xl">
                <p className="text-2xl font-semibold">Your Wishlist</p>
                <p className="text-base text-[#494848]">Did you like the product? Add it to your favorites!</p>

                <div className="flex flex-col mt-5">
                    <div className="flex flex-col py-3.5 px-4 bg-item rounded-3xl lg:flex-row lg:justify-between lg:gap-10">
                        <div className="flex gap-1">
                            <img className="h-20 lg:h-32" src={ image } />
                            <div className="flex flex-col justify-center">
                                <p className="text-[#444444] font-normal text-xs lg:text-sm">Smartphone</p>
                                <p className="font-medium text-sm lg:text-xl">Smartphone</p>
                                <p className="font-medium text-sm lg:text-xl">$1234.00</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-3 mt-3 lg:justify-normal lg:mt-0 lg:gap-3">
                            <div className="buttonT1 text-sm h-8 w-28 lg:h-10 lg:w-36 lg:text-base"><a>Add to Cart</a></div>
                            <div className="buttonT2 h-8 w-8 lg:h-10 lg:w-10"><a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"/></svg></a></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            )
}