const collectionName = process.env.MONGO_CNAME

async function createIndex(req, res, next) {
	try {
		const prospects = req.db.collection(collectionName)
		if (await prospects.indexExists("email")) {
			next()
		} else {
			await prospects.createIndex({ email: 1 }, { unique: true, name: "email" })
			next()
		}
	} catch (error) {
		res.status(500).json({
			message: "Error creating index",
			type: "connect",
			from: "db"
		})
	}
}

export default createIndex
