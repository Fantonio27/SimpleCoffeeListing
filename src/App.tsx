import "./App.scss";
import BgImage from "./components/backgroundImage.tsx";
import Button from "./components/button.tsx";
import Card from "./components/card.tsx";
import dataset from "./content.ts";
import { Content } from "./interface.ts";
import { useEffect, useState } from "react";
import { Product } from "./interface.ts";
import Vector from "./assets/vector.svg"

function App() {
  const { title, subTitle, categories }: Content = dataset;
  const [products, SetProducts] = useState([])
  const [activeNo, SetactiveNo] = useState(0)

  function filteredProduct(event: any) : void{
    SetactiveNo(Number(event.target.name))
  }

  useEffect(() =>{

    async function getData(){
      const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      const data = await response.json()
      SetProducts(data)
    }

    getData()
  
  },[])
  return (
    <div className="container">
      <div className="boxContainer">
        <img src={Vector} className="background-design"/>
        <h1>{title}</h1>
        <p>{subTitle}</p>

        <div className="buttonGroup">
          {categories.map((category, index) => {
              const active = activeNo == index;
            return <Button text={category.title} active={active} index={index} method={filteredProduct}/>;
          })}
        </div>

        <div className="coffeeContainer">
        {
          products.filter((product: Product["data"]) => activeNo == 0? product.id != -1 : product.available == true).map((product)=> {
            return(
              <Card data={product}/>
            )
          })
        }
      </div>
      </div>
      <BgImage />
    </div>
  );
}

export default App;
