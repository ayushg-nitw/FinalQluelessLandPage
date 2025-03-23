import React, { useState, useEffect } from "react";
import { db, doc, getDoc, setDoc } from "../firebaseConfig"; // Firestore setup
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import send from "../assets/svg/send.svg";

const EnterEmailButton = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const BEARER_TOKEN = import.meta.env.VITE_VERAFALIA_API_KEY;

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const verifyEmail = async (email) => {
    const API_URL = "https://api.verifalia.com/v2.6/email-validations";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entries: [{ inputData: email }],
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.entries?.data[0]?.classification === "Undeliverable") {
        console.log("Invalid Email:", result);
        return false;
      }

      console.log("Valid Email:", result);
      return true;
    } catch (error) {
      console.error("Email verification failed:", error);
      return false;
    }
  };

  const handleClick = async () => {
    if (!email) {
      toast.error("Please enter an email!", {
        position: "top-center",
        autoClose: 3000,
        style: {
          background: "#ffffff", // White background
          color: "#000000", // Black text
        },
      });
      setIsSubmitting(false);
      setIsFocused(false);
      return;
    }

    setIsSubmitting(true);

    const isEmailValid = await verifyEmail(email);

    if (!isValidEmail(email)) {
      toast.error("Invalid email address!", {
        position: "top-center",
        autoClose: 3000,
        style: {
          background: "#ffffff", // White background
          color: "#000000", // Black text
        },
      });
      setIsSubmitting(false);
      setEmail("");
      setIsFocused(false);

      return;
    }

    if (!isEmailValid) {
      toast.error("Email does not exists!", {
        position: "top-center",
        autoClose: 3000,
        style: {
          background: "#ffffff", // White background
          color: "#000000", // Black text
        },
      });
      setIsSubmitting(false);
      setEmail("");
      setIsFocused(false);
      return;
    }

    // Firestore logic remains unchanged
    try {
      const userRef = doc(db, "waitlist", email);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        toast.info("You're already on the Qlueless waitlist!", {
          position: "top-center",
          autoClose: 3000,
          style: {
            background: "#ffffff", // White background
            color: "#000000", // Black text
          },
        });
      } else {
        await setDoc(userRef, { email, createdAt: new Date() });
        toast.success("Welcome! You've joined the Qlueless waitlist.", {
          position: "top-center",
          autoClose: 3000,
          style: {
            background: "#ffffff", // White background
            color: "#000000", // Black text
          },
        });
      }
    } catch (error) {
      console.error("Firestore Error:", error.message);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        style: {
          background: "#ffffff", // White background
          color: "#000000", // Black text
        },
      });
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setIsFocused(false);
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-md rounded-full overflow-hidden shadow-lg">
      <div className="relative flex w-full border border-white h-auto rounded-full ">
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(email.length > 0)} // Keeps label hidden if email is entered
          className="w-full h-[50px] bg-transparent text-white pl-6 pr-1 text-[18px] outline-none font-gilroy  transition-shadow duration-300 focus:shadow-lg tracking-[2px]"
          disabled={isSubmitting}
        />
        <label
          className={`absolute  top-3 text-white lg:text-[20px] md:text-[18px] text-[16px] ml-[22%]  lg:ml-[24%] transition-opacity duration-300 ${
            isFocused ? "opacity-0" : "opacity-100"
          } pointer-events-none`}
        >
          enter your email
        </label>

        <button
          onClick={handleClick}
          disabled={isSubmitting}
          className="rounded-full bg-white w-15  flex items-center justify-center transition-transform hover:scale-105"
        >
          {isSubmitting ? (
            <div className="bg-white rounded-full shadow-lg flex flex-col items-center">
              <div className="animate-spin h-6 w-6 border-t-4 border-black mt-1 border-solid rounded-full"></div>
            </div>
          ) : (
            <img src={send} className="h-10 w-10" />
          )}
        </button>
      </div>

      {/* Submit Button with Curved Right Side */}
    </div>
  );
};

export default EnterEmailButton;
