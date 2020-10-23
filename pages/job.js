import Head from "next/head"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { FaHandHoldingUsd } from "react-icons/fa"
import { RiFundsBoxLine } from "react-icons/ri"
import { GiDiploma } from "react-icons/gi"
import { FcDiploma2 } from "react-icons/fc"
import { BsShieldShaded } from "react-icons/bs"
import { BiCoinStack } from "react-icons/bi"
import JobOG from "../components/og/JobOG"

export default function Job() {
	return (
		<>
			<Head>
				<title>justinsalas | Description</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="author" content="Justin Salas" />
				<meta name="description" content="An overview of my profession" />
				<meta name="robots" content="index, nofollow" />
				<JobOG />
			</Head>

			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">What I do and How I earn</h1>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Evaluation</h2>
					<p className="blog__content card--blocks">
						During consultation, clients share relevant information like, but
						not limited to, their goals, income, expenses, assets and
						liabilities. Using the these data, the advisor will try to come up
						with a model that best represents their current financial standing.
					</p>
					<p className="blog__content">
						Every client is unique and each requires a different approach to the
						improvement or preservation of their financial health but most of
						the time, solutions fall into these common financial planning areas
					</p>
					<ul className="list">
						<li className="list__item">
							<RiFundsBoxLine className="icon" /> Medium to long term investment
						</li>
						<li className="list__item">
							<FaHandHoldingUsd className="icon" /> Retirement
						</li>
						<li className="list__item">
							<GiDiploma className="icon" /> Education
						</li>
						<li className="list__item">
							<FcDiploma2 className="icon" /> Estate planning
						</li>
						<li className="list__item">
							<BsShieldShaded className="icon" /> Income and asset protection
						</li>
						<li className="list__item">
							<BiCoinStack className="icon" />
							Tax planning
						</li>
					</ul>
				</section>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Solution</h2>
					<div className="graphics graphics--shapes"></div>
					<p className="blog__content">
						Financial advisors have access to a wide variety of{" "}
						<span className="hl--red">solutions</span> they can offer to address
						the needs of their client, which often is limited to what the
						company they represent have. If the client agrees to avail the
						proposed solution from the company or institution the advisor
						represents, the advisor gets a{" "}
						<span className="hl--green">commission</span> from his company.
					</p>
				</section>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Client's best interest</h2>
					<div className="graphics graphics--conflict"></div>
					<p className="blog__content">
						To prevent an advisor from offering an oversized or inappropriate
						solution so to gain higher commission, the client undergoes
						suitability assessment to reinforce the advisor's recommendation.
					</p>
					<p className="blog__content">
						It should be noted, however, that though suitability assessment
						results should not be disregarded, it should not be the only basis
						of a financial plan. Advisors, equipped with the right knowledge to
						tackle financial problems, should be able to craft hollistic
						solutions that best fit the client's circumstances.
					</p>
				</section>
				<hr className="blog" />
				<section className="blog__body">
					<h2 className="blog__heading3">Common misconceptions</h2>
					<p className="blog__content">
						<span className="hl--lead">
							Financial planning is only for the rich
						</span>{" "}
						- <span className="hl--red">NO.</span> If you are not rich, then the
						goal of financial planning is to make you wealthy to the extent of
						what being rich is to you. As we all know, wealth doesn't happen
						overnight. It is a result of hard work, time and most importantly,
						careful planning. On the other hand, if you think you are already
						rich, then the goal of financial planning is to help you sustain and
						preserve that wealth so to become a legacy you can pass on to many
						generations of your family.
					</p>
					<p className="blog__content">
						<span className="hl--lead">
							My income is only enough to cover my current expenses so there's
							nothing to plan
						</span>{" "}
						- Financial planning isn't just about income. It's not called income
						planning after all. Plans are created by looking at the bigger
						picture -- taking the current financial health of the client as a
						whole. Moreover, since most financial advisors in the Philippines
						are affiliated with a financial company or institution,{" "}
						<span className="hl--green">there's no consultation fee</span>.
						Advisors earn only if you agree to avail products, of companies they
						represent, suitable for your needs -- which, by the way, is not an
						obligation but a choice.
					</p>
				</section>
			</main>
			<Footer />
		</>
	)
}
