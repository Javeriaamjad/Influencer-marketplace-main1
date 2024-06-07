

import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import "./Home.css"; // Import CSS file for styling
import Image from "next/image";
// import { Image } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userinfo, setUserinfo] = useState({ username: "" });

  useEffect(() => {
    // Fetch user data
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
          setUserinfo(responseData.user || { username: "" });
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
    console.log("ccnjnjcjnncjn cjn");
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        if (storedUserData) {
          const token = storedUserData.token;
          console.log("brand",token)
          const response = await fetch('/api/brand/getbrand', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const responseData = await response.json();
          if (response.ok) {
            setUserinfo(responseData.user);
          } else {
            console.error("Error fetching user data:", responseData.error);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    // Connect to Pusher and subscribe to channel
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
    // Fetch messages
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
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
    // Submit message
    if (message.trim() !== "") {
      try {
        await fetch("http://localhost:8000/api/messages", {
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
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-200 to-black-100 animate-gradient-x">
        <div className="chat-container w-full max-w-screen-lg">
          <div className="chat-box">
            <div className="user-info flex items-center">
              <div className="username-text">{userinfo.username}</div>
            </div>

            <div className="message-list">
              {messages.map((message, index) => (
                <div key={index} className="message-item">
                  <strong>{message.username}</strong>
                  <div className="message-content">{message.message}</div>
                </div>
              ))}
            </div>
            <div className="send-message">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
                style={{ display: "flex" }}
              >
                <input
                  className="message-input"
                  placeholder="Write a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ width: "500px" }}
                />
                <button type="submit" className="send-button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
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
    </>
  );
}
