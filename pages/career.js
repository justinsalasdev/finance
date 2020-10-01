import Navigation from "../components/Navigation"

export default function Career() {
	return (
		<>
			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">How to be a financial consultant</h1>
				<hr className="blog" />
				<div className="blog__body">
					<ul className="blog__steps">
						<li className="blog__step blog__step--outlook">
							<span className="heading">Attend a Career Outlook</span> - See for
							yourself what being a consultant is all about; the reasons why you
							might want to trek the journey; and an overview of what the
							journey looks like.
						</li>
						<li className="blog__step blog__step--schedule">
							<h4 className="heading">CAREER PREVIEW SCHEDULE</h4>
							<hr className="career" />
							<div className="zoom">
								<div className="zoom__banner"></div>
								<div className="zoom__content">
									<p className="zoom__id">Meeting ID: 99999</p>
									<button className="button button--action">
										Get meeting passcode
									</button>
								</div>
							</div>
							<span className="day">WEDNESDAY</span>
							<span className="date">September 30, 2020</span>
							<span className="time">7PM - 9PM</span>
						</li>
						<li className="blog__step blog__step--celebrate">
							<span className="heading">Congratulate yourself already</span> -
							Some people would let opportunities pass without even trying -- so
							after taking a peek and even decided it's not for you, you're
							still a winner. Keep looking for the path you'll fall in love
							going.
						</li>
						<li className="blog__step blog__step--prepare">
							<span className="heading">
								Prepare yourself for the great journey
							</span>{" "}
							- If you are willing to learn, there will be no stopping you in
							achieving things you may not have imagined. You will be surrounded
							by a team of great people who also walked the same path you'll be
							taking.
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/getSchedule")
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
