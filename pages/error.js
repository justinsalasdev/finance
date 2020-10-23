import { signIn } from "next-auth/client"
import Head from "next/head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { BiLockOpen } from "react-icons/bi"

export default function Error() {
	return (
		<>
			<Head>
				<title>justinsalas | Invest</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="author" content="Justin Salas" />
				<meta name="description" content="Investing from scratch" />
				<meta name="robots" content="index, nofollow" />
			</Head>

			<Navigation />
			<main className="main main--error">
				<p className="error__message">
					401 | Bad Credentials <BiLockOpen />
				</p>
				<a
					className="error__link"
					href="/login"
					onClick={e => {
						e.preventDefault()
						signIn()
					}}
				>
					back to Login
				</a>
			</main>

			{/* <Footer /> */}
		</>
	)
}
