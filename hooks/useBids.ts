import { useEffect, useState } from "react";
import { AddBidProps } from "../components/addBid";
import useGetRequest from "./useGetRequest";

export interface IBid {
  houseId:number;
  bidder:string;
  amount:number
}
const useBids = (houseId: number) => {
  const [bids, setBids] = useState<Array<IBid>>([]);
  const { get, loadingState } = useGetRequest(`/api/bids/${houseId}`);

  useEffect(() => {
    const fetchBids = async () => {
      const bids = await get();
      setBids(bids);
    };
    fetchBids();
  }, [get]);

  const postBid = async (bid: IBid) => {
    await fetch(`/api/bids/${bid.houseId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
  };

  const addBid = (bid: IBid) => {
    postBid(bid);
    setBids([...bids, bid]);
  };

  return { bids, loadingState, addBid };
};

export default useBids;
