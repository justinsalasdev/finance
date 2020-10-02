import Prompt from "../components/Prompt"
import Form from "../components/Form"
import { useState } from "react"
import useStoreProspect from "../hooks/useStoreProspect"

export default function WithForm({ content, formOptions }) {
	const { info, success } = formOptions

	const [url, setURL] = useState("storeProspect")
	const [formShown, showForm] = useState(false)

	const [state, dispatch, storeProspect] = useStoreProspect(url)
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
					message1={saved ? success : info}
				>
					<Form {...formProps} />
				</Prompt>
			) : null}

			{content(showForm, setURL)}
		</>
	)
}
