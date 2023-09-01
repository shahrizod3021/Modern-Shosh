import logo from "../assets/img/logo big.png";

export const Footer = () => {
    return (
        <div>
            <div className={"desktop-nav m-0 w-100 row col-md-12"}>
                <div className={"w-75 d-flex align-items-center"} style={{marginLeft: "200px"}}>
                    <div className={"col-md-2 mt-3"}>
                        <a href="#home"><img src={logo} alt="topilmadi" width={"40%"} style={{marginLeft: "80px"}}
                                             height={"80px"}/>
                        </a>
                    </div>
                    <div className={"col-md-8"}>
                        <div className={"d-flex align-items-center mt-4 flex-column  justify-content-center"}>
                            <div className={"d-flex align-items center justify-content-center"}>
                                <div className={"d-flex align-items-center flex-column mt-3"}
                                     style={{marginRight: "250px"}}>
                                    <div>
                                        <h5 className={"text-white text-center"}>Modern Shosh</h5>
                                    </div>
                                    <div className={"d-flex align-items-center"}>
                                        <a href={"https://www.pinterest.com"} className={"border-0 bg-transparent"}>
                                            <i className="fa-brands fa-pinterest me-2"
                                               style={{fontSize: "25px", color: "#ffffff"}}></i>
                                        </a>
                                        <a href={"https://www.twitter.com"} className={"border-0 bg-transparent"}>
                                            <i className="fa-brands fa-twitter me-2"
                                               style={{fontSize: "25px", color: "#ffffff"}}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"} className={"border-0 bg-transparent"}>
                                            <i className="fa-brands fa-facebook me-2"
                                               style={{fontSize: "25px", color: "#ffffff"}}></i>
                                        </a>
                                        <a href={"https://www.instagram.com"} className={"border-0 bg-transparent"}>
                                            <i className="fa-brands fa-instagram "
                                               style={{fontSize: "25px", color: "#ffffff"}}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"d-flex flex-column mt-4"}>
                                    <small><a href={"tel:+998951464004"}
                                              className={"text-decoration-none text-white me-3 mt-3"}>{localStorage.getItem("lang") === "uzb" ? "Telefon raqam" : localStorage.getItem("lang") === "rus" ? "номер телефона" : "Phone Number"}:
                                        +998951464004</a></small>
                                    <small className={"mt-2"}> <a href={"https://www.info@modernshosh.uz"}
                                                                  className={"text-white text-decoration-none"}>{localStorage.getItem("lang") === "uzb" ? "Email" : localStorage.getItem("lang") === "rus" ? "Электронная почта" : "Email "}:
                                        info@modernshosh.uz</a></small>
                                </div>

                            </div>
                            <small className={"text-white mt-3"}>2023 © Supersite. All Rights Reserved</small>
                        </div>
                    </div>
                    <div className={"col-md-2 mt-3"}>
                        <a href="#home"><img src={logo} alt="topilmadi" width={"40%"} height={"80px"}/></a>
                    </div>

                </div>
            </div>

            <div className={"container media h-auto"}>
                <div className={"d-flex align-items-center justify-content-center flex-column"}>
                    <div className={"d-flex align-items-center"}>
                        <button className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-pinterest me-5"
                               style={{fontSize: "30px", marginLeft: "40px", color: "#ffffff"}}></i>
                        </button>
                        <button className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-twitter me-5"
                               style={{fontSize: "30px", color: "#ffffff"}}></i>
                        </button>
                        <button className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-facebook me-4"
                               style={{fontSize: "30px", color: "#ffffff"}}></i>
                        </button>
                        <button className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-instagram "
                               style={{fontSize: "30px", marginLeft: "30px", color: "#ffffff"}}></i>
                        </button>
                    </div>
                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <a href={"tel:+998951464004"} className={" text-white mt-3"}
                           style={{marginLeft: "40px"}}>{localStorage.getItem("lang") === "uzb" ? "Telefon raqam" : localStorage.getItem("lang") === "rus" ? "номер телефона" : "Phone Number"}:
                            +998951464004</a>
                        <a href={"email:info@modernshosh.uz"} className={"text-white mb-3"}
                           style={{marginLeft: "40px"}}>{localStorage.getItem("lang") === "uzb" ? "Email" : localStorage.getItem("lang") === "rus" ? "Электронная почта" : "Email "}:
                            info@modernshosh.uz</a>
                        <small className={"text-white"} style={{marginLeft: "45px"}}>2023 © Supersite. All Rights
                            Reserved</small>
                    </div>
                </div>
            </div>

        </div>
    );
}