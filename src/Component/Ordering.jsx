import {useState} from "react";
import toast from "react-hot-toast";
import {Order} from "../Service/service.js";

export const Ordering = () => {
    const [older, setOlder] = useState(null)
    const [young, setYoung] = useState(null)
    const [number, setNumber] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [going_time, setGoing_time]= useState('')
    const [come_time, setCome_time] = useState('')
    const date = new Date().getDate()

    const ordering = async () => {
        if (come_time.substring(8,10) <= date.toString()){
            return toast.error(localStorage.getItem("lang") === "uzb" ? "Siz faqat kelish sanasiga bugunki kun yoki keyingi sanalarni kiritishingiz mumkin. Oldingi kunlarni emas" : localStorage.getItem("lang") === "rus" ? "В дату прибытия можно ввести только сегодняшнюю дату или будущие даты. Не в предыдущие дни" : "You can only enter today's date or future dates in the arrival date. Not in previous days", {duration:5000})
        }
        if (number === null){
            return toast.error("Honalar soni kiritilnmadi")
        }
        if (young === null){
            return toast.error("Bolalar soni kiritilinmadi. Agar yosh bolalar bo'lmasi maydonda 0 raqamini qoldiring", {duration:6000})
        }
        if (older === null){
            return toast.error("Kattalar soni kiritilinmadi. Agar kattalar bo'lmasa maydonda 0 raqamini qoldiring", {duration:6000})
        }
        if (phoneNumber.length === 0){
            return toast.error("Telefon raqamingizni kiritishingiz zarur", {duration:4000})
        }
        const data = {
            phoneNumber, going_time, come_time, older,child:young,rooms_size:number
        }
        await Order(data)
    }
    return (
        <div id={"order"}>
            <div className={"container mt-5 shadow-lg mb-5"} style={{border:"1px solid #ffc107"}}>
                <div className={"ordering d-flex flex-column align-items-center justify-content-center"}>
                    <h3 className={"text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Xonani bron qilish" : localStorage.getItem("lang") === "rus" ? "Бронирование номера" : "Booking a room"}</h3>
                    <div className={"row col-md-12 row-cols-1  "}>
                        <div className={"col-md-4"}>
                            <form>
                                <small className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "telefon raqam" : localStorage.getItem("lang") === "rus" ? "номер телефона" : "phone number"}</small>
                                <input type={"text"} value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)}
                                       className={"form-phone rounded-0 p-1 text-light"} placeholder={'+998 (95) 146 40 05'}
                                       required/>
                                    <div className={"row col-12 g-1"}>
                                    <button type={"button"}
                                            onClick={older > 0 ? () => setOlder(older - 1) : () => setOlder(older)}
                                            className={"bg-transparent p-0 border-0 col-2"}><p className={"text-white "}
                                                                                               style={{
                                                                                                   fontSize: "20px",
                                                                                                   float: "left"
                                                                                               }}>-</p></button>
                                    <input type={"number"} className={"text-white text-center bg-transparent border-0 m-0 p-0 col-8"} placeholder={localStorage.getItem("lang") === "uzb" ? "Kattalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Взрослых" : "Number of adults"} value={older} onChange={e => setOlder(e.target.value)}/>
                                    <button type={"button"} onClick={() => setOlder(older + 1)}
                                            className={'col-2 bg-transparent border-0'}><p
                                        className={"text-white "}>+</p></button>
                                </div>
                            </form>
                        </div>
                        <div className={"col-md-4"}>
                            <form>
                                <small className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "kelish sanasi" : localStorage.getItem("lang") === "rus" ? "Дата заезда" : "arrival date"}</small>
                                <input type="date" id={"dateV"} name={"dateV"}
                                       className="form-date p-1  text-light"
                                       maxLength={10}
                                       onChange={e => setCome_time(e.target.value)}
                                />
                                <div className={"row col-12 g-1"}>
                                    <button type={"button"}
                                            onClick={young > "0" ? () => setYoung( young - 1) : () => setYoung(young)}
                                            className={"bg-transparent p-0 border-0 col-2"}><p className={"text-white "}
                                                                                               style={{
                                                                                                   fontSize: "20px",
                                                                                                   float: "left"
                                                                                               }}>-</p></button>
                                    <input type={"number"} className={"text-white text-center bg-transparent border-0 m-0 p-0 col-8"} placeholder={localStorage.getItem("lang") === "uzb" ? "Kichkinlar sonni" : localStorage.getItem("lang") === "rus" ? "Кол-во Детей" : "Number of Children"} value={young}
                                           onChange={e => setYoung(e.target.value)}/>
                                    <button type={"button"} onClick={() => setYoung(young + 1)}
                                            className={'col-2 bg-transparent border-0'}><p
                                        className={"text-white "}>+</p></button>
                                </div>
                            </form>
                        </div>
                        <div className={"col-md-4"}>
                            <form>
                                <small className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "jo'nab ketish sanasi" : localStorage.getItem("lang") === "rus" ? "Дата выезда" : "date of departure"}</small>
                                <input type="date" id={"dateC"} name={"dateC"}
                                       className="form-date p-1  text-white"
                                       placeholder={"Дата выезда"}
                                        value={going_time}
                                       onChange={e => setGoing_time(e.target.value)}
                                />
                                <div className={"row col-12 g-1"}>
                                    <button type={"button"}
                                            onClick={number > 0 ? () => setNumber(number - 1) : () => setNumber(number)}
                                            className={"bg-transparent p-0 border-0 col-2"}><p className={"text-white "}
                                                                                               style={{
                                                                                                   fontSize: "20px",
                                                                                                   float: "left"
                                                                                               }}>-</p></button>
                                    <input type={"number"} className={"text-white text-center bg-transparent border-0 m-0 p-0 col-8"} value={number}
                                           placeholder={localStorage.getItem("lang") === "uzb" ? "Xonalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Номеров" : "Number of rooms"}
                                           onChange={e => setNumber(e.target.value)}/>
                                    <button type={"button"} onClick={() => setNumber( number + 1)}
                                            className={'col-2 bg-transparent border-0'}><p
                                        className={"text-white "}>+</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type={'button'} onClick={() => ordering()} className={number === null || young === null || older === null || going_time.length === 0 || come_time.length === 0 ? "btn disabled text-light  mt-4" : "btn btn-lg btn-warning rounded-0 mt-4" }>{localStorage.getItem("lang") === "uzb" ? "Buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронироват" : "Booking"}</button>
                </div>
            </div>
        </div>
    )
}