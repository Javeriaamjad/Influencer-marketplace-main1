// import { useEffect, useState } from "react";
// import Pusher from "pusher-js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// // import Brand from  "../model/Brand";

// export default function Home() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [userinfo, setUserinfo] = useState({
//     username: "",
//   });

//   useEffect(() => {
//     Pusher.logToConsole = true;

//     const pusher = new Pusher("db9e9cd7a132c8a17973", {
//       cluster: "ap2",
//     });

//     const channel = pusher.subscribe("chat");
//     channel.bind("message", function (data) {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       pusher.unsubscribe("chat");
//     };
//   }, []);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;

//         console.log("storedUserData", token);
//         const response = await fetch("/api/creator/creator", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const responseData = await response.json();
//         console.log("Response data:", responseData);
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

//   const submit = async () => {
//     if (message.trim() !== "") {
//       try {
//         await fetch("http://localhost:8000/api/messages", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: userinfo.username,
//             message,
//           }),
//         });
//         setMessage("");
//       } catch (error) {
//         console.error("Error sending message:", error);
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div
//         className="inner-container"
//         style={{
//           borderRadius: "20px",
//           overflow: "hidden",
//           border: "2px solid black",
//           width: "450px",
//         }}
//       >
//         <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
//           <div
//             className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
//             style={{ backgroundColor: "#d4afb9" }}
//           >
//             <input
//               className="fs-5 fw-semibold"
//               placeholder="Write username"
//               value={userinfo.username}
//               onChange={(e) => setUserinfo({ ...userinfo, username: e.target.value })}
//               style={{ padding: "5px", margin: "5px" }}
//               readOnly
//             />
//           </div>
//           <hr />
//           <div
//             className="list-group list-group-flush border-bottom scrollarea"
//             style={{
//               minHeight: "350px",
//               maxHeight: "350px",
//               overflowY: "auto",
//             }}
//           >
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className="list-group-item list-group-item-action py-3 lh-tight"
//                 style={{ padding: "10px" }}
//               >
//                 <div className="d-flex w-100 align-items-center justify-content-between">
//                   <strong className="mb-1">{message.username}</strong>
//                 </div>
//                 <div
//                   className="col-10 mb-1 small"
//                   style={{
//                     backgroundColor: "#7ec4cf",
//                     borderRadius: "10px",
//                     padding: "5px",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   {message.message}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           className="send-message"
//           style={{
//             backgroundColor: "#d4afb9",
//             // width: "450px",
//             height: "70px",
//           }}
//         >
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               submit();
//             }}
//             style={{
//               margin: "5px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <input
//               className="form-control"
//               placeholder="Write a message"
//               value={message}
//               style={{
//                 flex: "1",
//                 height: "40px",
//                 padding: "15px",
//                 margin: "10px",
//               }}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 padding: "10px 15px",
//                 borderRadius: "5px",
//               }}
//             >
//               <FontAwesomeIcon icon={faPaperPlane} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import Pusher from "pusher-js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// export default function Home() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [userinfo, setUserinfo] = useState({ username: "" });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUserData = JSON.parse(localStorage.getItem("user"));
//         const token = storedUserData.token;

//         console.log("storedUserData", token);
//         const response = await fetch("/api/creator/creator", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const responseData = await response.json();
//         console.log("Response data:", responseData);
//         if (response.ok) {
//           setUserinfo(responseData.user || { username: "" }); // Ensure userinfo is not null
//         } else {
//           console.error("Error fetching user data:", responseData.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     Pusher.logToConsole = true;

//     const pusher = new Pusher("db9e9cd7a132c8a17973", {
//       cluster: "ap2",
//     });

//     const channel = pusher.subscribe("chat");
//     channel.bind("message", function (data) {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       pusher.unsubscribe("chat");
//     };
//   }, []);

//   const submit = async () => {
//     if (message.trim() !== "") {
//       try {
//         await fetch("http://localhost:8000/api/messages", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: userinfo.username,
//             message,
//           }),
//         });
//         setMessage("");
//       } catch (error) {
//         console.error("Error sending message:", error);
//       }
//     }
//   };

