import { MdLockOutline } from "react-icons/md"
import { MdFace } from "react-icons/md"
import { GrDiamond } from "react-icons/gr"
import { RiDirectionFill } from "react-icons/ri"
import { FaRegHandshake } from "react-icons/fa"
// import { CgTimelapse } from "react-icons/cg"

export default function Expect() {
	return (
		<section className="expect main__expect">
			<h2 className="expect__heading">What to expect in a consultation</h2>
			<ul className="expect__list">
				<li className="expect__item">
					<h3>
						<FaRegHandshake /> It's free
					</h3>
					<p>
						Improving the financial health of those around us is our goal. The
						feeling of having an impact on the lives of other people is
						priceless
					</p>
				</li>
				{/* <li className="expect__item">
					<h3>
						<CgTimelapse className="icon" /> Just a couple of minutes
					</h3>
					<p>
						We know that your time is valuable so we always try to make every
						session brief and on point.
					</p>
				</li> */}
				<li className="expect__item">
					<h3>
						<MdLockOutline className="icon" /> Private and confidential
					</h3>
					<p>
						As a licensed professional, It's part of our sworn duty to uphold
						your best interest -- that includes keeping all the session
						information between just the two of us, no one else.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						<MdFace className="icon" /> It's all about you
					</h3>
					<p>
						Our job is centered in helping you achieve your financial goals the
						best way possible. Your best interest is always our utmost priority.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						<GrDiamond className="icon" /> Quality advice from quality
						information
					</h3>
					<p>
						We base our recommendation from the information you give. Every
						honest detail you share will always be to your benefit.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						<RiDirectionFill /> You call the shots
					</h3>
					<p>
						We'll give you valuable recommendations and you always have the
						freedom to decide for yourself.
					</p>
				</li>
			</ul>
		</section>
	)
}
