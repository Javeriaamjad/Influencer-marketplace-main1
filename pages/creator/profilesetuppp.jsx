
// import { UploadButton } from "@/utils/uploadthing";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Example() {
//   const [userinfo, setUserinfo] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     profileImage: "",
//     bannerImage: "",
//     phone: "",
//     city: "",
//     state: "",
//     category: [],
//     description: "",
//     platforms: [
//       { platform: "instagram", followers: "", profile: "" },
//       { platform: "youtube", followers: "", profile: "" },
//     ],
//     packages: [
//       {
//         platform: "instagram",
//         followers: "1000",
//         price: "1000",
//         title: "Sample Package",
//         description: "I will post your product on my Instagram",
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;
//         const response = await fetch("/api/creator/creator", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const responseData = await response.json();
//         if (response.ok) {
//           setUserinfo(responseData.user);
//         } else {
//           console.error("Error fetching user data:", responseData.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleProfileImage = async (email, image) => {
//     await fetch("/api/creator/profileImageupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, profileImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleBannerImage = async (email, image) => {
//     await fetch("/api/creator/bannerimage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, bannerImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePersonalInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/profileupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         name: userinfo.name,
//         phone: userinfo.phone,
//         city: userinfo.city,
//         state: userinfo.state,
//         description: userinfo.description,
//         category: userinfo.category,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleContentInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addcontentinfo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         category: userinfo.category,
//         description: userinfo.description,
//         platforms: userinfo.platforms,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePackagesInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addpackage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: userinfo.email, packages: userinfo.packages }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleUsernameChange = (e) => {
//     setUserinfo({ ...userinfo, username: e.target.value });
//   };

//   const handleProfileMedia = async (email, mediaType, media) => {
//     await fetch("/api/creator/Videocontent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, Video: media }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="space-y-6 p-10">
//         <div className="px-4 py-5 sm:rounded-lg sm:p-6">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 Use a permanent address where you can receive mail.
//               </p>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <div className="w-full block gap-5 items-center justify-between px-20">
//                 <Image
//                   src={userinfo.bannerImage || ""}
//                   width={800}
//                   height={200}
//                   alt=""
//                   className="w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300"
//                 />
//                 <UploadButton
//                   endpoint="imageUploader"
//                   onClientUploadComplete={async (res) => {
//                     await handleBannerImage(userinfo.email, res[0].fileUrl);
//                     setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
//                   }}
//                   onUploadError={(error) => {
//                     alert(`ERROR! ${error.message}`);
//                   }}
//                 />
//               </div>
//               <div className="w-full block gap-5 items-center justify-between px-20">
//                 <Image
//                   src={userinfo.profileImage || ""}
//                   width={200}
//                   height={200}
//                   alt=""
//                   className="w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300"
//                 />
//                 <UploadButton
//                   endpoint="imageUploader"
//                   onClientUploadComplete={(res) => {
//                     handleProfileImage(userinfo.email, res[0].fileUrl);
//                     setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
//                   }}
//                   onUploadError={(error) => {
//                     alert(`ERROR! ${error.message}`);
//                   }}
//                 />
//               </div>
//               <form action="#" method="POST" onSubmit={handlePersonalInfo}>
//                 <div className="grid grid-cols-6 gap-6">
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                       User Name
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       id="username"
//                       value={userinfo.username}
//                       autoComplete="name"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
//                       onChange={handleUsernameChange}
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, name: e.target.value });
//                       }}
//                       value={userinfo.name}
//                       autoComplete="name"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//                       Email address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, email: e.target.value });
//                       }}
//                       value={userinfo.email}
//                       autoComplete="email"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                       Phone No.
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, phone: e.target.value });
//                       }}
//                       value={userinfo.phone}
//                       autoComplete="phone"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border

