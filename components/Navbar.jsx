// import Link from "next/link";

// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { buttonVariants } from "./ui/button";
// import TextShine from "@/components/TextShine";
// import { useState } from "react";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//     const [Menu,setMenu]= useState("Explore");
//   return (
//     <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
//       <MaxWidthWrapper>

//         <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
//           <Link href='/' className='flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md'>
//             <div className='h-5 w-5 bg-black'></div>
//             <span>INFLUENZAR</span>
//           </Link>

//           <div className="hidden items-center space-x-4 sm:flex">
//             <Link
//               href="/explore"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//               onClick={()=>{setMenu("How It Works")}}
//             >
//               Explore {Menu==='Explore'?<hr/>:<></>}
//             </Link>
//             <Link

//               href="./creator/profilesetup"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//               onClick={()=>{setMenu("profile")}}
//             >
//               profile {Menu==='How It Works'?<hr/>:<></>}
//             </Link>
//             <Link
//               href="/#howitworks"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//               onClick={()=>{setMenu("How It Works")}}
//             >
//               How It Works {Menu==='How It Works'?<hr/>:<></>}
//             </Link>
//             <Link
//               href="/login"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//               onClick={()=>{setMenu("How It Works")}}
//             >
//               Login {Menu==='Login'?<hr/>:<></>}
//             </Link>
//             <Link
//               href="/brand/signup"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}

//             >
//               <TextShine text={"Join as Brand"} />
//             </Link>

//             <Link
//               href="/creator/signup"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}

//             >
//               <TextShine text={"Join as Creator"} />
//             </Link>
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </nav>
//   );
// };

// export default Navbar;

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import TextShine from "@/components/TextShine";
import Image from "next/image";
import styles from "./Navbar.module.css";
import jwt_decode from "jwt-decode";

// Rest of the component code

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("Explore");
  const [userInfo, setUserinfo] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");

    router.push("/login");
  };
  // Logic to determine profile setup link based on user's role
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        const token = storedUserData.token;

        console.log("storedUserData", token);
        const response = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.json(); // Parse response JSON

        console.log("Response data:", responseData); // Log response data
        if (response.ok) {
          setUserRole(responseData.role);
        } else {
          // Handle non-successful response (e.g., 404, 401)
          console.error("Error fetching user data:", responseData.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
 

  const handleProfileImage = async (email, image) => {
    await fetch("/api/creator/profileImageupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        profileImage: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        const token = storedUserData.token;

        console.log("storedUserData", token);
        const response = await fetch("/api/creator/creator", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.json(); // Parse response JSON
        console.log("Response data:", responseData); // Log response data
        if (response.ok) {
          setUserinfo(responseData.user);
        } else {
          // Handle non-successful response (e.g., 404, 401)
          console.error("Error fetching user data:", responseData.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const userProfileSetupLink = () => {
    if (userRole === "brand") {
      console.log("hell if runs");
      return "/brand/profilesetup";
    } else if (userRole === "creator") {
      console.log("hell if else runs");
      return "/creator/profilesetuppp";
    } else {
      return "/";
    }
  };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md"
          >
            <div className="h-5 w-5 bg-black"></div>
            <span>INFLUENZAR</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/explore"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => setMenu("Explore")}
            >
              Explore {menu === "Explore" ? <hr /> : <></>}
            </Link>
          

            <Link
              href="/#howitworks"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => setMenu("How It Works")}
            >
              How It Works {menu === "How It Works" ? <hr /> : <></>}
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => {
                setMenu("How It Works");
              }}
            >
              Login {menu === "Login" ? <hr /> : <></>}
            </Link>
            <Link
              href="/brand/signup"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <TextShine text={"Join as Brand"} />
            </Link>

            <Link
              href="/creator/signup"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <TextShine text={"Join as Creator"} />
            </Link>
            <div>
              <Link
                href={userProfileSetupLink()}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
                onClick={() => setMenu("Profile")}
              >
                <Image
                  src={userInfo ? userInfo.profileImage : ""}
                  width={200}
                  height={200}
                  alt=""
                  className="w-20 h-20 object-cover  mx-auto my-5 bg-gray-300"
                />
                {menu === "Profile" ? <hr /> : <></>}
              </Link>
            </div>
            <button
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
