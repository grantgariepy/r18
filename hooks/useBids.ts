import { useEffect, useState } from "react";
import { AddBidProps } from "../components/addBid";
import useGetRequest from "./useGetRequest";

export interface IBid {
  houseId:number;
  bidder:string;
  amount:number
}
const useBids = (houseId: number) => {
  const [bids, setBids] = useState<Array<{ houseId: number; bidder: string; amount: number; }>>([]);
  const { get, loadingState } = useGetRequest(`/api/bids/${houseId}`);

  useEffect(() => {
    const fetchBids = async () => {
      const bids = await get();
      setBids(bids);
    };
    fetchBids();
  }, [get]);

  const postBid = async (bid: { houseId: number; bidder: string; amount: number; }) => {
    await fetch(`/api/bids/${bid.houseId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
  };

  const addBid = (bid: { houseId: number; bidder: string; amount: number; }) => {
    postBid(bid);
    setBids([...bids, bid]);
  };

  return { bids, loadingState, addBid };
};

export default useBids;
