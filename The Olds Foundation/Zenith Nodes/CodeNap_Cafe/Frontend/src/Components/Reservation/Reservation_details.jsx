import { React, useState } from "react";
import "../Reservation/Reservation.css";
import { useFormik } from "formik";
import { reservationSchema } from "../Schemas";
import Modal from "../Modal/Modal.jsx";
import TableReservation from "../../assets/model-img/TableReservation.png";
import ErrorImg from "../../assets/model-img/ErrorImg.png";
import AnimatedButton from "../Motion/AnimatedButton.jsx";
import MotionWrapper from "../Motion/MotionWrapper.jsx";
import { zoomIn, fadeUp } from "../../utils/motionVariants.js";

const initialValues = {
  customerName: "",
  person: "",
  date: "",
  time: "",
};

const Reservation_details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: reservationSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/reservation`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();

          if (response.ok) {
            setModalIcon(TableReservation);
            setModalTitle("Reservation Successful!");
            setModalMessage(
              "✅ Your table is booked. We look forward to serving you the perfect cup! ☕🍽️"
            );
            setIsModalOpen(true);
            action.resetForm();
          } else {
            setModalIcon(ErrorImg);
            setModalMessage(data?.error || "❌ Reservation failed.");
            setIsModalOpen(true);
          }
        } catch (error) {
          console.error("Frontend error:", error);
          setModalIcon(ErrorImg);
          setModalMessage("❌ Server error. Please try again.");
          setIsModalOpen(true);
        }
      },
    });

  return (
    <div className="py-20 px-4 flex justify-center items-center">
      <div
        className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {/* Google Map */}
        <MotionWrapper
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full md:w-1/2 h-64 md:h-auto"
        >
          <iframe
            className="w-full h-full object-cover p-2 md:p-4 rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.2289725881!2d72.71412695097185!3d19.082806704321097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1748105303535!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mumbai Map"
          ></iframe>
        </MotionWrapper>

        {/* Right-side content */}
        <MotionWrapper
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full md:w-1/2 p-6 md:p-10 bg-[#4a3a3a] rounded-2xl"
        >
          <h1 className="w-fit text-lg md:text-xl py-1 px-3 rounded-lg font-bold mb-4 bg-[#E5594C] ">
            Reservation
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-[#F5E7CD] mb-6">
            Booking A Table
          </p>

          {/* form section */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              {/* Person input */}
              <div className="relative bg-[#614343] flex items-center rounded-lg">
                <input
                  className="py-3 px-4 w-full text-base md:text-xl rounded-lg font-bold text-white border-0 outline-0 focus:outline-0 focus:bg-[#684848]"
                  type="text"
                  autoComplete="off"
                  id="customerName"
                  name="customerName"
                  placeholder="Enter Your Name"
                  value={values.customerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i className="fa-solid fa-user-large absolute right-4 text-lg md:text-xl text-white pointer-events-none"></i>
              </div>
              {errors.customerName && touched.customerName ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {errors.customerName}
                </p>
              ) : null}
            </div>

            {/* Person input */}
            <div>
              <div className="relative bg-[#614343] flex items-center rounded-lg">
                <input
                  className="py-3 px-4 w-full text-base md:text-xl rounded-lg font-bold text-white border-0 outline-0 focus:outline-0 focus:bg-[#684848]"
                  type="number"
                  autoComplete="off"
                  id="person"
                  name="person"
                  placeholder="4 Person"
                  value={values.person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i className="fa-solid fa-user-large absolute right-4 text-lg md:text-xl text-white pointer-events-none"></i>
              </div>
              {errors.person && touched.person ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {errors.person}
                </p>
              ) : null}
            </div>

            {/* Date input */}
            <div>
              <div className="relative bg-[#614343] flex items-center rounded-lg">
                <input
                  className="py-3 px-4 w-full text-base md:text-xl rounded-lg font-bold text-white border-0 outline-0 focus:outline-0 focus:bg-[#684848] custom-date-input placeholder:text-gray-500"
                  type="date"
                  autoComplete="off"
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.date && touched.date ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {errors.date}
                </p>
              ) : null}
            </div>

            {/* Time input */}
            <div>
              <div className="relative bg-[#614343] flex items-center rounded-lg">
                <input
                  className="py-3 px-4 w-full text-base md:text-xl rounded-lg font-bold text-white border-0 outline-0 focus:outline-0 focus:bg-[#684848] custom-time-input
                placeholder:text-gray-500"
                  type="time"
                  autoComplete="off"
                  id="time"
                  name="time"
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.time && touched.time ? (
                <p className="form-error px-2 text-sm text-red-600">
                  {errors.time}
                </p>
              ) : null}
            </div>

            {/* Submit Button */}
            <AnimatedButton
              type="submit"
              className="w-full px-4 py-3 rounded-xl font-bold text-white bg-[#e4594d] hover:bg-[#F5E7CD] hover:text-black transition duration-1000 ease-in-out"
            >
              BOOK A TABLE
            </AnimatedButton>

            {/* model code section */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              icon={modalIcon}
              title={modalTitle}
              message={modalMessage}
            />
          </form>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Reservation_details;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar