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
                        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
                             All Products</a>
                        <a href="/?category=Computers"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"/></svg>
                             Computers & Accessories</a>
                        <a href="/?category=Smartphones"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"/></svg>
                             Smartphones</a>
                        <a href="/?category=Headphones"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 11.943C20 7.562 16.424 4 12 4c-4.424 0-8 3.562-8 7.943c0 1.19.147 1.955.328 2.516c.122.372.413.005.557-.13a2.5 2.5 0 0 1 3.472.05c1.421 1.412 2.732 3.37.921 5.17c-.972.966-2.436 1.368-3.55.328c-1.438-1.344-2.687-2.908-3.302-4.8C2.17 14.283 2 13.304 2 11.942C2 6.445 6.483 2 12 2s10 4.445 10 9.943c0 1.362-.169 2.341-.426 3.133c-.615 1.893-1.864 3.457-3.302 4.8c-1.114 1.041-2.578.64-3.55-.327c-1.81-1.8-.5-3.758.92-5.17a2.5 2.5 0 0 1 3.473-.05c.277.26.414.57.557.13c.181-.56.328-1.327.328-2.516"/></g></svg>
                             Headphones</a>
                        <a href="/?category=Games"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M15.47 11.293a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m.707-2.121a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m3.535 2.121a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-3.535 2.121a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415M6 13H4v-2h2V9h2v2h2v2H8v2H6z"/><path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"/></g></svg>
                            Video Games</a>
                        <a href="/?category=TV"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"/></svg>
                             TV</a>
                        <a href="/?category=Speakers"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22H7q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v16q0 .825-.587 1.413T17 22m0-2V4H7v16zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17M7 4v16z"/></svg>
                             Speakers</a>
                        <a href="/?category=Smartwatches"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/><path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/></g></svg>
                             Smartwatches</a>
                        <a href="/?category=Camera"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"/></svg>
                             Camera & Photo</a>
                    </div>
                </div>
            </nav>

            <div className="fixed top-0 left-0 bg-[#000000b3] w-screen h-screen" id="darkness"></div>
        </header>
    )
}