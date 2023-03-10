import currencyFormatter from "../helpers/currencyFormatter";

interface Bid {
  houseId:number
  bidder: string;
  amount: number;
}

interface BidListProps {
  bids: Bid[];
}

const BidList: React.FC<BidListProps> = ({ bids }) => {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Bidder</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((b) => (
              <tr key={b.houseId}>
                <td>{b.bidder}</td>
                <td>{currencyFormatter.format(b.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidList;
