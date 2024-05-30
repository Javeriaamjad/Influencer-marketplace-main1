
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Example() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setToken(JSON.parse(userToken).token);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Login Success", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          localStorage.setItem("user", JSON.stringify({
            email: data.email,
            role: data.role,
            token: data.token,
          }));
          setTimeout(() => {
            if (data.role === "brand") {
              router.push("/brand");
            } else if (data.role === "creator") {
              router.push("/creator");
            } else {
              router.push("/");
            }
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
            Login
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full items-center">
            <div className="flex justify-center w-full">
              <Input
                onChange={handleChange}
                id="email"
                name="email"
                required
                type="email"
                value={userInfo.email}
                className="border-2 border-pink-500 shadow-sm p-4 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                placeholder="Email address"
                style={{ height: '100%' }}
              />
            </div>
            <div className="flex justify-center w-full">
              <Input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                value={userInfo.password}
                className="border-2 border-pink-500 shadow-sm p-4 rounded-md outline-none focus:border-pink-700 w-64 placeholder-black"
                placeholder="Password"
                style={{ height: '100%' }}
              />
            </div>
            <Link href="/forgot" className="flex justify-center w-full">
              <p className="text-blue-500 hover:underline">Forgot Password?</p>
            </Link>
            <div className="flex justify-center w-full">
              <Button
                type="submit"
                className="bg-pink-500 text-black border-2 border-pink-700 p-3 rounded-md hover:bg-pink-600 hover:text-white transition-all w-40"
                style={{ fontSize: '120%', height: '100%' }}
              >
                Login
              </Button>
            </div>
          </form>
          <div>
            <p className="text-sm text-gray-500">
              Don&#39;t have an account? Sign Up {" "}
              <Link href="/brand/signup">
              <span>As a </span>
                <span className="text-blue-500 hover:underline">Brand {" "}</span>
              </Link>
              <Link href="/creator/signup">
              
              <span className="text-blue-500 hover:underline">Creator</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}