// -gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       id="city"
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, city: e.target.value });
//                       }}
//                       value={userinfo.city}
//                       autoComplete="address-level2"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       name="state"
//                       id="state"
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, state: e.target.value });
//                       }}
//                       value={userinfo.state}
//                       autoComplete="address-level1"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-6">
//                     <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                       Category
//                     </label>
//                     <select
//                       name="category"
//                       id="category"
//                       multiple={true}
//                       value={userinfo.category}
//                       onChange={(e) =>
//                         setUserinfo({ ...userinfo, category: Array.from(e.target.selectedOptions, (option) => option.value) })
//                       }
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     >
//                       <option value="Beauty">Beauty</option>
//                       <option value="Fashion">Fashion</option>
//                       <option value="Fitness">Fitness</option>
//                       <option value="Food">Food</option>
//                       <option value="Gaming">Gaming</option>
//                       <option value="Lifestyle">Lifestyle</option>
//                       <option value="Sports">Sports</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Travel">Travel</option>
//                     </select>
//                   </div>
//                   <div className="col-span-6 sm:col-span-6">
//                     <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       name="description"
//                       rows={3}
//                       value={userinfo.description}
//                       onChange={(e) => {
//                         setUserinfo({ ...userinfo, description: e.target.value });
//                       }}
//                       className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//                       placeholder="you@example.com"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-6">
//                     <label className="block text-sm font-medium text-gray-700">Platforms</label>
//                     {userinfo.platforms.map((platform, index) => (
//                       <div key={index} className="grid grid-cols-6 gap-6">
//                         <div className="col-span-2 sm:col-span-2">
//                           <input
//                             type="text"
//                             name="platform"
//                             id="platform"
//                             value={platform.platform}
//                             onChange={(e) => {
//                               const newPlatforms = [...userinfo.platforms];
//                               newPlatforms[index].platform = e.target.value;
//                               setUserinfo({ ...userinfo, platforms: newPlatforms });
//                             }}
//                             placeholder="Platform"
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-2 sm:col-span-2">
//                           <input
//                             type="text"
//                             name="followers"
//                             id="followers"
//                             value={platform.followers}
//                             onChange={(e) => {
//                               const newPlatforms = [...userinfo.platforms];
//                               newPlatforms[index].followers = e.target.value;
//                               setUserinfo({ ...userinfo, platforms: newPlatforms });
//                             }}
//                             placeholder="Followers"
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-2 sm:col-span-2">
//                           <input
//                             type="text"
//                             name="profile"
//                             id="profile"
//                             value={platform.profile}
//                             onChange={(e) => {
//                               const newPlatforms = [...userinfo.platforms];
//                               newPlatforms[index].profile = e.target.value;
//                               setUserinfo({ ...userinfo, platforms: newPlatforms });
//                             }}
//                             placeholder="Profile URL"
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const newPlatforms = [...userinfo.platforms];
//                             newPlatforms.splice(index, 1);
//                             setUserinfo({ ...userinfo, platforms: newPlatforms });
//                           }}
//                           className="col-span-1 sm:col-span-1 text-red-600"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserinfo({
//                           ...userinfo,
//                           platforms: [...userinfo.platforms, { platform: "", followers: "", profile: "" }],
//                         });
//                       }}
//                       className="mt-2 text-indigo-600"
//                     >
//                       Add Platform
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <button
//                     type="submit"
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 py-5 sm:rounded-lg sm:p-6">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">Packages</h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 Add the packages you offer to potential clients.
//               </p>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <form action="#" method="POST" onSubmit={handlePackagesInfo}>
//                 {userinfo.packages.map((pkg, index) => (
//                   <div key={index} className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                       <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
//                         Platform
//                       </label>
//                       <input
//                         type="text"
//                         name="platform"
//                         id="platform"
//                         value={pkg.platform}
//                         onChange={(e) => {
//                           const newPackages = [...userinfo.packages];
//                           newPackages[index].platform = e.target.value;
//                           setUserinfo({ ...userinfo, packages: newPackages });
//                         }}
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                       <label htmlFor="followers" className="block text-sm font-medium text-gray-700">
//                         Followers
//                       </label>
//                       <input
//                         type="text"
//                         name="followers"
//                         id="followers"
//                         value={pkg.followers}
//                         onChange={(e) => {
//                           const newPackages = [...userinfo.packages];
//                           newPackages[index].followers = e.target.value;
//                           setUserinfo({ ...userinfo, packages: newPackages });
//                         }}
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={pkg.price}
//                         onChange={(e) => {
//                           const newPackages = [...userinfo.packages];
//                           newPackages[index].price = e.target.value;
//                           setUserinfo({ ...userinfo, packages: newPackages });
//                         }}
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />


//                     </div>
//                     <div className="col-span-6 sm:col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         id="description"
//                         name="description"
//                         rows={3}
//                         value={pkg.description}
//                         onChange={(e) => {
//                           const newPackages = [...userinfo.packages];
//                           newPackages[index].description = e.target.value;
//                           setUserinfo({ ...userinfo, packages: newPackages });
//                         }}
//                         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         placeholder="Package Description"
//                       />
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const newPackages = [...userinfo.packages];
//                         newPackages.splice(index, 1);
//                         setUserinfo({ ...userinfo, packages: newPackages });
//                       }}
//                       className="col-span-1 sm:col-span-1 text-red-600"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserinfo({
//                       ...userinfo,
//                       packages: [...userinfo.packages, { platform: "", followers: "", price: "", description: "" }],
//                     });
//                   }}
//                   className="mt-2 text-indigo-600"
//                 >
//                   Add Package
//                 </button>
//                 <div className="mt-6">
//                   <button
//                     type="submit"
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';

