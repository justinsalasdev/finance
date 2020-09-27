import Navigation from "../components/Navigation"
import { AiOutlineLike } from "react-icons/ai"
import { FcPhoneAndroid } from "react-icons/fc"
import { AiOutlinePieChart } from "react-icons/ai"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { RiRefund2Fill } from "react-icons/ri"

export default function Track() {
	return (
		<>
			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">Budget Tracking</h1>
				<hr className="blog" />
				<div className="blog__body">
					<ul className="blog__steps">
						<li className="blog__step blog__step--1">
							<AiOutlineLike className="icon" /> You don't have to be a
							financial expert to do this
						</li>
						<li className="blog__step blog__step--2">
							<FcPhoneAndroid className="icon" />
							Download some good expense tracker apps
							<ul className="apps">
								<li className="app--lover">
									<a
										href="https://moneylover.me/"
										target="_blank"
										className="link--text"
									>
										Money Lover
									</a>
								</li>
								<li className="app--one">
									<a
										href="https://www.1moneyapp.com/"
										target="_blank"
										className="link--text"
									>
										1Money
									</a>
								</li>
								<li className="app--manager">
									<a
										href="https://www.realbyteapps.com/"
										target="_blank"
										className="link--text"
									>
										Money Manager
									</a>
								</li>
							</ul>
						</li>
						<li className="blog__step blog__step--expand">
							<AiOutlinePieChart className="icon" />{" "}
							<span className="heading">Create spending categories</span> -
							Tracker apps have common built in categories but you can delete
							them and add your own. I recommend adding not so specific
							categories. For me, fewer and broader categories will lead to
							better compliance.
							<br />
							<h4 className="list-heading">A simple category list</h4>
							<ul className="categories">
								<li className="category--food">
									<span>Food</span>
								</li>
								<li className="category--family">
									<span>Family</span>
								</li>
								<li className="category--education">
									<span>Education</span>
								</li>
								<li className="category--leisure">
									<span>Leisure</span>
								</li>
								<li className="category--car">
									<span>Car</span>
								</li>
							</ul>
						</li>
						<li className="blog__step blog__step--expand">
							<AiOutlineAppstoreAdd className="icon" />{" "}
							<span className="heading">
								Strictly add records of every spending
							</span>{" "}
							- You'll be surprised where your money actually goes after just
							one month of tracking
							<div className="chart--pie"></div>
						</li>
						<li className="blog__step blog__step--expand">
							<RiRefund2Fill className="icon" />{" "}
							<span className="heading">Add starting budget</span> - Seeing how
							your initial budget gets depleted with every purchase will somehow
							slow you down from actually depleting it
							<div className="chart--line"></div>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}
