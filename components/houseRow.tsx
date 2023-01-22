import currencyFormatter from "../helpers/currencyFormatter";
import React, { useContext } from 'react';
import { navigationContext } from "./app";
import navValues from "../helpers/navValues";

interface HouseProps{
 house:{
   id:number,
   address:string,
   country:string,
   price:number,
  },
}



const HouseRow: React.FC<HouseProps>= ( {house} ) => {
  const { navigate }:any = useContext(navigationContext);
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
