import { serve } from 'bun';
import * as nodemailer from 'nodemailer';

console.log("✅ Bun email server started on port 3001");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
};

serve({
    port: 3001,

    async fetch(req) {
        if (req.method === 'OPTIONS') {
            return new Response(null, {
                status: 204,
                headers: corsHeaders,
            });
        }

        if (req.method !== 'POST') {
            return new Response('Method Not Allowed', {
                status: 405,
                headers: corsHeaders,
            });
        }

        try {
            const data = await req.json();
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

            const mailOptions = {
                from: `"Duruma Tours" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_RECEIVER || data.email,
                subject,
                html,
            };

            await transporter.sendMail(mailOptions);
            console.log(`✅ ${isContactForm ? 'Contact' : 'Booking'} email sent`);

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: corsHeaders,
            });
        } catch (err) {
            console.error("❌ Email error:", err);
            return new Response(JSON.stringify({ success: false, error: err }), {
                status: 500,
                headers: corsHeaders,
            });
        }
    },
});
