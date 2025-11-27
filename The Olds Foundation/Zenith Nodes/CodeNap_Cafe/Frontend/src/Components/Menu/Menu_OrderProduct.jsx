import { React, useState } from "react";
import worldMap from "../../assets/Menu/world-map.png";
import { useFormik } from "formik";
import { menuSchema } from "../Schemas";
import Modal from "../Modal/Modal.jsx";
import OrderProduct from "../../assets/model-img/OrderPLace.png";
import ErrorImg from "../../assets/model-img/ErrorImg.png";
import AnimatedButton from "../Motion/AnimatedButton.jsx";

const initialValues = {
  Menu_name: "",
  Menu_phone: "",
  Menu_product: "",
  qty: "",
  address: "",
  city: "",
  country: "",
  pinCode: "",
};

const Menu_OrderProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: menuSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/order`,
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
            setModalIcon(OrderProduct);
            setModalTitle("Order Placed!");
            setModalMessage(
              "✅ Your order has been received. We're brewing it fresh — get ready to sip happiness! ☕🛍️"
            );
            setIsModalOpen(true);
            action.resetForm();
          } else {
            setModalIcon(ErrorImg);
            setModalMessage(data?.error || "❌ Failed to place order.");
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
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10">
        {/* Order Now section */}
        <div className="w-full md:w-1/2 text-black mb-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#ecac55] font-extrabold font-mono mb-6">
            Buy our products from anywhere
          </h1>

          {/* Input Section */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Phone */}
            <div className="flex flex-col md:flex-row gap-3 mb-3 w-full">
              <div className="w-full">
                <input
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  type="text"
                  autoComplete="off"
                  name="Menu_name"
                  id="Menu_name"
                  placeholder="Enter Name"
                  value={values.Menu_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Menu_name && touched.Menu_name ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.Menu_name}
                  </p>
                ) : null}
              </div>

              <div className="w-full">
                <input
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  type="tel"
                  autoComplete="off"
                  name="Menu_phone"
                  id="Menu_phone"
                  maxLength={10}
                  placeholder="Enter Phone Number"
                  value={values.Menu_phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Menu_phone && touched.Menu_phone ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.Menu_phone}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Product and Qty */}
            <div className="flex flex-col md:flex-row gap-3 mb-3 w-full">
              <div className="w-full">
                <select
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  name="Menu_product"
                  autoComplete="off"
                  id="Menu_product"
                  value={values.Menu_product}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                {errors.Menu_product && touched.Menu_product ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.Menu_product}
                  </p>
                ) : null}
              </div>

              <div className="w-full">
                <input
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  type="number"
                  autoComplete="off"
                  name="qty"
                  id="qty"
                  maxLength={10}
                  placeholder="QTY"
                  value={values.qty}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.qty && touched.qty ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.qty}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Address and City */}
            <div className="flex flex-col md:flex-row gap-3 mb-3 w-full">
              <div className="w-full">
                <input
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  type="text"
                  autoComplete="off"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.address}
                  </p>
                ) : null}
              </div>

              <div className="w-full">
                <select
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  name="city"
                  autoComplete="off"
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Choose City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="ahmedabad">Ahmedabad</option>
                </select>
                {errors.city && touched.city ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.city}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Country and PinCode */}
            <div className="flex flex-col md:flex-row gap-3 mb-3 w-full">
              <div className="w-full">
                <select
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  name="country"
                  autoComplete="off"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Choose Country</option>
                  <option value="india">India</option>
                </select>
                {errors.country && touched.country ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.country}
                  </p>
                ) : null}
              </div>

              <div className="w-full">
                <input
                  className="w-full text-base md:text-xl font-medium rounded-lg py-2 px-3 bg-[#f4f5f8] focus:outline-none focus:bg-gray-300"
                  type="number"
                  autoComplete="off"
                  name="pinCode"
                  id="pinCode"
                  maxLength={6}
                  placeholder="PinCode"
                  value={values.pinCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.pinCode && touched.pinCode ? (
                  <p className="form-error px-2 text-sm text-red-600">
                    {errors.pinCode}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Submit Button */}
            <AnimatedButton>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl font-bold text-white bg-[#e4594d] hover:bg-[#babdbf] hover:text-black transition duration-700 ease-in"
              >
                ORDER NOW
              </button>
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
        </div>

        {/* Map Image section */}
        <div className="w-full md:w-1/2 mb-5">
          <img
            className="w-full h-auto p-3 rounded-2xl object-cover"
            src={worldMap}
            alt="menu world map"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu_OrderProduct;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar