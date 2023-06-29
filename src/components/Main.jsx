// import data from "../data/data"
import Card from "./Card"

export default function Main(){
    // const cards = data.map(data=><Card img={data.img} country={data.country}/>)
    return (
      <div className="card--wrap">
        <Card
          img="./img1.jpg"
          name="Mount Fuji"
          country="Japan"
          date="12 Jan 2021 - 24 Jan 2021"
          discription="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Card
          img="./img2.jpg"
          name="Sydney Opera House"
          country="AUSTRALIA"
          date="27 May, 2021 - 8 Jun, 2021"
          discription="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        />
        <Card
          img="./img3.jpg"
          name="Geirangerfjord"
          country="norway"
          date="01 Oct, 2021 - 18 Nov, 2021"
          discription="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
        
      </div>
    );
}