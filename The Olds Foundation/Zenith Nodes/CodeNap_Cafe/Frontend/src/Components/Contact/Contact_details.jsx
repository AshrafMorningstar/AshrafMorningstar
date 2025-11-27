import React, { useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../Schemas";
import Modal from "../Modal/Modal.jsx";
import Success from "../../assets/model-img/Success.png";
import ErrorImg from "../../assets/model-img/ErrorImg.png";
import AnimatedButton from "../Motion/AnimatedButton.jsx";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

const ContactDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
    setModalTitle("");
    setModalIcon("");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const contentType = response.headers.get("content-type");
        const data =
          contentType && contentType.includes("application/json")
            ? await response.json()
            : null;

        if (response.ok) {
          setModalIcon(Success);
          setModalTitle("Message Sent!");
          setModalMessage(
            data?.message ||
              "✅ Thanks for reaching out! We'll get back to you shortly. Enjoy your coffee! ☕"
          );
          setIsModalOpen(true);
          resetForm();
        } else {
          const errorMessage =
            data?.error || `❌ Failed with status code ${response.status}`;
          console.error("Server error:", response.status, errorMessage);
          setModalIcon(ErrorImg);
          setModalTitle("Submission Failed");
          setModalMessage(errorMessage);
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error("Frontend error:", error);
        setModalIcon(ErrorImg);
        setModalTitle("Server Error");
        setModalMessage("❌ Server error. Please try again.");
        setIsModalOpen(true);
      }
    },
  });

  return (
    <div className="flex justify-center items-center py-30  w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl px-6 md:px-10 lg:px-10 gap-10">
        {/* Left Column - Form Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Heading */}
          <div>
            <div className="w-14 h-1.5 bg-[#e4594d] rounded-xl mb-3"></div>
            <h2 className="text-2xl text-[#e6d3c2] font-bold mb-1">
              Contact Us
            </h2>
            <h1 className="text-4xl md:text-5xl text-[#f8d091] font-bold mb-10">
              Let’s Work Together?
            </h1>
          </div>

          {/* Input Fields */}
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <div>
                {/* this input for First Name */}
                <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 bg-[#f4f5f8]">
                  <input
                    className=" w-full  focus:outline-0 border-o outline-0  focus:bg-gray-300 py-1 px-2 my-1 rounded-md"
                    type="name"
                    autoComplete="off"
                    name="fname"
                    id="fname"
                    placeholder="Enter First Name"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.fname && formik.touched.fname ? (
                    <p className="form-error px-2 text-sm text-red-600">
                      {formik.errors.fname}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                {/* this input for Last Name */}
                <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 bg-[#f4f5f8] focus:outline-3 focus:bg-white focus:outline-[#f8d091] border-o outline-0 transition duration-500 ease-in-out">
                  <input
                    className=" w-full  focus:outline-0 border-o outline-0  focus:bg-gray-300 py-1 px-2 my-1  rounded-md"
                    type="name"
                    autoComplete="off"
                    name="lname"
                    id="lname"
                    placeholder="Enter Last Name"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lname && formik.touched.lname ? (
                    <p className="form-error px-2 text-sm text-red-600">
                      {formik.errors.lname}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {/* this input for Email */}
            <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 mb-3 bg-[#f4f5f8] focus:outline-3 focus:bg-white focus:outline-[#f8d091] border-o outline-0 transition duration-500 ease-in-out">
              <input
                className=" w-full focus:outline-0 border-o outline-0 focus:bg-gray-300 py-1 px-2 my-1 rounded-md"
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            {/* this input for Phone Number */}
            <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 mb-3 bg-[#f4f5f8] focus:outline-3 focus:bg-white focus:outline-[#f8d091] border-o outline-0 transition duration-500 ease-in-out">
              <input
                className=" w-full focus:outline-0 border-o outline-0 focus:bg-gray-300 py-1 px-2 my-1 rounded-md"
                type="tel"
                autoComplete="off"
                name="phone"
                id="phone"
                maxLength={10}
                placeholder="Enter Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {formik.errors.phone}
                </p>
              ) : null}
            </div>

            {/* this input for Product */}
            <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 mb-3 bg-[#f4f5f8] focus:outline-3 focus:bg-white focus:outline-[#f8d091] border-o outline-0 transition duration-500 ease-in-out">
              <select
                className="w-full focus:outline-0 border-o outline-0 focus:bg-gray-300 py-1 px-2 my-1 rounded-md"
                name="product"
                id="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Choose Product</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="americano">Americano</option>
                <option value="conpana">Conpana</option>
                <option value="affogato">Affogato</option>
                <option value="luno">Lungo</option>
                <option value="mocha">Mocha</option>
                <option value="ristresto">Ristresto</option>
                <option value="espresso">Espresso</option>
              </select>
              {formik.errors.product && formik.touched.product ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {formik.errors.product}
                </p>
              ) : null}
            </div>

            {/* this input for TextArea */}
            <div className="flex-1 text-black text-base md:text-xl font-medium rounded-lg py-1 px-2 mb-3 bg-[#f4f5f8] focus:outline-3 focus:bg-white focus:outline-[#f8d091] border-o outline-0 transition duration-500 ease-in-out">
              <textarea
                className=" w-full focus:outline-0 border-o outline-0 focus:bg-gray-300 py-1 pl-2 my-1 rounded-md resize-none"
                autoComplete="off"
                rows="4"
                name="message"
                id="message"
                placeholder="Enter Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {/* Buttons */}
            <div className=" mt-5 relative">
              <button
                type="submit"
                className=" absolute contant_Hover overflow-hidden right-0 group px-6 py-3 rounded-xl font-bold text-white bg-[#e4594d] "
              >
                Send Message
              </button>
            </div>

            {/* model code section */}
            <Modal
              onClose={closeModal}
              isOpen={isModalOpen}
              // onClose={() => setIsModalOpen(false)}
              icon={modalIcon}
              title={modalTitle}
              message={modalMessage}
            />
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <div className="w-14 h-1.5 bg-[#e4594d] rounded-xl mb-3"></div>
            <h2 className="text-2xl text-[#e6d3c2] font-bold mb-1">
              Need any help?
            </h2>
            <h1 className="text-4xl md:text-5xl text-[#f8d091] font-bold mb-3">
              Let’s Work Together?
            </h1>
            <p className="text-base text-[#e6d3c2] font-serif mb-6">
              Contact Bonum eDesigns IT Solutions at any time for your digital
              needs. We're here to assist you! Call us right away.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-phone-flip text-white text-2xl p-4 rounded-xl bg-[#e4594d]"></i>
              <div>
                <h3 className="text-lg text-black font-bold mb-1">
                  Have any question?
                </h3>
                <p className="text-sm text-[#e6d3c2]">India +91 9022606597</p>
                <p className="text-sm text-[#e6d3c2]">USA +1 (360)232-6400</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-envelope-open-text text-white text-2xl p-4 rounded-xl bg-[#e4594d]"></i>
              <div>
                <h3 className="text-lg text-black font-bold mb-1">
                  Write email
                </h3>
                <p className="text-sm text-[#e6d3c2]">vikrampal038@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot text-white text-2xl p-4 rounded-xl bg-[#e4594d]"></i>
              <div>
                <h3 className="text-lg text-black font-bold mb-1">Mumbai</h3>
                <p className="text-sm text-[#e6d3c2]">
                  Hanuman Nagar, Goregaon (East), 400065
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-location-crosshairs text-white text-2xl p-4 rounded-xl bg-[#e4594d]"></i>
              <div>
                <h3 className="text-lg text-black font-bold mb-1">New Delhi</h3>
                <p className="text-sm text-[#e6d3c2]">
                  1121, Jhanvi Pallavi, Chanakyapuri, New Delhi, Delhi 110021
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-earth-europe text-white text-2xl p-4 rounded-xl bg-[#e4594d]"></i>
              <div>
                <h3 className="text-lg text-black font-bold mb-1">Bangalore</h3>
                <p className="text-sm text-[#e6d3c2]">
                  23/2 Coffee Day Square, Vittal Mallya Rd, Bengaluru, 560001
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar