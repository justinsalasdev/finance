import nodemailer from "nodemailer"
import instructionGenerator from "./instructionGenerator"

export default async function instructionMailer(emailData, schedule) {
	const emailTemplate = instructionGenerator(emailData, schedule)
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
		subject: "PRU Life UK : Career Preview Instructions", // Subject line
		html: emailTemplate
	})

	return info
}
