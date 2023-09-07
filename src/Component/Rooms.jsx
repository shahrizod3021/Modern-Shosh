import family1 from '../assets/img/Family/e.jpg'
import family2 from '../assets/img/Family/IMG_0360.jpg'
import fam from '../assets/img/Family/fam.png'
import fam1 from '../assets/img/Family/fam (2).png'
import lyuks from '../assets/img/Lyuks/e.jpg'
import luxmedia from '../assets/img/Lyuks/lux.png'
import luxmedia1 from '../assets/img/Lyuks/lux (2).png'
import hall from '../assets/img/hall/hall.jpg'
import hall1 from '../assets/img/hall/hall1.jpg'
import hallmed from '../assets/img/hall/hall.png'
import hallmed1 from '../assets/img/hall/hall (2).png'
import garden from '../assets/img/bog/bog.jpg'
import garden2 from '../assets/img/bog/bog2.jpg'
import gar from '../assets/img/bog/sad (2).png'
import gar1 from '../assets/img/bog/sad (3).png'
import single from '../assets/img/single/single.jpg'
import single1 from '../assets/img/single/e.jpg'
import singlemed from '../assets/img/single/single.png'
import singlemed1 from '../assets/img/single/single (2).png'
import twin from '../assets/img/tvin/twin.png'
import twin1 from '../assets/img/tvin/twin (2).png'
import tvin1 from '../assets/img/tvin/tvin1.jpg'
import tvin2 from '../assets/img/tvin/IMG_0345.jpg'
import triple1 from '../assets/img/triple/IMG_0341.jpg'
import triple2 from '../assets/img/triple/IMG_0339.jpg'
import trip from '../assets/img/triple/triple.png'
import trip1 from '../assets/img/triple/triple (2).png'
import restaurant from '../assets/img/Restaurant/IMG_0309.jpg'
import restaurant1 from '../assets/img/Restaurant/IMG_0308.jpg'
import rest from '../assets/img/Restaurant/resturant.png'
import rest1 from '../assets/img/Restaurant/resturant (2).png'
import receptions from '../assets/img/Reception/reception.jpg'
import receptions1 from '../assets/img/Reception/reception1.jpg'
import recep from '../assets/img/Reception/reseption.png'
import recep1 from '../assets/img/Reception/reseption (2).png'
import Carousel from "react-multi-carousel";
import Lux from '../assets/img/Lyuks/Lux.jpg'

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
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Oilaviy" : localStorage.getItem("lang") === "rus" ? "Семья" : "Family"}
                            </h3>
                            <p className={"text-white p-pas playfair playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Oilaviy xonasi - asosiy joylar soni: 3 ta. Internet va telefoniya ,bepul Wi-Fi va telefon. Elektronika - konditsioner va xolodilnik mavjud. Qulayliklar , rasmlar , anatomik matraslar , qo'shimcha matras (sizning so'rovingiz bo'yicha) , xona maydoni - 25 kv.m . Kiyimlarni parvarish qilish uchun - shkaf , ilmoqlar mavjud . Bir kishilik va yagona turdagi  karavoti mavjud  qulay xona. Xonada qulay zamonaviy mebellar, shuningdek stol bilan tashkil etilgan ish joyi mavjud." : localStorage.getItem("lang") === "rus" ? "Family room - количество основных мест: 3. Интернет и телефония , бесплатный Wi-Fi , телефон. Электроника ,кондиционер ,холодильник. Удобства ,картины ,анатомические матрасы , дополнительный матрас (по вашему запросу) , площадь номера- 25 кв.м , унитаз , урно. Уход за одеждой , шкаф , вешалки. Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом." : "Family Dream - number of main places : 3. Internet and telephony - free Wi-Fi - telephone. Electronics - air conditioning - refrigerator . Amenities - pictures - anatomical mattresses - extra mattress (at your request) - room area - 25 sq.m. - toilet - trash can. Clothes care - wardrobe - hangers. Comfortable room with one single bed and one single bed. The room has comfortable modern furniture, as well as an organized work area with a desk. This room is ideal for families with children who like to sleep with their parents and where they can stay comfortably and without unnecessary stress."}
                            </p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={family2} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
                                <img src={family1} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mb-5"}>
                        <div className={"col-md-5 p-pas"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={Lux} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
                                <img src={lyuks} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Lyuks" : localStorage.getItem("lang") === "rus" ? "Полулюкс" : "Lux"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Lyuks xona - asosiy karavotlar soni: 2 ta, bepul Wi-Fi uchun internet va telefoniya . Elektron konditsioner, rasmlar, muzlatgich, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha), xona kattaligi - 30 kv.m . Mebel, stol, stul, oyna, divan, televizor. Ochiq ko'ngilochar zona va  shaharning ajoyib  ko'rinishi. Oziq-ovqat va ichimlik, ichimlik suvi, choy va shakar mavjud. Hammomda dush, yuz va oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol, kiyim ilgichi mavjud." : localStorage.getItem("lang") === "rus" ? "Количество основных мест в Double Deluxe: 2, Интернет и телефония бесплатно Wi-Fi Телефон Электронный кондиционер, картины, холодильник, анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера - 30 кв.м. Мебель, стол, стул, зеркало, диван, телевизор. Открытая развлекательная зона, вид на город. Еда и напитки, питьевая вода, чай и сахар. В ванной комнате имеется душевая кабина, полотенца для лица, а также полотенца для ног, одноразовые средства гигиены, зеркало, утюг, вешалка для одежды."
                                    : "Double Deluxe room: number of main beds: 2, free Wi-Fi internet and telephony. Electronic air conditioner, pictures, refrigerator, anatomical mattresses, extra mattress (at your request), room size - 30 sq.m. Furniture, table, chair, mirror, sofa, TV. An outdoor entertaining area and a great view of the city. Food and drink, drinking water, tea and sugar are available. The bathroom has a shower, face and foot towels, disposable hygiene products, mirror, iron, clothes hanger."}
                            </p>
                        </div>

                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>Single</h3>
                            <p className={"text-white p-pas playfair playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Single room da asosiy o'rinlar soni: 2 ta Internet va telefoniya, bepul Wi-Fi, telefon, Elektron konditsioner, muzlatgich. Qulayliklar: rasmlari,  anatomik matraslar, xona maydoni - 12 kv.m Mebel stol stul oynasi bilan va  karavot, Ko'ngilochar Tashqi hudud, shahar manzarasi. Oziq-ovqat va ichimlik suvi, choy va  shakar.  Hammom da dush kabinasi, hammom, yuz va oyoq sochiqlari , bir marta ishlatiladigan gigiena vositalari, Kiyimlarni parvarish qilish shkaf ilgichlari mavjud."
                                : localStorage.getItem("lang") === "rus" ?
                                    "Количество основных мест в одноместном номере: 2 Интернет и телефония, бесплатный Wi-Fi, телефон, электронный кондиционер, холодильник. В номере: картины, анатомические матрасы, площадь номера - 12 кв.м., мебельный столик, кресло у окна и кровать, развлечения. Прилегающая территория, вид на город. Еда и питьевая вода, чай и сахар. В ванной комнате есть душевая кабина, банные полотенца, полотенца для лица и ног, одноразовые средства гигиены, вешалки для шкафа для ухода за одеждой."
                                    : "Number of main seats in a Single room: 2 Internet and telephony, free Wi-Fi, telephone, electronic air conditioner, refrigerator. Amenities: pictures, anatomical mattresses, room area - 12 sq.m. Furniture table with chair window and bed, Entertainment Outside area, city view. Food and drinking water, tea and sugar. The bathroom has a shower cabin, bath, face and foot towels, disposable hygiene products,  clothes care closet hangers.\n"}</p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={single} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={singlemed1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={tvin1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={tvin2} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7 "}>
                            <h3 className={"text-white"}>Twin</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Twin room da  asosiy karavot soni: 2 ta , Internet va telefoniya, bepul Wi-Fi telefon,  Elektron konditsioner . Qulayliklar : rasmlari, xolodilnik, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha) xona hajmi 20 kv.m .  Mebel stol stul oynasi bilan, karavot, ko'ngilochar televidenie, tashqi hudud va shahar ko'rinishi. Oziq-ovqat va ichimlik suvi, choy va  shakar. Hammom da dush kabinasi, yuz va oyoq sochiqlari, bir marta ishlatiladigan gigiena vositalari  kiyimlarni parvarish qilish shkafi ilgichlari mavjud." : localStorage.getItem("lang") === "rus" ? "Количество основных кроватей в двухместном номере: 2, Интернет и телефония, бесплатный телефон Wi-Fi, электронный кондиционер. В номере: картины, холодильник, анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера 20 кв.м. Мебель, стол, стул с зеркалом, кровать, развлекательный телевизор, открытая площадка и вид на город. Еда и питьевая вода, чай и сахар. В ванной комнате имеется душевая кабина, полотенца для лица и ног, одноразовые средства гигиены, вешалки для одежды." : "Number of main beds in twin room: 2, Internet and telephony, free Wi-Fi phone, electronic air conditioner. Amenities: pictures, refrigerator, anatomical mattresses, extra mattress (at your request), room size 20 sq.m. Furniture table chair with mirror, bed, entertainment TV, outdoor area and city view. Food and drinking water, tea and sugar. The bathroom has a shower cubicle, face and foot towels, disposable hygiene products,  clothes hangers.\n"}
                            </p>
                        </div>
                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>Triple</h3>
                            <p className={"text-white p-pas playfair me-3"}>
                                {localStorage.getItem("lang") === "uzb" ? "Triple room - asosiy joylar soni: 3 ta. Internet va telefoniya , bepul Wi-Fi, telefonElektronika, konditsioner. Qulayliklar  :  rasmlar, muzlatgich, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha), xona kattaligi, 25 kv.m . Mebel, stol, stul, oyna, karavot yonidagi stol. O'yin-kulgi, TV, tashqi hudud, shahar manzarasi, oziq-ovqat va ichimliklar, ichimlik suvi, choy va shakar. Kiyim parvarishlash - shkaf, ilgichlar . Zamonaviy qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharga qaraydi."
                                    : localStorage.getItem("lang") === "rus" ? "Трехместный номер - количество основных мест: 3. Интернет и телефония, бесплатный Wi-Fi, телефон, электроника, кондиционер. В номере: картины, холодильник, анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера 25 кв.м. Мебель, стол, стул, зеркало, тумбочка."
                                        : "Triple room - number of main places: 3. Internet and telephony, free Wi-Fi, telephone, electronics, air conditioning. Amenities: pictures, refrigerator, anatomical mattresses, extra mattress (on your request), room size, 25 sq.m. Furniture, table, chair, mirror, bedside table. Entertainment, TV, outdoor area, city view, food and drinks, drinking water, tea and sugar. Clothes care - wardrobe, hangers. Equipped with modern comfortable furniture and panoramic windows, this bright room overlooks the beautiful city."}</p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={triple1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={triple2} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center mt-2"}>
                                <img src={restaurant} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                                <img src={restaurant1} className={"me-2"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Restaran     " : localStorage.getItem("lang") === "rus" ? "Ресторан" : "Restaurant"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va shinam restoran - bu tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy. Va devor o'simliklari restoranni o'ziga xos hid bilan to'ldiradi va shu bilan tashrif buyuruvchilarning qulay yashashi uchun maxsus muhit yaratadi. Har kuni soat 7:00 dan 10:00 gacha hashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin." +
                                    "Ziyofatda har doim tabassumli va muloyim hodimlar bor, ular doimo sizga yordam berishdan va barcha savollaringizga javob berishdan mamnun." : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан – это место, где посетители могут насладиться вкусной едой. А настенные растения наполняют ресторан неповторимым ароматом, тем самым создавая особую атмосферу для комфортного пребывания посетителей.  Каждый день с 7:00 до 10:00 вы сможете насладиться изысканным и вкусным завтраком в нашем роскошном ресторане." : "A luxurious and cozy restaurant is a place where visitors can enjoy delicious food. And wall plants fill the restaurant with a unique aroma, thereby creating a special atmosphere for a comfortable stay of visitors. Every day from 7:00 to 10:00 you can enjoy an exquisite and delicious breakfast in our luxurious restaurant."}
                            </p>
                        </div>
                    </div>

                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Qabulxona" : localStorage.getItem("lang") === "rus" ? "Администрация" : "Reception"}</h3>
                            <p className={"text-white me-3 p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Qulay va unutilmas manzil sari birinchi qadam. Sizga yordam berishga tayyor mijozlarga xizmat ko'rsatish bo'yicha keng tajribaga ega samimiy xodimlarimiz bor. Biz sizning turar joyingizni qulay qilish uchun 24/7 ishlaymiz."
                                    : localStorage.getItem("lang") === "rus" ? "Первый шаг на пути к комфортному и запоминающемуся месту назначения. У нас есть дружелюбный персонал с большим опытом работы с клиентами, готовый помочь вам. Мы работаем 24/7, чтобы сделать ваше пребывание комфортным."
                                        : "The first step towards a comfortable and memorable destination. We have friendly staff with extensive customer service experience ready to help you. We work 24/7 to make your stay comfortable."}</p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={receptions} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={receptions1} className={"me-2"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={hall} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={hall1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Kонференц-зал" : "Conference-hall"}</h3>
                            <p className={"text-white playfair me-3 p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'ishi mumkin va konferentsiyalar, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interfaol doska bilan jihozlangan va boshqalar."
                                    : localStorage.getItem("lang") === "rus" ? "Просторный и комфортабельный зал для проведения различных мероприятий. Зал, оборудованный собственным гардеробом, вмещает до 50 человек и оснащен всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеоаппаратурой, микрофонами, интерактивной доской и т. д."
                                        : "A spacious and comfortable room for various events. The hall, equipped with its own wardrobe, can accommodate up to 50 people and is equipped with all necessary equipment for conferences, seminars, presentations and other business meetings: projector, screen, audio and video equipment, microphones, interactive whiteboard and other"}</p>
                        </div>

                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Cад" : "Garden"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joy. Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin.\n" +
                                    "                            Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin" : localStorage.getItem("lang") === "rus" ? "Сад отеля – уютное и красивое место, где гости могут отдохнуть от городского шума и насладиться природой. Сад представляет собой зеленую зону с красивыми деревьями и кустарниками, где посетители могут почитать книгу или поработать на свежем воздухе." : "The hotel garden is a cozy and beautiful place where guests can take a break from the city noise and enjoy nature. The garden is a green space with beautiful trees and bushes, where visitors can read a book or work in the fresh air."}
                            </p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={garden} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={garden2} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"media media-1024"}>
                <h3 className={"text-white text-center mb-5"}
                    style={{marginTop: "70px"}}>{localStorage.getItem("lang") === "uzb" ? "Bizning honalar" : localStorage.getItem("lang") === "rus" ? "Наши номера" : "Our rooms"}</h3>
                <div className={"container room1"}>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={fam} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-60vh"}>
                                    <img src={fam1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Family" : localStorage.getItem("lang") === "rus" ? "Family" : "Family"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Family Dream - asosiy joylar soni: 3 ta. Internet va telefoniya - bepul Wi-Fi\n" +
                                    "- telefon. Elektronika - konditsioner - xolodilnik. Qulayliklar - rasmlar - anatomik matraslar - qo'shimcha matras (sizning so'rovingiz bo'yicha) - xona maydoni - 25 kv.m - hojatxona - axlat qutisi. Kiyimlarni parvarish qilish - shkaf\n" +
                                    " - ilmoqlar. Bir kishilik va bitta  karavotli qulay xona. Xonada qulay zamonaviy mebellar, shuningdek, stol bilan tashkil etilgan ish joyi mavjud." : localStorage.getItem("lang") === "rus" ? "Family Сон - количество основных мест: 3. Интернет и телефония                  - бесплатный Wi-Fi                  \n" +
                                    "- телефон. Электроника -кондиционер -холодильник. Удобства -картины -анатомические матрасы-дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.м - унитаз - урно. Уход за одеждой - шкаф " +
                                    " - вешалки. Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. " : "Family Dream - number of main places : 3. Internet and telephony - free Wi-Fi - telephone. Electronics - air conditioning - refrigerator . Amenities - pictures - anatomical mattresses - extra mattress (at your request) - room area - 25 sq.m. - toilet - trash can. Clothes care - wardrobe - hangers. Comfortable room with one single bed and one single bed. The room has comfortable modern furniture, as well as an organized work area with a desk. This room is ideal for families with children who like to sleep with their parents and where they can stay comfortably and without unnecessary stress."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={luxmedia} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={luxmedia1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Lux" : localStorage.getItem("lang") === "rus" ? "Полулюкс" : "Lux"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                <p className={"text-white tex-start"}>
                                    {localStorage.getItem("lang") === "uzb" ? "Double Deluxe-dagi asosiy karavotlar soni: 2 ta, bepul Wi-Fi uchun Internet va telefoniya Telefon Elektron konditsioner, rasmlar, muzlatgich, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha), xona kattaligi - 30 kv.m. Mebel, stol, stul, oyna, divan, televizor. Ochiq ko'ngilochar zona, shahar ko'rinishi. Oziq-ovqat va ichimlik, ichimlik suvi, choy va shakar. Hammomda dush, yuz va oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol, kiyim ilgichi mavjud." : localStorage.getItem("lang") === "rus" ? "Количество основных мест в Double Deluxe: 2, Интернет и телефония бесплатно Wi-Fi Телефон Электронный кондиционер, картины, холодильник, анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера - 30 кв.м. Мебель, стол, стул, зеркало, диван, телевизор. Открытая развлекательная зона, вид на город. Еда и напитки, питьевая вода, чай и сахар. В ванной комнате имеется душевая кабина, полотенца для лица, а также полотенца для ног, одноразовые средства гигиены, зеркало, утюг, вешалка для одежды."
                                        : "Number of basic beds in Double Deluxe: 2, Internet and telephony for free Wi-Fi Telephone Electronic air conditioning, paintings, refrigerator, anatomical mattresses, extra mattress (at your request), room size - 30 sq.m. Furniture, table, chair, mirror, sofa, TV. Outdoor entertainment area, city view. Food and drink, drinking water, tea and sugar. The bathroom has a shower, face and foot towels, disposable hygiene products, mirror, iron, clothes hanger."}
                                </p>
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white "}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={singlemed} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={singlemed1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Single" : localStorage.getItem("lang") === "rus" ? "Single" : "Single"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Single room da asosiy o'rinlar soni: 2 ta Internet va telefoniya, bepul Wi-Fi , telefon. Elektron konditsioner, muzlatgich. Qulayliklar: rasmlari,  anatomik matraslar, xona maydoni - 12 kv.m. Mebel stol stul oynasi bilan va  karavot, Ko'ngilochar Tashqi hudud, shahar manzarasi. Oziq-ovqat va ichimlik suvi, choy va  shakar. Hammom da dush kabinasi, hammom, yuz va oyoq sochiqlari, bir marta ishlatiladigan gigiena vositalari (tish pastasi, cho'tka, dush jeli, shampun, sovun) oynali hojatxona unitazi, Kiyimlarni parvarish qilish shkaf ilgichlari mavjud."
                                    : localStorage.getItem("lang") === "rus" ?
                                        "Количество основных мест в одноместном номере: 2 Интернет и телефония, бесплатный Wi-Fi, телефон. Электронный кондиционер, холодильник. В номере: картины, анатомические матрасы, площадь номера - 12 кв.м. Мебельный столик, кресло у окна и кровать, развлечения. Прилегающая территория, вид на город. Еда и питьевая вода, чай и сахар. В ванной комнате есть душевая кабина, банные полотенца, полотенца для лица и ног, одноразовые средства гигиены,  вешалки для шкафа для ухода за одеждой."
                                        : "Number of main seats in a Single room: 2 Internet and telephony, free Wi-Fi, telephone. Electronic air conditioner, refrigerator. Amenities: pictures, anatomical mattresses, room area - 12 sq.m. Furniture - table with chair window and bed, Entertainment Outside area, city view. Food and drinking water, tea and sugar. The bathroom has a shower cabin, bath, face and foot towels, disposable hygiene products,  clothes care closet hangers.\n"}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={twin} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={twin1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Twin" : localStorage.getItem("lang") === "rus" ? "Twin" : "Twin"}</h3>
                            <p className={"text-white  p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Twin room da  asosiy karavot soni: 2 ta , Internet va telefoniya, bepul Wi-Fi telefon.  Elektronika - konditsioner, xolodilnik . Qulayliklar: rasmlari, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha) xona hajmi 20 kv.m .  Mebel - stol stul oynasi bilan , karavot ,ko'ngilochar televidenie, tashqi hudud va shahar ko'rinishi. Oziq-ovqat va ichimlik suvi , choy va  shakar. Hammom da dush kabinasi, yuz va oyoq sochiqlari , bir marta ishlatiladigan gigiena vositalari, kiyimlarni parvarish qilish shkafi ilgichlari mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Количество основных кроватей в двухместном номере: 2, Интернет и телефония, бесплатный телефон Wi-Fi. Электронный кондиционер, холодильник. В номере: картины, анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера 20 кв.м . Мебель - стол, стул с зеркалом, кровать, развлекательный телевизор, открытая площадка и вид на город. Еда и питьевая вода, чай и сахар. В ванной комнате имеется душевая кабина, полотенца для лица и ног, одноразовые средства гигиены, вешалки для одежды." :
                                        "Number of main beds in twin room: 2, Internet and telephony, free Wi-Fi phone. Electronic air conditioner, refrigerator . Amenities: pictures,  anatomical mattresses, extra mattress (at your request), room size 20 sq.m. Furniture - table chair with mirror, bed, entertainment TV, outdoor area and city view. Food and drinking water, tea and sugar. The bathroom has a shower cubicle, face and foot towels, disposable hygiene products, clothes hangers.\n"}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={trip} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={trip1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Triple" : localStorage.getItem("lang") === "rus" ? "Triple" : "Triple"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Triple room - asosiy joylar soni: 3 ta. Internet va telefoniya , bepul Wi-Fi, telefon. Elektronika - konditsioner, muzlatgich. Qulayliklar  :  rasmlar,  anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha), xona kattaligi, 25 kv.m . Mebel, stol, stul, oyna, karavot yonidagi stol. O'yin-kulgi, TV, tashqi hudud, shahar manzarasi, oziq-ovqat va ichimliklar, ichimlik suvi, choy va shakar. Kiyim parvarishlash - shkaf, ilgichlar . Zamonaviy qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharga qaraydi."
                                    : localStorage.getItem("lang") === "rus" ? "Трехместный номер - количество основных мест: 3. Интернет и телефония, бесплатный Wi-Fi, телефон. Электроника - холодильник, кондиционер. В номере: картины,  анатомические матрасы, дополнительный матрас (по вашему желанию), площадь номера 25 кв.м. Мебель, стол, стул, зеркало, тумбочка. Развлечения - ТВ, открытая площадка, вид на город, еда и напитки, питьевая вода, чай и сахар. Уход за одеждой - шкаф, вешалки. Светлый номер с современной удобной мебелью и панорамными окнами выходит на красивый город."
                                        : "Triple room - number of main places: 3. Internet and telephony, free Wi-Fi, telephone. Electronics - refrigerator, air conditioning. Amenities: pictures, anatomical mattresses, extra mattress (on your request), room size, 25 sq.m. Furniture, table, chair, mirror, bedside table. Entertainment - TV, outdoor area, city view, food and drinks, drinking water, tea and sugar, (toothpaste, toothbrush, shower gel, shampoo, soap), mirror, toilet urn. Clothes care - wardrobe, hangers. Equipped with modern comfortable furniture and panoramic windows, this bright room overlooks the beautiful city."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={rest} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={rest1} style={{width:'100%'}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>

                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Restaran     " : localStorage.getItem("lang") === "rus" ? "Ресторан" : "Restaurant"}</h3>
                            <p className={"text-white p-pas playfair "}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va shinam restoran - bu tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy. Va devor o'simliklari restoranni o'ziga xos hid bilan to'ldiradi va shu bilan tashrif buyuruvchilarning qulay yashashi uchun maxsus muhit yaratadi. Har kuni soat 7:00 dan 10:00 gacha hashamatli restoranimizda nafis va mazali nonushta qilishingiz mumkin." : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан – это место, где посетители могут насладиться вкусной едой. А настенные растения наполняют ресторан неповторимым ароматом, тем самым создавая особую атмосферу для комфортного пребывания посетителей.  Каждый день с 7:00 до 10:00 вы сможете насладиться изысканным и вкусным завтраком в нашем роскошном ресторане." : "A luxurious and cozy restaurant is a place where visitors can enjoy delicious food. And wall plants fill the restaurant with a unique aroma, thereby creating a special atmosphere for a comfortable stay of visitors. Every day from 7:00 to 10:00 you can enjoy an exquisite and delicious breakfast in our luxurious restaurant."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={recep} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={recep1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Administratsiya" : localStorage.getItem("lang") === "rus" ? "Администрация" : "Receptions"}</h3>
                            <p className={"text-white p-pas playfair "}>
                                {localStorage.getItem("lang") === "uzb" ? "Qulay va unutilmas manzil sari birinchi qadam. Sizga yordam berishga tayyor mijozlarga xizmat ko'rsatish bo'yicha keng tajribaga ega samimiy xodimlarimiz bor. Biz sizning turar joyingizni qulay qilish uchun 24/7 ishlaymiz."
                                    : localStorage.getItem("lang") === "rus" ? "Первый шаг на пути к комфортному и запоминающемуся месту назначения. У нас есть дружелюбный персонал с большим опытом работы с клиентами, готовый помочь вам. Мы работаем 24/7, чтобы сделать ваше пребывание комфортным."
                                        : "The first step towards a comfortable and memorable destination. We have friendly staff with extensive customer service experience ready to help you. We work 24/7 to make your stay comfortable."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={hallmed} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={hallmed1} style={{width:"100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Конференц-зал" : "Conference hall"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'ishi mumkin va konferentsiyalar, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interfaol doska bilan jihozlangan va boshqalar."
                                    : localStorage.getItem("lang") === "rus" ? "Просторный и комфортабельный зал для проведения различных мероприятий. Зал, оборудованный собственным гардеробом, вмещает до 50 человек и оснащен всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеоаппаратурой, микрофонами, интерактивной доской и т. д."
                                        : "A spacious and comfortable room for various events. The hall, equipped with its own wardrobe, can accommodate up to 50 people and is equipped with all necessary equipment for conferences, seminars, presentations and other business meetings: projector, screen, audio and video equipment, microphones, interactive whiteboard and other"}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 w-100"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={gar} style={{width:"100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={gar1} style={{width:'100%'}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Сад" : "Garden"}</h3>
                            <p className={"text-white text-start p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joy. Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin.\n" +
                                    "                            Bog' - bu go'zal daraxtlar va butalar bo'lgan yashil maydon, u erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin" : localStorage.getItem("lang") === "rus" ? "Сад отеля – уютное и красивое место, где гости могут отдохнуть от городского шума и насладиться природой. Сад представляет собой зеленую зону с красивыми деревьями и кустарниками, где посетители могут почитать книгу или поработать на свежем воздухе." : "The hotel garden is a cozy and beautiful place where guests can take a break from the city noise and enjoy nature. The garden is a green space with beautiful trees and bushes, where visitors can read a book or work in the fresh air."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                </div>
            </div>
        </div>
    )
}