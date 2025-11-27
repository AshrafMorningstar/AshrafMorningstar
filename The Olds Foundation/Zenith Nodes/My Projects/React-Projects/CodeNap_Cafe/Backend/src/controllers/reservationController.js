import nodemailer from "nodemailer";

export const sendReservationMail = async (req, res) => {
  try {
    const { customerName, person, date, time } = req.body;

    // ✅ Validate required fields
    if (!customerName || !person || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // ✅ Compose HTML email
    const htmlBody = `
      <h2>🍽️ New Table Reservation</h2>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>No. of Persons:</strong> ${person}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    `;

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_RECEIVER_EMAIL,
      subject: `🍽️ Table Reservation by ${customerName}`,
      html: htmlBody,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "✅ Your table is booked. We look forward to serving you the perfect cup! ☕🍽️",
    });
  } catch (error) {
    console.error("❌ Error sending reservation email:", error);
    res.status(500).json({ message: "Failed to send reservation email" });
  }
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar