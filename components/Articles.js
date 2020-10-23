import Link from "next/link"
export default function Articles() {
	return (
		<section className="articles main__articles" id="articles">
			<h2 className="articles__heading">Articles</h2>
			<ul className="articles__list">
				<li className="articles__item">
					<div className="banner banner--advisor"></div>
					<h3 className="heading">An overview of my profession</h3>
					<p className="teaser">
						You might be curious what financial advisors do for their clients
						and how they earn. Let me give you some insight.
					</p>
					<Link href="/job">
						<a className="articles__link">read more</a>
					</Link>
				</li>
				<li className="articles__item">
					<div className="banner banner--empty"></div>
					<h3 className="heading">I wonder where my money went</h3>
					<p className="teaser">
						You're quite sure you didn't over spent but still, at the end of
						each month, your money magically disappears. Oh why?
					</p>
					<Link href="/track">
						<a className="articles__link">read more</a>
					</Link>
				</li>
				<li className="articles__item">
					<div className="banner banner--busy"></div>
					<h3 className="heading">Investing - for the busy people</h3>
					<p className="teaser">
						You know investing is important but you just don't have time other
						than for the things you love doing. Here's how you can still do it.
					</p>
					<Link href="/busy">
						<a className="articles__link">read more</a>
					</Link>
				</li>
				<li className="articles__item">
					<div className="banner banner--scratch"></div>
					<h3 className="heading">Investing - from scratch</h3>
					<p className="teaser">
						You want to learn investing but not sure where to start? Here's how
						I learned it - on my own
					</p>
					<Link href="/starter">
						<a className="articles__link">read more</a>
					</Link>
				</li>

				<li className="articles__item">
					<div className="banner banner--consultant"></div>
					<h3 className="heading">How to be a Financial Consultant</h3>
					<p className="teaser">
						Be prepared to know how to launch yourself to what may be one of the
						best careers you might not have imagined.
					</p>
					<Link href="/career">
						<a className="articles__link">read more</a>
					</Link>
				</li>
			</ul>
		</section>
	)
}