//   if (!userinfo) {
//     // Render a loading indicator while userinfo is being fetched
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div
//         className="inner-container"
//         style={{
//           borderRadius: "20px",
//           overflow: "hidden",
//           border: "2px solid black",
//           width: "450px",
//         }}
//       >
//         <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
//           <div
//             className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
//             style={{ backgroundColor: "#d4afb9" }}
//           >
//             <input
//               className="fs-5 fw-semibold"
//               placeholder="Write username"
//               value={userinfo.username}
//               onChange={(e) => setUserinfo({ ...userinfo, username: e.target.value })}
//               style={{ padding: "5px", margin: "5px" }}
//               readOnly
//             />
//           </div>
//           <hr />
//           <div
//             className="list-group list-group-flush border-bottom scrollarea"
//             style={{
//               minHeight: "350px",
//               maxHeight: "350px",
//               overflowY: "auto",
//             }}
//           >
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className="list-group-item list-group-item-action py-3 lh-tight"
//                 style={{ padding: "10px" }}
//               >
//                 <div className="d-flex w-100 align-items-center justify-content-between">
//                   <strong className="mb-1">{message.username}</strong>
//                 </div>
//                 <div
//                   className="col-10 mb-1 small"
//                   style={{
//                     backgroundColor: "#7ec4cf",
//                     borderRadius: "10px",
//                     padding: "5px",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   {message.message}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           className="send-message"
//           style={{
//             backgroundColor: "#d4afb9",
//             // width: "450px",
//             height: "70px",
//           }}
//         >
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               submit();
//             }}
//             style={{
//               margin: "5px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <input
//               className="form-control"
//               placeholder="Write a message"
//               value={message}
//               style={{
//                 flex: "1",
//                 height: "40px",
//                 padding: "15px",
//                 margin: "10px",
//               }}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 padding: "10px 15px",
//                 borderRadius: "5px",
//               }}
//             >
//               <FontAwesomeIcon icon={faPaperPlane} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// Home.js

import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSave } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userinfo, setUserinfo] = useState({ username: "" });

  useEffect(() => {
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
        const responseData = await response.json();
        console.log("Response data:", responseData);
        if (response.ok) {
          setUserinfo(responseData.user || { username: "" }); // Ensure userinfo is not null
        } else {
          console.error("Error fetching user data:", responseData.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("db9e9cd7a132c8a17973", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data) {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages"); // Update URL
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const submit = async () => {
    if (message.trim() !== "") {
      try {
        await fetch("http://localhost:8000/api/messages", { // Update URL
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userinfo.username,
            message,
          }),
        });
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  if (!userinfo) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="inner-container"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "2px solid black",
          width: "450px",
        }}
      >
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
          <div
            className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
            style={{ backgroundColor: "#d4afb9" }}
          >
            <input
              className="fs-5 fw-semibold"
              placeholder="Write username"
              value={userinfo.username}
              onChange={(e) =>
                setUserinfo({ ...userinfo, username: e.target.value })
              }
              style={{ padding: "5px", margin: "5px" }}
              readOnly
            />
          </div>
          <hr />
          <div
            className="list-group list-group-flush border-bottom scrollarea"
            style={{
              minHeight: "350px",
              maxHeight: "350px",
              overflowY: "auto",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="list-group-item list-group-item-action py-3 lh-tight"
                style={{ padding: "10px" }}
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{message.username}</strong>
                </div>
                <div
                  className="col-10 mb-1 small"
                  style={{
                    backgroundColor: "#7ec4cf",
                    borderRadius: "10px",
                    padding: "5px",
                    wordWrap: "break-word",
                  }}
                >
                  {message.message}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="send-message"
          style={{
            backgroundColor: "#d4afb9",
            // width: "450px",
            height: "70px",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input
              className="form-control"
              placeholder="Write a message"
              value={message}
              style={{
                flex: "1",
                height: "40px",
                padding: "15px",
                margin: "10px",
              }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
