import bg from '../assets/img/Banner/3576f3e3-3547-4041-b91f-89ba5b13c950.jpg'

export const Comments = () => {
    const comments = [
        {
            comment: "Отзыв: Пребывание в отеле «Шош Модерн» оставило приятные впечатления. Очень впечатлен уровнем обслуживания и профессионализмом персонала. Внимание к деталям и быстрое реагирование на запросы сделали мое пребывание комфортным и беззаботным.\n",
            commentuz: "Shosh Modern mehmonxonasi xizmatlaridan juda mamnunman. Muloyim va foydali xodimlar har doim yordam berishga tayyor. Xonalar toza va qulay, Xonada ishlari o'z vaqtida bajarilgan. Restoranda nonushta mazali va xilma-xil bo'ldi.",
            commenteng: "Feedback: Staying at the Shosh Modern was a pleasant experience. Very impressed with the level of service and professionalism of the staff. Attention to detail and quick response to requests made my stay comfortable and carefree.\n",
            name: "John Adam",
            media: true
        },
        {
            comment: "Отзыв: Очень доволен услугами гостиницы Shosh Modern. Вежливый и отзывчивый персонал всегда готов помочь. Номера чистые и удобные, уборка проводилась своевременно. Завтраки в ресторане были вкусными и разнообразными.",
            commentuz: "Mulohaza: Shosh Modern mehmonxonasi xizmatlaridan juda mamnunman. Muloyim va foydali xodimlar har doim yordam berishga tayyor. Xonalar toza va qulay, uy-ro'zg'or ishlari o'z vaqtida bajarilgan. Restoranda nonushta mazali va xilma-xil bo'ldi.",
            commenteng: "Feedback: Very pleased with the services of Shosh Modern Hotel. Polite and helpful staff is always ready to help. Rooms are clean and comfortable, housekeeping was done in a timely manner. Breakfast in the restaurant was delicious and varied.",
            name: "Lyudmila Safaeva",
            media: true
        },
        {
            comment: "Отзыв: Хотел бы выразить благодарность за отличный сервис, предоставляемый в отеле «Шош Модерн». На все мои запросы и вопросы были даны быстрые ответы. Уровень обслуживания отличный, персонал профессиональный и внимательный.",
            commentuz: "Xulosa: Men Shosh Modern mehmonxonasida ko'rsatilgan a'lo xizmat uchun o'z minnatdorchiligimni bildirmoqchiman. Barcha so'rovlarim va savollarimga zudlik bilan javob berildi. Xizmat ko'rsatish darajasi a'lo darajada, xodimlar professional va e'tiborli.",
            commenteng: "Feedback: I would like to express my gratitude for the excellent service provided at Shosh Modern Hotel. All my inquiries and questions were answered promptly. The level of service is excellent, the staff is professional and attentive.",
            name: 'Murad Ivanov',
            media: true
        },
        {

            comment: "Отзыв: Отель «Модерн Шош» предлагает первоклассный сервис с индивидуальным подходом. Персонал невероятно внимательный и услужливый, благодаря чему вы почувствуете себя ценным гостем. Они стараются изо всех сил удовлетворить особые запросы и дают отличные рекомендации по изучению окрестностей",
            commentuz: "Zamonaviy Shosh mehmonxonasi shaxsiy teginish bilan yuqori darajadagi xizmatni taklif etadi. Xodimlar nihoyatda e'tiborli bo'lib, o'zingizni qadrli mehmondek his qilasiz. Ular maxsus so'rovlarni  o'z vaqtida javob berib va mahalliy hududni o'rganish bo'yicha ajoyib tavsiyalar berishar ekan.",
            commenteng: "Feedback: Modern Shosh Hotel offers top-notch service with a personal touch. The staff is incredibly attentive and helpful, making you feel like a valued guest. They go out of their way to accommodate special requests and provide excellent recommendations for exploring the local area.",
            name: 'Gaylord Deryck',
            media: false
        },
        {
            comment: "Краткое описание: Персонал отеля «Современный Шош» известен своим теплым и дружелюбным стилем общения. Они ведут приятные беседы и хотят помочь гостям. Их профессиональный и гостеприимный подход создает комфортную и привлекательную среду для всех.",
            commenteng: "Feadback: Modern Shosh hotel staff are known for their warm and friendly communication style. They engage in pleasant conversations and want to help guests. Their professional yet welcoming approach creates a comfortable and inviting environment for everyone.",
            commentuz: "Modern Shosh mehmonxonasi xodimlari samimiy va do'stona muloqot uslubi bilan mashhur. Ular yoqimli muomilasi  bilan ish olib borishadi  va mehmonlarga yordam berishni xohlashadi. Ularning professional, ammo mehmondo'st yondashuvi hamma uchun qulay va jozibali muhit yaratadi.",
            name: 'Azizbek Olimov',
            media: false
        },
        {
            comment: "Отзыв: Отель «Модерн Шош» предоставляет целый ряд полезных удобств и возможностей для комфортного отдыха. К ним относятся бесплатный Wi-Fi, хорошо оборудованный фитнес-центр и красивый сад, где можно расслабиться.",
            commentuz: "“Modern Shosh” mehmonxonasi qulay yashash uchun bir qator foydali qulayliklar va imkoniyatlarni taqdim etadi. Bularga bepul Wi-Fi, yaxshi jihozlangan fitnes markazi va dam olishingiz mumkin bo'lgan go'zal bog' kiradi.",
            commenteng: "Feedback: Hotel \"Modern Shosh\" provides a range of useful amenities and opportunities for a comfortable stay. These include free Wi-Fi, a well-equipped fitness center and a beautiful garden where you can relax.",
            name: "Mümtaz Ayhan ",
            media: false
        }
    ]
    return (
        <div>
            <div className={"desktop-comment mt-4 "} style={{marginBottom:"150px"}}>
                <div className={"card text-bg-dark"}>
                    <img src={bg} style={{height: "100vh"}} alt="not found"/>
                    <div className="card-img-overlay">
                        <div className={"playfair"} style={{paddingTop: "70px", letterSpacing: "1px"}}>
                            <h1 className={"text-white text-center playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Reviews"}</h1>
                        </div>
                        <div className={"container"}>
                            <div className={"col-md-12 row"}>
                                {comments.map((item) => (
                                    <>
                                        <div className={"col-xl-4 mb-3"}>
                                            <h5 className={"text-white text-center playfair pt-4"}>{item.name} :</h5>
                                            <p className={"text-center  text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "Mamnun mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                            <p className={"text-white p-pas playfair"}>{localStorage.getItem("lang") === "uzb" ? item.commentuz : localStorage.getItem("lang") === "rus" ? item.comment : item.commenteng}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={"media-comments"} style={{marginBottom:"150px"}}>
                <div className={"playfair"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center"}>
                        {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Reviews"}</h1>
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
                                            <h5 className={"text-white text-center playfair pt-4"}>{item.name} :</h5>
                                            <p className={"text-center playfair text-white"}>{localStorage.getItem("lang") === "uzb" ? "Mamnun mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                            <p className={"text-white playfair p-pas"}>{localStorage.getItem("lang") === "uzb" ? item.commentuz : localStorage.getItem("lang") === "rus" ? item.comment : item.commenteng}</p>
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