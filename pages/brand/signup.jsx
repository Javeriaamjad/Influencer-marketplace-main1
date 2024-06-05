
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
        role: "brand"
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
        console.log(userInfo);

        fetch("/api/auth/brands/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message, {
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
                        localStorage.setItem("user", JSON.stringify(data.token));
                    }
                    setTimeout(() => {
                        router.push("/brand/profilesetup");
                    }, 1000);
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
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-200 to-black-100 animate-gradient-x">
                <div className="bg-white bg-opacity-70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-gray-500 rounded-t-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-500 to-pink-500 rounded-b-3xl"></div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-8 text-center animate-fade-in-down">
                        Join as a Brand
                    </h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-full">
                        <input
                            onChange={handleChange}
                            id="username"
                            name="username"
                            type="text"
                            value={userInfo.username}
                            className="border-2 border-pink-400 shadow-sm p-3 rounded-lg outline-none focus:border-pink-600 w-full placeholder-gray-700 transition-transform transform duration-300 focus:scale-105"
                            placeholder="Username"
                        />
                        <input
                            onChange={handleChange}
                            id="text"
                            name="name"
                            type="text"
                            value={userInfo.name}
                            className="border-2 border-pink-400 shadow-sm p-3 rounded-lg outline-none focus:border-pink-600 w-full placeholder-gray-700 transition-transform transform duration-300 focus:scale-105"
                            placeholder="Full Name"
                        />
                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={userInfo.email}
                            className="border-2 border-pink-400 shadow-sm p-3 rounded-lg outline-none focus:border-pink-600 w-full placeholder-gray-700 transition-transform transform duration-300 focus:scale-105"
                            placeholder="Email address"
                        />
                        <input
                            onChange={handleChange}
                            required
                            id="password"
                            name="password"
                            type="password"
                            value={userInfo.password}
                            className="border-2 border-pink-400 shadow-sm p-3 rounded-lg outline-none focus:border-pink-600 w-full placeholder-gray-700 transition-transform transform duration-300 focus:scale-105"
                            placeholder="Password"
                            minLength={8}
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-pink-600 to-gray-200 text-white font-bold border-2 border-transparent p-3 rounded-lg hover:from-gray-200 hover:to-pink-600 hover:border-pink-700 transition-all duration-500 transform hover:scale-110 w-40"
                                style={{ fontSize: '120%' }}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-700 text-center">
                        Already have an account? <Link href="/login"><span className="text-pink-600 font-semibold cursor-pointer hover:text-pink-800 transition-colors">Sign in</span></Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-fade-in-down {
                    animation: fade-in-down 1s ease-out;
                }
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 15s ease infinite;
                }
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </> 

            
        );
    }

