import Card from "@/components/molecules/Card";
import LinkToHome from "@/components/molecules/LinkToHome";
import { useCard } from "@/lib/context/CardContext";
import StarCircle from "@/components/atoms/StarCircle";
import StarSparkle from "@/components/atoms/StarSparkle";
import StarEightBranchs from "@/components/atoms/StarEightBranchs";
import LinkReadMore from "@/components/atoms/LinkReadMore";

export default function Answer() {

    const { name, answer, message, question, palette, isReversed } = useCard();
  
    const handleScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    };

    return (
        <main className="bg-[#3D1105] w-screen min-h-screen flex flex-col-reverse justify-center gap-15 md:gap-20 overflow-hidden" style={{ background: palette.background }}>
            <section className="md:grid md:grid-cols-[auto_1fr] flex flex-col gap-15 md:gap-20 max-w-[1500px] mx-auto md:pl-20 px-4 lg:px-20 mb-10">
                <div>
                    <Card />
                </div>
                <section className="relative flex flex-col justify-end items-center gap-4 max-w-lg w-full">
                    <div className="flex justify-between w-full gap-5">
                        <svg className="floating md:hidden" onClick={handleScroll} width="55" height="116" viewBox="0 0 55 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.0992 114.988L28.1111 115.004C28.2316 115.167 28.3569 115.313 28.5076 115.433C28.5434 115.462 28.57 115.494 28.6082 115.521C28.7765 115.638 28.9508 115.739 29.1421 115.803C29.1475 115.805 29.1494 115.811 29.1562 115.813C29.2733 115.853 29.3893 115.88 29.508 115.899C29.5367 115.903 29.5653 115.903 29.5927 115.906C29.6924 115.918 29.7908 115.925 29.8904 115.924C29.9414 115.922 29.9922 115.917 30.0431 115.912C30.1205 115.906 30.1972 115.895 30.2731 115.88C30.3284 115.869 30.3825 115.856 30.4368 115.843C30.5152 115.821 30.5916 115.793 30.667 115.762C30.712 115.744 30.7579 115.729 30.8032 115.707C30.9189 115.652 31.0304 115.586 31.1361 115.51C31.1434 115.505 31.1524 115.502 31.1588 115.497C31.183 115.479 31.2016 115.456 31.2251 115.437C31.3008 115.376 31.3726 115.312 31.4412 115.241C31.4753 115.205 31.5073 115.168 31.5394 115.13C31.5646 115.101 31.5928 115.075 31.6169 115.043L50.1313 90.2513C50.8589 89.2754 50.6615 87.8935 49.6844 87.1643C48.7099 86.4319 47.3319 86.6313 46.5975 87.6098L32.0467 107.093L31.9677 45.1394C43.644 43.2314 55.0888 34.4938 54.9799 20.7036C54.9689 19.4849 53.9729 18.5061 52.7548 18.5129C51.5327 18.5227 50.5581 19.5193 50.5649 20.7374C50.6594 31.7502 41.5145 38.8484 31.9621 40.6651L31.9141 2.91104C31.9134 1.6946 30.9253 0.706308 29.7044 0.707687C29.2156 0.710594 28.7642 0.868589 28.3989 1.13824C27.8527 1.54152 27.4994 2.18767 27.4995 2.91849L27.5487 41.1204C18.0122 41.2883 6.81167 36.2038 4.65963 21.0283C4.48976 19.82 3.37245 18.9817 2.16612 19.1526C1.79013 19.204 1.44981 19.3508 1.16662 19.5599C0.535083 20.0261 0.173703 20.8162 0.289844 21.6453C2.69086 38.5723 15.271 45.8254 27.406 45.6396L27.3378 107.222L13.4337 88.3883C12.7103 87.4084 11.4967 87.0762 10.5144 87.8014C9.53214 88.5266 9.49224 89.7842 10.2157 90.7641L28.0968 114.985C28.098 114.986 28.0992 114.988 28.0992 114.988Z" fill={palette.accent} />
                        </svg>
                        <div className="relative flex flex-col justify-end items-end w-full">
                            <p className="relative z-1 text-white font-light text-base md:text-lg lg:text-xl max-w-sm">{question}</p>
                            <h2 className="cosmic text-[#E38B92] text-8xl md:text-9xl xl:text-[176px] lg:leading-50" style={{ color: palette.secondary }}>{answer}</h2>
                        </div>
                    </div>
                    <div className="relative h-dvh md:h-auto flex flex-col justify-center items-end md:items-center gap-4">
                        <LinkReadMore />
                        <span className="relative z-1 text-6xl lg:text-5xl xl:text-6xl font-extralight text-white cosmic md:text-left flex flex-col gap-4 text-center my-5 md:block">
                            <svg className="w-10 md:self-start md:inline" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1099 10.875C10.1099 7.22 12.8299 2.375 16.3999 0.25V1.865C14.9549 2.97 13.8499 4.415 13.3399 6.2C16.3999 5.18 18.5249 8.58 18.5249 11.385C18.5249 13.68 17.0799 16.57 14.3599 16.57C11.7249 16.57 10.1099 13.765 10.1099 10.875ZM4.75488 16.57C2.11988 16.57 0.504883 13.765 0.504883 10.875C0.504883 7.22 3.22488 2.375 6.79488 0.25V1.865C5.34988 2.97 4.24488 4.415 3.73488 6.2C6.79488 5.18 8.91988 8.58 8.91988 11.385C8.91988 13.68 7.47488 16.57 4.75488 16.57Z" fill="#fff"/>
                            </svg>
                            &nbsp;
                            {message}
                            &nbsp;
                            <svg className="w-10 self-end md:inline" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.9199 10.875C8.9199 7.22 6.1999 2.375 2.6299 0.25V1.865C4.0749 2.97 5.1799 4.415 5.6899 6.2C2.6299 5.18 0.504902 8.58 0.504902 11.385C0.504902 13.68 1.9499 16.57 4.6699 16.57C7.3049 16.57 8.9199 13.765 8.9199 10.875ZM14.2749 16.57C16.9099 16.57 18.5249 13.765 18.5249 10.875C18.5249 7.22 15.8049 2.375 12.2349 0.25V1.865C13.6799 2.97 14.7849 4.415 15.2949 6.2C12.2349 5.18 10.1099 8.58 10.1099 11.385C10.1099 13.68 11.5549 16.57 14.2749 16.57Z" fill="#fff"/>
                            </svg>
                        </span>
                        <LinkToHome />
                        <StarSparkle className="absolute top-0 translate-y-full right-0 md:-translate-y-1/2 md:-translate-x-full xl:translate-x-full" color={palette.primary} />
                        <StarEightBranchs className="absolute bottom-0 left-0 -translate-y-full md:translate-y-1/2 md:hidden" color={palette.accent} />
                    </div>
                </section>
            </section>
            <h1 className="relative md:fixed -bottom-1 p-4 md:p-0 md:m-0 text-4xl md:-mb-4 card-title cosmic uppercase text-white">
                {name.split(" ").map((word, i) => <span key={i} className="md:opacity-30 max-w-4xl"> <br className="hidden md:block"/>{word}</span>)}
                { isReversed ?
                <span className="card-title_reversed text-2xl md:opacity-30"> REVERSED</span>
                : null} 
                <StarCircle className="absolute top-1/2 right-4 md:fixed md:top-5 md:left-3/5" color={palette.accent} />
            </h1>
        </main>
    )
}