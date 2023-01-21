import currencyFormatter from "../helpers/currencyFormatter";

interface HouseProps{
 house:{
   id:number,
   address:string,
   country:string,
   price:number,
  }
}

const HouseRow = ( props:HouseProps ) => {
  return (
    <tr>
      <td>{props.house.address}</td>
      <td>{props.house.country}</td>
      <td>{currencyFormatter.format(props.house.price)}</td>
    </tr>
  );
};

export default HouseRow;
