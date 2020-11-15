import { AiOutlineFileSearch } from "react-icons/ai"
import { FaChartBar } from "react-icons/fa"
import { GrWorkshop } from "react-icons/gr"
import { FaRegHandshake } from "react-icons/fa"
import { GrDocumentUser } from "react-icons/gr"
import { GiCycle } from "react-icons/gi"
// import { CgTimelapse } from "react-icons/cg"

export default function Expect() {
	return (
		<section className="expect main__expect">
			<h2 className="expect__heading">The financial planning process</h2>
			<ul className="expect__list">
				<li className="expect__item">
					<h3>
						1. Establish relationship <FaRegHandshake className="icon" />
					</h3>
					<p>
						Financial planning is a long-term process, and for it to be
						successful, teamwork and collaboration are required. With these, it
						is of importance to know we're a good fit before we even start.
					</p>
				</li>

				<li className="expect__item">
					<h3>
						2. Gather relevant information <GrDocumentUser className="icon" />
					</h3>
					<p>
						I base my recommendation from the financial information you'll give.
						Every honest detail you share will always be to your benefit.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						3. Analyze financial status <AiOutlineFileSearch className="icon" />
					</h3>
					<p>
						Before any advise is ever made, It is important that I fully
						understand your current financial situation.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						4. Develop and present recommendations{" "}
						<GrWorkshop className="icon" />
					</h3>
					<p>
						Taking into account your current financial standing and the goals
						you want to achieve, I'll be able to construct sound options that
						you may want or need to undertake.
					</p>
				</li>
				<li className="expect__item">
					<h3>
						5. Implementation <FaChartBar className="icon" />
					</h3>
					<p>
						Even the best plan is just a plan if we don't take action to make it
						happen. We will help you choose from lots of available tools that
						will best cater to your financial needs.{" "}
					</p>
				</li>
				<li className="expect__item">
					<h3>
						5. Review <GiCycle className="icon" />
					</h3>
					<p>
						We can't have a complete picture of what your life is going to be
						like in the future - that's why it's beautiful. I'll be there along
						the way to make adaptive changes if needed.
					</p>
				</li>
			</ul>
		</section>
	)
}
