import { useState, useEffect } from "react";
import Link from "next/link";

export default function Reccomendations(props) {
    const [newAnime, setNewAnime] = useState();
    const [newTitle, setNewTitle] = useState();
    useEffect(() => {
      const asyncCall = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${props.id}/recommendations`, {cache: 'no-store'});
        const data = await res.json()
        const newdata = data.data
        if (newdata != null) { const newnewdata = Object.values(newdata.slice(0, 4))
          setNewAnime(newnewdata)
        console.log(newnewdata)}
        else {asyncCall}
      }
      asyncCall();
  }, [newAnime]);
    return (
        <div className="flex flex-col sm:flex-row w-full items-center justify-center md:mt-4">
            {newAnime && newAnime.map((item,rank,id) => (
                      <div
                        className="flex flex-col hover:translate-y-[-0.25rem] transition items-center justify-center"
                        key={rank}
                      >
                        <Link href={`/anime/${item.entry.mal_id}`}>
                        <img
                          className="cursor-pointer mt-3 pl-2 mr-9 lg:max-h-[320px] lg:w-[250px]"
                          height={1500}
                          width={150}
                          key={id}
                          src={item.entry.images.jpg.image_url}
                          alt="img"
                        />
                        </Link>
                        <h2
                          className="text-white text-sm mt-1 mr-5 ml-2 lg:text-xl lg:text-center"
                          key={item.entry.mal_id}
                        >
                          {item.entry.title}
                        </h2>
                      </div>
                    ))}
    </div>
    )
  }