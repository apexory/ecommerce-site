export default function Contact() {
    return (
        <div className="flex flex-col gap-3 items-center justify-center mt-8 px-2 lg:flex-row lg:gap-0 lg:ml-5">
            <div className="bg-card p-5 rounded-3xl h-min w-[300px] shadow-2xl">
                <p className="text-2xl font-semibold">Contact us</p>
                <p className="text-base text-[#494848]">Do you want to contact us?</p>
                <div className="flex flex-col mt-5 gap-3">
                    <div>
                        <div className="flex items-center">
                            <svg className="text-xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>
                            <p className="text-xl ml-4 font-semibold">E-Mail</p>
                        </div>
                        <p className="text-[#494848]">email@email.email</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"/></svg>
                            <p className="text-xl ml-4 font-semibold">Telephone</p>
                        </div>
                        <p className="text-[#494848]">+7 123 456-78-90</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"/></svg>
                            <p className="text-xl ml-4 font-semibold">Address</p>
                        </div>
                        <p className="text-[#494848]">shooa street, idk home</p>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#313030] p-5 rounded-3xl text-white shadow-2xl lg:right-5">
                <p className="text-2xl font-semibold">Alternative</p>
                <p className="text-base text-[#C1C1C1]">You can write a message directly. We will notify you as soon as we respond.</p>
                <div className="flex flex-col gap-3 mt-3">
                    <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-0">
                        <div>
                            <p className="font-normal">Your Name</p>
                            <input className="bg-transparent border-[1px] border-[#6F6E6E] rounded-2xl mt-1 py-2 px-3
                                        focus:outline-none focus:border-[#d6d6d6] transition font-normal w-full lg:w-auto" />
                        </div>
                        <div>
                            <p className="font-normal">Your E-Mail</p>
                            <input className="bg-transparent border-[1px] border-[#6F6E6E] rounded-2xl mt-1 py-2 px-3
                                        focus:outline-none focus:border-[#d6d6d6] transition font-normal w-full lg:w-80" />
                        </div> 
                    </div>
                    <div>
                        <p className="font-normal">Message</p>
                        <textarea className="bg-transparent border-[1px] border-[#6F6E6E] rounded-2xl mt-1 py-2 px-3
                        focus:outline-none focus:border-[#d6d6d6] transition font-normal w-full"></textarea>
                    </div> 
                    <div className="flex justify-center">
                        <a className="hover:bg-[#dcdcdc] transition-all cursor-pointer bg-white text-black py-2 px-12 rounded-xl mt-2">Send a message</a>
                    </div>
                </div>
            </div>
        </div>
    )
}