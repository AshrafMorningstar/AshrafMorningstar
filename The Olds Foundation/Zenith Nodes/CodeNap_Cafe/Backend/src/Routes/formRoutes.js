import express from "express";

// ✅ Individual controller imports
import { sendContactMail } from "../controllers/contactController.js";
import { sendSubscribeMail } from "../controllers/subscribeController.js";
import { sendOrderMail } from "../controllers/orderController.js";
import { sendReservationMail } from "../controllers/reservationController.js";

const router = express.Router();

// ✅ Optional Logger Middleware
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ✅ Route Definitions
router.post("/contact", sendContactMail);
router.post("/subscribe", sendSubscribeMail);
router.post("/order", sendOrderMail);
router.post("/reservation", sendReservationMail);

export default router;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar