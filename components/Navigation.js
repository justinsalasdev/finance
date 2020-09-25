import CustomLink from "./CustomLink"
import { RiHome2Line } from "react-icons/ri"

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__brand">
					<CustomLink href="/">
						<a className="navigation__home">
							<RiHome2Line title="to home	" className="navigation__icon" />
						</a>
					</CustomLink>
				</li>
				{/* <li>
					<CustomLink href="#">
						<a className="navigation__link">Articles</a>
					</CustomLink>
				</li> */}
			</ul>
		</nav>
	)
}
