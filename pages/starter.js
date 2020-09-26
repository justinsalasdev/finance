import Navigation from "../components/Navigation"
import { RiStore2Line } from "react-icons/ri"
import { RiBuilding2Line } from "react-icons/ri"
import { AiOutlinePieChart } from "react-icons/ai"

export default function Starter() {
	return (
		<>
			<Navigation />
			<main className="main main--blog">
				<h1 className="blog__heading">Investing - from scratch</h1>
				<hr className="blog" />
				<div className="blog__body">
					<p className="blog__content">
						I got my first salary in 2015 and I don't really know what to do
						with it back then. There sure are things I wanted to buy but decided
						not to because, upon deep reflection, I always end up realizing I
						didn't need those.
					</p>
					<p className="blog__content">
						Handling money isn't something schools teach so I decided to take
						responsibility for my own financial education. Since I don't know
						where to start learning, I just googled around and stumbled upon a
						book called <span className="title--dad">Rich Dad Poor Dad.</span>
					</p>
					<p className="blog__content--dad blog__content">
						The book lays out some career and financial decisions people would
						have to make at some point of their lives.
					</p>
					<p className="blog__content">
						As a takeaway, I decided to trek the road to Investing though, as
						usual, I don't really know where and how to start. Thankfully, If
						one has a will, Google for sure has a way -- this led me to a book
						called <span className="title--dummies">Investing for dummies</span>
					</p>
					<div className="blog__content--invest-dummy">
						The book introduces some known ways to make one's money grow:
						<ul className="list">
							<li>
								<RiStore2Line className="icon" /> starting your own business
							</li>
							<li>
								<RiBuilding2Line className="icon" /> owning real estate
							</li>{" "}
							<li>
								<AiOutlinePieChart className="icon" /> being part owner of
								someone else's business
							</li>
						</ul>
					</div>
					<p className="blog__content">
						Real estate is capital intensive and is too complicated for someone
						who came from an engineering background, at least to me -- and
						starting a business isn't something a fresh grad, with no likes of
						doing something in particular, should do
					</p>
					<p className="blog__content">
						I know that my fresh grad salary won't get me started on real estate
						and I'm still naive to go on a venture -- so maybe part owning a
						small portion of someone else's business isn't that bad of a
						decision.
					</p>
					<br />
					<p className="blog__content blog__content--stocks">
						The act of buying <span className="keyword--black">portions</span>{" "}
						or <span className="keyword--black">shares</span> (commonly known as
						stocks) of a business is not a mystery. With little googling and a
						little bit of money , I ended up opening an account with First Metro
						and was ready to buy my first share -- but what exactly should I
						buy? It was at that moment that I knew --{" "}
					</p>
					<p className="blog__content">
						I realized I'm not yet ready to do my first purchase so I consulted
						again my best friend Google. He introduced me to a book called{" "}
						<span className="title--intelligent">The Intelligent Investor</span>{" "}
						-- written by Benjamin Graham : the greatest investor who ever lived
						; teacher of the billionaire Warren Buffet
					</p>
					<div className="blog__content--intelligent">
						{" "}
						An intelligent investor should thoroughly evaluate a company before
						he ever decide to be part of it. How it's done? These books would
						tell you just that in great detail
						<ul>
							{" "}
							<li className="fundamental">
								Fundamental Analysis for Dummies by Matt Krantz
							</li>{" "}
							<li className="security">Security Analysis by Benjamin Graham</li>{" "}
						</ul>{" "}
					</div>
					<p className="blog__content">
						At this point, I know I was prepared to make my first reasonable
						purchase but I can't help to think that there might still be good
						books out there that I missed -- and I was right
						<br />
						<br />
						Here are the few more good reads I've found :
					</p>
					<ul className="blog__content--books">
						<li className="oneup">
							<strong>ONE UP O</strong>N WALL STREET
							<br />
							<br />
							Benjamin Graham is timeless, Peter Lynch is modern.
						</li>
						<li className="naked">
							<strong>NAKED ECONOMICS</strong>
							<br />
							<br />
							It's nice to see the bigger picture and how the stock market
							behaves within it
						</li>
						<li className="uncommon">
							<strong>COMMON STOCKS AND UNCOMMON PROFITS</strong>
						</li>
					</ul>
					<p className="blog__content">
						Why bother going through this long learning journey just to pick
						which business I'll buy? In fact, upon opening my First Metro
						account, I regularly received buy / sell recommendations. Why I
						didnt I just pick one from those recommendations?{" "}
					</p>
					<p className="blog__content">
						Say I don't know anything and First Metro recommended me to buy
						Company A. Then two months after, Company A's share price dropped by
						50%. Would I still believe in that recommendation and hold on to my
						shares?
					</p>
					<p className="blog__content">
						On the other hand, If I personally picked Company A based on a
						portfolio criteria formed by hard earned knowledge , I will surely
						hold on to it if the criteria allows me to.
					</p>
					<p className="blog__content">
						In general, from this point, I'm in charge and accountable to my own
						decisions whatever it may be.
					</p>
				</div>
			</main>
		</>
	)
}
