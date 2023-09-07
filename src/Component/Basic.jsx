import Carousel from "react-multi-carousel";
// import banner from '../assets/img/Banner/241eecb4-1e7e-48e3-9300-fc7c4f637f38 (1).jpg'
// import banner1 from '../assets/img/Banner/b0f7f9f9-473b-4593-af84-c0880a84c40b.jpg'
// import banner3 from '../assets/img/Banner/efc440dc-fc64-47ee-a933-fcc35a25984e.jpg'
import banner from '../assets/img/Banner/banner.png'
import banner1 from '../assets/img/Banner/banner2.png'
import banner2 from '../assets/img/Banner/banner3.png'

export const Basic = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div id={"home"}>
            <Carousel responsive={responsive}
                      infinite
                      arrows={false}
                      autoPlay
                      autoPlaySpeed={3000}
            >
                <div className={"card text-bg-dark"}>
                    <img src={banner} className={"basic-img"} draggable={"false"} alt=""/>
                    <div className="card-img-overlay basic-title">
                        <h5 className={"text-center playfair"}>{localStorage.getItem("lang") === "uzb" ? "Hotel Shosh Modern zamonaviy mehmonhona" : localStorage.getItem("lang") === "rus" ? "Современная Роскошь в Hotel Shosh Modern": "Modern Luxury at Hotel Shosh Modern" }</h5>
                        <p className="card-text playfair">{localStorage.getItem("lang") === "uzb" ? <><p className={'text-center'}>Hotel Shosh Modern mehmonxonasi <br/> Toshkentda qolish uchun eng zo'r joy.</p></> : localStorage.getItem("lang") === "rus" ? <><p  className={"text-center"}>Hotel Shosh Modern <br/> это идеальное место для вашего отдыха в Ташкенте.</p></> : <><p className={"text-center"}>Hotel Shosh Modern <br/> is the perfect place for your stay in Tashkent.</p></>}</p>
                        <a href={"#order"} className={"btn btn-lg btn-light rounded-0 playfair"}>{localStorage.getItem("lang") === "uzb" ? "Xona buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</a>

                    </div>
                </div>
                <div className={"card text-bg-dark"}>
                    <img src={banner1} className={"basic-img"} draggable={"false"} alt=""/>
                    <div className="card-img-overlay basic-title">
                        <h5 className={"text-center playfair"}>{localStorage.getItem("lang") === "uzb" ? "Hotel Shosh Modern zamonaviy mehmonhona" : localStorage.getItem("lang") === "rus" ? "Современная Роскошь в Hotel Shosh Modern": "Modern Luxury at Hotel Shosh Modern" }</h5>
                        <p className="card-text playfair">{localStorage.getItem("lang") === "uzb" ? <><p className={'text-center'}>Hotel Shosh Modern mehmonxonasi <br/> Toshkentda qolish uchun eng zo'r joy.</p></> : localStorage.getItem("lang") === "rus" ? <><p  className={"text-center"}>Hotel Shosh Modern <br/> это идеальное место для вашего отдыха в Ташкенте.</p></> : <><p className={"text-center"}> Hotel Shosh Modern<br/> is the perfect place for your stay in Tashkent.</p></>}</p>
                        <a href={"#order"} className={" playfair btn btn-lg btn-light rounded-0"}>{localStorage.getItem("lang") === "uzb" ? "Xona buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</a>
                    </div>
                </div>
                <div className={"card text-bg-dark"}>
                    <img src={banner2} className={"basic-img"}  draggable={"false"} alt=""/>
                    <div className="card-img-overlay basic-title">
                        <h5 className={"text-center playfair"}>{localStorage.getItem("lang") === "uzb" ? "Hotel Shosh Modern zamonaviy mehmonhona" : localStorage.getItem("lang") === "rus" ? "Современная Роскошь в Hotel Shosh Modern": "Modern Luxury at Hotel Shosh Modern" }</h5>
                        <p className="card-text playfair">{localStorage.getItem("lang") === "uzb" ? <><p className={'text-center'}>Hotel Shosh Modern mehmonxonasi <br/> Toshkentda qolish uchun eng zo'r joy.</p></> : localStorage.getItem("lang") === "rus" ? <><p  className={"text-center"}>Hotel Shosh Modern <br/> это идеальное место для вашего отдыха в Ташкенте.</p></> : <><p className={"text-center"}>Hotel Shosh Modern <br/> is the perfect place for your stay in Tashkent.</p></>}</p>
                        <a href={"#order"} className={"playfair btn btn-lg btn-light rounded-0"}>{localStorage.getItem("lang") === "uzb" ? "Xona buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</a>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}