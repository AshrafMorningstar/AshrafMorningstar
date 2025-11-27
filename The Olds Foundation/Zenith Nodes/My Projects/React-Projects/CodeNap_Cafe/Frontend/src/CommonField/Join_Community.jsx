import React, { useState } from "react";
import { useFormik } from "formik";
import { subscribeSchema } from "../Components/Schemas";
import Modal from "../Components/Modal/Modal";
import Subscribed from "../assets/model-img/Subscribed.png";
import ErrorImg from "../assets/model-img/ErrorImg.png";
import AnimatedButton from "../Components/Motion/AnimatedButton";

const initialValues = {
  Subscribe_email: "",
};

const Join_Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: subscribeSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // ✅ Sending email key as backend expects
            body: JSON.stringify({ email: values.Subscribe_email }),
          });

          const data = await response.json();

          if (response.ok) {
            setModalIcon(Subscribed);
            setModalTitle("Subscribed!");
            setModalMessage(
              "✅ Thanks for subscribing to our updates. Fresh brews and news are coming your way! ☕📩"
            );
            setIsModalOpen(true);
            action.resetForm();
          } else {
            setModalIcon(ErrorImg);
            setModalTitle("Subscription Failed");
            setModalMessage(data?.error || "❌ Subscription failed.");
            setIsModalOpen(true);
          }
        } catch (error) {
          console.error("❌ Frontend error:", error);
          setModalIcon(ErrorImg);
          setModalTitle("Server Error");
          setModalMessage("❌ Server error. Please try again.");
          setIsModalOpen(true);
        }
      },
    });

  return (
    <>
      <div className="w-full">
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-5 md:py-15 bg-[#F4E7CC] w-full">
          <h1 className="text-[25px] md:text-[50px] lg:text-[80px] tracking-wider font-extrabold text-[#614343] md:text-shadow-lg/90 text-center md:text-left">
            Join <em>The</em>{" "}
            <span
              className="text-[#E5584D]"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Coffee Community
            </span>
          </h1>

          <h4 className="text-md sm:text-xl md:text-2xl text-[#777071] py-4 text-center md:text-left">
            Become a part of our coffee lovers’ community! Subscribe to our
            newsletter now.
          </h4>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="py-3 md:py-7 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full">
              <div className="w-full sm:w-2/3 lg:max-w-[600px]">
                <input
                  className="w-full rounded-xl border-4 font-semibold text-black text-lg md:text-2xl py-3 px-4 border-[#E5584D] focus:outline-none focus:border-[#777071] transition"
                  type="email"
                  autoComplete="off"
                  name="Subscribe_email"
                  id="Subscribe_email"
                  placeholder="Enter Email"
                  value={values.Subscribe_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Subscribe_email && touched.Subscribe_email ? (
                  <p className="form-error px-2 text-sm font-bold text-red-600 mt-1">
                    {errors.Subscribe_email}
                  </p>
                ) : null}
              </div>

                <AnimatedButton onClick={()=>{}}disabled>
                <div className="w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto text-lg md:text-2xl px-6 py-3 rounded-xl font-bold text-white bg-[#ECAD54] hover:bg-[#777071] transition duration-700 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
                </AnimatedButton>

            </div>

            {/* model code section */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="text-center">
                <img
                  src={modalIcon}
                  alt="modal icon"
                  className="mx-auto w-24 h-24"
                />
                <h2 className="text-xl font-bold mt-2">{modalTitle}</h2>
                <p className="text-sm mt-1">{modalMessage}</p>
              </div>
            </Modal>
          </form>

          <div className="text-[#442725] flex flex-col md:flex-row md:justify-between font-bold items-center text-sm md:text-lg pt-5 md:pt-15 gap-4 md:gap-0">
            <div>
              <p>All rights reserved to CodeNap Café 2025.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 uppercase text-center sm:text-left">
              <p className="hover:text-[#E5584D] transition duration-700 ease-in-out cursor-pointer">
                Terms of use
              </p>
              <p className="hover:text-[#E5584D] transition duration-700 ease-in-out cursor-pointer">
                Cookie policy
              </p>
              <p className="hover:text-[#E5584D] transition duration-700 ease-in-out cursor-pointer">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join_Community;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar