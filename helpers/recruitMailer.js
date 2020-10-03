import nodemailer from "nodemailer"
import recruitMailGenerator from "./recruitMailGenerator"

export default async function recruitMailer(emailData, schedule) {
	const emailTemplate = recruitMailGenerator(emailData, schedule)
	const { email } = emailData
	let transporter = nodemailer.createTransport({
		host: "webhost.dynadot.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	})

	let info = await transporter.sendMail({
		from: `"Justin Salas" save@justinsalas.cc`,
		to: `${email}`, // list of receivers
		cc: `save@justinsalas.cc`,
		subject: "A warm greeting from Justin Salas", // Subject line
		html: emailTemplate
	})

	return info
}
