import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight request
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers });
  }

  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400, headers }
      );
    }

    // Prepare email data
    const msg = {
      to: 'your-email@example.com', // Replace with your email
      from: 'no-reply@yourwebsite.com', // Replace with your verified sender
      subject: 'New Newsletter Subscription',
      text: `
        New newsletter subscription:
        
        Name: ${name || 'Not provided'}
        Email: ${email}
      `,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Subscription successful' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500, headers }
    );
  }
} 