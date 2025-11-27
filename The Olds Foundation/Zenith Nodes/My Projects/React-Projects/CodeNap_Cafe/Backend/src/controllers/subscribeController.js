import nodemailer from "nodemailer";

export const sendSubscribeMail = async (req, res) => {
  try {
    const { email } = req.body;

    // ✅ Validate required field
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // ✅ Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // ✅ Email body (HTML)
    const htmlBody = `
      <h2>📬 New Newsletter Subscription</h2>
      <p><strong>Subscriber Email:</strong> ${email}</p>`;

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_RECEIVER_EMAIL,
      subject: `📬 New Newsletter Subscription`,
      html: htmlBody,
    };

    // ✅ Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error sending subscription email:", error);
        return res.status(500).json({ message: "Failed to send subscription email" });
      }
      console.log("✅ Subscription email sent:", info.response);
      res.status(200).json({
        message:
          "✅ Thanks for subscribing to our updates. Fresh brews and news are coming your way! ☕",
      });
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ message: "Server error while sending email" });
  }
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar