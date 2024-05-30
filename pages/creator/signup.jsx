
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Example() {
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        role: "creator",
        username: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userinfo", userInfo);

        fetch("/api/auth/Creators/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("api", data);
                if (data.success) {
                    fetch("/api/creator/profileupdate", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userInfo),
                    }).then((res) => res.json())
                        .then((dat) => {
                            if (dat.success) {
                                toast.success(dat.message, {
                                    position: "top-left",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });

                                if (typeof window !== "undefined") {
                                    console.log("signup", data);
                                    localStorage.setItem("user", JSON.stringify(data));
                                }
                            } else {
                                toast.error(dat.error, {
                                    position: "top-left",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }
                        });
                } else {
                    toast.error(data.error, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                router.push("/creator/profilesetup");
            });
    };

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="h-screen flex justify-center items-center" style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.3c2ffe4cdced7bd922e37e5b21ff32e2?rik=kC2DYUkF6yAU%2bw&pid=ImgRaw&r=0")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'blur(70%)' }}>
                <div className="bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg w-2/5 flex flex-col items-center justify-center" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                    <h1 className="text-5xl font-semibold text-pink-900 mb-8 text-center">
                        Join as a Creator
                    </h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                        <input
                            onChange={handleChange}
                            id="username"
                            name="username"
                            type="text"
                            value={userInfo.username}
                            className="border-2 border-pink-500 shadow-sm p-3 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                            placeholder="Username"
                        />
                        <input
                            onChange={handleChange}
                            id="text"
                            name="name"
                            type="text"
                            value={userInfo.name}
                            className="border-2 border-pink-500 shadow-sm p-3 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                            placeholder="Full Name"
                        />
                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={userInfo.email}
                            className="border-2 border-pink-500 shadow-sm p-3 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                            placeholder="Email address"
                        />
                        <input
                            onChange={handleChange}
                            required
                            id="password"
                            name="password"
                            type="password"
                            value={userInfo.password}
                            className="border-2 border-pink-500 shadow-sm p-3 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                            placeholder="Password"
                            minLength={8}
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-black border-2 border-pink-700 p-3 rounded-md hover:bg-pink-600 hover:text-white transition-all w-40"
                                style={{ fontSize: '120%' }}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-500 text-center">
                        Already have an account? <Link href="/login"><span className="text-black cursor-pointer hover:text-gray-800">Sign in</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}