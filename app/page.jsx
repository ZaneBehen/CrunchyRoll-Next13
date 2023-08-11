'use client'
import { UserAuth } from "../context/AuthContext";
import { Inter } from '@next/font/google'
import Navigation from './components/navigation'
import Info from './components/info'
import Api from './components/api'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, logout } = UserAuth();
  return (
 <div className='bg-black overflow-hidden'>
  <div className='h-screen w-full scrollbar-hide flex'>
    <Navigation/>
    <div className='flex items-center justify-center h-[132%] sm:h-[122%] w-full flex-col'>
    <h1 className=" z-50 whitespace-nowrap text-4xl text-white md:text-5xl lg:text-6xl font-bold ">The World's Largest</h1>
    <h1 className="sm:mt-2 z-50 whitespace-nowrap text-white text-4xl md:text-5xl lg:text-6xl font-bold">Anime Collection</h1>
    <button className="px-0 z-50 mt-10 py-2 w-[70%] md:w-[30%] lg:w-[15%] bg-orange-600 sm:text-md text:xs cursor-not-allowed">VIEW PREMIUM PLANS</button>
    <div className='flex flex-col sm:flex-row sm:mt-0 mt-8'>
    <Info image='M20 40a20 20 0 110-40 20 20 0 010 40zm0-2a18 18 0 100-36 18 18 0 000 36zm-5.75-12.66L19 20V9h2v11.38a1 1 0 01-.25.66l-5 5.62-1.5-1.32z'
          info1 = 'Watch new episodes one hour'
          info2 = 'after they air in Japan'
          visibility = 'visible'/>

    <Info image='M20 40a6 6 0 11.01-12.01A6 6 0 0120 40zm0-2a4 4 0 100-8 4 4 0 000 8zm0-38a6 6 0 016 6v14a6 6 0 11-12 0V6a6 6 0 016-6zm0 2a4 4 0 00-4 4v14a4 4 0 108 0V6a4 4 0 00-4-4z'
          info1 = 'Enjoy access to unlimited ad-'
          info2 = 'free anime'
          visibility = 'visible'/>

    <Info image='M10.59 2H6v4.59L10.59 2zM14 2v8H6v28h28V2H14zM6 0h28a2 2 0 012 2v36a2 2 0 01-2 2H6a2 2 0 01-2-2V2c0-1.1.9-2 2-2zm6 8V3.41L7.41 8H12zm1 19l-3-12 6 3 4-6 4 6 6-3-3 12H13zm1.56-2h10.88L27 18.73l-3.7 1.85L20 15.6l-3.32 4.97L13 18.73 14.56 25z'
          info1 = 'Read hundreds of chapters'
          info2 = 'across dozens of manga titles*'
          visibility = 'visible'/>

    <Info image='M11.35 6c1.5-3.86 4.29-6 8.65-6s7.15 2.14 8.65 6H37v34H3V6h8.35zm2.2 0h12.9A6.65 6.65 0 0020 2a6.65 6.65 0 00-6.46 4zm-2.82 2H5v30h30V8h-5.73c.5 2 .73 4.35.73 7h-2c0-2.75-.26-5.1-.8-7H12.8c-.54 1.9-.8 4.25-.8 7h-2c0-2.65.23-5 .73-7z'
          info1 = 'Save with exclusive'
          info2 = 'Crunchyroll Store discounts*'
          visibility = 'invisible'/>
    </div>
    </div>
    <img
            className="h-full w-full md:w-screen scale-x-[2.5] md:scale-x-100 bg-contain max-w-none z-1 absolute"
            alt="img"
            src="https://static.crunchyroll.com/cr-spa-registration/assets/img/landing/hero_bg.png"
          />
    </div>
    {user?.email ? (
      <>
    <Api link='https://api.jikan.moe/v4/top/anime' title='Top Rated' info='https://myanimelist.net/topanime.php'/>
    <Api link='https://api.jikan.moe/v4/anime?q=jojo%20no&limit=9' title='Jojos Bizarre Adventure' info='https://myanimelist.net/anime/14719/JoJo_no_Kimyou_na_Bouken_TV?cat=anime'/>
    <Api link='https://api.jikan.moe/v4/anime?q=dragon ball&limit=9' title='Dragon ball' info='https://myanimelist.net/anime/813/Dragon_Ball_Z'/>
    </>
    ) : (
      <div></div>
  )}
  </div>
  )
}
