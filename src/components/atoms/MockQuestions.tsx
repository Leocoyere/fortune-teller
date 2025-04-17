import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export function MockQuestions({ animate }: { animate: boolean }) {

    const [mockQuestionNumber, setMockQuestionNumber] = useState(0);

    const mockQuestions = useMemo(
        () => ["Will my crush ask me out next week?", "Will I get a promotion soon?", "Does my cat hates me?", "Will tomorrow be sunny?", "Will I win the lottery?"],
        []
    );

    useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (mockQuestionNumber === mockQuestions.length - 1) {
				setMockQuestionNumber(0);
			} else {
				setMockQuestionNumber(mockQuestionNumber + 1);
			}
		}, 2000);
		return () => clearTimeout(timeoutId);
	}, [mockQuestionNumber, mockQuestions, animate]);
    
    return (
        <>
        { animate ?
            mockQuestions.map((question, index) => (
                <motion.span
                    key={index}
                    className="absolute left-5 text-white pb-2"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                        mockQuestionNumber === index
                            ? {
                                    y: 0,
                                    opacity: 1,
                                }
                            : {
                                    y: mockQuestionNumber > index ? -150 : 150,
                                    opacity: 0,
                                }
                    }
                >
                    {question}
                </motion.span>
            )) 
        : null}
        </>
    )
}
