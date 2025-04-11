import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedInput() {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [animate, setAnimate] = useState(true);

	const handleSetAnimate = (e: React.FocusEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setAnimate(!value);
	}

	const questions = useMemo(
		() => ["Will my crush ask me out next week?", "Will I get a promotion soon?", "Does my cat hates me?", "Will tomorrow be sunny?", "Will I win the lottery?"],
		[]
	);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (questionNumber === questions.length - 1) {
				setQuestionNumber(0);
			} else {
				setQuestionNumber(questionNumber + 1);
			}
		}, 2000);
		return () => clearTimeout(timeoutId);
	}, [questionNumber, questions, animate]);

	return (
    	<div className="mb-20 px-5 w-full lg:w-auto relative z-1 flex justify-center items-center gap-4">
			{ animate ?
			questions.map((question, index) => (
				<motion.span
					key={index}
					className="absolute left-5 text-white pb-2"
					initial={{ opacity: 0, y: "-100" }}
					transition={{ type: "spring", stiffness: 50 }}
					animate={
						questionNumber === index
							? {
									y: 0,
									opacity: 1,
								}
							: {
									y: questionNumber > index ? -150 : 150,
									opacity: 0,
								}
					}
				>
					{question}
				</motion.span>
			)) : null}
			<input className="relative text-white nohemi w-full lg:w-lg border-b-2 border-white" type="text" onFocus={() => setAnimate(false)} onBlur={(e) => handleSetAnimate(e)} />
			<svg className="cursor-pointer" width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M34.9977 15.7082C35.6565 14.3027 36.2934 13.0729 36.9083 12.0188C37.5671 10.9647 38.2039 10.0863 38.8188 9.38358H0.410156V6.61658H38.8188C38.2039 5.86993 37.5671 4.96955 36.9083 3.91545C36.2934 2.86135 35.6565 1.65353 34.9977 0.291992H37.3036C40.0706 3.49821 42.9693 5.86993 45.9999 7.40715V8.59301C42.9693 10.0863 40.0706 12.458 37.3036 15.7082H34.9977Z" fill="white"/>
			</svg>
		</div>
	);
}