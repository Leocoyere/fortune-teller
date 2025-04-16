import { useState } from "react";
import Arrow from "@/components/atoms/Arrow";
import { generateUrl } from "@/lib/helpers/generateEncodedUrl";
import { useNavigate } from "react-router";
import { MockQuestions } from "../atoms/mockQuestions";

export default function AnimatedInput() {

	const navigate = useNavigate();
	const [question, setQuestion] = useState("");
	const [animate, setAnimate] = useState(true);

	const handleSetAnimate = (e: React.FocusEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setAnimate(!value);
	}

	function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
		const value = e.currentTarget.value;
		setQuestion(value);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const encodedUrl = generateUrl(question);
		navigate(encodedUrl);
	}

	return (
    	<form onSubmit={handleSubmit} className="mb-20 mt-10 lg:mt-auto px-5 w-full sm:w-auto relative z-1 flex justify-center items-center gap-4">
			<MockQuestions animate={animate} />
			<input className="relative text-white nohemi w-full sm:w-sm lg:w-lg border-b-2 border-white" type="text" onChange={handleInputChange} onFocus={() => setAnimate(false)} onBlur={(e) => handleSetAnimate(e)} />
			<button type="submit">
				<Arrow />
			</button>
		</form>
	);
}