// export default function Example() {
//   const [userinfo, setUserinfo] = useState({
//     fullname: '',
//     email: '',
//     country: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     category: [],
//     description: '',
//     platforms: [{ platform: '', followers: '', profile: '' }],
//     packages: [{ platform: '', followers: '', price: '', description: '', media: [] }],
//   });
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;
//         const response = await fetch("/api/creator/creator", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const responseData = await response.json();
//         if (response.ok) {
//           setUserinfo(responseData.user);
//         } else {
//           console.error("Error fetching user data:", responseData.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleProfileImage = async (email, image) => {
//     await fetch("/api/creator/profileImageupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, profileImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleBannerImage = async (email, image) => {
//     await fetch("/api/creator/bannerimage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, bannerImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePersonalInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/profileupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         name: userinfo.name,
//         phone: userinfo.phone,
//         city: userinfo.city,
//         state: userinfo.state,
//         description: userinfo.description,
//         category: userinfo.category,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleContentInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addcontentinfo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         category: userinfo.category,
//         description: userinfo.description,
//         platforms: userinfo.platforms,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePackagesInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addpackage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: userinfo.email, packages: userinfo.packages }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleUsernameChange = (e) => {
//     setUserinfo({ ...userinfo, username: e.target.value });
//   };

//   const handleProfileMedia = async (email, mediaType, media) => {
//     await fetch("/api/creator/Videocontent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, Video: media }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   return (
//     <main className="bg-pink-50 min-h-screen p-8">
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         <div className="bg-white shadow-md sm:rounded-lg transition duration-500 hover:shadow-xl">
//           <div className="px-4 py-5 sm:p-6">
//             <div className="md:grid md:grid-cols-3 md:gap-6">
//               <div className="md:col-span-1">
//                 <h3 className="text-lg font-medium leading-6 text-pink-900">Personal Information</h3>
//                 <p className="mt-1 text-sm text-pink-600">Fill in your personal information below.</p>
//               </div>
//               <div className="mt-5 md:mt-0 md:col-span-2">
//                 <form action="#" method="POST" onSubmit={handlePackagesInfo}>
//                   <div className="grid grid-cols-6 gap-6 bg-pink-100 p-4 rounded-md mb-4 transition duration-500 hover:shadow-lg">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="fullname" className="block text-sm font-medium text-pink-700">Full Name</label>
//                       <input
//                         type="text"
//                         name="fullname"
//                         id="fullname"
//                         value={userinfo.fullname}
//                         onChange={(e) => setUserinfo({ ...userinfo, fullname: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="email" className="block text-sm font-medium text-pink-700">Email Address</label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={userinfo.email}
//                         onChange={(e) => setUserinfo({ ...userinfo, email: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="country" className="block text-sm font-medium text-pink-700">Country</label>
//                       <input
//                         type="text"
//                         name="country"
//                         id="country"
//                         value={userinfo.country}
//                         onChange={(e) => setUserinfo({ ...userinfo, country: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="streetAddress" className="block text-sm font-medium text-pink-700">Street Address</label>
//                       <input
//                         type="text"
//                         name="streetAddress"
//                         id="streetAddress"
//                         value={userinfo.streetAddress}
//                         onChange={(e) => setUserinfo({ ...userinfo, streetAddress: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="city" className="block text-sm font-medium text-pink-700">City</label>
//                       <input
//                         type="text"
//                         name="city"
//                         id="city"
//                         value={userinfo.city}
//                         onChange={(e) => setUserinfo({ ...userinfo, city: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="state" className="block text-sm font-medium text-pink-700">State / Province</label>
//                       <input
//                         type="text"
//                         name="state"
//                         id="state"
//                         value={userinfo.state}
//                         onChange={(e) => setUserinfo({ ...userinfo, state: e.target.value })}
//                         className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                       />
//                     </div>
//                   </div>

//                   <div className="md:grid md:grid-cols-3 md:gap-6">
//                     <div className="md:col-span-1">
//                       <h3 className="text-lg font-medium leading-6 text-pink-900">Platforms</h3>
//                       <p className="mt-1 text-sm text-pink-600">Add your social media platforms and follower counts.</p>
//                     </div>
//                     <div className="mt-5 md:mt-0 md:col-span-2">
//                       {userinfo.platforms.map((platform, index) => (
//                         <div key={index} className="grid grid-cols-6 gap-6 bg-pink-100 p-4 rounded-md mb-4 transition duration-500 hover:shadow-lg">
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="platform" className="block text-sm font-medium text-pink-700">Platform</label>
//                             <input
//                               type="text"
//                               name="platform"
//                               id="platform"
//                               value={platform.platform}
//                               onChange={(e) => {
//                                 const newPlatforms = [...userinfo.platforms];
//                                 newPlatforms[index].platform = e.target.value;
//                                 setUserinfo({ ...userinfo, platforms: newPlatforms });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="followers" className="block text-sm font-medium text-pink-700">Followers</label>
//                             <input
//                               type="text"
//                               name="followers"
//                               id="followers"
//                               value={platform.followers}
//                               onChange={(e) => {
//                                 const newPlatforms = [...userinfo.platforms];
//                                 newPlatforms[index].followers = e.target.value;
//                                 setUserinfo({ ...userinfo, platforms: newPlatforms });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="profile" className="block text-sm font-medium text-pink-700">Profile URL</label>
//                             <input
//                               type="url"
//                               name="profile"
//                               id="profile"
//                               value={platform.profile}
//                               onChange={(e) => {
//                                 const newPlatforms = [...userinfo.platforms];
//                                 newPlatforms[index].profile = e.target.value;
//                                 setUserinfo({ ...userinfo, platforms: newPlatforms });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const newPlatforms = [...userinfo.platforms];
//                               newPlatforms.splice(index, 1);
//                               setUserinfo({ ...userinfo, platforms: newPlatforms });
//                             }}
//                             className="col-span-1 sm:col-span-1 text-red-600 mt-4"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserinfo({
//                             ...userinfo,
//                             platforms: [...userinfo.platforms, { platform: '', followers: '', profile: '' }],
//                           });
//                         }}
//                         className="mt-2 text-pink-600 hover:text-pink-700"
//                       >
//                         Add Platform
//                       </button>
//                     </div>
//                   </div>

