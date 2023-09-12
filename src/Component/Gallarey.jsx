import Carousel from "react-multi-carousel";
import hall from '../assets/img/hall/hall (2).png'
import garden from '../assets/img/bog/sad (3).png'
import twin from '../assets/img/tvin/twin.png'
import restaurant1 from '../assets/img/Restaurant/resturant.png'
import single from '../assets/img/single/single (2).png'
import lux from '../assets/img/Lyuks/lux.png'
export const Gallarey = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 600},
            items: 2
        },
        mobile: {
            breakpoint: {max: 600, min: 0},
            items: 1
        }
    };

    return (
        <div id={"about"}>
            <h3 className={"text-white text-center  pt-4"}>{localStorage.getItem("lang") === "uzb" ? "Biz haqimizda" : localStorage.getItem("lang") === "rus" ? "O Нас" : "About Us"}</h3>
            <div className={"why-we container"}>
                <p className={"text-white mb-5 playfair p-pas"}
                    >{localStorage.getItem("lang") === "uzb" ? "Yangi ochilgan Shosh Modern mehmonxonasi aeroport va vokzal yaqinida qulay joylashgan. Uning zamonaviy dizayni va keng shisha jabhasi tabiiy yorug'lik bilan butun mehmonxonada yorqin va havodor atmosferani yaratishga imkon beradi. Mehmonlarni kutib olish zonasida taksi kutayotganda dam olishlari uchun qulay divan va aqlli televizor mavjud. Bizning qabulxona xodimlari doimo tabassumli va muloyim ma'murlardan iborat bo'lib, ular sizga yordam berishga va har qanday savollarga javob berishga tayyor.\n" +
                    "\n" +
                    "Har kuni soat 7:00 dan 10:00 gacha mehmonlar restoranimizda nafis va mazali nonushta qilishlari mumkin. Restoran devorga o'rnatilgan jonli o'simliklar bilan bezatilgan bo'lib, ular o'ziga xos xushbo'y hidni singdirib, qulay muhitni yaratadi. Kun davomida va kechqurun tashrif buyuruvchilar bog'da dam olish imkoniyatiga ega, bu erda qulay stullar o'qish yoki ishlash uchun ideal joyni ta'minlaydi. Bundan tashqari, mehmonlar o'zlarining shkafi va jihozlangan bog'i bilan jihozlangan konferentsiya zalidan foydalanishlari mumkin."
                    : localStorage.getItem("lang") === "rus" ? "Новая гостиница Shosh Modern находится рядом с аэропортом и вокзалами, что позволяет посетить все красивые места и главные достопримечательности города.  Современный дизайн и большой стеклянный фасад в сочетании с дневным светом создают светлую и яркую атмосферу. "
                        : "The newly opened Shosh Modern Hotel is conveniently located near the airport and train station. Its modern design and expansive glass façade allow natural light to create a bright and airy atmosphere throughout the hotel. The welcoming reception area features a comfortable sofa and a smart TV for guests to relax while awaiting a taxi. Our reception staff consists of always-smiling and polite administrators who are eager to assist and answer any questions you may have. \n" +
                        "\n" +
                        "Every day, between 7:00 a.m to 10:00 a.m , guests can indulge in an exquisite and delicious breakfast in our restaurant. The restaurant is  adorned with wall-mounted living plants that infuse a unique aroma, enhancing the cozy atmosphere. Throughout the day and evening, visitors have the option to unwind in the garden, where comfortable chairs provide an ideal spot for reading or working. Additionally, guests have access to a conference room equipped with its own wardrobe and a furnished garden.\n"}</p>

            </div>
            <Carousel responsive={responsive}
                      className={"container about_us_imgs"}
                      infinite
                      autoPlay
                      autoPlaySpeed={4000}>
                <div>
                    <img src={lux} className={"galary"} draggable={"false"} alt="not found"/>
                </div>
                <div>
                    <img src={hall} className={"galary"} draggable={"false"} alt="not found"/>

                </div>
                <div>
                    <img src={garden} className={"galary"} draggable={"false"} alt="not found"/>

                </div>
                <div>
                    <img src={twin} className={"galary"}   draggable={"false"} alt="not found"/>

                </div>
                <div>
                    <img src={restaurant1} className={"galary"} draggable={"false"} alt="not found"/>

                </div>
                <div>
                    <img src={single} className={"galary"} draggable={"false"} alt="not found"/>

                </div>
            </Carousel>
            <div className={"why-we container mt-5"}>
                <p className={"text-white playfair p-pas"}
                    style={{marginBottom: "50px"}}>{localStorage.getItem("lang") === "uzb" ? "Mehmonxona turli toifadagi 43 ta qulay va oqlangan xonalarni taklif etadi, jumladan, Bir kishilik, egizak, uch kishilik, oilaviy va lyuks xonalar. Har bir xonada bepul Wi-Fi, telefon, konditsioner, muzlatgich, anatomik matraslar, qulay ishlash uchun stol va stul, ko'zgular, choyshablar va lampalar, ilgichli shkaf, kofe, hammom, sochlarni qurutish uchun fen, sochiqlar va bepul gigiena vositalari."
                    : localStorage.getItem("lang") === "rus" ? "В отеле 43 уютных и элегантных номера. Каждый номер оснащён всем необходимым для комфортного проживания. Ежедневно с 7:00 до 10:00 посетители могут насладиться изысканным и вкусным завтраком в нашем шикарном ресторане. В распоряжении гостей также находится конференц-зал с собственным гардеробом и сад с мебелью. На территории отеля имеется бесплатная парковка с видеонаблюдением."
                        : "The newly opened Shosh Modern Hotel is conveniently located near the airport and train station. Its modern design and expansive glass façade allow natural light to create a bright and airy atmosphere throughout the hotel. The welcoming reception area features a comfortable sofa and a smart TV for guests to relax while awaiting a taxi. Our reception staff consists of always-smiling and polite administrators who are eager to assist and answer any questions you may have. \n" +
                        "\n" +
                        "Every day, between 7:00 a.m to 10:00 a.m , guests can indulge in an exquisite and delicious breakfast in our restaurant. The restaurant is  adorned with wall-mounted living plants that infuse a unique aroma, enhancing the cozy atmosphere. Throughout the day and evening, visitors have the option to unwind in the garden, where comfortable chairs provide an ideal spot for reading or working. Additionally, guests have access to a conference room equipped with its own wardrobe and a furnished garden.\n"}</p>
            </div>
        </div>
    )
}