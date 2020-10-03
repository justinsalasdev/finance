import nextConnect from "next-connect"
import initDatabase from "../../../middlewares/initDatabase"
import validator from "../../../middlewares/validator"
import instructionMailer from "../../../helpers/instructionMailer"
import recruitMailer from "../../../helpers/recruitMailer"
import nodemailer from "nodemailer"
import createIndex from "../../../middlewares/createIndex"
import getSchedule from "../../../middlewares/getSchedule"

const collectionName = "recruits"

const handler = nextConnect()
handler.use(initDatabase)
handler.use(createIndex(collectionName))
handler.use(validator)
handler.use(getSchedule)

handler.post(async (req, res) => {
	const {
		query: { schedule }
	} = req
	try {
		const emails = req.db.collection(collectionName)
		await emails.insertOne({ ...req.validBody, schedule })
		const info =
			schedule === "now"
				? await instructionMailer(req.validBody, req.schedule)
				: await recruitMailer(req.validBody, req.schedule)

		console.log("Message sent: %s", info.messageId)
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
		res.json({
			info: {
				message: "Data saved successfully",
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
