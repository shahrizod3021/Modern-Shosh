import bg from '../assets/img/image 1.png'
export const Comments = () => {
    return (
        <div>
            <h3 className={"text-center text-white mt-5 mb-4"}>{localStorage.getItem("lang") === "uzb" ? "sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Comments"}</h3>
            <div className={"desktop-comment"}>
                <div  className={"card text-bg-dark"}>
                    <img src={bg} className="comment-img"  alt="not found"/>
                        <div className="card-img-overlay">
                            <div className={"playfair"} style={{paddingTop: "100px", letterSpacing: "1px"}}>
                                <h1 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Odamlar boshqa odamlarga ishonadilar" : localStorage.getItem("lang") === "rus" ? "Люди верят другим людям" : "People Believe Other People "}</h1>
                                <p className={"text-center text-white "}>{localStorage.getItem("lang") === "uzb" ? "Mehmonlaringizga baxtli mijozlaringiz haqida aytib bering" : localStorage.getItem("lang") === "rus" ? "Расскажите своим посетителям о ваших счастливых клиентах" : "Let yout visitors know about your happy customers"}</p>
                            </div>
                            <div className={"container desktop-comments h-auto"}>
                                <div className={"col-md-12 row"}>
                                    <div className={"col-4"}>
                                        <h5 className={"text-white text-center lato pt-4"}>John Adam :</h5>
                                        <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                        <p className={"text-white"}>Отзыв: Пребывание в гостинице ModernShosh было приятным опытом. Очень впечатлен уровнем обслуживания и профессионализмом персонала. Внимательное отношение к деталям и быстрое реагирование на запросы сделали мой отдых комфортным и беззаботным.</p>
                                    </div>
                                    <div className={"col-4 "}>
                                        <h5 className={"text-white text-center lato pt-4"}>Lyudmila Safaeva :</h5>
                                        <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                        <p className={"text-white"}>Отзыв: Очень доволен услугами гостиницы ModernShosh. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.</p>
                                    </div>
                                    <div className={"col-4 "}>
                                        <h5 className={"text-white text-center lato pt-4 "}>Murad Ivanov :</h5>
                                        <p className={"text-center lato text-white "}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                        <p className={"text-white"}>Отзыв: Хочу выразить благодарность за отличное обслуживание в гостинице ModernShosh. Все мои просьбы и вопросы решались оперативно. Уровень сервиса на высоте, персонал профессиональный и внимательный.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>

            <div className={"media media-comments comments"}>
                <div className={"playfair"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Odamlar boshqa odamlarga ishonadilar" : localStorage.getItem("lang") === "rus" ? "Люди верят другим людям" : "People Believe Other People "}</h1>
                    <p className={"text-center text-white "}>{localStorage.getItem("lang") === "uzb" ? "Mehmonlaringizga baxtli mijozlaringiz haqida aytib bering" : localStorage.getItem("lang") === "rus" ? "Расскажите своим посетителям о ваших счастливых клиентах" : "Let yout visitors know about your happy customers"}</p>
                </div>
                <div className={"container"}>
                    <div className={"comment"}>
                        <div className={"col-lg-4 p-2 text-center"}>
                            <h5 className={"text-white text-center lato pt-4"}>John Adam :</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                            <p className={"text-white"}>Отзыв: Пребывание в гостинице ModernShosh было приятным опытом. Очень впечатлен уровнем обслуживания и профессионализмом персонала. Внимательное отношение к деталям и быстрое реагирование на запросы сделали мой отдых комфортным и беззаботным.</p>
                        </div>
                        <hr className={"text-white "}/>
                        <div className={"col-lg-4 p-2 text-center"}>
                            <h5 className={"text-white text-center lato pt-4"}>Lyudmila Safaeva :</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                            <p className={"text-white"}>Отзыв: Очень доволен услугами гостиницы ModernShosh. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.</p>
                        </div>
                        <hr className={"text-white"}/>
                        <div className={"col-lg-4 p-2 text-center"}>
                            <h5 className={"text-white text-center lato pt-4 mt-4"}>Murad Ivanov :</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                            <p className={"text-white"}>Отзыв: Хочу выразить благодарность за отличное обслуживание в гостинице ModernShosh. Все мои просьбы и вопросы решались оперативно. Уровень сервиса на высоте, персонал профессиональный и внимательный.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}