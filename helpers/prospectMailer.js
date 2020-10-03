import nodemailer from "nodemailer"
import prospectMailGenerator from "./prospectMailGenerator"

export default async function prospectMailer(emailData) {
	const emailTemplate = prospectMailGenerator(emailData)
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
		subject: "A warm welcome from your financial advisor", // Subject line
		html: emailTemplate
	})

	return info
}
