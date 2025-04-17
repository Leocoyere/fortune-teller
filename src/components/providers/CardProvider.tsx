// src/components/CardThemeProvider.tsx
import { CardContext } from "@/lib/context/CardContext";
import { Card, ColorPalette } from "@/lib/types/types";
import cards from "@/lib/data/cards.json";
import { useParams } from "react-router";
import { decodeBase64Url } from "@/lib/helpers/dataEncoding";

type Props = {
  cardId: string;
  children: React.ReactNode;
};

const cardPalette: Record<string, ColorPalette> = {
  "0": {
    primary: "#EE1217",
    secondary: "#E28222",
    background: "#407CC1",
    accent: "#6C1509"
  },
  "1": {
    primary: "#E75BB3",
    secondary: "#E38B92",
    background: "#3D1105",
    accent: "#E31918"
  },
  "2": {
    primary: "#2DA3D0",
    secondary: "#15469C",
    background: "#E59130",
    accent: "#050E10"
  },
  "3": {
    primary: "#EA8E1A",
    secondary: "#BD1415",
    background: "#571412",
    accent: "#E9D5CA"
  },
  "4": {
    primary: "#D49B1D",
    secondary: "#DFCBA9",
    background: "#E8100D",
    accent: "#710E0E"
  },
  "5": {
    primary: "#3D8AD2",
    secondary: "#E2C79F",
    background: "#CC6F1E",
    accent: "#D4100B"
  },
  "6": {
    primary: "#D11315",
    secondary: "#651E75",
    background: "#E79493",
    accent: "#E6E2D8"
  },
  "7": {
    primary: "#D33814",
    secondary: "#222222",
    background: "#EE850E",
    accent: "#ECE8DD"
  },
  "9": {
    primary: "#E92324",
    secondary: "#0A2834",
    background: "#EACDAF",
    accent: "#E89821"
  },
  "10": {
    primary: "#347ABC",
    secondary: "#D49208",
    background: "#E3C592",
    accent: "#DE3017"
  },
  "11": {
    primary: "#7FA109",
    secondary: "#DEC99A",
    background: "#9F57A2",
    accent: "#D41B07"
  },
  "12": {
    primary: "#0D88AC",
    secondary: "#99200B",
    background: "#0B2D21",
    accent: "#E9A508"
  },
  "13": {
    primary: "#2A7609",
    secondary: "#1A1A0D",
    background: "#CC2F10",
    accent: "#D6940F"
  },
  "14": {
    primary: "#DE225B",
    secondary: "#E59D0F",
    background: "#0D1711",
    accent: "#EDA9D8"
  },
  "15": {
    primary: "#E9B80E",
    secondary: "#C6191B",
    background: "#6F8C12",
    accent: "#151515"
  },
  "16": {
    primary: "#2F2FB9",
    secondary: "#D81A33",
    background: "#1B1015",
    accent: "#E8C311"
  },
  "17": {
    primary: "#E75B15",
    secondary: "#48691F",
    background: "#EAD08E",
    accent: "#38170D"
  },
  "18": {
    primary: "#E8910F",
    secondary: "#1D1714",
    background: "#4B3917",
    accent: "#E6C693"
  },
  "19": {
    primary: "#D80F0E",
    secondary: "#EFD3AA",
    background: "#F47111",
    accent: "#42160C"
  },
  "20": {
    primary: "#144751",
    secondary: "#E7A620",
    background: "#1F879C",
    accent: "#EFD1B6"
  },
  "21": {
    background: "#220F1F",
    primary: "#A73B14",
    secondary: "#7F1BB3",
    accent: "#E5D390"
  }
};

function generateCard() : Card {
  const encodedData = useParams().encodedData!
  const decodedData: { card: { id: keyof typeof cards, reversed: boolean }, question: string } = decodeBase64Url(encodedData);

  const cardId = decodedData.card.id;
  const cardData = cards[cardId];

  const cardOrientation = decodedData.card.reversed ? "reversed" : "upright";

  const biddyTarotBaseUrl = "https://biddytarot.com/tarot-card-meanings/major-arcana/"
  const cardNameUrlable = cardData.name.replace(/The /, "").replace(/ /g, "-").toLowerCase();
  const cardUrl = `${biddyTarotBaseUrl}${cardNameUrlable}`;

  return {
      name: cardData.name,
      answer: cardData[cardOrientation].answer,
      question: decodedData.question,
      message: cardData[cardOrientation].message,
      isReversed: decodedData.card.reversed,
      palette: cardPalette[cardId],
      cardUrl: cardUrl,
    };
}

export default function CardProvider({ children }: Props) {

  const card : Card = generateCard();

  return (
    <CardContext.Provider value={card}>
        {children}
    </CardContext.Provider>
  );
}
