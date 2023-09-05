import bg from '../assets/img/image 1.png'

export const Comments = () => {
    const comments = [
        {
            lang: "eng",
            comment: "Feedback: Staying at the ModernShosh Hotel was a pleasant experience. Very impressed with the level of service and professionalism of the staff. Attention to detail and quick response to requests made my stay comfortable and carefree.\n",
            name: "John Adama"
        },
        {
            lang: "ru",
            comment: "Отзыв: Очень доволен услугами гостиницы ModernShosh. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.",
            name: "Lyudmila Safaeva"
        },
        {
            lang: "uzb",
            comment: "Fikr-mulohaza: Men ModernShosh mehmonxonasida ko'rsatilgan a'lo xizmat uchun o'z minnatdorchiligimni bildirmoqchiman. Barcha so'rovlarim va savollarimga zudlik bilan javob berildi. Xizmat ko'rsatish darajasi a'lo darajada, xodimlar professional va e'tiborli.",
            name: 'Murad Ivanov'
        }
    ]
    return (
        <div>
            <h3 className={"text-center text-white mt-5 mb-4"}></h3>
            <div className={"desktop-comment"}>
                <div className={"card text-bg-dark"}>
                    <img src={bg} className="comment-img" alt="not found"/>
                    <div className="card-img-overlay">
                        <div className={"playfair"} style={{paddingTop: "100px", letterSpacing: "1px"}}>
                            <h1 className={"text-white text-center"}>
                                {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Comments"}</h1>
                        </div>
                        <div className={"container desktop-comments h-auto"}>
                            <div className={"col-md-12 row"}>
                                {comments.map((item) => (
                                    <>
                                        <div className={"col-4"}>
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

            <div className={"media media-comments comments"}>
                <div className={"playfair"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center"}>
                        {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Comments"}</h1>
                </div>
                <div className={"container"}>
                    <div className={"comment"}>
                        {comments.map((item) => (
                            <>
                                <div className={"col-lg-4 p-2 text-center"}>
                                    <h5 className={"text-white text-center lato pt-4"}>{item.name} :</h5>
                                    <p className={"text-center lato text-white"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                    <p className={"text-white"}>{item.comment}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}