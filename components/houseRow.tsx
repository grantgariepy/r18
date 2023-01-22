import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues, { INavValues } from "../helpers/navValues";
import { navigationContext } from "./app";

interface IHouse {
  address: string;
  country: string;
  price: number;
}
const HouseRow: React.FC<{ house: IHouse }> = ({ house }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.house, house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};


export default HouseRow;
