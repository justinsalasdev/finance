import Head from "next/head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { GiCash } from "react-icons/gi"
import { BiDonateHeart } from "react-icons/bi"
import { GiPlantsAndAnimals } from "react-icons/gi"
import JobOG from "../components/og/JobOG"

export default function Job() {
	return (
		<>
			<Head>
				<title>justinsalas | Process</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="author" content="Justin Salas" />
				<meta name="description" content="An overview of my profession" />
				<meta name="robots" content="index, nofollow" />
				<JobOG />
			</Head>

			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">The financial planning process</h1>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Pre-planning</h2>
					<p className="blog__content">
						Financial planning may be a fairly straightforward concept but how
						it’s done is not often clear. By definition, it’s simple yet often
						misunderstood so it should be approached from an objective
						standpoint.
					</p>
					<p className="blog__content">
						One of these three main objectives can be the reason why people
						should consider financial planning.
					</p>
					<ul className="list">
						<br />
						<li className="list__item">
							<GiCash className="icon icon--gold" />{" "}
							<span className="list__heading">To attain desired wealth</span>
							<p className="list__paragraph">
								{" "}
								People have a different perspective as to what being rich is.
								Some want to have a luxurious lifestyle while others just want
								to have the means to continue doing the things that they love to
								do. Though given these different views, one thing’s certain –
								wealth doesn’t happen overnight. It is a result of hard work,
								time, and most importantly, careful planning.
							</p>
						</li>
						<li className="list__item">
							<GiPlantsAndAnimals className="icon icon--green" />{" "}
							<span className="list__heading">To preserve attained wealth</span>
							<p className="list__paragraph">
								{" "}
								It may not be as hard as building wealth, but it is as
								important. A financial plan ensures that the value you have
								accumulated remains the same until comes the time that you need
								to pass it on to the next generation
							</p>
						</li>
						<li className="list__item">
							<BiDonateHeart className="icon icon--blue" />{" "}
							<span className="list__heading">To conserve attained wealth</span>
							<p className="list__paragraph">
								{" "}
								The wealth that you have built should be properly passed as your
								legacy to the next generation of your family
							</p>
						</li>
					</ul>
					<p className="blog__content">
						One thing can be observed with the objective view of financial
						planning – it’s a long term process. With this in mind, it is
						important not only to have a sound financial plan but a credible and
						dedicated advisor who will be there during the different stages of
						your life. It is essential that before you undertake this life long
						process, you need to be sure that the professional whom you’ll be
						taking this journey with can cater to your needs. To know just that,
						the following must be thoroughly discussed at the onset.
					</p>
					<ul className="list list--single">
						<br />
						<li className="list__item list__item--single">
							Expectations and past experiences of client
						</li>
						<li className="list__item list__item--single">
							Roles to responsibility of both parties
						</li>
						<li className="list__item list__item--single">
							Credentials of the professional{" "}
						</li>
						<li className="list__item list__item--single">
							How the professional is compensated
						</li>
						<li className="list__item list__item--single">
							Information privacy
						</li>
					</ul>
				</section>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Gather relevant information</h2>
					<p className="blog__content">
						I can’t make a sound financial plan just as like a doctor can’t
						prescribe medicine to a patient they haven’t examined yet. Your role
						as a client is to give me the most accurate relevant data that I
						need to assess and understand your current financial situation.
					</p>
				</section>
				<section className="blog__body">
					<h2 className="blog__heading3">Develop and present financial plan</h2>
					<p className="blog__content">
						Given the information you provided, I will now be able to create and
						present several strategies to help you realize your goals with your
						current financial situation in mind.
					</p>
				</section>
				<section className="blog__body">
					<h2 className="blog__heading3">Implementation</h2>
					<p className="blog__content">
						Financial plans are useless if no actions are taken to make it
						happen. Given the wide variety of different financial instruments
						available, it can be confusing most of the time to choose which one
						is adequate for your needs. As an advisor with access to financial
						tools of the company I represent, I’ll be able to recommend
						solutions with your interest as of utmost importance in mind.
					</p>
				</section>
				<section className="blog__body">
					<h2 className="blog__heading3">Review</h2>
					<p className="blog__content">
						We can't have a complete picture of what your life is going to be
						like in the future. Adaptive changes to the plan must be made as you
						progress through the different chapters of your life.
					</p>
				</section>
			</main>
			<Footer />
		</>
	)
}
