import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import TextShine from "@/components/TextShine";
import Image from "next/image";

import styles from "./Navbar.module.css";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("Explore");
  const [status, setStatus] = useState(false); 
  const [userInfo, setUserInfo] = useState([]); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const [userRole, setUserRole] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        const token = storedUserData.token;

        const response = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.json();
        if (response.ok) {
          setUserRole(responseData.role);
          setStatus(true); // Update login status
        } else {
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
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        const token = storedUserData.token;

        const response = await fetch("/api/creator/creator", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.json();
        if (response.ok) {
          setUserInfo(responseData.user);
        } else {
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
      return "/brand/profilesetup";
    } else if (userRole === "creator") {
      return "/creator/profilesetuppp";
    } else {
      return "/";
    }
  };

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-lg">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-4">
          <Link href="/" className="flex z-40 font-bold items-center gap-x-2">
            <img src="/assets/influ.png" width={100} height={120} className="rounded-full shadow-md" /> 
             {/* <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>  */}
            {/* <span className="text-xl">INFLUENZAR</span> */}
          </Link>

          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/explore" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Explore")}>
              Explore {menu === "Explore" ? <hr className="border-b-2 border-pink-500" /> : null}
            </Link>
            <Link href="/#howitworks" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("How It Works")}>
              How It Works {menu === "How It Works" ? <hr className="border-b-2 border-pink-500" /> : null}
            </Link>
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Login")}>
              Login {menu === "Login" ? <hr className="border-b-2 border-pink-500" /> : null}
            </Link>
            <Link href="/brand/signup" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <TextShine text={"Join as Brand"} />
            </Link>
            <Link href="/creator/signup" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <TextShine text={"Join as Creator"} />
            </Link>
            {status && (
              <>
                <Link href={userProfileSetupLink()} className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Profile")}>
                  {userInfo.profileImage ? (
                    <Image src={userInfo.profileImage} width={40} height={40} alt="Profile Image" className="rounded-full shadow-md" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  )}
                  {menu === "Profile" ? <hr className="border-b-2 border-pink-500" /> : null}
                </Link>
                <button className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

<style jsx>{`
  .textShine {
    background: linear-gradient(to right, #f72585, #b5179e, #7209b7, #560bad, #480ca8);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: shine 2s linear infinite;
  }

  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>


/*import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import TextShine from "@/components/TextShine";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("Explore");
  const [userInfo, setUserinfo] = useState(null); // Initialize as null to represent no user
  const [userRole, setUserRole] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        if (!storedUserData) {
          setUserinfo(null); // Set to null if no user data found
          return;
        }

        const token = storedUserData.token;
        const response = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.json();
        if (response.ok) {
          setUserinfo(responseData.user);
          setUserRole(responseData.user.role);
        } else {
          console.error("Error fetching user data:", responseData.error);
          setUserinfo(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserinfo(null);
      }
    };

    fetchUserData();
  }, []);

  const userProfileSetupLink = () => {
    if (userRole === "brand") {
      return "/brand/profilesetup";
    } else if (userRole === "creator") {
      return "/creator/profilesetuppp";
    } else {
      return "/";
    }
  };

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 backdrop-blur-lg shadow-lg">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex z-40 font-bold items-center gap-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            <span className="text-xl text-white animate-gradient-text">INFLUENZAR</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/explore" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Explore")}>
              Explore {menu === "Explore" ? <hr className="border-b-2 border-white" /> : null}
            </Link>
            <Link href="/#howitworks" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("How It Works")}>
              How It Works {menu === "How It Works" ? <hr className="border-b-2 border-white" /> : null}
            </Link>
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Login")}>
              Login {menu === "Login" ? <hr className="border-b-2 border-white" /> : null}
            </Link>
            <Link href="/brand/signup" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <TextShine text={"Join as Brand"} />
            </Link>
            <Link href="/creator/signup" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <TextShine text={"Join as Creator"} />
            </Link>
            {userInfo && (
              <Link href={userProfileSetupLink()} className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={() => setMenu("Profile")}>
                {userInfo.profileImage ? (
                  <Image src={userInfo.profileImage} width={40} height={40} alt="Profile Image" className="rounded-full shadow-md" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                )}
                {menu === "Profile" ? <hr className="border-b-2 border-white" /> : null}
              </Link>
            )}
            {userInfo && (
              <button className={buttonVariants({ variant: "ghost", size: "sm" })} onClick={handleLogout}>
                <FiLogOut className="text-white" size={20} />
              </button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>

      <style jsx>{`
        .animate-gradient-text {
          background: linear-gradient(to right, #f72585, #b5179e, #7209b7, #560bad, #480ca8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
*/