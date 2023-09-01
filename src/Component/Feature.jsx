import vector from '../assets/img/Vector.svg'
export const Feature = () => {
    return (
        <div id={"why_we"}>
            <h3 className={"text-white text-center mt-5 mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Nega biz" : localStorage.getItem("lang") === "rus" ? "Почему нас " : "Why us"}</h3>
            <div style={{border: "1px solid #f19d6d"}} className={" container"}>
                <div className={"p-3"}>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className="fa-solid fa-leaf" style={{color: "#ffffff"}}></i>
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Restoran, tirik devor o'simliklari bilan" : localStorage.getItem("lang") === "rus" ? "Ресторан, с живыми настенными растениями" : "Restaurant with living wall plants"}</p>
                        </div>
                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className="fa-regular fa-images" style={{color: "#ffffff"}}></i>
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Yopiq teras, estetika va chiroyli fotosuratlarni sevuvchilar uchun" : localStorage.getItem("lang") === "rus" ? "Крытая терраса, для любителей эстетики и красивых фотографий " : "Covered terrace, for lovers of aesthetics and beautiful photos"}</p>
                        </div>
                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className={"mdi mdi-wardrobe"} style={{color:"#ffffff"}}></i>
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "O'z shkafi bilan konferentsiya xonasi" : localStorage.getItem("lang") === "rus" ? "Конференц-зал с собственным гардеробом" : "Conference room with its own wardrobe"}</p>
                        </div>

                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className={"fa-solid fa-tree"} style={{color:"#ffffff"}}></i>
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Tabiatni sevuvchilar uchun bog'" : localStorage.getItem("lang") === "rus" ? "Сад для любителей природы" : "A garden for nature lovers"}</p>
                        </div>

                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className={"text-white fa-solid fa-palette"}></i>
                        </div>
                        <div className={"w-auto"}>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Ijodkorlar uchun katta manzarali rasmlar" : localStorage.getItem("lang") === "rus" ? "Большие живописные картины для ценителей творчества " : "Large landscape paintings for creatives"}</p>
                        </div>

                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                    <div className={"row col-md-12"}>
                        <div className={"w-auto"}>
                            <i className={"text-white fa-solid fa-mountain-city"}></i>
                        </div>
                        <div className={"w-auto"}>
                            <small className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Kechasi shaharni tomosha qilishni yaxshi ko'radiganlar uchun panoramali derazalar" : localStorage.getItem("lang") === "rus" ? "Панорамные окна, для любителей наблюдать за ночным городом" : "Panoramic windows for those who like to watch the city at night"}</small>
                        </div>

                        <div className={"w-auto mb-3"}>
                            <img src={vector} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}