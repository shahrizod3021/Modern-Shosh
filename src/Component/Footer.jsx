import logo from "../assets/img/shosh.png";

export const Footer = () => {
    return (
        <div>
            <div className={""}>
                <div className={"desktop-footer footer"}>
                    <div className={"col-3 me-5"}>
                        <a href="#home"><img src={logo} alt="topilmadi" className={"footer-img"}/></a>
                    </div>
                    <div className={"col-6 d-flex"}>
                        <div className={"d-flex flex-column col-6"}>
                            <div>
                                <h5 className={"text-white playfair"}>Modern Shosh</h5>
                            </div>
                            <div className={"d-flex align-items-center"}>
                                <a href={"https://t.me"} className={"border-0 bg-transparent"}>
                                    <i className="fa-brands fa-telegram me-3"
                                       style={{fontSize: "25px", color: "#ffffff"}}></i>
                                </a>
                                <a href={"https://www.facebook.com/"} className={"border-0 bg-transparent"}>
                                    <i className="fa-brands fa-facebook me-3"
                                       style={{fontSize: "25px", color: "#ffffff"}}></i>
                                </a>
                                <a href={"https://www.instagram.com"} className={"border-0 bg-transparent"}>
                                    <i className="fa-brands fa-instagram"
                                       style={{fontSize: "25px", color: "#ffffff"}}></i>
                                </a>
                            </div>
                        </div>
                        <div className={"col-6 "}>
                            <h6 className={"text-white mb-2 playfair"}>{localStorage.getItem("lang") === "uzb" ? <><a className={"mb-0 text-white"} href="mailto: info@modernshosh.uz">Email pochta: info@modernshosh.uz</a></> : localStorage.getItem("lang") === "rus" ? <>
                                <a className={"text-white playfair"} href="mailto: info@modernshosh.uz">Электронная почта: info@modernshosh.uz</a></> : <>
                                <a className={"text-white playfair"} href="mailto: info@modernshosh.uz">Email Address: info@modernshsoh.uz</a></>}</h6>
                            <h6 className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ?  <>
                                <a className={"text-white playfair"} href="tel: +998951464004">Telefon raqam: +998951464004</a></>  : localStorage.getItem("lang") === "rus" ? <>
                                <a className={"text-white playfair"} href="tel: +998951464004">Номер телефона: +998951464004</a></> :  <>
                                <a className={"text-white playfair"} href="tel: +998951464004">Phone number: +998951464004</a></> }</h6>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <a href="#home"><img src={logo} alt="topilmadi" className={"footer-img"}/></a>
                    </div>

                </div>
                <p  className={"text-center desktop  p-0 m-0 text-white"}>2023 © Supersite. All Rights
                    Reserved</p>
            </div>

            <div className={"container media h-auto"}>
                <div className={"d-flex align-items-center justify-content-center flex-column"}>
                    <div className={"d-flex align-items-center"}>
                        <a href={"https://t.me"} className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-telegram me-5"
                               style={{fontSize: "30px", color: "#ffffff"}}></i>
                        </a>
                        <a href={"https://www.facebook.com/"} className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-facebook me-4"
                               style={{fontSize: "30px", color: "#ffffff"}}></i>
                        </a>
                        <a href={"https://www.instagram.com"} className={"border-0 bg-transparent"}>
                            <i className="fa-brands fa-instagram"
                               style={{fontSize: "30px", marginLeft: "30px", color: "#ffffff"}}></i>
                        </a>
                    </div>
                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <a href={"tel:+998951464004"} className={"phone playfair text-white mt-3"}
                        >{localStorage.getItem("lang") === "uzb" ? "Telefon raqam" : localStorage.getItem("lang") === "rus" ? "Номер телефона" : "Phone Number"}:
                            +998951464004</a>
                        <a href={"mailto: info@modernshosh.uz"} className={"email playfair text-white mb-3"}
                        >{localStorage.getItem("lang") === "uzb" ? "Email" : localStorage.getItem("lang") === "rus" ? "Электронная почта" : "Email "}:
                            info@modernshosh.uz</a>
                        <small className={"text-white"}>2023 © Supersite. All Rights
                            Reserved</small>
                    </div>
                </div>
            </div>
            <a href={"tel:+998951464004"} className={"btn btn-dark fixed"}><i className={"fas fa-phone"}
                                                                              style={{padding: "10px 5px"}}></i></a>
            <a href="#home" className={"text-dark fixed-right"}><i className={"fa-solid fa-arrow-up "}></i></a>
        </div>
    );
}