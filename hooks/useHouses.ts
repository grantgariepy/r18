import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

interface HousesProps{
  id:number,
  address:string,
  country:string,
  price:number
}

const useHouses = () => {
  const [houses, setHouses] = useState<HousesProps[]>([]);
  const {get, loadingState} = useGetRequest("/api/houses")

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses)
    }
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState};
};

export default useHouses;