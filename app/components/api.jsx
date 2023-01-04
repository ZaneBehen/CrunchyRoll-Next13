import { useState, useEffect } from "react";

export default function Api(props) {
  const [newAnime, setNewAnime] = useState();
  useEffect(() => {
    const asyncCall = async () => {
      const res = await fetch(`${props.link}`, {cache: 'no-store'});
      const data = await res.json()
      const newdata = data.data
      if (newdata != null) { const newnewdata = Object.values(newdata).slice(1, 9);
        setNewAnime(newnewdata)}
      else {asyncCall}
    }
    asyncCall();
}, [newAnime]);
    const truncateString = (str) => {
        if (str?.length > 22) {
          return str.slice(0, 22) + "...";
        } else {
          return str;
        }
      };
        return (
            <div id="explore" className="relative z-50 bg-black w-full h-full">
                  <div id="explore" className="mt-5 flex flex-row justify-between">
                    <h1 className="text-white text-xl pl-1">{props.title}</h1>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={props.info}
                    >
                      <p className="text-gray-300 cursor-pointer mr-2 text-sm">
                        VIEW ALL &gt;
                      </p>
                    </a>
                  </div>
                  <div className="border border-yellow-300 border-b-2 mt-2"></div>
                  <div className="flex flex-row overflow-x-auto">
                    {newAnime && newAnime.map((item, id, mal_id, rank) => (
                      <div
                        className="flex flex-col"
                        key={item.images.jpg.image_url}
                      >
                        <img
                          className="hover:scale-105 transition cursor-pointer mt-3 pl-2 mr-9"
                          height={1500}
                          width={150}
                          key={id}
                          src={item.images.jpg.image_url}
                          alt="img"
                        />
                        <h2
                          className="text-white text-sm mt-1 mr-5 ml-2"
                          key={mal_id}
                        >
                          {truncateString(item.title)}
                        </h2>
                        <h3
                          className="text-sm mt-1 text-gray-500 mr-5 ml-2"
                          key={rank}
                        >
                          {item.status}
                        </h3>
                      </div>
                    ))}
                  </div>
        </div>
        )
      }