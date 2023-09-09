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
                    >{localStorage.getItem("lang") === "uzb" ? "Yangi Shosh Modern mehmonxonasi aeroport va vokzaldan piyoda kelish mumkun bo'lgan masofada joylashgan. Zamonaviy dizayn va kunduzgi yorug'lik bilan birlashtirilgan katta shisha jabhada yorug'lik va yorqin muhit mavjud. Mehmonlar dam olishlari yoki taksi kutishlari uchun qabulxonada qulay divan va aqlli televizor mavjud. Tabassumli va muloyim hodimlarimiz doimo sizga yordam berishga va barcha savollaringizga javob berishga tayyor. Har kuni soat 7:00 dan 10:00 gacha xashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin. Devordagi tirik o'simliklar restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va qulay muhit yaratadi. Ertalab yoki kechqurun darhol tashrif buyuruvchilar bog'ga chiqib, kitob o'qish yoki ishlash uchun qulay stullarda o'tirishlari mumkin. Mehmonlar ixtiyorida shaxsiy shkafi bilan jihozlangan konferentsiya zali ham mavjud."
                    : localStorage.getItem("lang") === "rus" ? "Отель New Shosh Modern находится в нескольких минутах ходьбы от аэропорта и железнодорожного вокзала. Большой стеклянный фасад в сочетании с современным дизайном и дневным освещением создают светлую и яркую среду. В холле есть удобный диван и смарт-телевизор, где гости могут отдохнуть или дождаться такси. На ресепшене всегда улыбчивый и вежливый персонал, который всегда рад Вам помочь и ответить на все Ваши вопросы. Каждый день с 7:00 до 10:00 вы сможете насладиться изысканным и вкусным завтраком в нашем роскошном ресторане. Живые растения на стене наполняют ресторан неповторимым ароматом и создают уютную атмосферу. Утром или сразу вечером посетители могут выйти в сад и усесться в удобные кресла, чтобы почитать книгу или поработать."
                        : "The new Shosh Modern Hotel is close to the airport and train station. Modern design and a large glass facade combined with daylight, it creates  a light and bright atmosphere for hotel. The reception has a comfortable sofa and a smart TV for guests, they can relax while  waiting  taxi. At the reception there are always smiling and polite administrators who are always happy to help and answer all your questions. Every day from 7:00 to 10:00 you can enjoy an exquisite and delicious breakfast in our restaurant. Wall-mounted living plants fill the restaurant with a special aroma and creates a cozy atmosphere. During the day or in the evening, visitors can go out into the garden and sit in comfortable chairs to read a book or work. Guests also have at their disposal a conference room  with their own wardrobe and a furnished garden."}</p>

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
                    style={{marginBottom: "50px"}}>{localStorage.getItem("lang") === "uzb" ? "Mehmonxonada barcha toifadagi 43 ta qulay xona mavjud. Bizda bir kishilik, egizak, uchlik, oilaviy va lyuks xonalar bor. Har bir xonada: mehmonxona bo'ylab ishlaydigan bepul Wi-Fi, telefon, konditsioner, muzlatgich, anatomik matraslar, qulay ishlash uchun stol va stul, ko'zgular, choyshablar va lampalar, ilgichli shkaf, choy to'plami, hammomda esa soch uchun fen, sochiqlar va bir martalik gigiena vositalari mavjud. Hashamatli va shinam restoranda tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin. Va devor o'simliklari restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun muhit yaratadi."
                    : localStorage.getItem("lang") === "rus" ? "В отеле 43 уютных и элегантных номера всех категорий. У нас есть Single, Twin, Triple, Family и Lux. В каждой комнате имеются: бесплатный вай-фай который работает на всей территории отеля, телефон, кондиционер, холодильник, анатомические матрасы, письменный стол и стул для комфортной работы, зеркала, прикроватные тумбочки и светильники, шкаф с вешалками, чайный набор, ванная комната, фен, полотенца и одноразовые гигиенические средства. Роскошный и уютный ресторан - это место где посетители могут насладиться изысканными блюдами. А настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей"
                        : "The hotel has 43 cozy and elegant rooms of all categories. We have Single, Twin, Triple, Family and Lux rooms. Each room has: free Wi-Fi that works through  the hotel, telephone, air conditioning, refrigerator, anatomical mattresses, a desk and a chair for comfortable work, mirrors, bedside tables and lamps, a wardrobe with hangers, a tea set, a bathroom, hair dryer, towels, and disposable hygiene products. The luxurious and cozy restaurant is a place where visitors can enjoy delicious dishes. And wall living plants fill the restaurant with a special aroma and thereby create a special atmosphere for a comfortable stay for visitors."}</p>
            </div>
        </div>
    )
}