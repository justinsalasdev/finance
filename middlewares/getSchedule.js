export default async function getSchedule(req, res, next) {
	try {
		const schedules = req.db.collection("schedules")
		const schedule = await schedules.findOne({ name: "BYB" })
		req.schedule = schedule
		return next()
	} catch (error) {
		console.log(error)
		res.status(400).json({
			error: {
				message: "Failed to get schedule"
			}
		})
	}
}
