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
            breakpoint: {max: 1024, min: 600},
            items: 2
        },
        mobile: {
            breakpoint: {max: 600, min: 0},
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
            <div className={"news container"} style={{marginTop:"100px"}}>
                <h3 className={"playfair text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Yangiliklar va Bloglar" : localStorage.getItem("lang") === "rus" ? "Новости" : "News and Blogs"}</h3>
                <Carousel responsive={responsive}
                className={"newscarusle"}>
                    {news.length !== 0 ? (
                        news.map((item) => (
                            <>
                                <div className={"media-width-for-news"}>
                                    <img src={Apis.getContent + item.photoId} draggable={"false"} alt="not found"
                                         className={'p-md-2 p-sm-2 media-height'} width={"100%"} height={"300vh"}/>
                                    <p className={'text-white playfair p-md-2'}>{localStorage.getItem("lang") === "uzb" ? item.name : localStorage.getItem("lang") === "rus" ? item.ruName : item.engName}</p>
                                    <button className={"playfair rounded-0 btn btn-lg btn-outline-warning text-white mb-4"}
                                            onClick={() => catching(item.photoId, localStorage.getItem("lang") === "uzb" ? item.uzAbout : localStorage.getItem("lang") === "rus" ? item.ruAbout : item.engAbout, localStorage.getItem("lang") === "uzb" ? item.name : localStorage.getItem("lang") === "rus" ? item.ruName : item.engName,)}
                                            type={"button"} data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop">{localStorage.getItem("lang") === "uzb" ? "Batafsil .... " : localStorage.getItem("lang") === "rus" ? "  Подробно  ...." : "Read more .... "}</button>
                                </div>
                            </>
                        ))

                    ) : (
                        <></>
                    )}
                </Carousel>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog  modal-xl" style={{marginTop: "140px"}}>
                    <div className="modal-content "
                         style={{backgroundColor: "#202020", height: "auto", borderRadius: "0"}}>
                        <div className="modal-header">
                            <br/>
                            <button type="button" className="bg-transparent text-white border-0" data-bs-dismiss="modal"
                                    aria-label="Close"><i className={"fas fa-x"}></i></button>
                        </div>
                        <br/>
                        <div className="modal-body pt-0 pb-0" style={{paddingLeft: "13px"}}>
                            <div className={"row col-md-12 h-100"}>
                                <div className={"col-md-6  p-0"}>
                                    <img src={Apis.getContent + img} className={"w-100"} style={{height: "50vh"}}
                                         alt=""/>
                                </div>
                                <div className={"col-md-5"}>
                                    <h5 className={"text-warning"}>{name}</h5>
                                    <p className={"modal-title text-white"}>
                                        {description}
                                    </p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className={"modal-footer"}
                         style={{backgroundColor: "#202020", height: "auto", borderRadius: "0"}}>
                        <p className={"mb-5 text-warning"}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}