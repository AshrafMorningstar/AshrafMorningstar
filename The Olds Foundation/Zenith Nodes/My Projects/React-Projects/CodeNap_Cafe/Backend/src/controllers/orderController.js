import nodemailer from "nodemailer";

export const sendOrderMail = async (req, res) => {
  try {
    const { Menu_name, Menu_phone, Menu_product, qty, address, country, city, pinCode } = req.body;

    // ✅ Validate required fields
    if (!Menu_name || !Menu_phone || !Menu_product || !qty || !country || !city || !address || !pinCode) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Create mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // ✅ Define HTML email body
    const htmlBody = `
      <h2>New Product Order</h2>
      <p><strong>Customer Name:</strong> ${Menu_name}</p>
      <p><strong>Phone:</strong> ${Menu_phone}</p>
      <p><strong>Product:</strong> ${Menu_product}</p>
      <p><strong>Quantity:</strong> ${qty}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Pin Code:</strong> ${pinCode}</p>
    `;

    // ✅ Email options
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_RECEIVER_EMAIL,
      subject: `🛍️ New Product Order from ${Menu_name}`,
      html: htmlBody,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "✅ Your order has been received. We're brewing it fresh — get ready to sip happiness! ☕🛍️",
    });
  } catch (error) {
    console.error("❌ Error sending order mail:", error);
    res.status(500).json({ error: "Failed to send order email" });
  }
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar