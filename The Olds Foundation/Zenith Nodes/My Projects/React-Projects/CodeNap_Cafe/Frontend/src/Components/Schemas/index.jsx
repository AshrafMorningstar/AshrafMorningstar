import *as Yup from "yup"

export const contactSchema = Yup.object({
    fname: Yup.string().min(3).max(25).required("Enter Name"),
    lname: Yup.string().min(2).max(10).required("Enter Last Name"),
    email: Yup.string().email().required("Enter Your Email"),
    phone: Yup.number().min(10).required("Enter Phone Number"),
    product: Yup.string().required("Enter Product Name"),
});

export const menuSchema =Yup.object({
    Menu_name: Yup.string().min(5).max(25).required("Enter Name"),
    Menu_phone: Yup.number().min(10).required("Enter Phone Number"),
    Menu_product: Yup.string().max(10).required("Enter Product Name"),
    qty: Yup.number().required("Enter Qty"),
    address: Yup.string().min(5).max(100).required("Enter Your Address"),
    city: Yup.string().required("Select your City"),
    country: Yup.string().required("Select Country"),
    pinCode: Yup.number().min(10).required("Enter Your PinCode"),
})


export const reservationSchema = Yup.object({
    customerName: Yup.string().min(5).max(25).required("Enter more than 2 and Less than 6 Person"),
    person: Yup.number().required("Enter more than 2 and Less than 6 Person"),
    date: Yup.string().required("Date is Required"),
    time: Yup.string().required("Time is Required"),
})


export const subscribeSchema = Yup.object({
    Subscribe_email: Yup.string().email().required("Enter Your Email"),
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar