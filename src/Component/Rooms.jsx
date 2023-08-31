import family1 from '../assets/img/Family/IMG_0358.jpg'
import family2 from '../assets/img/Family/IMG_0360.jpg'
import family3 from '../assets/img/Family/IMG_6645 (1).jpg'
import lyuks from '../assets/img/Lyuks/lyuks.jpg'
import lyuks1 from '../assets/img/Lyuks/IMG_6649.jpg'
import lyuks2 from '../assets/img/Lyuks/IMG_6645 (1).jpg'
import hall from '../assets/img/hall/IMG_0323.jpg'
import hall1 from '../assets/img/hall/IMG_0321.jpg'
import hall2 from '../assets/img/hall/IMG_6597.jpg'
import garden from '../assets/img/bog/bog.jpg'
import garden1 from '../assets/img/bog/bog1.jpg'
import garden2 from '../assets/img/bog/bog2.jpg'
import single from '../assets/img/single/single.jpg'
import single1 from '../assets/img/single/single1.jpg'
import single2 from '../assets/img/single/single2.jpg'
import tvin from '../assets/img/tvin/tvin.jpg'
import tvin1 from '../assets/img/tvin/tvin1.jpg'
import tvin2 from '../assets/img/tvin/tvin2.jpg'
import triple from '../assets/img/triple/triple.jpg'
import triple1 from '../assets/img/triple/triple1.jpg'
import triple2 from '../assets/img/triple/triple2.jpg'
import restaurant from '../assets/img/Restaurant/IMG_0309.jpg'
import restaurant1 from '../assets/img/Restaurant/IMG_0308.jpg'
import restaurant2 from '../assets/img/Restaurant/IMG_0312.jpg'
import receptions from '../assets/img/Reception/reception.jpg'
import receptions1 from '../assets/img/Reception/reception1.jpg'
import receptions2 from '../assets/img/Reception/reception2.jpg'

