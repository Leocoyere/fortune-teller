import Card from "@/components/molecules/Card";
import LinkToHome from "@/components/molecules/LinkToHome";
import { useCard } from "@/lib/context/CardContext";
import StarCircle from "@/components/atoms/StarCircle";
import StarSparkle from "@/components/atoms/StarSparkle";
import StarEightBranchs from "@/components/atoms/StarEightBranchs";


export default function Answer() {

    const { name, answer, message, question, palette, isReversed } = useCard();

    console.log(name)

    return (
        <main className="bg-[#3D1105] w-screen min-h-screen flex flex-col-reverse justify-center gap-15 md:gap-20 overflow-hidden" style={{ background: palette.background }}>
            <section className="md:grid md:grid-cols-[auto_1fr] flex flex-col gap-15 md:gap-20 max-w-[1500px] mx-auto md:pl-20 px-4 lg:px-20 mb-10">
                <div>
                    <Card />
                </div>
                <section className="relative flex flex-col justify-end items-center gap-4 max-w-lg w-full">
                    <div className="relative flex flex-col justify-end items-end w-full">
                        <p className="text-white font-light text-base md:text-lg lg:text-xl max-w-sm">{question}</p>
                        <h2 className="cosmic text-[#E38B92] text-8xl md:text-9xl xl:text-[176px] lg:leading-50" style={{ color: palette.secondary }}>{answer}<StarSparkle className="absolute left-0 top-0 md:fixed md:top-1/3 md:left-25" color={palette.primary} /></h2>
                    </div>
                    <span className="relative z-1 text-3xl lg:text-5xl xl:text-6xl font-extralight text-white uppercase md:text-left text-center">{message}</span>
                    <LinkToHome />
                    <StarEightBranchs className="mr-0 ml-auto md:fixed md:bottom-10 md:left-4/5" color={palette.secondary} />
                </section>
            </section>
            <h1 className="relative md:fixed -bottom-1 p-4 md:p-0 md:m-0 text-4xl md:-mb-4 card-title cosmic uppercase text-white">
                {name.split(" ").map((word, i) => <span key={i} className="md:opacity-30 max-w-4xl"> <br className="hidden md:block"/>{word}</span>)}
                { isReversed ?
                <span className="card-title_reversed text-2xl md:opacity-30"> REVERSED</span>
                : null} 
                <StarCircle className="absolute top-1/2 right-4 md:fixed md:top-15 md:left-3/5" color={palette.accent} />
            </h1>
        </main>
    )
}