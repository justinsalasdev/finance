import Head from "next/head"
import CareerOG from "../components/cards/CareerOG"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export default function Dashboard() {
	return (
		<>
			<Head>
				{/* generic meta tag*/}
				<title>justinsalas | Career</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="author" content="Justin Salas" />
				<meta name="description" content="How to be a financial consultant" />
				<meta name="robots" content="index, nofollow" />
				<CareerOG />
			</Head>
			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">How to be a financial consultant</h1>
			</main>
			<Footer />
		</>
	)
}
