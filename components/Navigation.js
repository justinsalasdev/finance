import { signIn, signOut, useSession } from "next-auth/client"
import { RiHome2Line } from "react-icons/ri"
import CustomLink from "./CustomLink"

export default function Navigation() {
	const [session, loading] = useSession()
	const baseURL = process.env.NEXT_PUBLIC_URL

	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li>
					<CustomLink href="/">
						<a className="navigation__link">
							<RiHome2Line title="to home	" className="icon" />
						</a>
					</CustomLink>
				</li>
				<li>
					<CustomLink href="/#articles">
						<a className="navigation__link">Articles</a>
					</CustomLink>
				</li>
				{/* <li>
					<CustomLink href="/career">
						<a className="navigation__link">Career</a>
					</CustomLink>
				</li> */}
				<li>
					{session && !loading && (
						<CustomLink href="/dashboard">
							<a className="navigation__link">Dashboard</a>
						</CustomLink>
					)}
				</li>
				<li>
					{!session && !loading && (
						<a
							className="navigation__link"
							href="/login"
							onClick={e => {
								e.preventDefault()
								signIn(null, {
									callbackUrl: `${baseURL}/dashboard`
								})
							}}
						>
							Login
						</a>
					)}
					{!loading && session && (
						<a
							className="navigation__link"
							href="/logout"
							onClick={e => {
								e.preventDefault()
								signOut({
									callbackUrl: `${baseURL}/career`
								})
							}}
						>
							Logout
						</a>
					)}
				</li>
			</ul>
		</nav>
	)
}
