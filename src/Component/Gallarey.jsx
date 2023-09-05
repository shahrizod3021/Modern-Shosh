import Carousel from "react-multi-carousel";
import restaurant from '../assets/img/Restaurant/IMG_0309.jpg'
import hall from '../assets/img/hall/IMG_6597.jpg'
import garden from '../assets/img/bog/bog2.jpg'
import twin from '../assets/img/tvin/tvin1.jpg'
import restaurant1 from '../assets/img/Restaurant/IMG_0308.jpg'
import single from '../assets/img/bedroom.png'

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
            items: 3
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
                <p className={"text-white playfair p-pas"}
                    style={{marginBottom: "100px"}}>{localStorage.getItem("lang") === "uzb" ? "Yangi Shosh Modern mehmonxonasi aeroport va vokzaldan piyoda kelish mumkun bo'lgan masofada joylashgan. Zamonaviy dizayn va kunduzgi yorug'lik bilan birlashtirilgan katta shisha jabhada yorug'lik va yorqin muhit yaratiladi. Mehmonlar dam olishlari yoki taksi kutishlari uchun qabulxonada qulay divan va aqlli televizor mavjud. Ziyofatda har doim tabassumli va muloyim hodimlar bor, ular doimo sizga yordam berishdan va barcha savollaringizga javob berishdan mamnun. Har kuni soat 7:00 dan 10:00 gacha hashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin. Devordagi tirik o'simliklar restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va qulay muhit yaratadi. Ertalab yoki kechqurun darhol tashrif buyuruvchilar bog'ga chiqib, kitob o'qish yoki ishlash uchun qulay stullarda o'tirishlari mumkin.Mehmonlar ixtiyorida shaxsiy shkafi bilan jihozlangan  konferentsiya zali ham mavjud."
                    : localStorage.getItem("lang") === "rus" ? "Новая гостиница Шош Модерн находится в пешей доступности от аэропорта и вокзала. Современный дизайн и большой стеклянный фасад в сочетании с дневным светом создают светлую и яркую атмосферу. В ресепшене расположен удобный диван и смарт телевизор для того, чтобы гости могли отдохнуть или дождаться своего такси. На ресепшене всегда стоят улыбчивые и вежливые администраторы, которые всегда рады вам помочь и ответить на все интересующие вас вопросы. Ежедневно с 7:00 до 10:00 вы можете насладиться изысканным и вкусным завтраком в нашем шикарном ресторане. Настенные живые растения наполняют ресторан особым ароматом и создают уютную атмосферу. Сразу после завтра или же вечером посетители могут выйти в сад и расположившись в удобных креслах почитать книгу или поработать. В распоряжении гостей также находится конференц-зал с собственным гардеробом и сад с мебелью. "
                        : "The new Shosh Modern hotel is within walking distance from the airport and train station. Modern design and a large glass façade combined with daylight create a light and bright atmosphere. The reception has a comfortable sofa and a smart TV so that guests can relax or wait for their taxi. At the reception there are always smiling and polite administrators who are always happy to help you and answer all your questions. Every day from 7:00 to 10:00 you can enjoy an exquisite and delicious breakfast in our chic restaurant. Wall-mounted living plants fill the restaurant with a special aroma and create a cozy atmosphere.Immediately after tomorrow or in the evening, visitors can go out into the garden and sit in comfortable chairs to read a book or work. Guests also have at their disposal a conference room with their own wardrobe and a furnished garden."}</p>

            </div>
            <Carousel responsive={responsive}
                      className={"container"}
                      infinite
                      autoPlay
                      autoPlaySpeed={4000}>
                <div>
                    <img src={restaurant} className={"galary"} draggable={"false"} alt="not found"/>
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
            <div className={"why-we container"}>
                <p className={"text-white playfair p-pas"}
                    style={{marginBottom: "50px"}}>{localStorage.getItem("lang") === "uzb" ? "Bu yerga 50 kishigacha sig'ishi mumkin. Mehmonxonada barcha toifadagi 43 ta qulay  xona mavjud. Bizda bitta, egizak, uchlik, oilaviy va lyuks honalar bor. Har bir xonada: mehmonxona bo'ylab ishlaydigan bepul Wi-Fi, telefon, konditsioner, muzlatgich, anatomik matraslar, qulay ishlash uchun stol va stul, ko'zgular, choyshablar va lampalar, ilgichli shkaf, choy to'plami, hammom, sochlar uchun fen mashinasi, sochiqlar va bir martalik gigiena vositalari. Hashamatli va shinam restoranda, tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin . Va devor o'simliklari restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun  muhit yaratadi."
                    : localStorage.getItem("lang") === "rus" ? "Который может вместить в себя до 50 человек. В отеле 43 уютных и элегантных номера всех категорий. У нас есть Single, Twin, Triple, Family и Lux. В каждой комнате имеются:  бесплатный вай-фай который работает на всей территории отеля, телефон, кондиционер, холодильник, анатомические матрасы, письменный стол и стул для комфортной работы, зеркала, прикроватные тумбочки и светильники, шкаф с вешалками, чайный набор, ванная комната, фен, полотенца, и одноразовые гигиенические средства.Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами. А настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей"
                        : "Which can accommodate up to 50 people. The hotel has 43 cozy and elegant rooms of all categories. We have Single, Twin, Triple, Family and Lux. Each room has: free Wi-Fi that works throughout the hotel, telephone, air conditioning, refrigerator, anatomical mattresses, a desk and a chair for comfortable work, mirrors, bedside tables and lamps, a wardrobe with hangers, a tea set, a bathroom, hair dryer, towels, and disposable hygiene products. The luxurious and cozy restaurant is a place where visitors can enjoy delicious dishes. And wall living plants fill the restaurant with a special aroma and thereby create a special atmosphere for a comfortable stay for visitors.\n"}</p>
            </div>
        </div>
    )
}