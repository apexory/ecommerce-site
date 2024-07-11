import image from '../public/img/toppng 3.png';

export default function Product() {
    return (
        <div className="flex flex-col gap-3 justify-center p-4 lg:flex-row lg:p-8">
            <div className="flex justify-center bg-card p-4 rounded-3xl h-max">
                <img className="lg:h-60" src={ image } />
            </div>

            <div className="flex flex-col bg-card p-6 rounded-3xl">

                <div className="flex flex-col gap-1">
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                            <p className="text-[#444444] font-normal text-xs lg:text-sm">Smartphone</p>
                            <p className="bg-[#FFF] rounded-[8px] px-[4px] py-[3.5px]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg></p>
                        </div>
                        <p className="font-medium text-sm lg:text-2xl">Smartphone</p>
                        <p className="font-medium text-sm lg:text-xl">$1234.00</p>
                    </div>

                    <div>
                        <p className="text-sm mt-5 text-[#313030] lg:w-[500px]">Universal ultraUniversal ultraUniversal ultraUniversal ultraUniversalultraUniversal ultraUniversalultraUniversal ultraUniversal ultraUniversal ultra </p>
                    </div>

                    <div className="flex mt-5 justify-between items-center">
                        <div className="buttonT1 h-7 w-24 font-normal text-[13px] lg:h-9 lg:w-32"><a>Add to Cart</a></div>
                        <div className="flex gap-1 *:h-7 *:w-7 *:lg:h-9 *:lg:w-9">
                            <div className="buttonT2"><a>-</a></div>
                            <div className="buttonT1"><a>1</a></div>
                            <div className="buttonT2"><a>+</a></div>
                        </div>
                        <div className="flex gap-1 *:h-7 *:w-7 *:lg:h-9 *:lg:w-9">
                            <a className="rounded-[10px] bg-[#FFF] border-[1px] border-[#D6D6D6] text-[#FFF]">.</a>
                            <a className="rounded-[10px] bg-[#6385FF] border-[1px] border-[#D6D6D6] text-[#6385FF]">.</a>
                            <a className="rounded-[10px] bg-[#E7E7E7] border-[1px] border-[#D6D6D6] text-[#E7E7E7]">.</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}