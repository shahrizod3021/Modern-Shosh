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
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Oilaviy" : localStorage.getItem("lang") === "rus" ? "Cемейный" : "Family"}
                            </h3>
                            <p className={"text-white p-pas playfair playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Oilaviy xona - asosiy joylar soni: 3 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich. Qulayliklar: rasmlar, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Dush barcha zarur bir martalik gigiena vositalari bilan. Xonaning maydoni 25 kv.m. Kiyimlarni parvarishi: shkaf va ilmoqlar. Bitta ikki kishilik va bitta bir kishilik karavotli qulay xona. Xonada qulay zamonaviy mebellar, shuningdek stol bilan jihozlangan ish maydoni mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Такой номер идеально подойдет для семей с детьми, которые любят спать вместе с родителями и где они могут разместиться в комфорте и без лишнего напряжения."
                                        : "Our Family room features three main beds and offers free Wi-Fi and a telephone. It's equipped with electronics like air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress available upon request. The room covers an area of 25 sq.m and offers ample clothes storage with a wardrobe and hangers. It includes one double and one single bed, comfortable modern furniture, and a well-organized workspace with a desk."}
                            </p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={fam1} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
                                <img src={fam} className={"me-2"} style={{width: "50%", height: "30vh"}} alt=""/>
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
                                {localStorage.getItem("lang") === "uzb" ? "Double Deluxe-dagi asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner, televizor va muzlatgich. Qulayliklar: rasmlar, anatomic matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Dush barcha zarur bir martalik gigiena vositalari bilan. Xonaning maydoni 30 kv.m. Mebel: stol, stul, oyna va divan. Ochiq ko'ngilochar maydon va shahar manzarasi. Oziq-ovqat va ichimliklar, choy va shakar. Vannada dush, yuz sochiqlari, shuningdek oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol va kiyim ilgich mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Максимально уютный и роскошный номер с современным дизайном, одной двуспальной кроватью и шикарным диваном. Организовано рабочее пространство с письменным столом и стулом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Данный номер отлично подойдет для любителей большого пространства и наиболее комфортабельного размещения. Идеально подойдет как для семейной пары, так и для путешественников любящих побаловать себя."
                                    : "The Lux room offers two main beds in the Double Deluxe category, with free Wi-Fi and a telephone. It includes electronics such as air conditioning, a TV, and a refrigerator. Amenities feature paintings, anatomical mattresses, and an additional mattress upon request. The room spans an area of 30 sq.m. and is furnished with a table, chair, mirror, and sofa. Guests can also enjoy an outdoor entertainment area with city views. Complimentary food and drinks, tea, and sugar are provided. The bathroom is equipped with a shower cabin, face and foot towels, essential disposable hygiene products, a mirror, an iron, and a clothes hanger."}
                            </p>
                        </div>

                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bir kishilik" : localStorage.getItem("lang") === "rus" ? "Oдноместный" : "Single"}</h3>
                            <p className={"text-white p-pas playfair playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Bir kishilik xonadagi asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich. Qulayliklar: rasmlar, anatomic matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Barcha zarur bir martalik gigiena vositalari bilan dush.  Xonaning maydoni - 12 kv.m. Mebel stoli, deraza yonidagi stul va karavot, shahar manzarasi bilan. Oziq-ovqat va ichimlik suvi, choy va shakar. Vannada dush, yuz sochiqlari, shuningdek oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol va kiyim ilgich mavjud."
                                    : localStorage.getItem("lang") === "rus" ?
                                        "Комфортабельный однокомнатный номер с современным дизайном, состоящий из прихожей, ванной и спальной комнаты. В номере удобная современная мебель,  одна кровать (100*200), а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для путешественников, которые любят быть наедине с собой и не нуждаются в дополнительном пространстве. "
                                        : "The Single room accommodates two main beds and offers free Wi-Fi and a telephone. It includes electronics such as air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 12 sq.m. and features furniture like a sofa, an armchair by the window, and a bed with a city view. Complimentary food and drinking water, tea, and sugar are available. The bathroom is equipped with a shower stall, bath towels, face and foot towels, disposable hygiene products, and clothes hangers for clothing care."}</p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={singlemed} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
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
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Egizak" : localStorage.getItem("lang") === "rus" ? "Двухместный" : "Twin"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Egizak xonada asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektron: konditsioner va xolodilnik mavjud. Qulayliklar : rasmlari, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Xona hajmi 20 kv.m. Mebel: stol, stul, karavot, ko'ngilochar televideniya, tashqi hudud va shahar ko'rinishi sizga manzur. Oziq-ovqat va ichimlik suvi, choy va shakar ham bor. Hammom da dush kabinasi, yuz va oyoq sochiqlari, bir marta ishlatiladigan gigiena vositalari, kiyimlarni parvarish qilish va shkaf ilgichlari mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Уютный двухместный номер, с современным дизайном и двумя односпальными кроватями, в котором созданы все условия для работы и отдыха. В номере удобная современная мебель, одна кровать (100*200), а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для друзей, коллег или родственников."
                                        : "The Twin room features two main beds and provides free Wi-Fi and a telephone. It's equipped with air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 20 sq.m. and includes furniture like a table, chair, and mirror. Guests can enjoy an outdoor entertainment area with city views. Complimentary food and drinking water, tea, and sugar are provided. The bathroom features a shower, face and foot towels, disposable hygiene products, and clothes hangers."}
                            </p>
                        </div>
                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Uchlik" : localStorage.getItem("lang") === "rus" ? "Трёхместный" : "Triple"}</h3>
                            <p className={"text-white p-pas playfair me-3"}>
                                {localStorage.getItem("lang") === "uzb" ? "Uchlik xonasida  asosiy joylar soni: 3 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich mavjud. Qulayliklar : rasmlar, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Xona kattaligi - 25 kv.m. Mebel: stol, stul, oyna, karavot yonidagi stoli bilan. Ko'ngil ochar  TV, tashqi hudud, shahar manzarasi sizga manzur. Oziq-ovqat va ichimliklar, ichimlik suvi, choy va shakar ham bor. Kiyim parvarishlash uchun shkaf va ilgichlar bor. Zamonaviy va qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharni ko'rsatib turadi."
                                    : localStorage.getItem("lang") === "rus" ? "В окно этого светлого номера оснащенного современной удобной мебелью и панорамными окнами, открывается вид на прекрасный город. Современный дизайн создает уют, а удобная мебель и письменный стол обеспечат вам комфортный отдых и работу. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для размещения семьи путешествующей с ребенком, а также друзей, коллег и родственников."
                                        : "The Triple room offers three main beds and provides free Wi-Fi and a telephone. It's equipped with air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 25 sq.m. and includes furniture such as a table, chair, mirror, and bedside table. The bathroom features a shower, face and foot towels, disposable hygiene products, and clothes hangers."}</p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={triple1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={triple2} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-12 mt-5">
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={receptions} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={receptions1} className={"me-2"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Qabulxona" : localStorage.getItem("lang") === "rus" ? "Администрация" : "Reception"}</h3>
                            <p className={"text-white me-3 p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Qulay va unutilmas manzil sari birinchi qadam. Sizga yordam berishga tayyor, mijozlarga xizmat ko'rsatish bo'yicha keng tajribaga ega samimiy xodimlarimiz sizning xizamatingizda. Biz sizning turar joyingizni qulay qilish uchun 24/7 ishlaymiz."
                                    : localStorage.getItem("lang") === "rus" ? "Наш дружелюбный персонал готов вас встретить в любое время суток и ответить на все вас интересующие вопросы. В ресепшене расположены удобный диван с креслами, кондиционер, красивые цветы и смарт телевизор для вашего комфортного ожидания такси. "
                                        : "Our friendly staff, with extensive customer service experience, is ready to assist you as you take your first step towards a comfortable and memorable stay. We operate 24/7 to ensure your stay is as comfortable as possible."}</p>
                        </div>

                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Restoran" : localStorage.getItem("lang") === "rus" ? "Ресторан" : "Restaurant"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va qulay restoran - tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy. Va devor o'simliklari restoranni o'ziga xos hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun maxsus muhit yaratadi. Har kuni soat 7:00 dan 10:00 gacha bizning hashamatli restoranimizda nafis va mazali nonushtadan bahramand bo'lishingiz mumkin."
                                    : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами от нашего шеф-повара. Настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей"
                                        : "Our luxurious and cozy restaurant is the perfect place to savor delicious dishes. Live plants on the walls infuse the restaurant with a delightful aroma, creating a unique atmosphere for a comfortable dining experience. Guests can enjoy an exquisite breakfast every day from 7:00 to 10:00 in our luxurious restaurant."}
                            </p>
                        </div>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center mt-2"}>
                                <img src={restaurant} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                                <img src={restaurant1} className={"me-2"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>

                    </div>


                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-5"}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={garden} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={garden2} className={"me-2 m-0"} style={{width: "50%", height: "28vh"}}
                                     alt=""/>
                            </div>
                        </div>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Cад" : "Garden"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i - mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joydir. Bog' - bu go'zal daraxtlar va butalari bo'lgan yashil maydon. U erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin."
                                    : localStorage.getItem("lang") === "rus" ? "Сад гостиницы – это уютное и красивое место, где гости могут отдохнуть от городской суеты и насладиться природой. Сад представляет собой зеленую зону с живописными деревьями и кустарниками, где посетители могут почитать книги или поработать на свежем и чистом воздухе‌" :
                                        "The hotel's garden is a peaceful and beautiful retreat from the city noise, where guests can relax and enjoy nature. This green area is adorned with beautiful trees and shrubs, offering visitors a serene space to read a book or work in the fresh air."}
                            </p>
                        </div>

                    </div>
                    <div className={"row col-md-12 mt-5"}>
                        <div className={"col-md-7"}>
                            <h3 className={"text-white"}>
                                {localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Kонференц-зал" : "Conference-hall"}</h3>
                            <p className={"text-white playfair me-3 p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'dira oladigan  va konferentsiyalar uchun mo'ljallangan, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interaktiv doska bilan jihozlangan."
                                    : localStorage.getItem("lang") === "rus" ? "Просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий. Зал оснащенный собственным гардеробом, способен вместить до 50 человек и оборудован  всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеооборудованием, микрофонами, интерактивной доской и т.д."
                                        : "Our spacious and comfortable conference hall can accommodate up to 50 people and is equipped with all the necessary equipment for conferences, seminars, presentations, and other business meetings, including a projector, screen, audio and video equipment, microphones, and an interactive whiteboard."}</p>
                        </div>
                        <div className={"col-md-5 "}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <img src={hall} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
                                <img src={hall1} className={"me-2"} style={{width: "50%", height: "28vh"}} alt=""/>
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
                                    <img src={fam} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-60vh"}>
                                    <img src={fam1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Oilaviy" : localStorage.getItem("lang") === "rus" ? "Cемейный" : "Family"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Oilaviy xona - asosiy joylar soni: 3 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich. Qulayliklar: rasmlar, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Dush barcha zarur bir martalik gigiena vositalari bilan. Xonaning maydoni 25 kv.m. Kiyimlarni parvarishi: shkaf va ilmoqlar. Bitta ikki kishilik va bitta bir kishilik karavotli qulay xona. Xonada qulay zamonaviy mebellar, shuningdek stol bilan jihozlangan ish maydoni mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Такой номер идеально подойдет для семей с детьми, которые любят спать вместе с родителями и где они могут разместиться в комфорте и без лишнего напряжения."
                                        : "Our Family room features three main beds and offers free Wi-Fi and a telephone. It's equipped with electronics like air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress available upon request. The room covers an area of 25 sq.m and offers ample clothes storage with a wardrobe and hangers. It includes one double and one single bed, comfortable modern furniture, and a well-organized workspace with a desk."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={luxmedia} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={luxmedia1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Lyuks" : localStorage.getItem("lang") === "rus" ? "Полулюкс" : "Lux"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                <p className={"text-white tex-start"}>
                                    {localStorage.getItem("lang") === "uzb" ? "Double Deluxe-dagi asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner, televizor va muzlatgich. Qulayliklar: rasmlar, anatomic matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Dush barcha zarur bir martalik gigiena vositalari bilan. Xonaning maydoni 30 kv.m. Mebel: stol, stul, oyna va divan. Ochiq ko'ngilochar maydon va shahar manzarasi. Oziq-ovqat va ichimliklar, choy va shakar. Vannada dush, yuz sochiqlari, shuningdek oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol va kiyim ilgich mavjud."
                                        : localStorage.getItem("lang") === "rus" ? "Максимально уютный и роскошный номер с современным дизайном, одной двуспальной кроватью и шикарным диваном. Организовано рабочее пространство с письменным столом и стулом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Данный номер отлично подойдет для любителей большого пространства и наиболее комфортабельного размещения. Идеально подойдет как для семейной пары, так и для путешественников любящих побаловать себя."
                                            : "The Lux room offers two main beds in the Double Deluxe category, with free Wi-Fi and a telephone. It includes electronics such as air conditioning, a TV, and a refrigerator. Amenities feature paintings, anatomical mattresses, and an additional mattress upon request. The room spans an area of 30 sq.m. and is furnished with a table, chair, mirror, and sofa. Guests can also enjoy an outdoor entertainment area with city views. Complimentary food and drinks, tea, and sugar are provided. The bathroom is equipped with a shower cabin, face and foot towels, essential disposable hygiene products, a mirror, an iron, and a clothes hanger."}
                                </p>
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white "}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={singlemed} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={singlemed1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Bir kishilik" : localStorage.getItem("lang") === "rus" ? "Одноместный" : "Single"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Bir kishilik xonadagi asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich. Qulayliklar: rasmlar, anatomic matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Barcha zarur bir martalik gigiena vositalari bilan dush.  Xonaning maydoni - 12 kv.m. Mebel stoli, deraza yonidagi stul va karavot, shahar manzarasi bilan. Oziq-ovqat va ichimlik suvi, choy va shakar. Vannada dush, yuz sochiqlari, shuningdek oyoq sochiqlari, bir martalik gigiena vositalari, oyna, dazmol va kiyim ilgich mavjud."
                                    : localStorage.getItem("lang") === "rus" ?
                                        "Комфортабельный однокомнатный номер с современным дизайном, состоящий из прихожей, ванной и спальной комнаты. В номере удобная современная мебель,  одна кровать (100*200), а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для путешественников, которые любят быть наедине с собой и не нуждаются в дополнительном пространстве. "
                                        : "The Single room accommodates two main beds and offers free Wi-Fi and a telephone. It includes electronics such as air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 12 sq.m. and features furniture like a sofa, an armchair by the window, and a bed with a city view. Complimentary food and drinking water, tea, and sugar are available. The bathroom is equipped with a shower stall, bath towels, face and foot towels, disposable hygiene products, and clothes hangers for clothing care."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={twin} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={twin1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Egizak" : localStorage.getItem("lang") === "rus" ? "Двухместный" : "Twin"}</h3>
                            <p className={"text-white  p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Egizak xonada asosiy joylar soni: 2 ta. Bepul Wi-Fi va telefon. Elektron: konditsioner va xolodilnik mavjud. Qulayliklar : rasmlari, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Xona hajmi 20 kv.m. Mebel: stol, stul, karavot, ko'ngilochar televideniya, tashqi hudud va shahar ko'rinishi sizga manzur. Oziq-ovqat va ichimlik suvi, choy va shakar ham bor. Hammom da dush kabinasi, yuz va oyoq sochiqlari, bir marta ishlatiladigan gigiena vositalari, kiyimlarni parvarish qilish va shkaf ilgichlari mavjud."
                                    : localStorage.getItem("lang") === "rus" ? "Уютный двухместный номер, с современным дизайном и двумя односпальными кроватями, в котором созданы все условия для работы и отдыха. В номере удобная современная мебель, одна кровать (100*200), а также организованное рабочее пространство с письменным столом. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для друзей, коллег или родственников."
                                        : "The Twin room features two main beds and provides free Wi-Fi and a telephone. It's equipped with air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 20 sq.m. and includes furniture like a table, chair, and mirror. Guests can enjoy an outdoor entertainment area with city views. Complimentary food and drinking water, tea, and sugar are provided. The bathroom features a shower, face and foot towels, disposable hygiene products, and clothes hangers."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={trip} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={trip1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Uchlik" : localStorage.getItem("lang") === "rus" ? "Трёхместный" : "Triple"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Uchlik xonasida  asosiy joylar soni: 3 ta. Bepul Wi-Fi va telefon. Elektronika: konditsioner va muzlatgich mavjud. Qulayliklar : rasmlar, anatomik matraslar, qo'shimcha matras (sizning so'rovingiz bo'yicha). Xona kattaligi - 25 kv.m. Mebel: stol, stul, oyna, karavot yonidagi stoli bilan. Ko'ngil ochar  TV, tashqi hudud, shahar manzarasi sizga manzur. Oziq-ovqat va ichimliklar, ichimlik suvi, choy va shakar ham bor. Kiyim parvarishlash uchun shkaf va ilgichlar bor. Zamonaviy va qulay mebel va panoramali derazalar bilan jihozlangan ushbu yorug' xonaning derazasi go'zal shaharni ko'rsatib turadi."
                                    : localStorage.getItem("lang") === "rus" ? "В окно этого светлого номера оснащенного современной удобной мебелью и панорамными окнами, открывается вид на прекрасный город. Современный дизайн создает уют, а удобная мебель и письменный стол обеспечат вам комфортный отдых и работу. В номере есть всё необходимое для комфортного проживания: бесплатный Wi-Fi, кондиционер, холодильник, смарт-телевизор, письменный стол, шкаф с зеркалом, тумбочки, а также средства личной гигиены, постельное бельё, а также приборы для чая. Отлично подойдет для размещения семьи путешествующей с ребенком, а также друзей, коллег и родственников."
                                        : "The Triple room offers three main beds and provides free Wi-Fi and a telephone. It's equipped with air conditioning and a refrigerator. Amenities include paintings, anatomical mattresses, and an additional mattress upon request. The room covers an area of 25 sq.m. and includes furniture such as a table, chair, mirror, and bedside table. The bathroom features a shower, face and foot towels, disposable hygiene products, and clothes hangers."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={recep} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={recep1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Qabulxona" : localStorage.getItem("lang") === "rus" ? "Администрация" : "Reception"}</h3>
                            <p className={"text-white p-pas playfair "}>
                                {localStorage.getItem("lang") === "uzb" ? "Qulay va unutilmas manzil sari birinchi qadam. Sizga yordam berishga tayyor, mijozlarga xizmat ko'rsatish bo'yicha keng tajribaga ega samimiy xodimlarimiz sizning xizamatingizda. Biz sizning turar joyingizni qulay qilish uchun 24/7 ishlaymiz."
                                    : localStorage.getItem("lang") === "rus" ? "Наш дружелюбный персонал готов вас встретить в любое время суток и ответить на все вас интересующие вопросы. В ресепшене расположены удобный диван с креслами, кондиционер, красивые цветы и смарт телевизор для вашего комфортного ожидания такси. "
                                        : "Our friendly staff, with extensive customer service experience, is ready to assist you as you take your first step towards a comfortable and memorable stay. We operate 24/7 to ensure your stay is as comfortable as possible."}</p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={rest} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={rest1} style={{width: '100%'}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Restoran     " : localStorage.getItem("lang") === "rus" ? "Ресторан" : "Restaurant"}</h3>
                            <p className={"text-white p-pas playfair "}>
                                {localStorage.getItem("lang") === "uzb" ? "Hashamatli va qulay restoran - tashrif buyuruvchilar mazali taomlardan bahramand bo'lishlari mumkin bo'lgan joy. Va devor o'simliklari restoranni o'ziga xos hid bilan to'ldiradi va shu bilan tashrif buyuruvchilar uchun qulay yashash uchun maxsus muhit yaratadi. Har kuni soat 7:00 dan 10:00 gacha bizning hashamatli restoranimizda nafis va mazali nonushtadan bahramand bo'lishingiz mumkin."
                                    : localStorage.getItem("lang") === "rus" ? "Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами от нашего шеф-повара. Настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей"
                                        : "Our luxurious and cozy restaurant is the perfect place to savor delicious dishes. Live plants on the walls infuse the restaurant with a delightful aroma, creating a unique atmosphere for a comfortable dining experience. Guests can enjoy an exquisite breakfast every day from 7:00 to 10:00 in our luxurious restaurant."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 w-100"}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={gar} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={gar1} style={{width: '100%'}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Сад" : "Garden"}</h3>
                            <p className={"text-white  p-pas"}>
                                {localStorage.getItem("lang") === "uzb" ? "Mehmonxona bog'i - mehmonlar shahar shovqinidan dam olishlari va tabiat qo'ynidan bahramand bo'lishlari mumkin bo'lgan shinam va go'zal joydir. Bog' - bu go'zal daraxtlar va butalari bo'lgan yashil maydon. U erda tashrif buyuruvchilar kitob o'qishlari yoki toza havoda ishlashlari mumkin."
                                    : localStorage.getItem("lang") === "rus" ? "Сад гостиницы – это уютное и красивое место, где гости могут отдохнуть от городской суеты и насладиться природой. Сад представляет собой зеленую зону с живописными деревьями и кустарниками, где посетители могут почитать книги или поработать на свежем и чистом воздухе‌" :
                                        "The hotel's garden is a peaceful and beautiful retreat from the city noise, where guests can relax and enjoy nature. This green area is adorned with beautiful trees and shrubs, offering visitors a serene space to read a book or work in the fresh air."}
                            </p>
                        </div>
                    </div>
                    <hr className={"text-white"}/>
                    <div className={"col-12 "}>
                        <div className={"col-12"} style={{height: "auto"}}>
                            <Carousel responsive={responsive}>
                                <div className={"h-auto"}>
                                    <img src={hallmed} style={{width: "100%"}} alt=""/>
                                </div>
                                <div className={"h-auto"}>
                                    <img src={hallmed1} style={{width: "100%"}} alt=""/>
                                </div>
                            </Carousel>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <h3 className={"text-white text-center mb-4"}>
                                {localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Kонференц-зал" : "Conference-hall"}</h3>
                            <p className={"text-white p-pas playfair"}>
                                {localStorage.getItem("lang") === "uzb" ? "Turli tadbirlar uchun mo'ljallangan keng va qulay xona. O'zining shkafi bilan jihozlangan zal 50 kishigacha sig'dira oladigan  va konferentsiyalar uchun mo'ljallangan, seminarlar, taqdimotlar va boshqa ish uchrashuvlari uchun barcha zarur jihozlar: proyektor, ekran, audio va video jihozlar, mikrofonlar, interaktiv doska bilan jihozlangan."
                                    : localStorage.getItem("lang") === "rus" ? "Просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий. Зал оснащенный собственным гардеробом, способен вместить до 50 человек и оборудован  всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеооборудованием, микрофонами, интерактивной доской и т.д."
                                        : "Our spacious and comfortable conference hall can accommodate up to 50 people and is equipped with all the necessary equipment for conferences, seminars, presentations, and other business meetings, including a projector, screen, audio and video equipment, microphones, and an interactive whiteboard."}</p>
                        </div>
                    </div>

                    <hr className={"text-white"}/>
                </div>
            </div>
        </div>
    )
}