import Navigation from "./components/Navigation"
import WithForm from "./components/withForm"
import useSWR from "swr"
import Head from "next/head"
import CareerOG from "./components/og/CareerOG"
import Footer from "./components/Footer"
// import { GiDiploma } from "react-icons/gi"
// import { GiBookshelf } from "react-icons/gi"
// import { FcManager } from "react-icons/fc"

const formOptions = {
	info: "Please provide registration details",
	success: "Thank you! Please check your mail for more info"
}

async function fetchSchedule() {
	const res = await fetch(`/api/getSchedule`)
	const schedule = await res.json()
	return schedule
}

export default function Career() {
	const { data, error } = useSWR("/api/user", fetchSchedule)

	return (
		<WithForm
			formOptions={formOptions}
			content={(showForm, setURL) => {
				return (
					<>
						<Head>
							{/* generic meta tag*/}
							<title>justinsalas | Career</title>
							<link
								rel="shortcut icon"
								href="/favicon.ico"
								type="image/x-icon"
							/>
							<meta name="author" content="Justin Salas" />
							<meta
								name="description"
								content="How to be a financial consultant"
							/>
							<meta name="robots" content="index, nofollow" />
							<CareerOG />
						</Head>
						<Navigation />
						<main className="main main--blog">
							<h1 className="blog__heading">
								How to be a financial consultant
							</h1>
							<hr className="blog" />
							{/* <section className="blog__body">
								<h2 className="blog__heading3">Qualifications</h2>
								<ul className="list">
									<li className="list__item">
										<GiDiploma /> College graduate
									</li>
									<li className="list__item">
										<FcManager /> 21 to 35 years old
									</li>
									<li className="list__item">
										<GiBookshelf /> Loves to learn
									</li>
								</ul>
							</section>

							<hr className="blog" /> */}

							<div className="blog__body">
								{/* <h2 className="blog__heading3">Steps</h2> */}
								<ul className="blog__steps">
									<li className="step step--outlook">
										<span className="heading">Attend the Career Preview</span> -
										See for yourself what being a consultant is all about; the
										reasons why you might want to trek the journey; and an
										overview of what the journey looks like.
									</li>
									<li className="step step--schedule">
										<h4 className="heading">Career Preview Schedule</h4>
										<hr className="career" />

										<span className="day">
											{(data && data.day) || "Loading.."}
										</span>
										<span className="date">
											{(data && data.date) || "Loading.."}
										</span>
										<span className="time">
											{(data && data.time) || "Loading.."}
										</span>
										<div className="zoom">
											<div className="zoom__banner"></div>
											<div className="zoom__content">
												{/* <p className="zoom__id">Meeting ID: {meetingId}</p> */}
												<button
													className="button button--action zoom__action"
													onClick={() => {
														setURL("storeRecruit/now")
														showForm(true)
													}}
												>
													Register
												</button>
											</div>
										</div>
										<span className="subscription">
											Can't make it?{" "}
											<a
												title="open registration form"
												onClick={e => {
													e.preventDefault()
													setURL("storeRecruit/next")
													showForm(true)
												}}
											>
												join the next preview
											</a>
										</span>
									</li>
									<li className="step step--celebrate">
										<span className="hl--lead">
											Congratulate yourself already
										</span>{" "}
										- Some people would let opportunities pass without even
										trying -- so after taking a peek and even decided it's not
										for you, you're still a winner. Keep looking for the path
										you'll fall in love going.
									</li>
									<li className="step step--prepare">
										<span className="hl--lead">
											Prepare yourself for the great journey
										</span>{" "}
										- If you are willing to learn, there will be no stopping you
										in achieving things you may not have imagined. You will be
										surrounded by a team of great people who also walked the
										same path you'll be taking.
									</li>
								</ul>
							</div>
						</main>
						<Footer />
					</>
				)
			}}
		/>
	)
}
