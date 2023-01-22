import { useState } from "react";

interface BidTypes{
  house:{
    id:number,
    address:string,
    country:string,
    price:number,
    photo:string,
    description:string
  },
  addBid:(value:any) => void
}

const AddBid:React.FC<BidTypes> = ({ house, addBid }) => {

  const emptyBid = {
    houseId: house.id,
    bidder: "",
    amount: 0,
  };

  const [newBid, setNewBid] = useState(emptyBid);

  const onBidSubmitClick = () => {
    addBid(newBid);
    setNewBid(emptyBid);
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          id="bidder"
          className="h-100"
          type="text"
          value={newBid.bidder}
          onChange={(e) => setNewBid({ ...newBid, bidder: e.target.value })}
          placeholder="Bidder"
        ></input>
      </div>
      <div className="col-5">
        <input
          id="amount"
          className="h-100"
          type="number"
          value={newBid.amount}
          onChange={(e) =>
            setNewBid({ ...newBid, amount: parseInt(e.target.value) })
          }
          placeholder="Amount"
        ></input>
      </div>
      <div className="col-2">
        <button className="btn btn-primary" onClick={onBidSubmitClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBid;