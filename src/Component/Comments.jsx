import bg from '../assets/img/image 1.png'
export const Comments = () => {
    return (
        <div>
            <h3 className={"text-center text-white"}>{localStorage.getItem("lang") === "uzb" ? "sharhlar" : localStorage.getItem("lang") === "rus" ? "отзывы" : "Comments"}</h3>
            <div className={" desktop-nav"}>
                <div  className={"card text-bg-dark"}>
                    <img src={bg} className="card-img"  alt="not found"/>
                        <div className="card-img-overlay">
                            <div className={"playfair"} style={{paddingTop: "150px", letterSpacing: "1px"}}>
                                <h1 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Odamlar boshqa odamlarga ishonadilar" : localStorage.getItem("lang") === "rus" ? "Люди верят другим людям" : "People Believe Other People "}</h1>
                                <p className={"text-center text-white "}>{localStorage.getItem("lang") === "uzb" ? "Mehmonlaringizga baxtli mijozlaringiz haqida aytib bering" : localStorage.getItem("lang") === "rus" ? "Расскажите своим посетителям о ваших счастливых клиентах" : "Let yout visitors know about your happy customers"}</p>
                            </div>
                            <div className={"container h-auto"}>
                                <div className={"col-md-12 row"}>
                                    <div className={"col-4"}>
                                        <p className={"text-white"}>Отзыв: Пребывание в гостинице ModernShosh было приятным опытом. Очень впечатлен уровнем обслуживания и профессионализмом персонала. Внимательное отношение к деталям и быстрое реагирование на запросы сделали мой отдых комфортным и беззаботным.</p>
                                        <h5 className={"text-white text-center lato pt-4"}>John Adam :</h5>
                                        <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                    </div>
                                    <div className={"col-4 "}>
                                        <p className={"text-white"}>Отзыв: Очень доволен услугами гостиницы ModernShosh. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.</p>
                                        <h5 className={"text-white text-center lato pt-4 mt-5"}>Lyudmila Safaeva :</h5>
                                        <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                    </div>
                                    <div className={"col-4 "}>
                                        <p className={"text-white"}>Отзыв: Хочу выразить благодарность за отличное обслуживание в гостинице ModernShosh. Все мои просьбы и вопросы решались оперативно. Уровень сервиса на высоте, персонал профессиональный и внимательный.</p>
                                        <h5 className={"text-white text-center lato pt-4 mt-5"}>Murad Ivanov :</h5>
                                        <p className={"text-center lato text-white "}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>

            <div className={"media comments"}>
                <div className={"playfair comment-heading"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Odamlar boshqa odamlarga ishonadilar" : localStorage.getItem("lang") === "rus" ? "Люди верят другим людям" : "People Believe Other People "}</h1>
                    <p className={"text-center text-white "}>{localStorage.getItem("lang") === "uzb" ? "Mehmonlaringizga baxtli mijozlaringiz haqida aytib bering" : localStorage.getItem("lang") === "rus" ? "Расскажите своим посетителям о ваших счастливых клиентах" : "Let yout visitors know about your happy customers"}</p>
                </div>
                <div className={"container"}>
                    <div className={"col-md-12 row"}>
                        <div className={"col-md-4"}>
                            <p className={"text-white"}>Отзыв: Пребывание в гостинице ModernShosh было приятным опытом. Очень впечатлен уровнем обслуживания и профессионализмом персонала. Внимательное отношение к деталям и быстрое реагирование на запросы сделали мой отдых комфортным и беззаботным.</p>
                            <h5 className={"text-white text-center lato pt-4"}>Отзыв 1:</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                        </div>
                        <div className={"col-md-4"}>
                            <p className={"text-white"}>Отзыв: Очень доволен услугами гостиницы ModernShosh. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.</p>
                            <h5 className={"text-white text-center lato pt-4"}>Отзыв 2:</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>

                        </div>
                        <div className={"col-md-4"}>
                            <p className={"text-white"}>Отзыв: Хочу выразить благодарность за отличное обслуживание в гостинице ModernShosh. Все мои просьбы и вопросы решались оперативно. Уровень сервиса на высоте, персонал профессиональный и внимательный.</p>
                            <h5 className={"text-white text-center lato pt-4 "}>Отзыв 3:</h5>
                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}