export type ColorPalette = {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
};

export type Card = {
    name: string;
    question: string;
    answer: string;
    message: string;
    isReversed: boolean;
    palette: ColorPalette;
};