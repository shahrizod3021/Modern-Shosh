import logo from '../assets/img/shosh.png'
import eng from '../assets/img/Flags/img.png'
import uzb from '../assets/img/Flags/img_1.png'
import ru from '../assets/img/Flags/img_2.png'

export const Navbar = () => {
    const lang = [
        {name: "UZB", img: uzb},
        {name: "RUS", img: ru},
        {name: "ENG", img: eng}
    ]

    const chooseLang = (name, flag) => {
        localStorage.setItem("lang", name)
        localStorage.getItem("fla", flag)
        window.location.reload()
    }
    return (
        <div >
            <div style={{backgroundColor:"#202020"}} className={"fixed-top  m-0 desktop-nav row col-md-12 navbar-basic"}>
                <div className={"col-md-2"}>
                    <img src={logo} alt="topilmadi" width={"100%"}/>
                </div>
                <div className={"col-md-7"}>
                    <ul className={'d-flex navbar-ul'}>
                        <li className={"navbar-li"}><a className={"navbar-a"}
                                                       href="#about">{localStorage.getItem("lang") === "uzb" ? "Biz haqimizda" : localStorage.getItem("lang") === "rus" ? "O нас" : "About us"}</a>
                        </li>
                        <li className={"navbar-li"}><a className={"navbar-a"}
                                                       href="#about_rooms">{localStorage.getItem("lang") === "uzb" ? "Xonalar" : localStorage.getItem("lang") === "rus" ? "Номера" : "About Rooms"}</a>
                        </li>
                        <li className={"navbar-li"}><a className={"navbar-a"}
                                                       href="#why_we">{localStorage.getItem("lang") === "uzb" ? "Nega biz" : localStorage.getItem("lang") === "rus" ? "Почему нас" : "Why we"}</a>
                        </li>
                        <li className={"navbar-li"}><a className={"navbar-a"}
                                                       href="#news">{localStorage.getItem("lang") === "uzb" ? "Yangliklar va bloglar" : localStorage.getItem("lang") === "rus" ? "Cтатистика и блоги" : "News and blogs"}</a>
                        </li>
                        <li className={"navbar-li"}><a className={"navbar-a"}
                                                       href="#contact">{localStorage.getItem("lang") === "uzb" ? "Bog'lanish" : localStorage.getItem("lang") === "rus" ? "Cвязь" : "Contact "}</a>
                        </li>
                    </ul>
                </div>

                <div className={'col-md-3 navbar-button'}>
                    <div className={"row col-md-12"}>
                        <a href={"#order"}
                           className={"col-6 btn btn-outline-light"}>{localStorage.getItem("lang") === "uzb" ? "Xona bron qilish " : localStorage.getItem("lang") === "rus" ? "Забронироват" : "Booking"}</a>
                        <div className="dropdown col-6">
                            <a className="btn btn-light  dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                <span className={"me-1"}>
                                {localStorage.getItem("lang") === null ? "ENG" : localStorage.getItem("lang")}
                                </span>
                                <img width={"20"} className={"mb-1"} src={localStorage.getItem("flag") === null ? eng : localStorage.getItem("flag")} alt="not found"/>
                            </a>
                            <ul className="dropdown-menu">
                                {lang.map((item) => (
                                    <>
                                        {item.name === localStorage.getItem("lang") ? (
                                            <></>
                                        ) : (
                                            <li>
                                                <button className="dropdown-item"
                                                        onClick={() => chooseLang(item.name, item.img)}><span className={"me-2"}>{item.name}</span><img src={item.img} width={"20"} alt=""/></button>
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
                <div className={"row col-12"}>
                    <div className={"col-6"}>
                        <h1 className={"text-white icon"}>shosh</h1>
                    </div>
                    <div className={"col-6 d-flex align-items-center justify-content-center"}>
                        <div className="dropdown col-6">
                            <a className="btn btn-light  dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                <span className={"me-1"}>
                                {localStorage.getItem("lang") === null ? "ENG" : localStorage.getItem("lang")}
                                </span>
                                <img width={"20"} className={"mb-1"} src={localStorage.getItem("flag") === null ? eng : localStorage.getItem("flag")} alt="not found"/>
                            </a>
                            <ul className="dropdown-menu">
                                {lang.map((item) => (
                                    <>
                                        {item.name === localStorage.getItem("lang") ? (
                                            <></>
                                        ) : (
                                            <li>
                                                <button className="dropdown-item"
                                                        onClick={() => chooseLang(item.name, item.img)}><span className={"me-2"}>{item.name}</span><img src={item.img} width={"20"} alt=""/></button>
                                            </li>

                                        )}
                                    </>
                                ))}
                            </ul>
                        </div>
                        <button style={{float: "right"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample" className={"col-3 btn btn-outline-light border-0"}><i
                            className={"fa-solid fa-list"}></i></button>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Modern Shosh</h5>
                    <button type="button" className="text-white btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark " style={{color: "#ffffff", fontSize: "30px"}}></i>
                    </button>
                </div>
                <div className="offcanvas-body text-white">
                    <div>
                        <div className={"d-flex flex-column"}>
                            <a className={"navbar-a"}
                               href="#about">{localStorage.getItem("lang") === "uzb" ? "Biz haqimizda" : localStorage.getItem("lang") === "rus" ? "O нас" : "About us"}</a>
                            <a className={"navbar-a"}
                               href="#about_rooms">{localStorage.getItem("lang") === "uzb" ? "Xonalar" : localStorage.getItem("lang") === "rus" ? "Номера" : "About Rooms"}</a>

                            <a className={"navbar-a"}
                               href="#why_we">{localStorage.getItem("lang") === "uzb" ? "Nega biz " : localStorage.getItem("lang") === "rus" ? "Почему нас " : "Why we"}</a>
                            <a className={"navbar-a"}
                               href="#news">{localStorage.getItem("lang") === "uzb" ? "Statistika " : localStorage.getItem("lang") === "rus" ? "Cтатистика" : "Statistics"}</a>
                            <a className={"navbar-a"}
                               href="#contact">{localStorage.getItem("lang") === "uzb" ? "Bog'lanish" : localStorage.getItem("lang") === "rus" ? "Cвязь" : "Contact "}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}