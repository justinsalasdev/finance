import nextConnect from "next-connect"
import initDatabase from "../../middlewares/initDatabase"
import validator from "../../middlewares/validator"
import mailer from "../../helpers/mailer"
import nodemailer from "nodemailer"
import createIndex from "../../middlewares/createIndex"

const handler = nextConnect()
handler.use(initDatabase)
handler.use(createIndex)
handler.use(validator)

handler.post(async (req, res) => {
	try {
		const emails = req.db.collection("prospects")
		await emails.insertOne(req.validBody)
		const info = await mailer(req.validBody)
		console.log("Message sent: %s", info.messageId)
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
		res.json({
			info: {
				message: "Email saved successfully",
				type: "save",
				from: "db"
			}
		})
	} catch (error) {
		console.log("**** save email ****", error)
		if (error.keyPattern) {
			res.status(400).json({
				error: {
					message: "Email already listed",
					type: "client",
					from: "db"
				}
			})
		}
		res.status(500).json({
			error: {
				message: "Error saving email",
				type: "save",
				from: "db"
			}
		})
	}
})

export default handler
