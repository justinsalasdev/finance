import Prompt from "../components/Prompt"
import Form from "../components/Form"
import { useState } from "react"
import useStoreProspect from "../hooks/useStoreProspect"

export default function Home({ content }) {
	const [formShown, showForm] = useState(false)

	const [state, dispatch, storeProspect] = useStoreProspect()
	const { alertShown, error, saved } = state

	const errorProps = {
		type: "single",
		message1: error ? error.message : "",
		acknowledge: () => dispatch({ type: "acknowledge" })
	}

	const formProps = {
		showForm,
		storeProspect,
		state,
		dispatch
	}

	function acknowledgeSuccess() {
		dispatch({ type: "acknowledge" })
		showForm(false)
	}

	return (
		<>
			{alertShown && error && error.type !== "client" ? (
				<Prompt {...errorProps} />
			) : null}

			{formShown && !alertShown ? (
				<Prompt
					acknowledge={acknowledgeSuccess}
					type={saved ? "single" : ""}
					message1={
						saved
							? "Thank you! Expect to hear from me soon!"
							: "Hi! I'll reach you thru your contact details"
					}
				>
					<Form {...formProps} />
				</Prompt>
			) : null}

			{content(showForm)}
		</>
	)
}
