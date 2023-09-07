import bg from '../assets/img/Banner/3576f3e3-3547-4041-b91f-89ba5b13c950.jpg'

export const Comments = () => {
    const comments = [
        {
            lang: "eng",
            comment: "Feedback: Staying at the Shosh Modern was a pleasant experience. Very impressed with the level of service and professionalism of the staff. Attention to detail and quick response to requests made my stay comfortable and carefree.\n",
            name: "John Adam",
            media: true
        },
        {
            lang: "ru",
            comment: "Отзыв: Очень доволен услугами гостиницы Shosh Modern. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.",
            name: "Lyudmila Safaeva",
            media: true
        },
        {
            lang: "uzb",
            comment: "Xulosa: Men Shosh Modern mehmonxonasida ko'rsatilgan a'lo xizmat uchun o'z minnatdorchiligimni bildirmoqchiman. Barcha so'rovlarim va savollarimga zudlik bilan javob berildi. Xizmat ko'rsatish darajasi a'lo darajada, xodimlar professional va e'tiborli.",
            name: 'Murad Ivanov',
            media: true
        },
        {
            lang: 'eng',
            comment: "Feedback: Modern Shosh Hotel offers top-notch service with a personal touch. The staff is incredibly attentive and helpful, making you feel like a valued guest. They go out of their way to accommodate special requests and provide excellent recommendations for exploring the local area.",
            name: 'Gaylord Deryck',
            media: false
        },
        {
            lang: 'uzb',
            comment: "Xulosa: Modern Shosh mehmonxonasi xodimlari samimiy va do'stona muloqot uslubi bilan mashhur. Ular yoqimli suhbatlar bilan shug'ullanishadi va mehmonlarga yordam berishni xohlashadi. Ularning professional, ammo mehmondo'st yondashuvi hamma uchun qulay va jozibali muhit yaratadi.",
            name: 'Azizbek Olimov',
            media: false
        },
        {
            lang: 'ru',
            comment: "Отзыв: Отель «Модерн Шош» предоставляет целый ряд полезных удобств и возможностей для комфортного отдыха. К ним относятся бесплатный Wi-Fi, хорошо оборудованный фитнес-центр и красивый сад, где можно расслабиться.",
            name: "Mümtaz Ayhan ",
            media: false
        }
    ]
    return (
        <div>
            <h3 className={"text-center text-white mt-5 mb-4"}></h3>
            <div className={"desktop-comment"}>
                <div className={"card text-bg-dark"}>
                    <img src={bg} style={{height: "100vh"}} alt="not found"/>
                    <div className="card-img-overlay">
                        <div className={"playfair"} style={{paddingTop: "70px", letterSpacing: "1px"}}>
                            <h1 className={"text-white text-center"}>
                                {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Comments"}</h1>
                        </div>
                        <div className={"container"}>
                            <div className={"col-md-12 row"}>
                                {comments.map((item) => (
                                    <>
                                        <div className={"col-xl-4"}>
                                            <h5 className={"text-white text-center lato pt-4"}>{item.name} :</h5>
                                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                            <p className={"text-white p-pas"}>{item.comment}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={"media-comments"}>
                <div className={"playfair"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center"}>
                        {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Comments"}</h1>
                </div>
                <div className={"container"}>
                    <div>
                        {comments.map((item) => (
                            <>
                                {!item.media ? (
                                    <></>
                                ) : (
                                    <>
                                        <div className={"col-12 p-2 text-center"}>
                                            <h5 className={"text-white text-center lato pt-4"}>{item.name} :</h5>
                                            <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                            <p className={"text-white p-pas"}>{item.comment}</p>
                                        </div>
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}