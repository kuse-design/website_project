import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Allow both Vite default (5173) and configured port (3000)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.VITE_API_URL
].filter(Boolean)

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

transporter.verify((err) => {
  if (err) {
    console.error('SMTP connection failed:', err.message)
  } else {
    console.log('SMTP server ready')
  }
})

app.post('/api/contact', async (req, res) => {
  console.log('Contact form submission received:', req.body)
  
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !phone || !message) {
    console.log('Validation failed: missing fields')
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: `"Kaizen MFB Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: subject || `New Contact Form: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #c9a227;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
    res.json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Email send failed:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Contact API server running on http://localhost:${PORT}`)
  console.log(`Allowed origins:`, allowedOrigins)
})