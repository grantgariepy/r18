import currencyFormatter from "../helpers/currencyFormatter";
import React from 'react';

interface HouseProps{
 house:{
   id:number,
   address:string,
   country:string,
   price:number,
  },
  selectHouse: (values: any) => void;
}



const HouseRow: React.FC<HouseProps> = ( {house, selectHouse} ) => {
  return (
    <tr onClick={()=>selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

export default HouseRow;
