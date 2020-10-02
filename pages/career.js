import Navigation from "../components/Navigation"
import WithForm from "../components/withForm"

const formOptions = {
	info: "Please provide registration details",
	success: "Thank you! Meeting details have been sent to your mail"
}

export default function Career({ schedule }) {
	const { date, time, day, meetingId } = schedule
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

										<span className="day">{day}</span>
										<span className="date">{date}</span>
										<span className="time">{time}</span>
										<div className="zoom">
											<div className="zoom__banner"></div>
											<div className="zoom__content">
												<p className="zoom__id">Meeting ID: {meetingId}</p>
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

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/getSchedule`)
	const schedule = await res.json()
	console.log(schedule)

	return {
		props: {
			schedule
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 3600 // In seconds
	}
}
