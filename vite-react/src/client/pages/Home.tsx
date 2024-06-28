import image from '../public/img/toppng 3.png';

export default function Home() {
    return (
        <div className="grid gap-5 px-6 py-4 lg:px-12 grid-cols-12">
            <div className="flex flex-col items-center gap-5 py-4 rounded-3xl w-12 text-xl bg-card
                        *:relative *:flex *:items-center *:cursor-pointer
                        lg:text-2xl lg:w-16 lg:order-first">
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h12M6 12h12M4 18h12"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Popular Products</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">All Products</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Computers & Accessories</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Smartphones</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 11.943C20 7.562 16.424 4 12 4c-4.424 0-8 3.562-8 7.943c0 1.19.147 1.955.328 2.516c.122.372.413.005.557-.13a2.5 2.5 0 0 1 3.472.05c1.421 1.412 2.732 3.37.921 5.17c-.972.966-2.436 1.368-3.55.328c-1.438-1.344-2.687-2.908-3.302-4.8C2.17 14.283 2 13.304 2 11.942C2 6.445 6.483 2 12 2s10 4.445 10 9.943c0 1.362-.169 2.341-.426 3.133c-.615 1.893-1.864 3.457-3.302 4.8c-1.114 1.041-2.578.64-3.55-.327c-1.81-1.8-.5-3.758.92-5.17a2.5 2.5 0 0 1 3.473-.05c.277.26.414.57.557.13c.181-.56.328-1.327.328-2.516"/></g></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Headphones</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M15.47 11.293a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m.707-2.121a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m3.535 2.121a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-3.535 2.121a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415M6 13H4v-2h2V9h2v2h2v2H8v2H6z"/><path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"/></g></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Video Games</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2zm-4-4h16V5H4zm0 0V5z"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">TV</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22H7q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v16q0 .825-.587 1.413T17 22m0-2V4H7v16zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17M7 4v16z"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Speakers</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/><path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/></g></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Smartwatches</p>
                </div>
                <div className="group">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"/></svg></a>
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Camera & Photo</p>
                </div>
            </div>

            <div className="flex p-4 h-32 rounded-3xl justify-center items-center bg-card col-span-12 order-first lg:col-span-11 lg:h-40">
                <p className="text-3xl font-normal lg:text-5xl">Advertisement.</p>
            </div>

            <div className="flex flex-col gap-8 p-6 rounded-3xl bg-card col-start-2 col-span-11 ml-[2.5em] lg:mt-[-18em] lg:ml-[0em]">
                <div className="flex justify-between items-center">
                    <p className="text-3xl font-medium w-32 leading-8 lg:w-96">Popular Products <span className="font-normal text-sm">(109 products)</span></p>
                    <div className="bg-[#E2E2E2] rounded p-1 border-[1px] lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M6 9.5A2 2 0 0 1 7.937 11H13.5a.5.5 0 0 1 .09.992L13.5 12l-5.563.001a2 2 0 0 1-3.874 0L2.5 12a.5.5 0 0 1-.09-.992L2.5 11h1.563A2 2 0 0 1 6 9.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4-8A2 2 0 0 1 11.937 4H13.5a.5.5 0 0 1 .09.992L13.5 5l-1.563.001a2 2 0 0 1-3.874 0L2.5 5a.5.5 0 0 1-.09-.992L2.5 4h5.563A2 2 0 0 1 10 2.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg></div>
                    <div className="gap-5 items-center hidden lg:flex">
                        <p className="text-[#494848]">Sort by:</p>
                        <div id="sort" className="relative flex justify-center">
                            <span className="hover:bg-[#d4d4d4] bg-[#E2E2E2] transition-all py-2 px-6 rounded-2xl w-[210px] text-center cursor-pointer">Featured products -</span>
                            <div id="sortMenu" className="opacity-0 absolute flex flex-col gap-3 mt-[50px] bg-[#E2E2E2] shadow-xl rounded-2xl 
                                py-3 px-6 transition-all z-[-1] *:cursor-pointer">
                                <p>Featured products</p>
                                <p>Best products</p>
                                <p>New products</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-14 items-center">
                    <div className="w-44 hidden lg:block">
                        <p className="font-normal text-xl h-9">Did you know?</p>
                        <p className="font-normal text-base text-[#494848]">You can add up to hundreds of products and pay for them in one order.</p>
                    </div>

                    <div className="flex flex-col w-full lg:w-[85%]">
                        <div className="flex flex-col justify-center py-3.5 px-4 bg-item rounded-3xl lg:flex-row lg:justify-between">
                            <div className="flex gap-1">
                                <img className="h-20 lg:h-32" src={ image } />
                                <div className="flex flex-col justify-center">
                                    <p className="text-[#444444] font-normal text-xs lg:text-sm">Smartphone</p>
                                    <p className="font-medium text-sm lg:text-xl">Smartphone</p>
                                    <p className="font-medium text-sm lg:text-xl">$1234.00</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 px-3 lg:ml-12 lg:w-72">
                                <p className="font-light text-[12px] lg:text-[16px]">6.7”, A17 Pro, 8GB, 256GB/512GB/1TB, 48MP, 12MP and more...</p>
                            </div>
                            <div className="flex justify-between items-center px-3 mt-3 lg:justify-normal lg:mt-0 lg:gap-3">
                                <div className="buttonT1 text-sm h-8 w-28 lg:h-11 lg:w-36 lg:text-base"><a>Add to Cart</a></div>
                                <div className="buttonT2 h-8 w-8 lg:h-11 lg:w-11"><a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#000" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}