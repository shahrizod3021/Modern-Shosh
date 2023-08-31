import {GetNews} from "../Service/service.js";
import {useEffect, useState} from "react";
import {Apis} from "../Service/Apis.js";
import Carousel from "react-multi-carousel";

export const News = () => {
    const [news, setNews] = useState([])
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
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

    const getAll = async () => {
        setNews(await GetNews())
    }

    useEffect(() => {
        getAll()
    }, [])

    const catching = (img, about, name) => {
        setImg(img)
        setDescription(about)
        setName(name)
    }
    return (
        <div id={"news"}>
            <div className={"news pt-5 container"}>
                <h3 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Yangiliklar va bloglar" : localStorage.getItem("lang") === "rus" ? "Новости" : "News and blogs"}</h3>
                <Carousel responsive={responsive}>
                    {news.map((item) => (
                        <>
                            <div className={"col"}>
                                <img src={Apis.getContent + item.photoId} alt="not found" className={'p-md-2 '} width={"100%"} height={"400vh"}/>
                                <p className={'text-white p-md-2'}>{localStorage.getItem("lang") === "uzb" ? item.name : localStorage.getItem("lang") === "rus" ? item.ruName : item.engName}</p>
                                <button className={"rounded-0 btn btn-lg btn-outline-warning text-white mb-4"} onClick={() => catching(item.photoId, localStorage.getItem("lang") === "uzb" ? item.uzAbout : localStorage.getItem("lang") === "rus" ? item.ruAbout : item.engAbout, localStorage.getItem("lang") === "uzb" ? item.name : localStorage.getItem("lang") === "rus" ? item.ruName : item.engName,)} type={"button"} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >{localStorage.getItem("lang") === "uzb" ? "Batafsil .... " : localStorage.getItem("lang") === "rus" ? "  Подробно  ...." : "Read more .... "}</button>
                            </div>
                        </>
                    ))}

                </Carousel>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog  modal-xl" style={{marginTop:"140px"}}>
                    <div className="modal-content " style={{backgroundColor:"#202020", height:"auto", borderRadius:"0"}} >
                        <div className="modal-header">
                            <button type="button" className="bg-transparent text-white border-0" data-bs-dismiss="modal"
                                    aria-label="Close"><i className={"fas fa-x"}></i></button>
                        </div>
                        <div className="modal-body pt-0 pb-0" style={{paddingLeft:"13px"}}>
                            <div className={"row col-md-12 h-100"}>
                                <div className={"col-md-6  p-0"}>
                                    <img src={Apis.getContent + img} className={"w-100"} style={{height:"50vh"}} alt=""/>
                                </div>
                                <div className={"col-md-5"}>
                                    <h5 className={"text-warning"}>{name}</h5>
                                    <p className={"modal-title text-white"}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}