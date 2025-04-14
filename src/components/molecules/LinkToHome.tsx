import Arrow from "@/components/atoms/Arrow";
import { useCard } from "@/lib/context/CardContext";

export default function LinkToHome() {

    const { palette } = useCard();
    
    return (
        <a href="/" className="flex items-center gap-2">
            <div className="rounded-full w-15 aspect-square translate-x-11" style={{ background: palette.accent }}></div>
            <span className="relative z-1 font-light text-base md:text-lg lg:text-xl text-white">GO BACK HOME</span>
            <Arrow className="w-8" />
        </a>
    )
}