export const Rooms = () => {

    return (
        <div id={"about_rooms"}>
            <h3 className={"text-white text-center mb-5"} style={{marginTop:"150px"}}>{localStorage.getItem("lang") === "uzb" ? "Bizning honalar" : localStorage.getItem("lang") === "rus" ? "Наши номера" : "Our rooms"}</h3>
            <div className={"container"}>
                <div className={"row col-md-12 mb-5"}>
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Oylaviy" : localStorage.getItem("lang") === "rus" ? "Cемья" : "Family"}</h3>
                        <p className={"text-white"}>Family
                            Сон
                            количество основных мест: 3
                            Интернет и телефония
                            - бесплатный Wi-Fi
                            - телефон
                            Электроника
                            - кондиционер
                            Удобства
                            - картины
                            - холодильник
                            - анатомические матрасы
                            - дополнительный матрас (по вашему запросу)
                            - площадь номера- 25 кв.м
                            - унитаз
                            - урно
                            Уход за одеждой
                            - шкаф
                            - вешалки
                            Комфортабельный номер с одной двуспальной и одной односпальной кроватями. В номере удобная современная мебель, а также организованное рабочее пространство с письменным столом. Такой номер идеально подойдет для семей с детьми, которые любят спать вместе с родителями и где они могут разместиться в комфорте и без лишнего напряжения.
                        </p>
                    </div>
                    <div className={"col-md-7 "}>
                        <div className={"d-flex mt-5 align-items-center justify-content-center"}>
                            <img src={family1} className={"me-2"}  style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={family2} className={"me-2"} style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={family3} className={"me-3"} style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"row col-md-12 mb-5"}>
                    <div className={"col-md-7 mt-5"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={lyuks} className={"me-2 m-0"} style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={lyuks1} className={"me-2"}  style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={lyuks2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Lyuks" : localStorage.getItem("lang") === "rus" ? "Люкс" : "Luxury"}</h3>
                        <p className={"text-white"}>Double Deluxe
                            Сон
                            количество основных мест: 2
                            Интернет и телефония
                            - бесплатный Wi-Fi
                            - телефон
                            Электроника
                            - кондиционер
                            Удобства
                            - картины
                            - холодильник
                            - анатомические матрасы
                            - дополнительный матрас (по вашему запросу)
                            - площадь номера- 30 кв.м
                            Мебель
                            - письменный стол
                            - стул
                            - зеркало
                            - прикроватная тумбочка
                            - диван
                            Развлечения
                            - телевизор
                            Внешняя территория
                            - вид на город
                            Питание и напитки
                            - питьевая вода
                            - чай
                            - сахар
                            Ванная комната
                            - душевая кабина
                            - банные, лицевые полотенца, а также полотенце для ног
                            - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)
                            - зеркало
                            - унитаз
                            - урно
                            Уход за одеждой
                            - шкаф
                            - вешалки
                        </p>
                    </div>

                </div>
                <div className={"row col-md-12"}>
                    <div className={"col-md-5 "}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Yig'ilishlar zali" : localStorage.getItem("lang") === "rus" ? "Kонференц-зал" : "Conference-hall"}</h3>
                        <p className={"text-white me-3"}>{localStorage.getItem("lang") === "uzb" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."
                            : localStorage.getItem("lang") === "rus" ? "просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий. \n" +
                                "Зал оснащенный собственным гардеробом, способен вместить до 50 человек и оборудован  всем необходимым оборудованием для проведения конференций, семинаров, презентаций и других деловых встреч: проектором, экраном, аудио- и видеооборудованием, микрофонами, интерактивной доской и т.д."
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."}</p>
                    </div>
                    <div className={"col-md-7 mt-2"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={hall} className={"me-2"}  style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={hall1} className={"me-2"} style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={hall2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"row col-md-12 mt-5"}>
                    <div className={"col-md-7"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={garden} className={"me-2 m-0"} style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={garden1} className={"me-2"}  style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={garden2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bog'" : localStorage.getItem("lang") === "rus" ? "Cад" : "Garden"}</h3>
                        <p className={"text-white"}>
                            Сад гостиницы – это уютное и красивое место, где гости могут отдохнуть от городской суеты и насладиться природой.
                            Сад представляет собой зеленую зону с живописными деревьями и кустарниками, где посетители могут почитать книги или поработать на свежем и чистом воздухе‌‌
                        </p>
                    </div>
                </div>
                <div className="row col-md-12 mt-5">
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Single" : localStorage.getItem("lang") === "rus" ? "Single" : "Single"}</h3>
                        <p className={"text-white me-3"}>{localStorage.getItem("lang") === "uzb" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."
                            : localStorage.getItem("lang") === "rus" ? "просторное и комфортабельное помещение, предназначенное для проведения различных мероприятий. \n" +
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
                                "- зеркало\n" +
                                "- унитаз\n" +
                                "- урно\n" +
                                "Уход за одеждой\n" +
                                "- шкаф\n" +
                                "- вешалки\n"
                                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."}</p>
                    </div>
                    <div className={"col-md-7 mt-5"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={single} className={"me-2"}  style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={single1} className={"me-2"} style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={single2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"row col-md-12 mt-5"}>
                    <div className={"col-md-7 mt-5"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={tvin} className={"me-2 m-0"} style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={tvin1} className={"me-2"}  style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={tvin2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Twin" : localStorage.getItem("lang") === "rus" ? "Twin" : "Twin"}</h3>
                        <p className={"text-white"}>Twin
                            Сон
                            количество основных мест: 2
                            Интернет и телефония
                            - бесплатный Wi-Fi
                            - телефон
                            Электроника
                            - кондиционер
                            Удобства
                            - картины
                            - холодильник
                            - анатомические матрасы
                            - дополнительный матрас (по вашему запросу)
                            - площадь номера- 20 кв.м
                            Мебель
                            - письменный стол
                            - стул
                            - зеркало
                            - прикроватная тумбочка
                            Развлечения
                            - телевизор
                            Внешняя территория
                            - вид на город
                            Питание и напитки
                            - питьевая вода
                            - чай
                            - сахар
                            Ванная комната
                            - душевая кабина
                            - банные, лицевые полотенца, а также полотенце для ног
                            - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло)
                            - зеркало
                            - унитаз
                            - урно
                            Уход за одеждой
                            - шкаф
                            - вешалки
                           </p>
                    </div>
                </div>
                <div className="row col-md-12 mt-5">
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Triple" : localStorage.getItem("lang") === "rus" ? "Triple" : "Triple"}</h3>
                        <p className={"text-white me-3"}>{localStorage.getItem("lang") === "uzb" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."
                            : localStorage.getItem("lang") === "rus" ? "Triple Сон количество основных мест: 3 Интернет и телефония - бесплатный Wi-Fi - телефонЭлектроника - кондиционерУдобства - картины - холодильник - анатомические матрасы - дополнительный матрас (по вашему запросу) - площадь номера- 25 кв.мМебель - письменный стол - стул - зеркало - прикроватная тумбочкаРазвлечения - телевизорВнешняя территория - вид на городПитание и напитки - питьевая вода - чай - сахарВанная комната - душевая кабина - банные, лицевые полотенца, а также полотенце для ног - одноразовые средства гигиены (зубная паста, щетка, гель для душа, шампунь, мыло) - зеркало - унитаз - урноУход за одеждой - шкаф - вешалки В окно этого светлого номера оснащенного современной удобной мебелью и панорамными окнами, открывается вид на прекрасный город. "
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."}</p>
                    </div>
                    <div className={"col-md-7 mt-5"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={triple} className={"me-2"}  style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={triple1} className={"me-2"} style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={triple2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"row col-md-12 mt-5"}>
                    <div className={"col-md-7"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={restaurant} className={"me-2 m-0"} style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={restaurant1} className={"me-2"}  style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={restaurant2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Restaurant" : localStorage.getItem("lang") === "rus" ? "Restaurant" : "Restaurant"}</h3>
                        <p className={"text-white"}>Роскошный и уютный ресторан-это место где посетители могут насладиться изысканными блюдами.
                            А настенные живые растения наполняют ресторан особым ароматом и тем самым создают особую атмосферу для комфортного отдыха посетителей
                        </p>
                    </div>
                </div>
                <div className="row col-md-12 mt-5">
                    <div className={"col-md-5"}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Reception" : localStorage.getItem("lang") === "rus" ? "Reception" : "Reception"}</h3>
                        <p className={"text-white me-3"}>{localStorage.getItem("lang") === "uzb" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."
                            : localStorage.getItem("lang") === "rus" ? "Новая гостиница Шош Модерн находится в пешей доступности от аэропорта и вокзала.\n" +
                                " Современный дизайн и большой стеклянный фасад в сочетании с дневным светом создают светлую и яркую атмосферу. \n" +
                                "В ресепшене расположен удобный диван и смарт телевизор для того, чтобы гости могли отдохнуть или дождаться своего такси. \n" +
                                "На ресепшене всегда стоят улыбчивые и вежливые администраторы, которые всегда рады вам помочь и ответить на все интересующие вас вопросы. \n" +
                                "Ежедневно с 7:00 до 10:00 вы можете насладиться изысканным и вкусным завтраком в нашем шикарном ресторане. Настенные живые растения наполняют ресторан особым ароматом и создают уютную атмосферу.  "
                                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor mollitia nam nemo non placeat quia sed soluta veritatis voluptatum."}</p>
                    </div>
                    <div className={"col-md-7 mt-5"}>
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <img src={receptions} className={"me-2"}  style={{width:"35%", height:"28vh"}} alt=""/>
                            <img src={receptions1} className={"me-2"} style={{width:"35%",  height:"28vh"}} alt=""/>
                            <img src={receptions2} className={"me-3"}  style={{width:"35%", height:"28vh"}}  alt=""/>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}