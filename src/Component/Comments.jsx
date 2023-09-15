import bg from '../assets/img/Banner/3576f3e3-3547-4041-b91f-89ba5b13c950.jpg'
import Carousel from "react-multi-carousel";

export const Comments = () => {
    const comments = [

        {
            comment: "Мое пребывание было отличным, благодаря замечательному персоналу, уютной комнате и восхитительному завтраку.\n" +
                "У меня был фантастический опыт в этом отеле! Персонал был невероятно дружелюбным и внимательным, что заставило меня чувствовать себя желанным гостем на протяжении всего моего пребывания. Комната была просторной, удобной и ухоженной, обеспечивая расслабляющую атмосферу. Завтрак был вкусным и предлагал различные варианты на любой вкус.\n",
            commentuz: "Ajoyib xodimlar, shinam xona va mazali nonushta tufayli mening turar joyim ajoyib edi.\n" +
                "Men bu mehmonxonada ajoyib tajribaga ega bo'ldim! Xodimlar nihoyatda samimiy va diqqatli edilar, bu meni butun qolishim davomida o'zimni baxtli va mamnun his qildim. Xona keng, qulay va yaxshi sharoitda bo'lib, dam olish muhitini ta'minladi. Nonushta mazali va juda turli xil edi.",
            commenteng: "My stay was excellent, thanks to the wonderful staff, cozy room, and delightful breakfast.\n" +
                "I had a fantastic experience at this hotel! The staff was incredibly friendly and attentive, making me feel like a welcomed guest throughout my stay. The room was spacious, comfortable, and well-maintained, providing a relaxing atmosphere. Breakfast was delicious and offered various options to suit any taste.\n",
            name: 'Bekki',
            nameEng : "Becky",
            nameRu: "Бекки",
            media: false
        },
        {
            comment: "Все было на высшем уровне.\n" +
                "Очень понравилось что персонал приветлив. Всегда на связи, в онлайне. Помогут с вопросом и его решением. Идут на встречу гостям. А сам отель понравился тем, что вся мебель пахнет деревом, все новое, чистое. Панорамные окна, кондиционер, которым можно охладится после жаркого Ташкента😅 Все удобства имеются. Не пожалели что выбрали этот отель!👍🏻\n",
            commentuz: "Hammasi eng yuqori darajada edi.\n" +
                "Menga xodimlar do'stona munosabatda bo'lishlari juda yoqdi. Har doim aloqada, onlayn. Iltimoslarimizni eshitishdi va uni hal qilishda yordam berishdi. Menga mehmonxonaning o'zi yoqdi, chunki barcha mebellar hali juda yangi, hamma narsa yangi, toza. Panoramik derazalar, issiq Toshkentdan keyin sovishi mumkin bo'lgan konditsioner 😅 barcha qulayliklar mavjud. Biz bu mehmonxonani tanlaganimizdan afsuslanmadik! 👍🏻",
            commenteng: "Everything was at the highest level.\n" +
                "I really liked that the staff was friendly. Always available and online. They assist with questions and their solutions. They are accommodating to guests. The hotel itself was appealing because all the furniture smells like wood, everything is new and clean. Panoramic windows, an air conditioner to cool down after the hot Tashkent weather 😅. All amenities are available. We didn't regret choosing this hotel! 👍🏻\n",
            name: "Akmaral",
            nameEng : "Akmaral",
            nameRu: "Акмарал",
            media: true
        },
        {
            comment: "Доброжелательный персонал, помогли донести багаж до номера. Отель новый, все номера чистые и просторные, в номере всё есть- кондиционер, холодильник, Wi-Fi, телевизор и электрический чайник. Всё работает исправно. Завтраки разнообразные и очень вкусные, все продукты свежие. Спасибо за комфортное проживание, будем рекомендовать вас друзьям!",
            commentuz: "Do'stona xodimlar yukni xonaga olib kirishga yordam berishdi. Mehmonxona yangi, barcha xonalar toza va keng, xonada hamma narsa bor - konditsioner, muzlatgich, Wi-Fi, televizor va elektr choynak. Hammasi benuqson ishladi. Nonushta turli xil va juda mazali, barcha mahsulotlar yangi. Yashash uchun biz sizni do'stlaringizga tavsiya qilamiz!",
            commenteng: "Friendly staff, they helped with carrying luggage to the room. The hotel is new, all rooms are clean and spacious, and they include everything you need - air conditioning, a refrigerator, Wi-Fi, a television, and an electric kettle. Everything works perfectly. The breakfasts are diverse and very tasty, with all ingredients fresh. Thank you for the comfortable stay; we will recommend you to our friends!",
            name: 'Darya',
            nameEng: 'Darya',
            nameRu: 'Дарья',
            media: true
        },


        {
            comment: "Новый отель, все чисто, современный стильный  интерьер. Очень дружелюбный и приятный персонал, даже подсказали где вкусно покушать. На завтраке был вкусный шведский стол (каши, салаты, великолепная самса, фрукты, всякие сладости и много еще всего). Плюс приятный очень ценник. Советуем)",
            commenteng: "A new hotel, everything is clean, with a modern and stylish interior. Very friendly and pleasant staff, they even recommended a good place to eat. The breakfast was delicious with a variety of options (porridge, salads, excellent samsa, fruits, various sweets, and much more). Plus, it had a very reasonable price. Highly recommended!",
            commentuz: "Yangi mehmonxona, hamma narsa toza, zamonaviy va zamonaviy interyer. Juda samimiy va yoqimli xodimlar, hatto mazali taomni qayerda tanovul qilishimni aytishdi. Nonushta uchun restoran bor edi (don, salatlar, ajoyib samsa, mevalar, har xil shirinliklar va boshqa ko'p narsalar). Bundan tashqari, juda yoqimli narx. Biz maslahat beramiz)",
            name: 'Sabina',
            nameEng : "Sabina",
            nameRu: "Сабина",
            media: false
        },
        {
            comment: "Супер чисто, ванная была безупречной. Меню на завтрак был очень разнообразным. Wifi отлично работал на всей территории отеля. Персонал всегда были доступны и очень полезны, когда нам нужна была помощь (например, бронирование такси). Очень рекомендую\n",
            commentuz: "Juda toza va hammomdagi jihozlar benuqson ishladi. Nonushta menyusi juda xilma-xil. Wi-fi butun hududda juda yaxshi ishladi. Xodimlar har doim ish joyida va bizga yordam kerak bo'lganda har safar qo'llab quvvatlashdi (masalan, taksi bron qilish). Men bu mehmonxonani juda tavsiya qilaman.",
            commenteng: "Super clean, the bathroom was impeccable. The breakfast menu was very diverse. Wifi worked excellently throughout the hotel's premises. The staff was always available and very helpful when we needed assistance (for example, booking a taxi). Highly recommended.",
            name: "Thaqif",
            nameEng : "Thaqif",
            nameRu: "Такиф",
            media: true
        },
        {
            comment: "Безупречно чисто, все новое, кондиционер работает, хороший завтрак, очень удобная кровать, просторный душ.",
            commentuz: "Xonalar juda toza, hamma narsa yangi, konditsioner ishlaydi, yaxshi nonushta, juda qulay to'shak, keng dush.",
            commenteng: "Impeccably clean, everything is new, the air conditioner works, great breakfast, very comfortable bed, spacious shower.",
            name: "Mateusz",
            nameEng : "Mateusz",
            nameRu: "Мэтью",
            media: false
        }

    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 600},
            items: 1
        },
        mobile: {
            breakpoint: {max: 599, min: 0},
            items: 1
        }
    };


    return (
        <div>
            <div className={"desktop-comment mt-4 "} style={{marginBottom: "150px"}}>
                <div className={"card text-bg-dark"}>
                    <img src={bg} style={{height: "auto"}} alt="not found"/>
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
                                            <h5 className={"text-white text-center playfair pt-4"}>{localStorage.getItem("lang") === "uzb" ? <>{item.name}</> : localStorage.getItem("lang") === "rus" ? <>{item.nameRu}</> : <>{item.nameEng}</>} :</h5>
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

            <div className={"media-comments"} style={{marginBottom: "150px"}}>
                <div className={"playfair"} style={{letterSpacing: "1px"}}>
                    <h1 className={"text-white text-center pt-3"}>
                        {localStorage.getItem("lang") === "uzb" ? "Sharhlar" : localStorage.getItem("lang") === "rus" ? "Oтзывы" : "Reviews"}</h1>
                </div>
                <div className={"container"}>
                    <div>
                        <Carousel responsive={responsive}
                                  infinite
                                  arrows={false}
                                  autoPlay
                                  autoPlaySpeed={10000}
                        >
                            {comments.map((item) => (
                                <>
                                    <div className={"col-12 p-2 text-center"}>
                                        <h5 className={"text-white text-center playfair pt-4"}>{item.name} :</h5>
                                        <p className={"text-center playfair text-white"}>{localStorage.getItem("lang") === "uzb" ? "Mamnun mijoz" : localStorage.getItem("lang") === "rus" ? "Довольный клиент" : "Satisfied customer"}</p>
                                        <p className={"text-white playfair p-pas"}>{localStorage.getItem("lang") === "uzb" ? item.commentuz : localStorage.getItem("lang") === "rus" ? item.comment : item.commenteng}</p>
                                    </div>
                                </>
                            ))}
                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    )
}