'use client'
import { useState, useEffect } from "react";
import DynamicNavigation from "../../components/dynamic-navigation";
import Link from "next/link";
import Reccomendations from "../../components/reccomendation";

export default function Page({params}) {
    const truncateString = (str) => {
        if (str?.length > 222) {
          return str.slice(0, 400) + "...";
        } else {
          return str;
        }
      };
    const [newAnime, setNewAnime] = useState();
    const [newTitle, setNewTitle] = useState();
    const [newDescription, setNewDescription] = useState();
    const [newImage, setNewImage] = useState();
    useEffect(() => {
      const asyncCall = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`, {cache: 'no-store'});
        const data = await res.json()
        const newdata = data.data
        if (newdata != null) { const newnewdata = Object.values(newdata).slice(1, 9);
          setNewDescription(newdata.synopsis)
          setNewAnime(Object.values(newnewdata[2])[2])
          setNewTitle(newnewdata[6])
          setNewImage(newdata.images.jpg.image_url)}
        else {asyncCall}
      }
      asyncCall();
  }, [newAnime]);
    return (<div className="h-full w-full bg-black flex flex-col box-border overflow-y-visible">
        <DynamicNavigation/>
        <div className="sm:mt-2 mt-5 w-full h-full sm:h-[50%] flex items-center justify-center flex-col">
        <div className="flex flex-row items-center justify-start w-[50%] mb-1 sm:mb-2">
        <a href="/" className="hover:scale-110">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="text-white w-5 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
        </a>
        <h1 className="text-white text-3xl">Anime</h1>
        </div>
        <img className="sm:hidden block max-w-xs scale-75" src={newImage}></img>
        <div className="flex w-[50%] justify-center items-center">
        <iframe className='hidden sm:block w-[75%] h-96' src={newAnime} title="YouTube video player" frameBorder="0"></iframe>
        <div className="ml-2">
        <h1 className="text-white text-3xl font-bold ml-3 mb-4 sm:mb-2">{newTitle}</h1>
        <p className="text-white ml-3 hidden sm:block max-w-xs">{truncateString(newDescription)}</p>
        </div>
        </div>
        </div>
        <section className="border-t-2 border-[#FF8200] sm:mt-0 mt-4 bg-black">
        <h1 className="text-white text-center text-3xl mt-8 sm:mt-5">Reccomendations</h1>
        <Reccomendations id={params.id}/>
        </section>
        </div>)
}