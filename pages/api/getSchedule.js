import nextConnect from "next-connect"
import initDatabase from "../../middlewares/initDatabase"

// const collectionName = process.env.MONGO_CNAME

const handler = nextConnect()
handler.use(initDatabase)

handler.get(async (req, res) => {
	try {
		const emails = req.db.collection(collectionName)
		await emails.insertOne(req.validBody)
		res.json({
			info: {
				message: "Email saved successfully",
				type: "save",
				from: "db"
			}
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			error: "hahaha"
		})
	}
})

export default handler