//                   <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">
//                     <div className="md:col-span-1">
//                       <h3 className="text-lg font-medium leading-6 text-pink-900">Packages</h3>
//                       <p className="mt-1 text-sm text-pink-600">Add the packages you offer to potential clients.</p>
//                     </div>
//                     <div className="mt-5 md:mt-0 md:col-span-2">
//                       {userinfo.packages.map((pkg, index) => (
//                         <div key={index} className="grid grid-cols-6 gap-6 bg-pink-100 p-4 rounded-md mb-4 transition duration-500 hover:shadow-lg">
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="platform" className="block text-sm font-medium text-pink-700">Platform</label>
//                             <input
//                               type="text"
//                               name="platform"
//                               id="platform"
//                               value={pkg.platform}
//                               onChange={(e) => {
//                                 const newPackages = [...userinfo.packages];
//                                 newPackages[index].platform = e.target.value;
//                                 setUserinfo({ ...userinfo, packages: newPackages });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="followers" className="block text-sm font-medium text-pink-700">Followers</label>
//                             <input
//                               type="text"
//                               name="followers"
//                               id="followers"
//                               value={pkg.followers}
//                               onChange={(e) => {
//                                 const newPackages = [...userinfo.packages];
//                                 newPackages[index].followers = e.target.value;
//                                 setUserinfo({ ...userinfo, packages: newPackages });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-3">
//                             <label htmlFor="price" className="block text-sm font-medium text-pink-700">Price</label>
//                             <input
//                               type="text"
//                               name="price"
//                               id="price"
//                               value={pkg.price}
//                               onChange={(e) => {
//                                 const newPackages = [...userinfo.packages];
//                                 newPackages[index].price = e.target.value;
//                                 setUserinfo({ ...userinfo, packages: newPackages });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-6">
//                             <label htmlFor="description" className="block text-sm font-medium text-pink-700">Description</label>
//                             <textarea
//                               id="description"
//                               name="description"
//                               rows={3}
//                               value={pkg.description}
//                               onChange={(e) => {
//                                 const newPackages = [...userinfo.packages];
//                                 newPackages[index].description = e.target.value;
//                                 setUserinfo({ ...userinfo, packages: newPackages });
//                               }}
//                               className="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border-pink-300 rounded-md"
//                               placeholder="Package Description"
//                             />
//                           </div>
//                           <div className="col-span-6 sm:col-span-6">
//                             <label htmlFor="media" className="block text-sm font-medium text-pink-700">Media</label>
//                             <input
//                               type="file"
//                               id="media"
//                               name="media"
//                               accept="image/*,video/*"
//                               multiple
//                               onChange={(e) => {
//                                 const files = Array.from(e.target.files);
//                                 const newPackages = [...userinfo.packages];
//                                 newPackages[index].media = files;
//                                 setUserinfo({ ...userinfo, packages: newPackages });
//                               }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                           </div>
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const newPackages = [...userinfo.packages];
//                               newPackages.splice(index, 1);
//                               setUserinfo({ ...userinfo, packages: newPackages });
//                             }}
//                             className="col-span-1 sm:col-span-1 text-red-600 mt-4"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserinfo({
//                             ...userinfo,
//                             packages: [...userinfo.packages, { platform: '', followers: '', price: '', description: '', media: [] }],
//                           });
//                         }}
//                         className="mt-2 text-pink-600 hover:text-pink-700"
//                       >
//                         Add Package
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

