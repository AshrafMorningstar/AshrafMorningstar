import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  try {
    const { fname, lname, email, phone, product, message } = req.body;

    if (!fname || !lname || !email || !phone || !product || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Configure transporter with your environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_RECEIVER_EMAIL,
      subject: `New contact from ${fname} ${lname}`,
      text: `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "✅ Thanks for reaching out! We'll get back to you shortly. Enjoy your coffee! ☕" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar