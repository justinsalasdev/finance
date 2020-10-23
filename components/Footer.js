import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
export default function Footer() {
	return (
		<footer className="footer">
			{/* © Copyright 2020 justinsalas.cc All rights reserved */}
			<address className="footer__address">
				<div className="footer__links">
					<a
						href="mailto:save@justinsalas.cc?subject=What%20is%20it%20you%20want%20to%20ask%20about%3F&body=Please%20provide%20me%20some%20details%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A"
						className="footer__link"
						target="_blank"
					>
						<AiOutlineMail className="icon" />
					</a>
					{"  "}
					<a
						href="https://facebook.com/streetl0ck"
						className="footer__link"
						target="_blank"
					>
						<FaFacebookSquare className="icon" />
					</a>
				</div>
			</address>
		</footer>
	)
}
