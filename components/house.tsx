import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";

interface HouseProps{
  house:{
    id:number,
    address:string,
    country:string,
    price:number,
    photo:string,
    description:string
   }
 }

const House = (props:HouseProps) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              props.house.photo ? `./houseImages/${props.house.photo}.jpg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{props.house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{props.house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(props.house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{props.house.description}</div>
        </div>
      </div>
    </div>
  );
};

export default House;