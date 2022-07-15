import { useSelector } from "react-redux"
import { selectEpisodes } from "../../../../store"
import { EpisodeCard } from "../EpisodeCard"

export const EpisodesList = () => {
  const episodes = useSelector(selectEpisodes)

  return (
    <>
      {episodes.items.map((item) => <EpisodeCard key={item.id} item={item} />)}
    </>
  ) 
}


