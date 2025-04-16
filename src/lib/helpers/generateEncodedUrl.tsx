import { encodeBase64Url } from "./dataEncoding";
import { generateRandomCard } from "./generateRandomCard";

export function generateUrl(question: string): string {

    const card = generateRandomCard();

    if (!question) {
        return "/404-no-question-provided";
    }

    const payload = {
        question,
        card
    }

    return `/result/${encodeBase64Url(payload)}`;
}