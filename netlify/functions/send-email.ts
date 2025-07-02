import nodemailer from 'nodemailer';

export async function handler(event: any) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: 'Method Not Allowed',
        };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const isContactForm = data.type === 'contact';

        const subject = isContactForm
            ? `New Contact Inquiry from ${data.name}`
            : `New Booking Request: ${data.tour_title}`;

        const html = `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h2 style="color: #00856a;">${isContactForm ? 'New Contact Inquiry' : 'New Safari Booking Request'}</h2>
          <table style="width: 100%; font-size: 14px; color: #333;">
            ${
            isContactForm
                ? `
              <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>
              <tr><td><strong>Tour Type:</strong></td><td>${data.tourType}</td></tr>
              <tr><td><strong>Group Size:</strong></td><td>${data.numberOfPeople}</td></tr>
              <tr><td><strong>Preferred Date:</strong></td><td>${data.preferredDate}</td></tr>
              <tr><td style="vertical-align: top;"><strong>Message:</strong></td><td>${data.message || 'None'}</td></tr>
              `
                : `
              <tr><td><strong>Tour:</strong></td><td>${data.tour_title}</td></tr>
              <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
              <tr><td><strong>Adults:</strong></td><td>${data.adults}</td></tr>
              <tr><td><strong>Children:</strong></td><td>${data.children}</td></tr>
              <tr><td><strong>Date:</strong></td><td>${data.tourDate}</td></tr>
              <tr><td style="vertical-align: top;"><strong>Special Requests:</strong></td><td>${data.specialRequests || 'None'}</td></tr>
              `
        }
          </table>
          <hr style="margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This email was generated from the Duruma Tours website.</p>
        </div>
      </div>
    `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Duruma Tours" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER || data.email,
            subject,
            html,
        });

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ success: true }),
        };
    } catch (err) {
        console.error('❌ Email error:', err);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ success: false, error: String(err) }),
        };
    }
}
