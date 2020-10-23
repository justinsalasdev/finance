import { BsGraphUp } from "react-icons/bs"
import { FaRegSmileBeam } from "react-icons/fa"
import { FaRegCalendarCheck } from "react-icons/fa"
import Head from "next/head"
import Navigation from "../components/Navigation"
import Expect from "../components/Expect"
import Articles from "../components/Articles"
import WithForm from "../components/withForm"
import HomeOG from "../components/og/HomeOG"
import HomeCard from "../components/cards/HomeCard"
import Footer from "../components/Footer"

const formOptions = {
	info: "Hi! I'll reach you thru your contact details",
	success: "Thank you! Expect to hear from me soon!"
}

export default function Home() {
	return (
		<WithForm
			formOptions={formOptions}
			content={(showForm, setURL) => {
				return (
					<>
						<Head>
							{/* generic meta tag*/}
							<title>justinsalas | Home</title>
							<link
								rel="shortcut icon"
								href="/favicon.ico"
								type="image/x-icon"
							/>
							<meta name="author" content="Justin Salas" />
							<meta
								name="description"
								content="A licensed financial consultant"
							/>
							<meta name="robots" content="index, nofollow" />

							<HomeOG />
							<HomeCard />
						</Head>
						<Navigation />
						<main className="main main--home">
							<h1 className="greet main__greet">
								Hi! I'm Justin, a licensed consultant. I can help you be a
								financial success! <BsGraphUp className="greet__coin" />
							</h1>
							<button
								className="main__action button--success"
								type="button"
								onClick={() => {
									setURL("storeProspect")
									showForm(true)
								}}
							>
								<FaRegCalendarCheck className="main__action-icon" /> Set an
								appointment
							</button>
							<hr className="home" />
							<Expect />
							<hr />
							<Articles />
						</main>
						<Footer />
					</>
				)
			}}
		/>
	)
}
