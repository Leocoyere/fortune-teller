export function generateRandomCard() {
    const randomId = Math.floor(Math.random() * 22);
    const randomBoolean = Math.random() < 0.5;

    return {
        id: randomId,
        reversed: randomBoolean,
    };
}