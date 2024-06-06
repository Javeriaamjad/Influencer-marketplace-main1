import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession, signIn } from "next-auth/react";

export default function Example() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const { data } = useSession();
  console.log({ data });
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
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: data.email,
              role: data.role,
              token: data.token,
            })
          );
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
      <div
        className="relative h-screen flex justify-center items-center"
        style={{
          backgroundImage: 'url("purple.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Colorful circles */}
        <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-75"></div>

        <div className="absolute top-20 left-44 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-75"></div>
        <div className="absolute top-32 right-24 w-56 h-56 bg-gradient-to-r from-purple-400 to-pink-200 rounded-full opacity-75"></div>
        <div className="absolute bottom-24 left-16 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75"></div>
        <div className="absolute bottom-45 left-26 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75"></div>
        <div className="absolute bottom-20 right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-75"></div>

        <div
          className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center justify-center relative z-10"
          style={{
            boxShadow: "10px 10px 4px 6px pink",
            borderRadius: "20px",
            width: "400px",
          }}
        >
          <h1 className="text-4xl font-semibold text-pink-700 mb-8 text-center animate-fade-in-down">
            LOGIN
          </h1>

          <button onClick={() => signIn()}> Login For Chat App </button>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 w-full items-center"
          >
            <div className="flex justify-center w-full">
              <Input
                onChange={handleChange}
                id="email"
                name="email"
                required
                type="email"
                value={userInfo.email}
                className="border-b-2 border-gray-300 focus:border-gray-500 w-full p-2"
                placeholder="Email"
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
                className="border-b-2 border-gray-300 focus:border-gray-500 w-full p-2"
                placeholder="Password"
              />
            </div>
            <Link
              href="/forgot"
              className="flex justify-center w-full text-sm text-gray-500 mt-2"
            >
              <p className="hover:underline">Forgot your password?</p>
            </Link>
            <div className="flex justify-between w-full mt-8">
              <Button
                className="bg-pink-600 text-white py-2 px-4  hover:bg-purple-700 transition-all w-full"
                style={{ fontSize: "16px" }}
              >
                Register
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4  hover:bg-pink-700 transition-all w-full"
                style={{ fontSize: "16px" }}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
