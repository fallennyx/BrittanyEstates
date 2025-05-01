// netlify/functions/send-email.js
import { Resend } from 'resend';
const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { to, subject, templateProps } = JSON.parse(event.body);

    try {
        const email = await resend.emails.send({
            from: 'Brittany Estates <onboarding@resend.dev>',
            to,
            subject,
            html: templateProps,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', email }),
        };
    } catch (error) {
        console.error('Resend API error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
        };
    }
};
