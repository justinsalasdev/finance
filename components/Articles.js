import { MdEventBusy } from "react-icons/md"
import { GiBookshelf } from "react-icons/gi"
import { FaBlackTie } from "react-icons/fa"
import { FaSearchDollar } from "react-icons/fa"
import Link from "next/link"
export default function Articles() {
	return (
		<section className="articles main__articles">
			<h2 className="articles__heading">Articles</h2>
			<ul className="articles__list">
				<li className="articles__item">
					<h3>
						<FaSearchDollar /> I wonder where my money went
					</h3>
					<p>
						You're quite sure you didn't over spent but still, at the end of
						each month, your money magically disappears. Oh why?
					</p>
					<Link href="/track">
						<a className="articles__link">read more</a>
					</Link>
				</li>
				<li className="articles__item">
					<h3>
						<MdEventBusy className="icon" /> Investing - for the busy people
					</h3>
					<p>
						You know investing is important but you just don't have time other
						than for the things you love doing. Here's how you can still do it.
					</p>
					<Link href="/busy">
						<a className="articles__link">read more</a>
					</Link>
				</li>
				<li className="articles__item">
					<h3>
						<GiBookshelf className="icon" /> Investing - from scratch
					</h3>
					<p>
						You want to learn investing but not sure where to start? Here's how
						I learned it - on my own
					</p>
					<Link href="/starter">
						<a className="articles__link">read more</a>
					</Link>
				</li>

				<li className="articles__item">
					<h3>
						<FaBlackTie className="icon" /> How to be a Financial Consultant
					</h3>
					<p>
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
