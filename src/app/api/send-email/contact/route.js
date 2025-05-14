import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Empfangene Daten:", body);

    const { firstName, lastName, email, telephone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    await transporter.sendMail({
      from: "andrejkoller@outlook.com",
      to: "andrejkoller@outlook.com",
      subject: `Nachricht von ${firstName} ${lastName}`,
      html: `<p>Von:<br/>${firstName}<br/>${lastName}<br/>${email}<br/>${telephone || ""}</p><p>${message}</p>`,
    });

    return Response.json(
      { message: "E-Mail erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der Mail:", error);
    return Response.json(
      { message: "Fehler beim Senden der Mail" },
      { status: 500 }
    );
  }
}
