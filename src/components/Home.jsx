import { useEffect } from 'react';
import Games from './Games';
import logo from '../assets/logo.png' 
import playLogo from '../assets/play-logo.png'; // баннер 
import cover from '../assets/video-cover.png'; // обложка для видео
// значки 
import playIcon from '../assets/icons/play-icon.png'; 
import recordIcon from '../assets/icons/record-icon.png';
import shareIcon from '../assets/icons/share-icon.png';
import { IoPlay } from "react-icons/io5"; // значок плеера

const Home = () => {
  
    //    анимация текста приветствия 
    useEffect(() => {
        gsap.fromTo('#text', {
            y: '-300px',
            opacity: 0,
            skewY: 30,
            scale: 0.2,
        }, {
            y: 0,
            opacity: 1,
            skewY: 0,
            scale: 1,
            duration: 3,
            ease: "power2",
        });
    }, []);

    // анимация появления баннера "о нас"
    useEffect(() => {
        gsap.fromTo('.appear', {
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: "#poster",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            opacity: 1,
            ease: "power3",
            duration: 3,
            stagger: 1,
            delay: 2,
        })
    }, []);

    // параллакс эффект чат-секции
    useEffect(() => {
        gsap.to('#content', {
            y: '200px',
            scrollTrigger: {
                trigger: '.parallax',
                start: 'top 30%',
                end: 'bottom 50%',
                scrub: true,
                duration: 2,
            }
        })
    }, []);

    // анимация появления в секции сообщества
    useEffect(() => {
      gsap.fromTo('.community-text', {
        opacity: 0,
        x: 700,
        scale:0.4,
        stagger:2,
    },{
        scrollTrigger: {
            trigger: '#community',
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: 1,
            // pin:true,
            duration: 1,
         },  
         opacity: 1,
         x: 0,
         scale: 1,
      });       
    },[]);


    return (
        <div className='bg-black text-white'>
            {/* ПРИВЕТСТВИЕ  */}
            <section className="hero h-screen py-10">
                {/* шапка  */}
                <header className='flex flex-col gap-6 md:flex-row md:px-16 mx-auto md:justify-between items-center'>
                    <img src={logo} className='drop-shadow-lg' alt="logo" />
                    <nav className='flex gap-6 md:gap-12 xl:gap-20'>
                        <a className='hover:text-gray-300' href="#">Home</a>
                        <a className='hover:text-gray-300' href="#">Games</a>
                        <a className='hover:text-gray-300' href="#">Streams</a>
                        <a className='hover:text-gray-300' href="#">Chat</a>
                    </nav>
                </header>
                {/* информация о сообществе  */}
                <div className='flex flex-col items-center mt-40 text-center gap-4'>
                    <h1 id='text' className='uppercase font-bold text-2xl text-center lg:text-5xl'>
                        A Community
                        <br />
                        For Gamers by
                        <br />
                        Gamers
                    </h1>
                    <p className='text-gray-300'>
                        Meet, network, make new friends
                        <br />
                        and play together
                    </p>
                    <div className='flex gap-6 mt-7'>
                        <button className='border-2 border-violet-700 cursor-pointer p-2 bg-transparent 
                        hover:bg-gradient-to-br from-violet-700 to-violet-400 hover:border-transparent'>
                            Join now
                        </button>
                        <button className='border-2 border-violet-700 cursor-pointer p-2 bg-transparent 
                        hover:bg-gradient-to-br from-violet-700 to-violet-400 hover:border-transparent'>
                            How it works
                        </button>
                    </div>
                </div>
            </section>
            {/* О НАС */}
            <section className='py-28 gap-9'>
                {/* баннер */}
                <div className='relative mx-auto w-[200px] sm:w-[350px] lg:w-[540px] lg:h-screen'>
                    <h1 className='uppercase font-bold text-2xl lg:text-5xl absolute -right-7 -top-9 lg:-right-20 
                    appear z-20'>
                        Play
                        <br />
                        record
                        <br />
                        share
                    </h1>
                    <img id='poster' src={playLogo} className='w-full lg:h-[490px] appear' alt="poster" />
                    {/* значки  */}
                    <div className='absolute right-1 bottom-72 sm:bottom-52 lg:bottom-36 2xl:bottom-52 appear'>
                        <img src={playIcon} className='cursor-pointer hover:opacity-80 size-7 sm:size-12' alt="icon" />
                        <img src={recordIcon} className='cursor-pointer hover:opacity-80 size-7 sm:size-12' alt="icon" />
                        <img src={shareIcon} className='cursor-pointer hover:opacity-80 size-7 sm:size-12' alt="icon" />
                    </div>
                    {/* сведения  */}
                    <div className='mt-9 flex flex-col gap-4 lg:absolute lg:-left-8 lg:bottom-14 2xl:bottom-28 lg:w-[370px]'>
                        <h1 className='uppercase font-bold text-2xl lg:text-5xl appear'>
                            Show
                            <br />
                            your
                            <br />
                            talent
                        </h1>
                        <p className='text-gray-300 appear'>
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                            Donec rutrum congue leo eget malesuada. Vivamus magna justo.
                        </p>
                        <a href="#" className='text-violet-700 hover:text-violet-400 appear'>Start Streaming &rarr;</a>
                    </div>
                </div>
            </section>
            {/* ЧАТЫ  */}
            <section className='h-screen mb-12 relative parallax'>
                {/* содержимое */}
                <div id='content' className='absolute top-16 lg:top-32 left-2/4 -translate-x-1/2 
                 flex flex-col items-center gap-6'>
                    <h1 className='uppercase font-bold text-2xl lg:text-5xl text-center'>
                        Make New
                        <br />
                        friends and
                        <br />
                        play with them
                    </h1>
                    <button className='bg-gradient-to-br w-44 from-violet-700 to-violet-400 p-1 border border-violet-700
                     hover:bg-none'>
                        Join Chatrooms
                    </button>
                </div>
            </section>
            {/* ИГРЫ  */}
            <Games />
            {/* ВИДЕО */}
            <section className='h-[60vh] sm:h-[80vh] lg:h-screen lg:pt-40'>
                <div className='relative mx-auto w-11/12 lg:w-[730px] shadow-2xl shadow-violet-500'>
                    <h1 className='uppercase font-bold text-4xl lg:text-7xl
                 absolute -top-11 lg:-left-6'>
                        Watch top
                        <br />
                        pick streams
                    </h1>
                    <video poster={cover} className='w-full' />
                    <button className='bg-violet-500 py-2 px-4 lg:py-5 lg:px-9 lg:text-3xl hover:opacity-65 rounded-md
                 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                        <IoPlay />
                    </button>
                </div>
            </section>
            {/* СООБЩЕСТВО */}
            <section id='community' className='h-screen overflow-hidden community-bg relative 
            after:absolute after:w-full after:h-full after:top-0 after:bg-black after:opacity-60'>
                 <div className='flex flex-col items-center gap-8 absolute z-10 
                 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                    <h1 className='community-text uppercase font-bold text-3xl lg:text-7xl text-center whitespace-nowrap'>
                        Become a part of 
                        <br />
                        the community</h1>
                 <button className='community-text bg-gradient-to-br w-44 from-violet-700 to-violet-400 p-1 border border-violet-700 
                 hover:bg-none'>
                    Join now</button>
                 </div>
            </section>
            {/* ПОДВАЛ */}
            <footer className='flex flex-col md:flex-row gap-3 items-center justify-between border-t border-gray-950 mt-9 py-8 px-6'>
                <div className='text-gray-300 flex justify-center gap-5'>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Term & Conditions</a>
                </div>
                <p>Copyright © Grux </p>
            </footer>
        </div>
    );
}

export default Home;
