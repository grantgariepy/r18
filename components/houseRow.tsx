import currencyFormatter from "../helpers/currencyFormatter";

export interface HouseProps{
 house:{
   id:number,
   address:string,
   country:string,
   price:number,
  }
}

const HouseRow: React.FC<HouseProps> = ( props ) => {
  return (
    <tr>
      <td>{props.house.address}</td>
      <td>{props.house.country}</td>
      <td>{currencyFormatter.format(props.house.price)}</td>
    </tr>
  );
};

export default HouseRow;
