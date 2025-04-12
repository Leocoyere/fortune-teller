import { encodeBase64Url } from "./dataEncoding";
import { generateRandomCard } from "./generateRandomCard";

export function generateUrl(question: string): string {

    const card = generateRandomCard();

    const payload = {
        question,
        card: card,
    }

    return encodeBase64Url(payload);
}