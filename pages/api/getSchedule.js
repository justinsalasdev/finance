import nextConnect from "next-connect"
import getSchedule from "../../middlewares/getSchedule"
import initDatabase from "../../middlewares/initDatabase"

const handler = nextConnect()
handler.use(initDatabase)
handler.use(getSchedule)

handler.get(async (req, res) => {
	res.json(req.schedule)
})

export default handler
