import { useSelector } from "react-redux";
import { selectCharacters } from "../../../../store";
import { CharacterCard } from "../CharacterCard";

export const CharactersList = () => {
  const characters = useSelector(selectCharacters);

  return (
    <>
      {characters.items.map((item) => <CharacterCard key={item.id} item={item} />)}
    </>
  ) 
}