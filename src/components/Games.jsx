import { useEffect } from "react";
import { games } from "../data/games";
import { TbPointFilled } from "react-icons/tb"; // значок активности стрима

const Games = () => {

    // анимация при скролле
    useEffect(() => {
        gsap.to('.game', {
            xPercent: -100 * (games.length - 1),
            duration: 4,
            delay: 2,
            scrollTrigger: {
                trigger: "#container",
                start: "top top",
                end: "1000",
                scrub: true,
                pin: true,
            }
        })
    }, [])

    return (
        <section id="container" className="h-screen pt-4 w-full overflow-hidden">
            <h1 className="uppercase font-bold text-2xl lg:text-5xl text-center mb-12">
                Try your hands on</h1>
            <div className="flex gap-3 flex-nowrap">
                {games.map((item, index) => {
                    return <div key={index} className="game hover:scale-95 cursor-pointer">
                        <div className="w-screen relative">
                            <img src={item.img} className="mx-auto w-[250px] sm:w-[350px] lg:w-[500px]" alt="game poster" />
                            {/* информация */}
                            <div className="absolute w-[250px] sm:w-[350px] lg:w-[500px] h-16 px-4 
                       rounded-b-2xl flex justify-between items-center backdrop-blur-lg 
                       bottom-0 left-1/2 -translate-x-1/2">
                                <p className="text-gray-200">{item.streams} Streams</p>
                                <TbPointFilled
                                    className={`text-3xl ${item.isStreaming ? 'text-green-500' : 'text-red-600'}`} />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
}

export default Games;