///cdncdnjcnsdjcsdhcsdjhcjhsx ncjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh//
// import { UploadButton } from "@/utils/uploadthing";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Example() {
//   const [userinfo, setUserinfo] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     profileImage: "",
//     bannerImage: "",
//     phone: "",
//     city: "",
//     state: "",
//     category: [],
//     description: "",
//     platforms: [
//       { platform: "instagram", followers: "", profile: "" },
//       { platform: "youtube", followers: "", profile: "" },
//     ],
//     packages: [
//       {
//         platform: "instagram",
//         followers: "1000",
//         price: "1000",
//         title: "Sample Package",
//         description: "I will post your product on my Instagram",
//         media: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;
//         const response = await fetch("/api/creator/creator", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const responseData = await response.json();
//         if (response.ok) {
//           setUserinfo(responseData.user);
//         } else {
//           console.error("Error fetching user data:", responseData.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleProfileImage = async (email, image) => {
//     await fetch("/api/creator/profileImageupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, profileImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleBannerImage = async (email, image) => {
//     await fetch("/api/creator/bannerimage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, bannerImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };


//   const handlePersonalInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/profileupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         name: userinfo.name,
//         phone: userinfo.phone,
//         city: userinfo.city,
//         state: userinfo.state,
//         Bio : userinfo.Bio,
      
//         category: userinfo.category,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleContentInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addcontentinfo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         category: userinfo.category,
//         description: userinfo.description,
//         platforms: userinfo.platforms,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePackagesInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addpackage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: userinfo.email, packages: userinfo.packages }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleUsernameChange = (e) => {
//     setUserinfo({ ...userinfo, username: e.target.value });
//   };

