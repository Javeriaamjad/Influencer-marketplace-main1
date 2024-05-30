// //pages/brand/signup.jsx
// import { useState, useEffect } from "react"
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Example() {
//     const router = useRouter();
//     const [userInfo, setUserInfo] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role:"brand"
//     })
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(userInfo)

//         fetch("/api/auth/brands/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Basic ${btoa("junaid:2002")}`,
//             },
//             body: JSON.stringify(userInfo),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 if (data.success) {
//                     toast.success(data.message, {
//                         position: "top-left",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                     });
//                     if (typeof window !== "undefined") {
//                         localStorage.setItem("user", JSON.stringify(data.token))
//                     }
//                     setTimeout(() => {
//                         router.push("/brand/profilesetup")
//                     }, 1000)
//                 } else {
//                     toast.error(data.error, {
//                         position: "top-left",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                     });
//                 }
//             }
//             )
//     }
  
//     return (
//         <> 
//          <ToastContainer
//             position="bottom-left"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//         />
//             {/* <Navbar /> */}
//             <div className="h-max text-center py-20">
//                 <h1 className="text-3xl font-semibold mt-10">
// join as a brand                </h1>

//                 <div className=" w-full ">
//                     <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">

                        
//                         <input
//                             onChange={handleChange}
//                             id="text"
//                             name="name"
//                             type="text"
//                             value={userInfo.name}
                         
//                             className="border-2 border-gray-300 p-2 rounded-lg"
//                             placeholder="Full Name"

//                         />
//                         <input
//                             onChange={handleChange}
//                             id="email"
//                             name="email"
//                             required
//                             type="email"
//                             value={userInfo.email}
//                             className="border-2 border-gray-300 p-2 rounded-lg"
//                             placeholder="Email address"
//                         />
//                         <input
//                             onChange={handleChange}
//                             required
//                             id="password"
//                             name="password"
//                             type="password"
//                             value={userInfo.password}
//                             className="border-2 border-gray-300 p-2 rounded-lg"
//                             placeholder="Password"
//                             minLength={8}
//                         />
//                         <button
//                             type="submit"
//                             className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
//                         >
//                             Sign up
//                         </button>
//                     </form>
//                     <div>
//                         <p className="text-sm text-gray-500">Already have an account? <Link href="/login"><span className="text-black cursor-pointer hover:text-gray-800">Sign in</span></Link></p>
//                     </div>

//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </>
//     )
// }

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
            <div className="h-screen flex justify-center items-center" style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.3c2ffe4cdced7bd922e37e5b21ff32e2?rik=kC2DYUkF6yAU%2bw&pid=ImgRaw&r=0")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'blur(70%)' }}>
                <div className="bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg w-2/5 flex flex-col items-center justify-center" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                    <h1 className="text-5xl font-semibold text-pink-900 mb-8 text-center">
                        Join as a Brand
                    </h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
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
                            className="border-2 border-pink-500 shadow-sm p-3 rounded-md outline-none focus:border-pink-700 w-67 placeholder-black"
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
};
