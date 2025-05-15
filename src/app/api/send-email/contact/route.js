import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

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
      replyTo: {
        name: `${firstName} ${lastName}`,
        address: email,
      },
      to: "andrejkoller@outlook.com",
      subject: `Nachricht von ${firstName} ${lastName}`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #696969; background-color: #080808;">
    <h2 style="color: #ead8c2;">Neue Kontaktanfrage</h2>
    
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold;">Vorname:</td>
        <td style="padding: 8px;">${firstName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Nachname:</td>
        <td style="padding: 8px;">${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">E-Mail:</td>
        <td style="padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Telefon:</td>
        <td style="padding: 8px;">${telephone}</td>
      </tr>
    </table>

    <div style="margin-top: 30px;">
      <h3 style="color: #ead8c2;">Nachricht</h3>
      <p style="white-space: pre-line; line-height: 1.6; color: #333;">${message}</p>
    </div>

    <hr style="margin-top: 40px;" />
    <p style="font-size: 12px; color: #888;">Diese Nachricht wurde über dein Kontaktformular gesendet.</p>
  </div>
`,
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
