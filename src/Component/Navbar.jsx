import logo from '../assets/img/shosh.png'
import eng from '../assets/img/Flags/img.png'
import uzb from '../assets/img/Flags/img_1.png'
import ru from '../assets/img/Flags/img_2.png'
import {useEffect} from "react";
import circlelogo from '../assets/img/logo big.png'

export const Navbar = () => {
    const lang = [
        {id: "uzb", name: "UZB", img: uzb},
        {id: "rus", name: "РУС", img: ru},
        {id: "eng", name: "ENG", img: eng}
    ]

    const chooseLang = (name, flag) => {
        localStorage.setItem("lang", name)
        localStorage.setItem("flag", flag)
        window.location.reload()
    }
    useEffect(() => {
        if (localStorage.getItem("lang") === null) {
            localStorage.setItem("lang", "rus")
            window.location.reload()
        }
    }, [])
    return (
        <div>
            <div style={{backgroundColor: "#202020"}}
                 className={"fixed-top  m-0 desktop-nav row col-md-12 navbar-basic"}>
                <div className={"col-md-2 navbar-logo"}>
                    <a href="#home"><img src={logo} alt="topilmadi" className={"navbar-img"} width={"100%"}/></a>
                </div>
                <div className={"col-md-7"}>
                    <ul className={'d-flex navbar-ul'}>
                        <li className={"navbar-li playfair"}><a className={"navbar-a"}
                                                                href="#about">{localStorage.getItem("lang") === "uzb" ? "Biz Haqimizda" : localStorage.getItem("lang") === "rus" ? "O Нас" : "About Us"}</a>
                        </li>
                        <li className={"navbar-li playfair"}><a className={"navbar-a"}
                                                                href="#about_rooms">{localStorage.getItem("lang") === "uzb" ? "Xonalar" : localStorage.getItem("lang") === "rus" ? "Номера" : "About Rooms"}</a>
                        </li>
                        <li className={"navbar-li playfair"}><a className={"navbar-a"}
                                                                href="#why_we">{localStorage.getItem("lang") === "uzb" ? "Nega Biz" : localStorage.getItem("lang") === "rus" ? "Почему Мы" : "Why Us"}</a>
                        </li>
                        <li className={"navbar-li playfair"}><a className={"navbar-a"}
                                                                href="#news">{localStorage.getItem("lang") === "uzb" ? "Yangliklar va Bloglar" : localStorage.getItem("lang") === "rus" ? "Новости и Блоги" : "News and Blog"}</a>
                        </li>
                        <li className={"navbar-li playfair"}><a className={"navbar-a"}
                                                                href="#contact">{localStorage.getItem("lang") === "uzb" ? "Bog'lanish" : localStorage.getItem("lang") === "rus" ? "Контакт" : "Contact "}</a>
                        </li>
                    </ul>
                </div>

                <div className={'col-md-3 navbar-button'}>
                    <div className={"row col-md-12 "}>
                        <a href={"tel:+998951464004"}
                           className={"col-6 playfair bron btn btn-outline-light"}>{localStorage.getItem("lang") === "uzb" ? "Xona bron qilish " : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</a>
                        <div className="dropdown col-6 playfair">
                            <a className="btn btn-light  dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                <span className={"me-1"}>
                                {localStorage.getItem("lang") === null ? "РУС" : localStorage.getItem("lang") === "uzb" ? "UZB" : localStorage.getItem("lang") === "rus" ? "РУС" : "ENG"}
                                </span>
                                <img width={"20"} className={"mb-1"}
                                     src={localStorage.getItem("flag") === null ? ru : localStorage.getItem("flag")}
                                     alt="not found"/>
                            </a>
                            <ul className="dropdown-menu">
                                {lang.map((item) => (
                                    <>
                                        {item.id === localStorage.getItem("lang") ? (
                                            <></>
                                        ) : (
                                            <li>
                                                <button className="dropdown-item playfair"
                                                        onClick={() => chooseLang(item.id, item.img)}><span
                                                    className={"me-2"}>{item.name}</span><img src={item.img}
                                                                                              width={"20"} alt=""/>
                                                </button>
                                            </li>

                                        )}
                                    </>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className={'media-nav'}>
                <div className={"shosh_nav "} >
                    <div className={"nav-logo"}>
                        <img src={circlelogo} style={{float:"left"}} className={"logo"} alt=""/>
                    </div>
                    <div className={'nav-two-but'}>
                        <div className="dropdown me-2">
                            <a className="btn btn-light playfair  dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                            <span className={"me-1"}>
                                            {localStorage.getItem("lang") === null ? "РУС" : localStorage.getItem("lang") === "uzb" ? "UZB" : localStorage.getItem("lang") === "rus" ? "РУС" : "ENG"}
                                            </span>
                                <img width={"20"} className={"mb-1"}
                                     src={localStorage.getItem("flag") === null ? ru : localStorage.getItem("flag")}
                                     alt="not found"/>
                            </a>
                            <ul className="dropdown-menu">
                                {lang.map((item) => (
                                    <>
                                        {item.id === localStorage.getItem("lang") ? (
                                            <></>
                                        ) : (
                                            <li>
                                                <button className="dropdown-item playfair"
                                                        onClick={() => chooseLang(item.id, item.img)}><span
                                                    className={"me-2"}>{item.name}</span><img src={item.img}
                                                                                              width={"20"} alt=""/>
                                                </button>
                                            </li>

                                        )}
                                    </>
                                ))}
                            </ul>
                        </div>
                        <button type="button" data-bs-toggle="collapse" style={{fontSize:"30px"}}
                                data-bs-target="#collapseExample" aria-controls="collapseExample"
                                className={"bg-transparent playfair border-0 text-white border-0"}><i
                            className={"fa-solid fa-list"}></i></button>
                    </div>
                </div>
                {/*<div className={"row col-12"}>*/}
                {/*    <div className={"col-7 col-md-6"}>*/}
                {/*        <a href="#home"><img src={logo} alt="" className={"width-logo"}/></a>*/}
                {/*    </div>*/}
                {/*    <div className={"col-5 col-md-6  d-flex align-items-center justify-content-center"}>*/}
                {/*        <div className="dropdown me-4 col-6 col-md-2 me-md-5">*/}
                {/*            <a className="btn btn-light  dropdown-toggle" href="#" role="button"*/}
                {/*               data-bs-toggle="dropdown"*/}
                {/*               aria-expanded="false">*/}
                {/*                <span className={"me-1"}>*/}
                {/*                {localStorage.getItem("lang") === null ? "РУС" : localStorage.getItem("lang") === "uzb" ? "UZB" : localStorage.getItem("lang") === "rus" ? "РУС" : "ENG"}*/}
                {/*                </span>*/}
                {/*                <img width={"20"} className={"mb-1"} src={localStorage.getItem("flag") === null ? ru : localStorage.getItem("flag")} alt="not found"/>*/}
                {/*            </a>*/}
                {/*            <ul className="dropdown-menu">*/}
                {/*                {lang.map((item) => (*/}
                {/*                    <>*/}
                {/*                        {item.id === localStorage.getItem("lang") ? (*/}
                {/*                            <></>*/}
                {/*                        ) : (*/}
                {/*                            <li>*/}
                {/*                                <button className="dropdown-item"*/}
                {/*                                        onClick={() => chooseLang(item.id, item.img)}><span className={"me-2"}>{item.name}</span><img src={item.img} width={"20"} alt=""/></button>*/}
                {/*                            </li>*/}

                {/*                        )}*/}
                {/*                    </>*/}
                {/*                ))}*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        <button style={{float: "right"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"  aria-controls="collapseExample" className={"col-6 col-md-2 bg-transparent border-0 text-white border-0"}><i*/}
                {/*            className={"fa-solid fa-list"}></i></button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div className="collapse" id="collapseExample">
                <div className={"pt-2 p-4 pb-0 d-flex flex-column text-start"}>
                    <h5 className={"mb-3 playfair"}><a className={"navbar-a mb-2"}
                                              href="#about">{localStorage.getItem("lang") === "uzb" ? "Biz Haqimizda" : localStorage.getItem("lang") === "rus" ? "O Нас" : "About Us"}</a>
                    </h5>
                    <h5 className={"mb-3 playfair "}><a className={"navbar-a mb-2"}
                                              href="#about_rooms">{localStorage.getItem("lang") === "uzb" ? "Xonalar" : localStorage.getItem("lang") === "rus" ? "Номера" : "About Rooms"}</a>
                    </h5>

                    <h5 className={"mb-3 playfair"} data-bs-dismiss={"collapse"}>
                        <a className={"navbar-a mb-2"}
                           href="#why_we">{localStorage.getItem("lang") === "uzb" ? "Nega Biz " : localStorage.getItem("lang") === "rus" ? "Почему Мы " : "Why Us"}</a>
                    </h5>
                    <h5 className={"mb-3 playfair"}>
                        <a className={"navbar-a mb-2"}
                           href="#news">{localStorage.getItem("lang") === "uzb" ? "Yangiliklar va Bloglar " : localStorage.getItem("lang") === "rus" ? "Новости и Блоги" : "News and Blog"}</a>

                    </h5>
                    <h5 className={"mb-3 playfair"} data-bs-dismiss={"collapse"}>
                        <a className={"navbar-a"}
                           href="#contact">{localStorage.getItem("lang") === "uzb" ? "Bog'lanish" : localStorage.getItem("lang") === "rus" ? "Контакт" : "Contact"}</a>
                    </h5>
                </div>
            </div>
        </div>
    )
}