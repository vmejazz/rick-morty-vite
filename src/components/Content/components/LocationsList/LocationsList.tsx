import { useSelector } from "react-redux"
import { selectLocations } from "../../../../store"
import { LocationCard } from "../LocationCard"

export const LocationsList = () => {
  const locations = useSelector(selectLocations)

  return (
    <>
      {locations.items.map((item) => <LocationCard key={item.id} item={item} />)}
    </>
  ) 
}


