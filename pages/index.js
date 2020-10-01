import { BsGraphUp } from "react-icons/bs"
import { FaRegSmileBeam } from "react-icons/fa"
import { FaRegCalendarCheck } from "react-icons/fa"
import Head from "next/head"
import Navigation from "../components/Navigation"
import Expect from "../components/Expect"
import Articles from "../components/Articles"
import WithForm from "../components/withForm"

export default function Home() {
	return (
		<WithForm
			content={showForm => {
				return (
					<>
						<Head>
							{/* generic meta tag*/}
							<title>justinsalas | Home</title>
							<link
								rel="shortcut icon"
								href="/icons/favicon.ico"
								type="image/x-icon"
							/>
							<meta name="author" content="Justin Salas" />
							<meta
								name="description"
								content="A licensed financial consultant"
							/>
							<meta name="robots" content="index, nofollow" />

							{/* facebook open graph*/}
							<meta property="og:type" content="profile" />
							<meta property="og:title" content="Justin Salas" />
							<meta property="og:url" content="https://justinsalas.cc" />
							<meta
								property="og:image"
								content="https://save.justinsalas.cc/images/umbrella.jpg"
							/>
							<meta property="profile:first_name" content="Justin" />
							<meta property="profile:last_name" content="Salas" />

							{/* twitter cards*/}
							<meta name="twitter:card" content="summary" />
							<meta name="twitter:site" content="justinsalas.cc" />
							<meta name="twitter:title" content="Justin Salas" />
							<meta
								name="twitter:description"
								content="A licensed financial consultant"
							/>
						</Head>
						<Navigation />
						<main className="main main--home">
							<h1 className="greet main__greet">
								Hi
								<FaRegSmileBeam className="greet__sun" /> I'm Justin, a licensed
								financial consultant. I can help you make better financial
								decisions <BsGraphUp className="greet__coin" />
							</h1>
							<button
								className="main__action button--success"
								type="button"
								onClick={() => showForm(true)}
							>
								<FaRegCalendarCheck className="main__action-icon" /> Set an
								appointment
							</button>
							<hr className="home" />
							<Expect />
							<hr />
							<Articles />
						</main>
					</>
				)
			}}
		/>
	)
}
