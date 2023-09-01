import family1 from '../assets/img/Family/e.jpg'
import family2 from '../assets/img/Family/IMG_0360.jpg'
import lyuks from '../assets/img/Lyuks/e.jpg'
import lyuks1 from '../assets/img/Lyuks/IMG_0353.jpg'
import hall from '../assets/img/hall/IMG_0323.jpg'
import hall1 from '../assets/img/hall/IMG_0321.jpg'
import garden from '../assets/img/bog/bog.jpg'
import garden2 from '../assets/img/bog/bog2.jpg'
import single from '../assets/img/single/single.jpg'
import single1 from '../assets/img/single/e.jpg'
import tvin1 from '../assets/img/tvin/tvin1.jpg'
import tvin2 from '../assets/img/tvin/IMG_0345.jpg'
import triple1 from '../assets/img/triple/IMG_0341.jpg'
import triple2 from '../assets/img/triple/IMG_0339.jpg'
import restaurant from '../assets/img/Restaurant/IMG_0309.jpg'
import restaurant1 from '../assets/img/Restaurant/IMG_0308.jpg'
import receptions from '../assets/img/Reception/reception.jpg'
import receptions1 from '../assets/img/Reception/reception1.jpg'
import Carousel from "react-multi-carousel";

export const Rooms = () => {
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
            items: 2
        },
        mobile: {
            breakpoint: {max: 599, min: 0},
            items: 1
        }
    };
    return (
        <div id={"about_rooms"}>
            <div className={"desktop desktop-1024"}>
                <h3 className={"text-white text-center mb-5"}
                    style={{marginTop: "150px"}}>{localStorage.getItem("lang") === "uzb" ? "Bizning honalar" : localStorage.getItem("lang") === "rus" ? "Наши номера" : "Our rooms"}</h3>
                <div className={"container"}>
                    <div className={"row col-md-12 mb-5"}>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Oylaviy" : localStorage.getItem("lang") === "rus" ? "Cемья" : "Family"}</h3>
                            <p className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Family Dream asosiy joylar soni: 3 Internet va telefoniya - bepul Wi-Fi\n" +
                                    "- telefon Elektronika - konditsioner Qulayliklar - rasmlar - xolodilnik - anatomik matraslar - qo'shimcha matras (sizning so'rovingiz bo'yicha) - xona maydoni - 25 kv.m - hojatxona - axlat qutisi Kiyimlarni parvarish qilish - shkaf\n" +
                                    " - ilmoqlar Bir kishilik va bitta bitta karavotli qulay xona. Xonada qulay zamonaviy mebellar, shuningdek, stol bilan tashkil etilgan ish joyi mavjud." : localStorage.getItem("lang") === "rus" ? "Family Сон количество основных мест: 3 Интернет и телефония                  - бесплатный Wi-Fi                  \n" +
                                    "- телефон Электроника -кондиционер Удобства -картины -холодильник -анатомические матрасы-дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.м - унитаз - урно Уход за одеждой - шкаф " +
                                    " - вешалки Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. " : "Number of main places in Family Dream: 3 Internet and telephony - free Wi-Fi - telephone Electronics - air conditioning Amenities - pictures - refrigerator - anatomical mattresses - extra mattress (at your request) - room area - 25 sq.m. - toilet - trash can Clothes care - wardrobe - hangers Comfortable room with one single bed and one single bed. The room has comfortable modern furniture, as well as an organized work area with a desk. This room is ideal for families with children who like to sleep with their parents and where they can stay comfortably and without unnecessary stress."}
                            </p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={family2} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={family1} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mb-5"}>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={lyuks1} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={lyuks} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Lyuks" : localStorage.getItem("lang") === "rus" ? "Люкс" : "Luxury"}</h3>
                            <p className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Double Deluxe Asosiy karavotlar soni: 2 Internet va telefoniya bepul Wi-Fi telefon Elektron konditsioner Qulayliklar rasmlari muzlatgich anatomik matraslar qo'shimcha matras (sizning so'rovingiz bo'yicha) xona maydoni - 30 kv.m Mebel stol stul\n" +
                                    "oynali ko'rpa stoli, divan,televizor, Ko'ngilochar ochiq maydon, shahar manzarasi Oziq-ovqat va ichimliklar\n" +
                                    "ichimlik suvi, choy shakar. Hammom uchun dush idishni hammomi, yuz sochiqlari, shuningdek, oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynasi\n" +
                                    "hojatxona urni, kiyimlarni dazlmollaydigan uskuna\n" +
                                    "garderob ilgichi\n" : localStorage.getItem("lang") === "rus" ? "Double Deluxe\n" +
                                    "                            Сон\n" +
                                    "                            количество основных мест: 2\n" +
                                    "                            Интернет и телефония\n" +
                                    "                            - бесплатный Wi-Fi\n" +
                                    "                            - телефон\n" +
                                    "                            Электроника\n" +
                                    "                            - кондиционер\n" +
                                    "                            Удобства\n" +
                                    "                            - картины\n" +
                                    "                            - холодильник\n" +
                                    "                            - анатомические матрасы\n" +
                                    "                            - дополнительный матрас (по вашему запросу)\n" +
                                    "                            - площадь номера- 30 кв.м\n" +
                                    "                            Мебель\n" +
                                    "                            - письменный стол\n" +
                                    "                            - стул\n" +
                                    "                            - зеркало\n" +
                                    "                            - прикроватная тумбочка\n" +
                                    "                            - диван\n" +
                                    "                            Развлечения\n" +
                                    "                            - телевизор\n" +
                                    "                            Внешняя территория\n" +
                                    "                            - вид на город\n" +
                                    "                            Питание и напитки\n" +
                                    "                            - питьевая вода\n" +
                                    "                            - чай\n" +
                                    "                            - сахар\n" +
                                    "                            Ванная комната\n" +
                                    "                            - душевая кабина\n" +
                                    "                            - банные, лицевые полотенца, а также полотенце для ног\n" +
                                    "                            - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                    "                            - зеркало\n" +
                                    "                            - унитаз\n" +
                                    "                            - урно\n" +
                                    "                            Уход за одеждой\n" +
                                    "                            - шкаф\n" +
                                    "                            - вешалки" : "Double Deluxe Number of main beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities refrigerator anatomical mattresses additional mattress (at your request) room area - 30 sq.m. Furniture table chair bed table with mirror sofa Entertainment TV Outdoor area City view Food and drinks drinking water tea sugar Bathroom shower cubicle bath, face towels and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap ) mirror toilet urn care clothes wardrobe hanger"}
                            </p>
                        </div>

                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Single" : localStorage.getItem("lang") === "rus" ? "Single" : "Single"}</h3>
                            <p className={"text-white me-3"}>{localStorage.getItem("lang") === "uzb" ? "Yakka tartibdagi asosiy o'rinlar soni: 2 ta Internet va telefoniya, bepul Wi-Fi telefon Elektron konditsioner, Qulayliklar: rasmlari, muzlatgich, anatomik matraslar, xona maydoni - 12 kv.m Mebel stol stul oynasi karavot, Ko'ngilochar Tashqi hudud, shahar manzarasi. Oziq-ovqat va ichimlik suvi, choy, shakar Hammom dush kabinasi, hammom, yuz va oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynali hojatxona idishi Kiyimlarni parvarish qilish shkafi ilgichlari"
                                : localStorage.getItem("lang") === "rus" ?
                                    "Single\n" +
                                    "Сон \n" +
                                    "количество основных мест: 2\n" +
                                    "Интернет и телефония \n" +
                                    "- бесплатный Wi-Fi\n" +
                                    "- телефон \n" +
                                    "Электроника \n" +
                                    "- кондиционер\n" +
                                    "Удобства \n" +
                                    "- картины\n" +
                                    "- холодильник\n" +
                                    "- анатомические матрасы\n" +
                                    "- площадь номера- 12 кв.м\n" +
                                    "Мебель\n" +
                                    "- письменный стол\n" +
                                    "- стул\n" +
                                    "- зеркало\n" +
                                    "- прикроватная тумбочка\n" +
                                    "Развлечения \n" +
                                    "- телевизор\n" +
                                    "Внешняя территория\n" +
                                    "- вид на город\n" +
                                    "Питание и напитки\n" +
                                    "- питьевая вода\n" +
                                    "- чай\n" +
                                    "- сахар\n" +
                                    "Ванная комната\n" +
                                    "- душевая кабина\n" +
                                    "- банные, лицевые полотенца, а также полотенце для ног\n" +
                                    "- одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                    "- зеркало" +
                                    "- унитаз" +
                                    "- урно" +
                                    "Уход за одеждой" +
                                    "- шкаф" +
                                    "- вешалки"
                                    : "Number of main single beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities Refrigerator anatomical mattresses Room area - 12 sq.m. Furniture table chair window bed Entertainment TV Outdoor area City view Food and drink water tea sugar Bathroom shower cubicle bath, face and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap) mirrored toilet bowl Clothes care cabinet hangers"}</p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={single} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={single1} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={tvin1} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={tvin2} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7 "}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Twin" : localStorage.getItem("lang") === "rus" ? "Twin" : "Twin"}</h3>
                            <p className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Twin Uyqu asosiy karavot soni: 2 ta Internet va telefoniya, bepul Wi-Fi telefon Elektron konditsioner Qulayliklar: rasmlari, xolodilnik, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha) xona hajmi 20 kv.m Mebel stol stul oynasi, karavot Ko'ngilochar televidenie, Tashqi hudud shahar ko'rinish. Oziq-ovqat va ichimlik suvi choy shakar Hammom dush kabinasi hammom, yuz va oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynali hojatxona idishi Kiyimlarni parvarish qilish shkafi ilgichlari\n" : localStorage.getItem("lang") === "rus" ? "Twin\n" +
                                "                            Сон\n" +
                                "                            количество основных мест: 2\n" +
                                "                            Интернет и телефония\n" +
                                "                             бесплатный Wi-Fi\n" +
                                "                            телефон\n" +
                                "                            Электроника\n" +
                                "                            кондиционер\n" +
                                "                            Удобства\n" +
                                "                             картины\n" +
                                "                             холодильник\n" +
                                "                             анатомические матрасы\n" +
                                "                             дополнительный матрас (по вашему запросу)\n" +
                                "                             площадь номера 20- кв.м\n" +
                                "                            Мебель\n" +
                                "                             письменный стол\n" +
                                "                             стул\n" +
                                "                             зеркало\n" +
                                "                             прикроватная тумбочка\n" +
                                "                            Развлечения\n" +
                                "                             телевизор\n" +
                                "                            Внешняя территория\n" +
                                "                             вид на город\n" +
                                "                            Питание и напитки\n" +
                                "                             питьевая вода\n" +
                                "                             чай\n" +
                                "                             сахар\n" +
                                "                            Ванная комната\n" +
                                "                             душевая кабина\n" +
                                "                             банные, лицевые полотенца, а также полотенце для ног\n" +
                                "                             одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                "                             зеркало\n" +
                                "                             унитаз\n" +
                                "                             урно\n" +
                                "                            Уход за одеждой\n" +
                                "                             шкаф\n" +
                                "                             вешалки" : "Twin Sleep Number of main beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities refrigerator anatomical mattresses extra mattress (on your request) room size 20 sq.m Furniture table chair mirror bed Entertainment TV Outdoor area City view Food and drinking water tea sugar Bathroom shower cubicle bath, face and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap) mirror toilet bowl Care of clothes wardrobe hangers"}
                            </p>
                        </div>
                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Triple" : localStorage.getItem("lang") === "rus" ? "Triple" : "Triple"}</h3>
                            <p className={"text-white me-3"}>
                                {localStorage.getItem("lang") === "uzb" ? "Triple Sleep asosiy joylar soni: 3 Internet va telefoniya - bepul Wi-Fi - telefonElektronika - konditsioner. Qulayliklar - rasmlar - muzlatgich - anatomik matraslar - qo'shimcha matras (sizning so'rovingiz bo'yicha) - xona kattaligi - 25 kv.mMebel - stol - stul - oyna - karavot yonidagi stol. O'yin-kulgi - TVTashqi hudud - shahar manzarasi ziq-ovqat va ichimliklar - ichimlik suvi - choy - shakar (tish pastasi, cho'tka, dush uchun jel, shampun, sovun) - oyna - hojatxona - urn Kiyim parvarishlash - shkaf - ilgichlar Zamonaviy qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharga qaraydi."
                                    : localStorage.getItem("lang") === "rus" ? "Triple Сон количество основных мест: 3 Интернет и телефония - бесплатный Wi-Fi - телефонЭлектроника - кондиционерУдобства - картины - холодильник - анатомические матрасы - дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.мМебель - письменный стол - стул - зеркало - прикроватная тумбочкаРазвлечения - телевизорВнешняя территория - вид на городПитание и напитки - питьевая вода - чай - сахарВанная комната - душевая кабина - банные, лицевые полотенца, а также полотенце для ног - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло) - зеркало - унитаз - урноУход за одеждой - шкаф - вешалки."
                                        : "Number of Triple Sleep main places: 3 Internet and telephony - free Wi-Fi - telephoneElectronics - air conditioning. Amenities - pictures - fridge - anatomical mattresses - extra mattress (on your request) - room size - 25 sq.mFurniture - table - chair - mirror - bedside table. Entertainment - TV Outdoor area - city view Food and drinks - drinking water - tea - sugar (toothpaste, toothbrush, shower gel, shampoo, soap) - mirror - toilet - urn Clothes care - wardrobe - hangers The window of this bright room, equipped with modern comfortable furniture and panoramic windows, overlooks the beautiful city."}</p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={triple1} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={triple2} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={restaurant} className={"me-2 m-0"} style={{width: "40%", height: "30vh"}}
                                     alt=""/>
                                <img src={restaurant1} className={"me-2"} style={{width: "40%", height: "30vh"}}
                                     alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Restaurant" : localStorage.getItem("lang") === "rus" ? "Restaurant" : "Restaurant"}</h3>
                            <p className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va shinam restoran tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy.\n" +
                                    "                            Va devor o'simliklari restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun maxsus muhit yaratadi." : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами.\n" +
                                    "                            А настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей" : "The luxurious and cozy restaurant is a place where visitors can enjoy delicious food. And the wall plants fill the restaurant with a unique aroma, thus creating a special atmosphere for a comfortable stay for visitors."}
                            </p>
                        </div>
                    </div>

                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Reception" : localStorage.getItem("lang") === "rus" ? "Reception" : "Reception"}</h3>
                            <p className={"text-white me-3"}>
                                {localStorage.getItem("lang") === "uzb" ? "Yangi Shosh Modern mehmonxonasi aeroport va vokzaldan piyoda masofada joylashgan. Zamonaviy dizayn va kunduzgi yorug'lik bilan birlashtirilgan katta shisha jabhada yorug'lik va yorqin muhit yaratadi. Mehmonlar dam olishlari yoki taksi kutishlari uchun qabulxonada qulay divan va aqlli televizor mavjud. Ziyofatda har doim tabassumli va muloyim ma'murlar bor, ular doimo sizga yordam berishdan va barcha savollaringizga javob berishdan mamnun. Har kuni soat 7:00 dan 10:00 gacha hashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin. Devordagi tirik o'simliklar restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va qulay muhit yaratadi."
                                    : localStorage.getItem("lang") === "rus" ? "Новая гостиница Шош Модерн находится в пешей доступности от аэропорта и вокзала.\n" +
                                        " Современный дизайн и большой стеклянный фасад в сочетании с дневным светом создают светлую и яркую атмосферу. \n" +
                                        "В ресепшене расположен удобный диван и смарт телевизор для того, чтобы гости могли отдохнуть или дождаться своего такси. \n" +
                                        "На ресепшене всегда стоят улыбчивые и вежливые администраторы, которые всегда рады вам помочь и ответить на все интересующие вас вопросы. \n" +
                                        "Ежедневно с 7:00 до 10:00 вы можете насладиться изысканным и вкусным завтраком в нашем шикарном ресторане.  "
                                        : "New Shosh Modern Hotel is within walking distance from the airport and train station. A large glass facade combined with modern design and daylight creates a light and bright atmosphere. There is a comfortable sofa and a smart TV in the lobby for guests to relax or wait for a taxi. There are always smiling and polite administrators at the reception, who are always happy to help you and answer all your questions. Every day from 7:00 to 10:00 you can have an elegant and delicious breakfast in our luxurious restaurant. Living plants on the wall fill the restaurant with a unique aroma and create a cozy atmosphere."}</p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={receptions} className={"me-2"} style={{width: "40%", height: "30vh"}} alt=""/>
                                <img src={receptions1} className={"me-2"} style={{width: "35%", height: "30vh"}}
                                     alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={hall} className={"me-2"} style={{width: "35%", height: "28vh"}} alt=""/>
                                <img src={hall1} className={"me-2"} style={{width: "35%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Kонференц-зал" : "Conference-hall"}</h3>
                            <p className={"text-white me-3"}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'ishi mumkin va konferentsiyalar, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interfaol doska bilan jihozlangan va boshqalar."
                                    : localStorage.getItem("lang") === "rus" ? "Просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий" +
                                        " Зал оснащенный собственным гардеробом, способен вместить до 50 человек и оборудован  всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеооборудованием, микрофонами, интерактивной доской и т.д."
                                        : "A spacious and comfortable room for various events. The hall, equipped with its own wardrobe, can accommodate up to 50 people and is equipped with all necessary equipment for conferences, seminars, presentations and other business meetings: projector, screen, audio and video equipment, microphones, interactive whiteboard and others."}</p>
                        </div>

                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Cад" : "Garden"}</h3>
                            <p className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joy.\n" +
                                    "                            Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin" : localStorage.getItem("lang") === "rus" ? "Сад гостиницы – это уютное и красивое место, где гости могут отдохнуть от городской суеты и насладиться природой.\n" +
                                    "                            Сад представляет собой зеленую зону с живописными деревьями и кустарниками, где посетители могут почитать книги или поработать на свежем и чистом воздухе" : "The hotel garden is a cozy and beautiful place where guests can take a break from the bustle of the city and enjoy nature The garden is a green area with picturesque trees and shrubs, where visitors can read books or work in the fresh and clean air"}
                            </p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={garden} className={"me-2 m-0"} style={{width: "35%", height: "28vh"}} alt=""/>
                                <img src={garden2} className={"me-2 m-0"} style={{width: "35%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"media media-1024"}>
                <h3 className={"text-white text-center mb-5"}
                    style={{marginTop: "150px"}}>{localStorage.getItem("lang") === "uzb" ? "Bizning honalar" : localStorage.getItem("lang") === "rus" ? "Наши номера" : "Our rooms"}</h3>
                <div className={"container"}>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={family1}  className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-60vh"}>
                                    <img src={family2}  className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Oylaviy" : localStorage.getItem("lang") === "rus" ? "Cемья" : "Family"}</h3>
                            <p className={"text-white text-start"}>
                                {localStorage.getItem("lang") === "uzb" ? "Family Dream asosiy joylar soni: 3 Internet va telefoniya - bepul Wi-Fi\n" +
                                    "- telefon Elektronika - konditsioner Qulayliklar - rasmlar - xolodilnik - anatomik matraslar - qo'shimcha matras (sizning so'rovingiz bo'yicha) - xona maydoni - 25 kv.m - hojatxona - axlat qutisi Kiyimlarni parvarish qilish - shkaf\n" +
                                    " - ilmoqlar Bir kishilik va bitta bitta karavotli qulay xona. Xonada qulay zamonaviy mebellar, shuningdek, stol bilan tashkil etilgan ish joyi mavjud." : localStorage.getItem("lang") === "rus" ? "Family Сон количество основных мест: 3 Интернет и телефония                  - бесплатный Wi-Fi                  \n" +
                                    "- телефон Электроника -кондиционер Удобства -картины -холодильник -анатомические матрасы-дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.м - унитаз - урно Уход за одеждой - шкаф " +
                                    " - вешалки Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. " : "Number of main places in Family Dream: 3 Internet and telephony - free Wi-Fi - telephone Electronics - air conditioning Amenities - pictures - refrigerator - anatomical mattresses - extra mattress (at your request) - room area - 25 sq.m. - toilet - trash can Clothes care - wardrobe - hangers Comfortable room with one single bed and one single bed. The room has comfortable modern furniture, as well as an organized work area with a desk. This room is ideal for families with children who like to sleep with their parents and where they can stay comfortably and without unnecessary stress."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={lyuks} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={lyuks1} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Lyuks" : localStorage.getItem("lang") === "rus" ? "Люкс" : "Luxury"}</h3>
                            <p className={"text-white text-start"}>
                                <p className={"text-white tex-start"}>
                                    {localStorage.getItem("lang") === "uzb" ? "Double Deluxe Asosiy karavotlar soni: 2 Internet va telefoniya bepul Wi-Fi telefon Elektron konditsioner Qulayliklar rasmlari muzlatgich anatomik matraslar qo'shimcha matras (sizning so'rovingiz bo'yicha) xona maydoni - 30 kv.m Mebel stol stul\n" +
                                        "oynali ko'rpa stoli, divan,televizor, Ko'ngilochar ochiq maydon, shahar manzarasi Oziq-ovqat va ichimliklar\n" +
                                        "ichimlik suvi, choy shakar. Hammom uchun dush idishni hammomi, yuz sochiqlari, shuningdek, oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynasi\n" +
                                        "hojatxona urni, kiyimlarni dazlmollaydigan uskuna\n" +
                                        "garderob ilgichi\n" : localStorage.getItem("lang") === "rus" ? "Double Deluxe\n" +
                                        "                            Сон\n" +
                                        "                            количество основных мест: 2\n" +
                                        "                            Интернет и телефония\n" +
                                        "                            - бесплатный Wi-Fi\n" +
                                        "                            - телефон\n" +
                                        "                            Электроника\n" +
                                        "                            - кондиционер\n" +
                                        "                            Удобства\n" +
                                        "                            - картины\n" +
                                        "                            - холодильник\n" +
                                        "                            - анатомические матрасы\n" +
                                        "                            - дополнительный матрас (по вашему запросу)\n" +
                                        "                            - площадь номера- 30 кв.м\n" +
                                        "                            Мебель\n" +
                                        "                            - письменный стол\n" +
                                        "                            - стул\n" +
                                        "                            - зеркало\n" +
                                        "                            - прикроватная тумбочка\n" +
                                        "                            - диван\n" +
                                        "                            Развлечения\n" +
                                        "                            - телевизор\n" +
                                        "                            Внешняя территория\n" +
                                        "                            - вид на город\n" +
                                        "                            Питание и напитки\n" +
                                        "                            - питьевая вода\n" +
                                        "                            - чай\n" +
                                        "                            - сахар\n" +
                                        "                            Ванная комната\n" +
                                        "                            - душевая кабина\n" +
                                        "                            - банные, лицевые полотенца, а также полотенце для ног\n" +
                                        "                            - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                        "                            - зеркало\n" +
                                        "                            - унитаз\n" +
                                        "                            - урно\n" +
                                        "                            Уход за одеждой\n" +
                                        "                            - шкаф\n" +
                                        "                            - вешалки" : "Double Deluxe Number of main beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities refrigerator anatomical mattresses additional mattress (at your request) room area - 30 sq.m. Furniture table chair bed table with mirror sofa Entertainment TV Outdoor area City view Food and drinks drinking water tea sugar Bathroom shower cubicle bath, face towels and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap ) mirror toilet urn care clothes wardrobe hanger"}
                                </p>
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white "}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={single} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={single1} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Single" : localStorage.getItem("lang") === "rus" ? "Single" : "Single"}</h3>
                            <p className={"text-white text-start"}>{localStorage.getItem("lang") === "uzb" ? "Yakka tartibdagi asosiy o'rinlar soni: 2 ta Internet va telefoniya, bepul Wi-Fi telefon Elektron konditsioner, Qulayliklar: rasmlari, muzlatgich, anatomik matraslar, xona maydoni - 12 kv.m Mebel stol stul oynasi karavot, Ko'ngilochar Tashqi hudud, shahar manzarasi. Oziq-ovqat va ichimlik suvi, choy, shakar Hammom dush kabinasi, hammom, yuz va oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynali hojatxona idishi Kiyimlarni parvarish qilish shkafi ilgichlari"
                                : localStorage.getItem("lang") === "rus" ?
                                    "Single\n" +
                                    "Сон \n" +
                                    "количество основных мест: 2\n" +
                                    "Интернет и телефония \n" +
                                    "- бесплатный Wi-Fi\n" +
                                    "- телефон \n" +
                                    "Электроника \n" +
                                    "- кондиционер\n" +
                                    "Удобства \n" +
                                    "- картины\n" +
                                    "- холодильник\n" +
                                    "- анатомические матрасы\n" +
                                    "- площадь номера- 12 кв.м\n" +
                                    "Мебель\n" +
                                    "- письменный стол\n" +
                                    "- стул\n" +
                                    "- зеркало\n" +
                                    "- прикроватная тумбочка\n" +
                                    "Развлечения \n" +
                                    "- телевизор\n" +
                                    "Внешняя территория\n" +
                                    "- вид на город\n" +
                                    "Питание и напитки\n" +
                                    "- питьевая вода\n" +
                                    "- чай\n" +
                                    "- сахар\n" +
                                    "Ванная комната\n" +
                                    "- душевая кабина\n" +
                                    "- банные, лицевые полотенца, а также полотенце для ног\n" +
                                    "- одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                    "- зеркало" +
                                    "- унитаз" +
                                    "- урно" +
                                    "Уход за одеждой" +
                                    "- шкаф" +
                                    "- вешалки"
                                    : "Number of main single beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities Refrigerator anatomical mattresses Room area - 12 sq.m. Furniture table chair window bed Entertainment TV Outdoor area City view Food and drink water tea sugar Bathroom shower cubicle bath, face and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap) mirrored toilet bowl Clothes care cabinet hangers"}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={tvin1} className={"room-size "} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={tvin2} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Twin" : localStorage.getItem("lang") === "rus" ? "Twin" : "Twin"}</h3>
                            <p className={"text-white text-start "}>{localStorage.getItem("lang") === "uzb" ? "Twin Uyqu asosiy karavot soni: 2 ta Internet va telefoniya, bepul Wi-Fi telefon Elektron konditsioner Qulayliklar: rasmlari, xolodilnik, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha) xona hajmi 20 kv.m Mebel stol stul oynasi, karavot Ko'ngilochar televidenie, Tashqi hudud shahar ko'rinish. Oziq-ovqat va ichimlik suvi choy shakar Hammom dush kabinasi hammom, yuz va oyoq sochiqlari bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynali hojatxona idishi Kiyimlarni parvarish qilish shkafi ilgichlari\n" : localStorage.getItem("lang") === "rus" ? "Twin\n" +
                                "                            Сон\n" +
                                "                            количество основных мест: 2\n" +
                                "                            Интернет и телефония\n" +
                                "                             бесплатный Wi-Fi\n" +
                                "                            телефон\n" +
                                "                            Электроника\n" +
                                "                            кондиционер\n" +
                                "                            Удобства\n" +
                                "                             картины\n" +
                                "                             холодильник\n" +
                                "                             анатомические матрасы\n" +
                                "                             дополнительный матрас (по вашему запросу)\n" +
                                "                             площадь номера 20- кв.м\n" +
                                "                            Мебель\n" +
                                "                             письменный стол\n" +
                                "                             стул\n" +
                                "                             зеркало\n" +
                                "                             прикроватная тумбочка\n" +
                                "                            Развлечения\n" +
                                "                             телевизор\n" +
                                "                            Внешняя территория\n" +
                                "                             вид на город\n" +
                                "                            Питание и напитки\n" +
                                "                             питьевая вода\n" +
                                "                             чай\n" +
                                "                             сахар\n" +
                                "                            Ванная комната\n" +
                                "                             душевая кабина\n" +
                                "                             банные, лицевые полотенца, а также полотенце для ног\n" +
                                "                             одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)\n" +
                                "                             зеркало\n" +
                                "                             унитаз\n" +
                                "                             урно\n" +
                                "                            Уход за одеждой\n" +
                                "                             шкаф\n" +
                                "                             вешалки" : "Twin Sleep Number of main beds: 2 Internet and telephony free Wi-Fi telephone Electronic air conditioner Photos of amenities refrigerator anatomical mattresses extra mattress (on your request) room size 20 sq.m Furniture table chair mirror bed Entertainment TV Outdoor area City view Food and drinking water tea sugar Bathroom shower cubicle bath, face and foot towels disposable hygiene products (toothpaste, brush, shower gel, shampoo, soap) mirror toilet bowl Care of clothes wardrobe hangers"}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={triple1} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={triple2} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Triple" : localStorage.getItem("lang") === "rus" ? "Triple" : "Triple"}</h3>
                            <p className={"text-white text-start "}>
                                {localStorage.getItem("lang") === "uzb" ? "Triple Sleep asosiy joylar soni: 3 Internet va telefoniya - bepul Wi-Fi - telefonElektronika - konditsioner. Qulayliklar - rasmlar - muzlatgich - anatomik matraslar - qo'shimcha matras (sizning so'rovingiz bo'yicha) - xona kattaligi - 25 kv.mMebel - stol - stul - oyna - karavot yonidagi stol. O'yin-kulgi - TVTashqi hudud - shahar manzarasi ziq-ovqat va ichimliklar - ichimlik suvi - choy - shakar (tish pastasi, cho'tka, dush uchun jel, shampun, sovun) - oyna - hojatxona - urn Kiyim parvarishlash - shkaf - ilgichlar Zamonaviy qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharga qaraydi."
                                    : localStorage.getItem("lang") === "rus" ? "Triple Сон количество основных мест: 3 Интернет и телефония - бесплатный Wi-Fi - телефонЭлектроника - кондиционерУдобства - картины - холодильник - анатомические матрасы - дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.мМебель - письменный стол - стул - зеркало - прикроватная тумбочкаРазвлечения - телевизорВнешняя территория - вид на городПитание и напитки - питьевая вода - чай - сахарВанная комната - душевая кабина - банные, лицевые полотенца, а также полотенце для ног - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло) - зеркало - унитаз - урноУход за одеждой - шкаф - вешалки."
                                        : "Number of Triple Sleep main places: 3 Internet and telephony - free Wi-Fi - telephoneElectronics - air conditioning. Amenities - pictures - fridge - anatomical mattresses - extra mattress (on your request) - room size - 25 sq.mFurniture - table - chair - mirror - bedside table. Entertainment - TV Outdoor area - city view Food and drinks - drinking water - tea - sugar (toothpaste, toothbrush, shower gel, shampoo, soap) - mirror - toilet - urn Clothes care - wardrobe - hangers The window of this bright room, equipped with modern comfortable furniture and panoramic windows, overlooks the beautiful city."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={restaurant} className={"room-size "} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={restaurant1} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Restaurant" : localStorage.getItem("lang") === "rus" ? "Restaurant" : "Restaurant"}</h3>
                            <p className={"text-white text-start "}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va shinam restoran tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy.\n" +
                                    "                            Va devor o'simliklari restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun maxsus muhit yaratadi." : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами.\n" +
                                    "                            А настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей" : "The luxurious and cozy restaurant is a place where visitors can enjoy delicious food. And the wall plants fill the restaurant with a unique aroma, thus creating a special atmosphere for a comfortable stay for visitors."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={receptions} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={receptions1} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Receptions" : localStorage.getItem("lang") === "rus" ? "Receptions" : "Receptions"}</h3>
                            <p className={"text-white text-start "}>                                {localStorage.getItem("lang") === "uzb" ? "Yangi Shosh Modern mehmonxonasi aeroport va vokzaldan piyoda masofada joylashgan. Zamonaviy dizayn va kunduzgi yorug'lik bilan birlashtirilgan katta shisha jabhada yorug'lik va yorqin muhit yaratadi. Mehmonlar dam olishlari yoki taksi kutishlari uchun qabulxonada qulay divan va aqlli televizor mavjud. Ziyofatda har doim tabassumli va muloyim ma'murlar bor, ular doimo sizga yordam berishdan va barcha savollaringizga javob berishdan mamnun. Har kuni soat 7:00 dan 10:00 gacha hashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin. Devordagi tirik o'simliklar restoranni o'ziga xos xushbo'y hid bilan to'ldiradi va qulay muhit yaratadi."
                                : localStorage.getItem("lang") === "rus" ? "Новая гостиница Шош Модерн находится в пешей доступности от аэропорта и вокзала.\n" +
                                    " Современный дизайн и большой стеклянный фасад в сочетании с дневным светом создают светлую и яркую атмосферу. \n" +
                                    "В ресепшене расположен удобный диван и смарт телевизор для того, чтобы гости могли отдохнуть или дождаться своего такси. \n" +
                                    "На ресепшене всегда стоят улыбчивые и вежливые администраторы, которые всегда рады вам помочь и ответить на все интересующие вас вопросы. \n" +
                                    "Ежедневно с 7:00 до 10:00 вы можете насладиться изысканным и вкусным завтраком в нашем шикарном ресторане.  "
                                    : "New Shosh Modern Hotel is within walking distance from the airport and train station. A large glass facade combined with modern design and daylight creates a light and bright atmosphere. There is a comfortable sofa and a smart TV in the lobby for guests to relax or wait for a taxi. There are always smiling and polite administrators at the reception, who are always happy to help you and answer all your questions. Every day from 7:00 to 10:00 you can have an elegant and delicious breakfast in our luxurious restaurant. Living plants on the wall fill the restaurant with a unique aroma and create a cozy atmosphere."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={hall} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={hall1} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Конференц-зал" : "Conference hall"}</h3>
                            <p className={"text-white text-start "}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'ishi mumkin va konferentsiyalar, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interfaol doska bilan jihozlangan va boshqalar."
                                    : localStorage.getItem("lang") === "rus" ? "Просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий" +
                                        " Зал оснащенный собственным гардеробом, способен вместить до 50 человек и оборудован  всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеооборудованием, микрофонами, интерактивной доской и т.д."
                                        : "A spacious and comfortable room for various events. The hall, equipped with its own wardrobe, can accommodate up to 50 people and is equipped with all necessary equipment for conferences, seminars, presentations and other business meetings: projector, screen, audio and video equipment, microphones, interactive whiteboard and others."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={garden} className={"room-size"} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={garden2} className={"room-size"} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Сад" : "Garden"}</h3>
                            <p className={"text-white text-start "}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joy.\n" +
                                    "                            Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin" : localStorage.getItem("lang") === "rus" ? "Сад гостиницы – это уютное и красивое место, где гости могут отдохнуть от городской суеты и насладиться природой.\n" +
                                    "                            Сад представляет собой зеленую зону с живописными деревьями и кустарниками, где посетители могут почитать книги или поработать на свежем и чистом воздухе" : "The hotel garden is a cozy and beautiful place where guests can take a break from the bustle of the city and enjoy nature The garden is a green area with picturesque trees and shrubs, where visitors can read books or work in the fresh and clean air"}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                </div>
            </div>
        </div>
    )
}