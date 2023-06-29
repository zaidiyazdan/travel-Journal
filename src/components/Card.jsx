
export default function Card(props){
    return(
        <div className="card">
            <div className="img">
                <img src={props.img} width="200px" alt="Japan" className="pic"/>
            </div>
            <div className="card--data">
                <div className="inline">
                <img src="./location.jpg" width="50px" alt="marker" />
                <p className="country">{props.country}</p>
                <a href="#" className="link">View on Google Maps</a>
                </div>
                <h1 className="name">{props.name}</h1>
                <h3 className="date">{props.date}</h3>
                <p className="discription">
                {props.discription}
                </p>
            </div>
        </div>
    )
}