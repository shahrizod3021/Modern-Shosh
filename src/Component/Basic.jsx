import Carousel from "react-multi-carousel";
import banner from '../assets/img/Banner/banner.png'
import banner1 from '../assets/img/Banner/banner4.png'
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

            <div className={"card text-bg-dark"}>
                <Carousel responsive={responsive}
                          infinite
                          arrows={false}
                          autoPlay
                          autoPlaySpeed={10000}
                >
                    <img src={banner1} className={"basic-img"} draggable={"false"} alt=""/>
                    <img src={banner2} className={"basic-img"} draggable={"false"} alt=""/>
                    <img src={banner} className={"basic-img"} draggable={"false"} alt=""/>
                </Carousel>
                <div className="card-img-overlay basic-title">
                    <h5 className={"text-center playfair desk-title"}>{localStorage.getItem("lang") === "uzb" ? <>Hotel Shosh Modern zamonaviy mehmonxona</> : localStorage.getItem("lang") === "rus" ? "Современная Роскошь в Hotel Shosh Modern" : "Modern Luxury at Hotel Shosh Modern"}</h5>
                    <h5 className={"text-center playfair mobile-title"}>{localStorage.getItem("lang") === "uzb" ? <>Hotel Shosh Modern <br/> zamonaviy mehmonxona</> : localStorage.getItem("lang") === "rus" ? <>Современная Роскошь в <br/> Hotel Shosh Modern</> : <>Modern Luxury at <br/> Hotel Shosh Modern</>}</h5>
                    <p className="card-text playfair">{localStorage.getItem("lang") === "uzb" ? <><p
                        className={'text-center'}>Hotel Shosh Modern mehmonxonasi <br/> Toshkentda qolish uchun eng zo'r
                        joy.</p></> : localStorage.getItem("lang") === "rus" ? <><p className={"text-center"}>Hotel
                        Shosh Modern <br/> это идеальное место для вашего отдыха в Ташкенте.</p></> : <><p
                        className={"text-center"}> Hotel Shosh Modern<br/> is the perfect place for your stay in
                        Tashkent.</p></>}</p>
                    <a href={"#order"}
                       className={" playfair btn btn-lg btn-light rounded-0"}>{localStorage.getItem("lang") === "uzb" ? "Xona buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</a>
                </div>
            </div>
        </div>
    )
}