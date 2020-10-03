import Navigation from "../components/Navigation"
import Link from "next/link"
import { FaRegCalendarCheck } from "react-icons/fa"
import WithForm from "../components/withForm"
import Head from "next/head"

const formOptions = {
	url: "storeProspect",
	info: "Hi! I'll reach you thru your contact details",
	success: "Thank you! Expect to hear from me soon!"
}
export default function Busy() {
	return (
		<WithForm
			formOptions={formOptions}
			content={(showForm, setURL) => {
				return (
					<>
						<Head>
							<title>justinsalas | Invest</title>
							<link
								rel="shortcut icon"
								href="/favicon.ico"
								type="image/x-icon"
							/>
							<meta name="author" content="Justin Salas" />
							<meta
								name="description"
								content="How to invest even if you're busy"
							/>
							<meta name="robots" content="index, nofollow" />
						</Head>
						<Navigation />
						<main className="main main--blog">
							<h1 className="blog__heading">Investing - for the busy people</h1>
							<hr className="blog" />
							<div className="blog__body">
								<p className="blog__content">
									<Link href="/starter">
										<a className="link--text">
											I learned how to invest on my own
										</a>
									</Link>{" "}
									in 2015. I bought shares from few companies that I like from
									hundreds that I looked into. Every year, I update the list of
									the companies I like based on their annual reports. Every
									quarter, I also check the interim reports of the companies in
									my portfolio just to check if there's something I need to
									worry about. This has been my not so demanding routine in the
									last 5 years
								</p>
								<p className="blog__content">
									Investing, to me, is important that's why I learned how to
									better do it in the first place -- but it's not something I
									want to do as a professional. I do like to learn other new
									things so I switched from being active investor to a passive
									one
								</p>{" "}
								<h3 className="blog__heading2">Being passive is good too </h3>
								<p className="blog__content blog__content--quotes">
									Let me share an{" "}
									<a
										className="link--text"
										href="article from Investopedia"
										target="_blank"
									>
										article from Investopedia
									</a>{" "}
									based on Bejamin Graham's teachings
								</p>
								<p className="blog__content blog__content--quote">
									You only have two real choices: the first choice is to make a
									serious commitment in time and energy to become a good
									investor who equates the quality and amount of hands-on
									research with the expected return. If this isn't your cup of
									tea, then be content to get a passive (possibly lower) return,
									but with much less time and work. Graham turned the academic
									notion of "risk = return" on its head. For him, "work =
									return." The more work you put into your investments, the
									higher your return should be
								</p>{" "}
								<p className="blog__content blog__content--quote">
									If you have neither the time nor the inclination to do quality
									research on your investments, then investing in an index is a
									good alternative. Graham said that the defensive investor
									could get an average return by simply buying the 30 stocks of
									the Dow Jones Industrial Average in equal amounts. Both Graham
									and Buffett said that getting even an average return, such as
									the return of the S&P 500, is more of an accomplishment than
									it might seem.
								</p>
								<p className="blog__content blog__content--quote">
									The fallacy that many people buy into, according to Graham, is
									that if it's so easy to get an average return with little or
									no work (through indexing), then just a little more work
									should yield a slightly higher return. The reality is that
									most people who try this end up doing much worse than average.
								</p>
								<p className="blog__content blog__content--quote">
									In modern terms, the defensive investor would be an investor
									in index funds of both stocks and bonds. In essence, they own
									the entire market, benefiting from the areas that perform the
									best without trying to predict those areas ahead of time. In
									doing so, an investor is virtually guaranteed the market's
									return and avoids doing worse than average by just letting the
									stock market's overall results dictate long-term returns.
									According to Graham, beating the market is much easier said
									than done, and many investors still find they don't beat the
									market.
								</p>
								<h3 className="blog__heading2">
									A bit of advice before you dive into Index Fund
								</h3>{" "}
								<p className="blog__content">
									In simple terms, an Index Fund's performance (gains / losses)
									is a reflection of the{" "}
									<a
										href="https://www.wsj.com/market-data/quotes/index/PH/PSEI"
										target="_blank"
										className="link--text"
									>
										Philippine Stock Market performance
									</a>{" "}
									in general --so if, for example, you bought 1 unit of the fund
									that cost P100 in 2019, you would have lost 20% already as of
									2020.
								</p>{" "}
								<div className="blog__graphics"></div>
								<p className="blog__content">
									The stock market is crazy. Like a woman, you'll never know
									what she thinks but understanding why she's like that is more
									than enough. Therefore, if you are not interested on the inner
									workings of the stock market in general then it's better to
									stay away from it - or you find someone who does.
								</p>
								<h3 className="blog__heading2">Mutual Funds</h3>
								<div className="blog__content blog__content--mutual">
									You might have heard or have read about mutual funds somewhere
									but in case you haven't, here's what my simple mind
									understands
									<ul>
										<li className="picture picture--seed">
											People give their seeds ( their money ) to a farmer{" "}
											<a
												className="link--text-light"
												target="_blank"
												href="https://www.investopedia.com/terms/m/moneymanager.asp#:~:text=key%20takeaways-,A%20money%20manager%20is%20a%20person%20or%20financial%20firm%20that,percentage%20of%20assets%20under%20management."
											>
												( Professional Money Manager )
											</a>
										</li>

										<li className="picture picture--collect">
											The farmer collectively plants (invest) and grows (manage)
											those seeds in behalf of the owners
										</li>

										<li className="picture picture--labor">
											The owners give the farmer small portion of their crops to
											cover operating cost
										</li>
									</ul>
								</div>
								<p className="blog__content">
									Getting started on mutual funds is easy given that we live in
									a time where most of the information we need is right at our
									finger tips. Fortunately, if you're the type of person who
									understand the importance of investments but doesn't have time
									other than for those things you love to do; you can always
									seek guidance from us, licensed financial consultants -- our
									goal is help people make better personal financial decisions.
								</p>
								<hr className="home" />
								<div className="blog__action">
									<button
										className="main__action button--success"
										type="button"
										onClick={() => {
											setURL("storeProspect")
											showForm(true)
										}}
									>
										<FaRegCalendarCheck className="main__action-icon" /> Set an
										appointment
									</button>
								</div>
							</div>
						</main>
					</>
				)
			}}
		/>
	)
}
