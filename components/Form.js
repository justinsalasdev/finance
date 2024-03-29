import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as Yup from "yup"
import FormInput from "./FormInput"
import Spinner from "./Spinner"
import { shape } from "../constants/shape"

const schema = Yup.object().shape(shape)

export default function Form({ showForm, storeProspect, state, dispatch }) {
	const { error, saving } = state
	const methods = useForm({
		mode: "all",
		// defaultValues: {
		// 	date: new Date().toISOString().substr(0, 16)
		// },
		resolver: yupResolver(schema)
	})

	const { handleSubmit, errors: formErrors } = methods

	function handleCancel() {
		dispatch({ type: "acknowledge" })
		showForm(false)
	}

	// console.log(watch("date"))

	//storeProspect automatically receives form data as argument
	return (
		<div className="form__container prompt__component">
			{error && error.type === "client" ? (
				<p className="form__toolkit">{error.message}</p>
			) : null}

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(storeProspect)} className={`form`}>
					<FormInput type="text" id="firstName">
						First Name
					</FormInput>
					<FormInput type="text" id="lastName">
						Last Name
					</FormInput>
					<FormInput type="text" id="email">
						Email
					</FormInput>
					<FormInput type="text" id="mobileNumber">
						Mobile #
					</FormInput>
					{/* <div className="date">
						<label htmlFor="date" className="date__label">
							Preferred Date
						</label>
						<input
							className="date__input"
							type="datetime-local"
							ref={register}
							name="date"
							id="date"
						/>
					</div> */}

					<div className="form__actions">
						<button
							type="button"
							className="button--danger form__action"
							onClick={handleCancel}
						>
							Cancel
						</button>
						{saving ? (
							<div className="form__spinner">
								<Spinner otherClass="spinner--link" />
							</div>
						) : (
							<button
								disabled={Object.keys(formErrors).length > 0}
								type="submit"
								className="button--success form__action"
							>
								Submit
							</button>
						)}
					</div>
				</form>
			</FormProvider>
		</div>
	)
}