//   const handleMedia = async (email, mediaType, media) => {
//     await fetch("/api/creator/Videocontent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, media: media }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="space-y-6 p-10">
//         <div className="bg-white px-4 py-5 sm:rounded-lg sm:p-6 shadow">
          {/* <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="w-full block gap-5 items-center justify-between px-20">
                <Image
                  src={userinfo.bannerImage || ""}
                  width={800}
                  height={200}
                  alt=""
                  className="w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300"
                />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={async (res) => {
                    await handleBannerImage(userinfo.email, res[0].fileUrl);
                    setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <div className="w-full block gap-5 items-center justify-between px-20">
                <Image
                  src={userinfo.profileImage || ""}
                  width={200}
                  height={200}
                  alt=""
                  className="w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300"
                />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={async (res) => {
                    await handleProfileImage(userinfo.email, res[0].fileUrl);
                    setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <form action="#" method="POST" onSubmit={handlePersonalInfo}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={userinfo.username}
                      autoComplete="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, name: e.target.value });
                      }}
                      value={userinfo.name}
                      autoComplete="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, email: e.target.value });
                      }}
                      value={userinfo.email}
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone No.
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, phone: e.target.value });
                      }}
                      value={userinfo.phone}
                      autoComplete="phone"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, city: e.target.value });
                      }}
                      value={userinfo.city}
                      autoComplete="city"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, state: e.target.value });
                      }}
                      value={userinfo.state}
                      autoComplete="state"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                     Bio
                    </label>
                    <textarea
                      type="text"
                      name="Bio"
                      id="Bio"
                      row = {3}
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, Bio: e.target.value });
                      }}
                      value={userinfo.Bio}
                      autoComplete="state"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, role: e.target.value });
                      }}
                      value={userinfo.role}
                      autoComplete="role"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}

//         <div className="bg-white px-4 py-5 sm:rounded-lg sm:p-6 shadow">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Media</h3>
//               <p className="mt-1 text-sm text-gray-500">Add your profile pictures or videos.</p>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <form action="#" method="POST" onSubmit={handleContentInfo}>
//                 <div className="grid grid-cols-6 gap-6">
//                   {userinfo.packages.map((pack, idx) => (
//                     <div key={idx} className="col-span-6 sm:col-span-6 border rounded p-4 mb-4">
//                       <h4 className="block text-sm font-medium text-gray-700 mb-2">Package {idx + 1}</h4>
//                       <div className="grid grid-cols-6 gap-6">
//                         <div className="col-span-6 sm:col-span-3">
//                           <label htmlFor={`package-platform-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Platform
//                           </label>
//                           <input
//                             type="text"
//                             name={`package-platform-${idx}`}
//                             id={`package-platform-${idx}`}
//                             onChange={(e) => {
//                               const updatedPackages = userinfo.packages.map((p, index) => {
//                                 if (index === idx) return { ...p, platform: e.target.value };
//                                 return p;
//                               });
//                               setUserinfo({ ...userinfo, packages: updatedPackages });
//                             }}
//                             value={pack.platform}
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-6 sm:col-span-3">
//                           <label htmlFor={`package-followers-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Followers
//                           </label>
//                           <input
//                             type="text"
//                             name={`package-followers-${idx}`}
//                             id={`package-followers-${idx}`}
//                             onChange={(e) => {
//                               const updatedPackages = userinfo.packages.map((p, index) => {
//                                 if (index === idx) return { ...p, followers: e.target.value };
//                                 return p;
//                               });
//                               setUserinfo({ ...userinfo, packages: updatedPackages });
//                             }}
//                             value={pack.followers}
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-6 sm:col-span-3">
//                           <label htmlFor={`package-title-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Title
//                           </label>
//                           <input
//                             type="text"
//                             name={`package-title-${idx}`}
//                             id={`package-title-${idx}`}
//                             onChange={(e) => {
//                               const updatedPackages = userinfo.packages.map((p, index) => {
//                                 if (index === idx) return { ...p, title: e.target.value };
//                                 return p;
//                               });
//                               setUserinfo({ ...userinfo, packages: updatedPackages });
//                             }}
//                             value={pack.title}
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-6 sm:col-span-3">
//                           <label htmlFor={`package-price-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Price
//                           </label>
//                           <input
//                             type="text"
//                             name={`package-price-${idx}`}
//                             id={`package-price-${idx}`}
//                             onChange={(e) => {
//                               const updatedPackages = userinfo.packages.map((p, index) => {
//                                 if (index === idx) return { ...p, price: e.target.value };
//                                 return p;
//                               });
//                               setUserinfo({ ...userinfo, packages: updatedPackages });
//                             }}
//                             value={pack.price}
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-6">
//                           <label htmlFor={`package-description-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Description
//                           </label>
//                           <textarea
//                             name={`package-description-${idx}`}
//                             id={`package-description-${idx}`}
//                             onChange={(e) => {
//                               const updatedPackages = userinfo.packages.map((p, index) => {
//                                 if (index === idx) return { ...p, description: e.target.value };
//                                 return p;
//                               });
//                               setUserinfo({ ...userinfo, packages: updatedPackages });
//                             }}
//                             value={pack.description}
//                             rows={3}
//                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                           />
//                         </div>
//                         <div className="col-span-6">
//                           <label htmlFor={`package-media-${idx}`} className="block text-sm font-medium text-gray-700">
//                             Media
//                           </label>
//                           <div className="col-span-6 sm:col-span-6">
//                              <label htmlFor="media" className="block text-sm font-medium text-pink-700">Media</label>
//                              <input
//                                type="file"
//                                id="media"
//                                name="media"
//                                accept="image/*,video/*"
//                                multiple
//                                onChange={(e) => {
//                                  const files = Array.from(e.target.files);
//                                  const newPackages = [...userinfo.packages];
//                                  newPackages[idx].media = files;
//                                  setUserinfo({ ...userinfo, packages: newPackages });
//                                }}
//                               className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-pink-300 rounded-md"
//                             />
//                            </div>
//                           {pack.media.map((mediaUrl, mediaIdx) => (
//                             <div key={mediaIdx} className="mt-2">
//                               <a href={mediaUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
//                                 {mediaUrl}
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const newPackages = [
//                         ...userinfo.packages,
//                         { platform: '', description: '', price: '', duration: '' },
//                       ];
//                       setUserinfo({ ...userinfo, packages: newPackages });
//                     }}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Add Package
//                   </button>
//                 </div>
//                 <div className="pt-5">
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//jnkdvdsjjnvsd nvjsdnvnsnjvjjnsvnsdjvjds

// import { UploadButton } from "@/utils/uploadthing";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import axios from "axios";

// export default function Example() {
//   const [userinfo, setUserinfo] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     profileImage: "",
//     bannerImage: "",
//     phone: "",
//     city: "",
//     state: "",
//     Bio: "",
//     category: [],
//     description: "",
//     platforms: [
//       { platform: "instagram", followers: "", profile: "" },
//       { platform: "youtube", followers: "", profile: "" },
//     ],
//     packages: [
//       {
//         platform: "instagram",
//         followers: "1000",
//         price: "1000",
//         title: "Sample Package",
//         description: "I will post your product on my Instagram",
//         media: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;
//         const response = await fetch("/api/creator/creator", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const responseData = await response.json();
//         if (response.ok) {
//           setUserinfo(responseData.user);
//         } else {
//           console.error("Error fetching user data:", responseData.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleProfileImage = async (email, image) => {
//     await fetch("/api/creator/profileImageupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, profileImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleBannerImage = async (email, image) => {
//     await fetch("/api/creator/bannerimage", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, bannerImage: image }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePersonalInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/profileupdate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         name: userinfo.name,
//         phone: userinfo.phone,
//         city: userinfo.city,
//         state: userinfo.state,
//         Bio: userinfo.Bio,
//         category: userinfo.category,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handleContentInfo = async (e) => {
//     e.preventDefault();
//     await fetch("/api/creator/addcontentinfo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: userinfo.email,
//         category: userinfo.category,
//         description: userinfo.description,
//         platforms: userinfo.platforms,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   const handlePackagesInfo = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/creator/addpackage", userinfo.packages);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error saving package data:", error);
//     }
//   };

//   const handleUsernameChange = (e) => {
//     setUserinfo({ ...userinfo, username: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="space-y-6">
//         <div className="bg-white shadow sm:rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <div className="md:grid md:grid-cols-3 md:gap-6">
//               <div className="md:col-span-1">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Use a permanent address where you can receive mail.
//                 </p>
//               </div>
//               <div className="mt-5 md:mt-0 md:col-span-2">
//                 <div className="w-full block gap-5 items-center justify-between px-20">
//                   <Image
//                     src={userinfo.bannerImage || ""}
//                     width={800}
//                     height={200}
//                     alt=""
//                     className="w-full h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300"
//                   />
//                   <UploadButton
//                     endpoint="imageUploader"
//                     onClientUploadComplete={async (res) => {
//                       await handleBannerImage(userinfo.email, res[0].fileUrl);
//                       setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
//                     }}
//                     onUploadError={(error) => {
//                       alert(`ERROR! ${error.message}`);
//                     }}
//                   />
//                 </div>
//                 <div className="w-full block gap-5 items-center justify-between px-20">
//                   <Image
//                     src={userinfo.profileImage || ""}
//                     width={200}
//                     height={200}
//                     alt=""
//                     className="w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300"
//                   />
//                   <UploadButton
//                     endpoint="imageUploader"
//                     onClientUploadComplete={async (res) => {
//                       await handleProfileImage(userinfo.email, res[0].fileUrl);
//                       setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
//                     }}
//                     onUploadError={(error) => {
//                       alert(`ERROR! ${error.message}`);
//                     }}
//                   />
//                 </div>
//                 <form action="#" method="POST" onSubmit={handlePersonalInfo}>
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                         User Name
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         id="username"
//                         value={userinfo.username}
//                         autoComplete="name"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
//                         onChange={handleUsernameChange}
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, name: e.target.value });
//                         }}
//                         value={userinfo.name}
//                         autoComplete="name"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//                         Email address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, email: e.target.value });
//                         }}
//                         value={userinfo.email}
//                         autoComplete="email"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                         Phone No.
//                       </label>
//                       <input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, phone: e.target.value });
//                         }}
//                         value={userinfo.phone}
//                         autoComplete="phone"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                         City
//                       </label>
//                       <input
//                         type="text"
//                         name="city"
//                         id="city"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, city: e.target.value });
//                         }}
//                         value={userinfo.city}
//                         autoComplete="city"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                         State
//                       </label>
//                       <input
//                         type="text"
//                         name="state"
//                         id="state"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, state: e.target.value });
//                         }}
//                         value={userinfo.state}
//                         autoComplete="state"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-6">
//                       <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
//                         Bio
//                       </label>
//                       <textarea
//                         name="bio"
//                         id="bio"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, Bio: e.target.value });
//                         }}
//                         value={userinfo.Bio}
//                         autoComplete="bio"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-6">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, category: e.target.value });
//                         }}
//                         value={userinfo.category.join(", ")}
//                         autoComplete="category"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow sm:rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <div className="md:grid md:grid-cols-3 md:gap-6">
//               <div className="md:col-span-1">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Content Information</h3>
//                 <p className="mt-1 text-sm text-gray-500">Add your content information here.</p>
//               </div>
//               <div className="mt-5 md:mt-0 md:col-span-2">
//                 <form action="#" method="POST" onSubmit={handleContentInfo}>
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, description: e.target.value });
//                         }}
//                         value={userinfo.description}
//                         autoComplete="description"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-6 lg:col-span-6">
//                       <label htmlFor="platforms" className="block text-sm font-medium text-gray-700">
//                         Platforms
//                       </label>
//                       <textarea
//                         name="platforms"
//                         id="platforms"
//                         onChange={(e) => {
//                           setUserinfo({ ...userinfo, platforms: JSON.parse(e.target.value) });
//                         }}
//                         value={JSON.stringify(userinfo.platforms)}
//                         autoComplete="platforms"
//                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow sm:rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <div className="md:grid md:grid-cols-3 md:gap-6">
//               <div className="md:col-span-1">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Packages</h3>
//                 <p className="mt-1 text-sm text-gray-500">Add your packages here.</p>
//               </div>
//               <div className="mt-5 md:mt-0 md:col-span-2">
//                 <form action="#" method="POST" onSubmit={handlePackagesInfo}>
//                   <div className="grid grid-cols-6 gap-6">
//                     {userinfo.packages.map((pkg, index) => (
//                       <div key={index} className="col-span-6 sm:col-span-6 lg:col-span-6">
//                         <label htmlFor={`package-title-${index}`} className="block text-sm font-medium text-gray-700">
//                           Title
//                         </label>
//                         <input
//                           type="text"
//                           name={`package-title-${index}`}
//                           id={`package-title-${index}`}
//                           onChange={(e) => {
//                             const updatedPackages = [...userinfo.packages];
//                             updatedPackages[index].title = e.target.value;
//                             setUserinfo({ ...userinfo, packages: updatedPackages });
//                           }}
//                           value={pkg.title}
//                           autoComplete={`package-title-${index}`}
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                         <label htmlFor={`package-description-${index}`} className="block text-sm font-medium text-gray-700">
//                           Description
//                         </label>
//                         <textarea
//                           name={`package-description-${index}`}
//                           id={`package-description-${index}`}
//                           onChange={(e) => {
//                             const updatedPackages = [...userinfo.packages];
//                             updatedPackages[index].description = e.target.value;
//                             setUserinfo({ ...userinfo, packages: updatedPackages });
//                           }}
//                           value={pkg.description}
//                           autoComplete={`package-description-${index}`}
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                         <label htmlFor={`package-price-${index}`} className="block text-sm font-medium text-gray-700">
//                           Price
//                         </label>
//                         <input
//                           type="text"
//                           name={`package-price-${index}`}
//                           id={`package-price-${index}`}
//                           onChange={(e) => {
//                             const updatedPackages = [...userinfo.packages];
//                             updatedPackages[index].price = e.target.value;
//                             setUserinfo({ ...userinfo, packages: updatedPackages });
//                           }}
//                           value={pkg.price}
//                           autoComplete={`package-price-${index}`}
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                         <label htmlFor={`package-media-${index}`} className="block text-sm font-medium text-gray-700">
//                           Media
//                         </label>
//                         <input
//                           type="text"
//                           name={`package-media-${index}`}
//                           id={`package-media-${index}`}
//                           onChange={(e) => {
//                             const updatedPackages = [...userinfo.packages];
//                             updatedPackages[index].media = e.target.value.split(",");
//                             setUserinfo({ ...userinfo, packages: updatedPackages });
//                           }}
//                           value={pkg.media.join(", ")}
//                           autoComplete={`package-media-${index}`}
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <div className="px-4 py-3 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };







import { UploadButton } from "@/utils/uploadthing";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Example() {
  const [userinfo, setUserinfo] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    profileImage: "",
    bannerImage: "",
    phone: "",
    city: "",
    state: "",
    category: [],
    description: "",
    platforms: [
      { platform: "instagram", followers: "", profile: "" },
      { platform: "youtube", followers: "", profile: "" },
    ],
    packages: [
      {
        platform: "instagram",
        followers: "1000",
        price: "1000",
        title: "Sample Package",
        description: "I will post your product on my Instagram",
        media: [],
      },
    ],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        if (!storedUserData) return;
        
        const token = storedUserData.token;
        const response = await fetch("/api/creator/creator", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const responseData = await response.json();
        setUserinfo(responseData.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileImage = async (email, image) => {
    try {
      const response = await fetch("/api/creator/profileImageupdate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, profileImage: image }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  const handleBannerImage = async (email, image) => {
    try {
      const response = await fetch("/api/creator/bannerimage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, bannerImage: image }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating banner image:", error);
    }
  };

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/creator/profileupdate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userinfo.email,
          name: userinfo.name,
          phone: userinfo.phone,
          city: userinfo.city,
          state: userinfo.state,
          Bio: userinfo.Bio,
          category: userinfo.category,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating personal info:", error);
    }
  };

  const handleContentInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/creator/addcontentinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userinfo.email,
          category: userinfo.category,
          description: userinfo.description,
          platforms: userinfo.platforms,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating content info:", error);
    }
  };

  const handlePackagesInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/creator/addpackage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userinfo.packages),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error saving package data:", error);
    }
  };

  const handleUsernameChange = (e) => {
    setUserinfo({ ...userinfo, username: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="space-y-6 p-10">
        <div className="bg-white px-4 py-5 sm:rounded-lg sm:p-6 shadow">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="w-full block gap-5 items-center justify-between px-20">
                <Image
                  src={userinfo.bannerImage || ""}
                  width={800}
                  height={200}
                  alt=""
                  className="w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300"
                />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={async (res) => {
                    await handleBannerImage(userinfo.email, res[0].fileUrl);
                    setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <div className="w-full block gap-5 items-center justify-between px-20">
                <Image
                  src={userinfo.profileImage || ""}
                  width={200}
                  height={200}
                  alt=""
                  className="w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300"
                />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={async (res) => {
                    await handleProfileImage(userinfo.email, res[0].fileUrl);
                    setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <form action="#" method="POST" onSubmit={handlePersonalInfo}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={userinfo.username}
                      autoComplete="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, name: e.target.value });
                      }}
                      value={userinfo.name}
                      autoComplete="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, email: e.target.value });
                      }}
                      value={userinfo.email}
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={userinfo.phone}
                      autoComplete="phone"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, phone: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={userinfo.city}
                      autoComplete="city"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, city: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={userinfo.state}
                      autoComplete="state"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, state: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      id="bio"
                      value={userinfo.Bio}
                      rows="3"
                      className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      onChange={(e) => {
                        setUserinfo({ ...userinfo, Bio: e.target.value });
                      }}
                    ></textarea>
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={userinfo.category.join(", ")}
                      autoComplete="category"
                      className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      onChange={(e) => {
                        setUserinfo({
                          ...userinfo,
                          category: e.target.value.split(","),
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





