import { Product } from "../interface.ts";
import starIconFilled from "../assets/Star_fill.svg"
import starIconEmpty from "../assets/Star.svg"

const Card = ({ data }: Product) => {
  const { id, name, image, popular, price, rating, votes, available} = data;

  const star = votes == 0? starIconEmpty : starIconFilled;

  return (
    <div className="">
      { popular && <div className="badge">Popular</div> }

      <img src={image} alt={name} className="card-image"/>
      <div className="card-container">
        <p className="card-title">{name}</p>
        <p className="card-price">{price}</p>
      </div>
      <div className="card-container">
        <div className="card-second-container">
            <img src={star} alt="" className="card-star"/>
            <p className="card-rate">{rating}</p>
            <p className="card-vote">{votes == 0? 'No ratings': `(${votes} votes)`}</p>
        </div>
        {!available && <p className="card-available">Sold out</p>}
      </div>
    </div>
  );
};

export default Card;
