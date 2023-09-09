import vector from '../assets/img/Vector.svg'
import perm from '../assets/peremushstva.svg'
import perm1 from '../assets/peremushstva1.svg'
import perm2 from '../assets/perm3.svg'
import perm3 from '../assets/perm4.svg'
import perm4 from '../assets/perm6.svg'
import perm5 from '../assets/perm7.svg'

export const Feature = () => {
    return (
        <div id={"why_we"}>
            <h3 className={"text-white playfair text-center mt-5 mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Nega Aynan Biz ?" : localStorage.getItem("lang") === "rus" ? "Почему Мы ?" : "Why Us ?"}</h3>
            <div style={{border: "1px solid #f19d6d"}} className={"desktop-nav container"}>
                <div className={"w-100 p-3"}>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <img src={perm} style={{width: "30px", height: "40px", marginRight: "0px"}} alt=""/>
                            {/*<i className="fa-solid fa-leaf" style={{color: "#ffffff"}}></i>*/}
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white playfair mt-2"}>{localStorage.getItem("lang") === "uzb" ? "Restoran, tirik devor o'simliklari bilan" : localStorage.getItem("lang") === "rus" ? "Ресторан, с живыми настенными растениями" : "Restaurant with living wall plants"}</p>
                        </div>
                        <div className={"w-auto mb-3 mt-2"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"} style={{paddingRight: "11px"}}>
                            <img src={perm1} style={{width: "30px", height: "40px"}} alt=""/>
                            {/*<i className="fa-regular fa-image " style={{color: "#ffffff"}}></i>*/}
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white playfair me-2 mt-2"}>{localStorage.getItem("lang") === "uzb" ? "Yopiq teras, estetika va chiroyli fotosuratlarni sevuvchilar uchun" : localStorage.getItem("lang") === "rus" ? "Крытая терраса, для любителей эстетики и красивых фотографий " : "Covered terrace, for lovers of aesthetics and beautiful photos"}</p>
                        </div>
                        <div className={"w-auto mb-3 mt-2"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <img src={perm2} style={{width: "30px", height: "40px"}} alt=""/>
                            {/*<i className={"mdi mdi-wardrobe"} style={{color: "#ffffff"}}></i>*/}
                        </div>
                        <div className={"w-auto mt-2"}>
                            <p className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "O'z shkafi bilan konferentsiya xonasi" : localStorage.getItem("lang") === "rus" ? "Конференц-зал с собственным гардеробом" : "Conference room with its own wardrobe"}</p>
                        </div>

                        <div className={"w-auto mb-3 mt-2"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <img src={perm3} style={{width: "30px", height: "40px"}} alt=""/>
                            {/*<i className={"fa-solid fa-tree "} style={{color: "#ffffff", marginRight:"2px"}}></i>*/}
                        </div>
                        <div className={"w-auto mt-2"}>
                            <p className={"text-white playfair "}>{localStorage.getItem("lang") === "uzb" ? "Tabiatni sevuvchilar uchun bog'" : localStorage.getItem("lang") === "rus" ? "Сад для любителей природы" : "A garden for nature lovers"}</p>
                        </div>
                        <div className={"w-auto mb-3 mt-2"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <img src={perm4} style={{width: "30px", height: "40px"}} alt=""/>
                            {/*<i className={"text-white playfair fa-solid fa-palette"}></i>*/}
                        </div>
                        <div className={"w-auto mt-2"}>
                            <p className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "Ijodkorlar uchun katta manzarali rasmlar" : localStorage.getItem("lang") === "rus" ? "Большие живописные картины для ценителей творчества " : "Large landscape paintings for connoisseurs of creativity"}</p>
                        </div>

                        <div className={"w-auto mt-2 mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto "}>
                            <img src={perm5} style={{width: "30px", height: "40px"}} alt=""/>
                            {/*<i className={"text-white playfair fa-solid fa-mountain"}></i>*/}
                        </div>
                        <div className={"w-auto mt-2"}>
                            <p
                                className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "Kechasi shaharni tomosha qilishni yaxshi ko'radiganlar uchun panoramali derazalar" : localStorage.getItem("lang") === "rus" ? "Панорамные окна, для любителей наблюдать за ночным городом" : "Panoramic windows for those who like to watch the city at night"}</p>
                        </div>
                        <div className={"w-auto mb-3 mt-2"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"media p-4 media-feature"} style={{border: "1px solid #ffffff"}}>
                <div className={"w-auto mb-3"}>
                    <img src={perm} alt="" className={"me-2"} style={{width: "30px", height: "40xp"}}/>
                    {/*<i className="fa-solid fa-leaf me-2" style={{color: "#ffffff"}}></i>*/}
                    <small className={"text-white playfair me-3"}>{localStorage.getItem("lang") === "uzb" ? <>Restoran, tirik
                        devor o'simliklari <br/> bilan</> : localStorage.getItem("lang") === "rus" ? <>Ресторан, с
                        живыми настенными растениями</> : <>Restaurant with living wall plants</>}</small>
                    <img src={vector} className={"w-auto"} alt=""/>
                </div>
                <div className={"w-auto mb-3"}>
                    <img src={perm1} className={"me-2"} style={{width: "30px", height: "40xp"}} alt=""/>
                    {/*<i className="fa-regular fa-images me-2" style={{color: "#ffffff"}}></i>*/}
                    <small
                        className={"text-white playfair me-2"}>{localStorage.getItem("lang") === "uzb" ? "Yopiq teras, estetika va chiroyli fotosuratlarni sevuvchilar uchun" : localStorage.getItem("lang") === "rus" ? "Крытая терраса, для любителей эстетики и красивых фотографий " : "Covered terrace, for lovers of aesthetics and beautiful photos"}</small>
                    <img src={vector} alt=""/>
                </div>

                <div className={"w-auto  mb-3"}>
                    <img src={perm2} className={"me-2"} style={{width: "30px", height: "40xp"}} alt=""/>
                    {/*<i className={"mdi mdi-wardrobe me-2"} style={{color: "#ffffff"}}></i>*/}
                    <small
                        className={"text-white playfair me-2"}>{localStorage.getItem("lang") === "uzb" ? "O'z shkafi bilan konferentsiya xonasi" : localStorage.getItem("lang") === "rus" ? "Конференц-зал с собственным гардеробом" : "Conference room with its own wardrobe"}</small>
                    <img src={vector} alt=""/>
                </div>
                <div className={"w-auto mb-3"}>
                    <img src={perm3} className={"me-2"} style={{width: "30px", height: "40xp"}} alt=""/>
                    {/*<i className={"fa-solid fa-tree me-2"} style={{color: "#ffffff"}}></i>*/}
                    <small
                        className={"text-white playfair me-2"}>{localStorage.getItem("lang") === "uzb" ? "Tabiatni sevuvchilar uchun bog'" : localStorage.getItem("lang") === "rus" ? "Сад для любителей природы" : "A garden for nature lovers"}</small>
                    <img src={vector} alt=""/>
                </div>
                <div className={"w-auto mb-3"}>
                    <img src={perm4} className={"me-2"} style={{width: "30px", height: "40xp"}} alt=""/>
                    {/*<i className={"text-white playfair fa-solid fa-palette me-3"}></i>*/}
                    <small
                        className={"text-white playfair me-2"}>{localStorage.getItem("lang") === "uzb" ? "Ijodkorlar uchun katta manzarali rasmlar " : localStorage.getItem("lang") === "rus" ? <>Большие
                        живописные картины для ценителей
                        творчества</> : "Large landscape paintings for connoisseurs of creativity"}</small>
                    <img src={vector} alt=""/>
                </div>
                <div className={"w-auto mb-3"}>
                    <img src={perm5} className={"me-2"} style={{width: "30px", height: "40xp"}}  alt=""/>
                    {/*<i className={"text-white playfair fa-solid fa-mountain-city me-2"}></i>*/}
                    <small
                        className={"text-white playfair me-2"}>{localStorage.getItem("lang") === "uzb" ? "Kechasi shaharni tomosha qilishni yaxshi ko'radiganlar uchun panoramali derazalar" : localStorage.getItem("lang") === "rus" ? "Панорамные окна, для любителей наблюдать за ночным городом" : "Panoramic windows for those who like to watch the city at night"}</small>
                    <img src={vector} alt=""/>
                </div>
            </div>
        </div>
    )
}