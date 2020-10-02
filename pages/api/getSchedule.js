import nextConnect from "next-connect"
import initDatabase from "../../middlewares/initDatabase"

const handler = nextConnect()
handler.use(initDatabase)

handler.get(async (req, res) => {
	try {
		const schedules = req.db.collection("schedules")
		const result = await schedules.findOne({ name: "BYB" })
		res.json(result)
	} catch (error) {
		console.log(error)
		res.status(400).json({
			error: "hahaha"
		})
	}
})

export default handler
