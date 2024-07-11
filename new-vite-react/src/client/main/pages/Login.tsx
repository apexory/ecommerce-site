export default function Login() {
    return (
        <div className="flex justify-center mt-8">
            <div className="bg-card p-6 rounded-3xl lg:w-[40%]">
                <p className="text-2xl font-semibold">Login to your Account</p>
                <p className="text-base text-[#494848]">Welcome back to shooa.</p>

                <div className="flex flex-col mt-3 gap-5">
                    <div>
                        <p className="text-[#494848]">Login</p>
                        <input placeholder='myloginlogin' className="focus:outline-none focus:border-[#6F6E6E] transition mt-1 rounded-2xl py-3 px-4 w-full bg-transparent border-[1px] border-[#B6B5B5] font-normal" />
                    </div>
                    <div>
                        <p className="text-[#494848]">Password</p>
                        <input placeholder='12345678lol' className="focus:outline-none focus:border-[#6F6E6E] transition mt-1 rounded-2xl py-3 px-4 w-full bg-transparent border-[1px] border-[#B6B5B5] font-normal" />
                    </div>
                    <div className="flex mt-3 gap-3">
                        <div className="buttonT1 h-11 w-36"><a>Login</a></div>
                        <div className="buttonT2 h-11 w-32"><a>New User</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}