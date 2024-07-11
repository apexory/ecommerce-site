import { useEffect, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import axios from 'axios';

import image from '../public/img/toppng 3.png';

export default function Home() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        let response = await axios.get('/products')
        setProducts(response.data)
    }
    useEffect(() => { getProducts() }, [])

    return (
        <div className="grid gap-5 px-6 py-4 lg:px-12 grid-cols-12">
            <div className="flex flex-col items-center gap-5 py-4 rounded-3xl w-12 text-xl bg-card
                        *:relative *:flex *:items-center *:cursor-pointer
                        lg:text-2xl lg:w-16 lg:order-first">
                <div className="group">
                    <Icon icon="ic:round-clear-all" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">All Products</p>
                </div>
                <div className="group">
                    <Icon icon="material-symbols:computer-outline" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Computers & Accessories</p>
                </div>
                <div className="group">
                    <Icon icon="material-symbols:smartphone" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Smartphones</p>
                </div>
                <div className="group">
                    <Icon icon="mingcute:headphone-fill" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Headphones</p>
                </div>
                <div className="group">
                    <Icon icon="mingcute:game-2-line" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Video Games</p>
                </div>
                <div className="group">
                    <Icon icon="material-symbols:tv-outline" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">TV</p>
                </div>
                <div className="group">
                    <Icon icon="material-symbols:speaker-outline" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Speakers</p>
                </div>
                <div className="group">
                    <Icon icon="bi:smartwatch" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Smartwatches</p>
                </div>
                <div className="group">
                    <Icon icon="tabler:camera" />
                    <p className="group-hover:opacity-100 hover:hidden transition absolute left-14 w-max bg-card shadow rounded-xl text-sm py-2 px-5 opacity-0 lg:text-base">Camera & Photo</p>
                </div>
            </div>

            <div className="flex p-4 h-32 rounded-3xl justify-center items-center bg-card col-span-12 order-first lg:col-span-11 lg:h-40">
                <p className="text-3xl font-normal lg:text-5xl">Advertisement.</p>
            </div>

            <div className="flex flex-col gap-8 p-6 rounded-3xl bg-card col-start-2 col-span-11 ml-[2.5em] lg:mt-[-15em] lg:ml-[0em]">
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
                        { products.length >= 1 && (
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
                        ) || (
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-xl font-medium">Oops!</p>
                                <p className="w-80 text-center">It looks like there are no products. If you are an administrator, then it's time to add them.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}