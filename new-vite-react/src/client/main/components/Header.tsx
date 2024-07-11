import { Icon } from '@iconify-icon/react';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="flex justify-between py-1.5 px-7 bg-header font-medium text-sm">
                    <p>+7 123 456 78-90</p>
                    <div className="flex gap-5">
                        <div id="sort" className="relative flex justify-center">
                            <span className="cursor-pointer">English -</span>
                            <div id="sortMenu" className="opacity-0 absolute flex flex-col gap-3 mt-[35px] bg-[#E2E2E2] shadow-xl rounded-2xl 
                                 py-3 px-6 transition-all *:cursor-pointer z-[-1]">
                                <p>English</p>
                                <p>Русский</p>
                            </div>
                        </div>
        
                        <div id="sort" className="relative flex justify-center">
                            <span className="cursor-pointer">USD $ -</span>
                            <div id="sortMenu" className="opacity-0 absolute flex flex-col gap-3 mt-[35px] ml-[-30px] bg-[#E2E2E2] shadow-xl rounded-2xl 
                                 py-3 px-6 transition-all w-[130px] *:cursor-pointer z-[-1]">
                                <p>USD $</p>
                                <p>Рубли RUB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center flex-wrap py-3 px-11 bg-card">
                    <p className="font-semibold text-3xl">shooa v2.</p>
                    <div className="search relative w-[100%] py-3 flex items-center order-4 lg:order-none lg:w-[70%] z-10">
                        <svg className="absolute left-[30px] text-[25px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                        <input id="searchInput" className="rounded-3xl h-[50px] px-[70px] w-[100%] bg-transparent focus:outline-none border-[1px] border-[#C2C1C1] focus:border-[#646363] transition" placeholder="Search your favourite product.." />
                    </div>
                    <div className="flex text-3xl gap-3 *:text-[#4f4f4f] *:transition-all">
                        <a href="/login" className="hover:text-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/></svg></a>
                        <a href="/login" className="hover:text-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg></a>
                        <a href="/login" className="hover:text-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"/></svg></a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-8 bg-card font-semibold mt-[-24px] p-6">
                    <a aria-checked="true" href="/" className="aria-checked:text-active">Home</a>
                    <a id="electronics" className="aria-checked:text-active">Electronics</a>
                    <a href="/contact" className="aria-checked:text-active">Contact</a>
                </div>
                <div className="electronics flex relative justify-center">
                    <div className="absolute flex flex-col flex-wrap bg-[#ecebeb] rounded-3xl mt-[-14px] gap-5 py-5 px-7 shadow-xl 
                               *:flex *:gap-3 *:items-center">
                        <a href="/"><Icon icon="ic:round-clear-all" />All Products</a>
                        <a href="/?category=Computers"><Icon icon="material-symbols:computer-outline" />Computers & Accessories</a>
                        <a href="/?category=Smartphones"><Icon icon="material-symbols:smartphone" />Smartphones</a>
                        <a href="/?category=Headphones"><Icon icon="mingcute:headphone-fill" />Headphones</a>
                        <a href="/?category=Games"><Icon icon="mingcute:game-2-line" />Video Games</a>
                        <a href="/?category=TV"><Icon icon="material-symbols:tv-outline" />TV</a>
                        <a href="/?category=Speakers"><Icon icon="material-symbols:speaker-outline" />Speakers</a>
                        <a href="/?category=Smartwatches"><Icon icon="bi:smartwatch" />Smartwatches</a>
                        <a href="/?category=Camera"><Icon icon="tabler:camera" />Camera & Photo</a>
                    </div>
                </div>
            </nav>

            <div className="fixed top-0 left-0 bg-[#000000b3] w-screen h-screen" id="darkness"></div>
        </header>
    )
}