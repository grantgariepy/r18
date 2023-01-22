import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

interface HouseType {
  id: number;
  country: string;
  address: string;
  price: number;
  description: string;
  photo?: string;
}

interface UseHousesReturnType {
  houses: HouseType[];
  setHouses: (houses: HouseType[]) => void;
  loadingState: string;
}

const useHouses = (): UseHousesReturnType => {
  const [houses, setHouses] = useState<HouseType[]>([]);
  const { get, loadingState } = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
