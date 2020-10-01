import { MongoClient } from "mongodb"

const URI = process.env.MONGO_URL
const dbName = process.env.MONGO_DBNAME

const client = new MongoClient(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

async function initDatabase(req, res, next) {
	try {
		if (!client.isConnected()) await client.connect()
		req.db = client.db(dbName)
		return next()
	} catch (error) {
		res.status(500).json({
			message: "Error initializing db",
			type: "connect",
			from: "db"
		})
	}
}

export default initDatabase
