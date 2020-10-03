import Navigation from "../components/Navigation"
import WithForm from "../components/withForm"
import useSWR from "swr"

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
						<Navigation />
						<main className="main main--blog">
							<h1 className="blog__heading">
								How to be a financial consultant
							</h1>
							<hr className="blog" />
							<div className="blog__body">
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
										<span className="heading">
											Congratulate yourself already
										</span>{" "}
										- Some people would let opportunities pass without even
										trying -- so after taking a peek and even decided it's not
										for you, you're still a winner. Keep looking for the path
										you'll fall in love going.
									</li>
									<li className="step step--prepare">
										<span className="heading">
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
					</>
				)
			}}
		/>
	)
}
