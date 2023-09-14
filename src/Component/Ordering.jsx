import {useState} from "react";
import toast from "react-hot-toast";
import {Order} from "../Service/service.js";

export const Ordering = () => {
    const [older, setOlder] = useState(0)
    const [young, setYoung] = useState(0)
    const [number, setNumber] = useState(0)
    const [phoneNumber, setPhoneNumber] = useState('+')
    const [going_time, setGoing_time] = useState('')
    const [come_time, setCome_time] = useState('')

    const ordering = async () => {
        if (number === null) {
            return toast.error("Honalar soni kiritilnmadi")
        }
        if (young === null) {
            return toast.error("Bolalar soni kiritilinmadi. Agar yosh bolalar bo'lmasi maydonda 0 raqamini qoldiring", {duration: 6000})
        }
        if (older === null) {
            return toast.error("Kattalar soni kiritilinmadi. Agar kattalar bo'lmasa maydonda 0 raqamini qoldiring", {duration: 6000})
        }
        if (phoneNumber.length === 0) {
            return toast.error("Telefon raqamingizni kiritishingiz zarur", {duration: 4000})
        }
        const data = {
            phoneNumber, going_time, come_time, older, child: young, rooms_size: number, lang: localStorage.getItem("lang")
        }
        await Order(data)
    }
    return (
        <div id={"order"}>
            <div className={"media-order container mt-5 shadow-lg mb-5"} style={{border: "1px solid #ffc107"}}>
                <div className={"ordering"}>
                    <h3 className={"text-white mb-5 playfair"}>{localStorage.getItem("lang") === "uzb" ? "Xonani bron qilish" : localStorage.getItem("lang") === "rus" ? "Бронирование номера" : "Booking a room"}</h3>
                    <div className={"row col-lg-12 row-cols-1"}>
                        <div className={"col-md-4"}>
                            <form>
                                <div className="">
                                    <small
                                        className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "Telefon raqam" : localStorage.getItem("lang") === "rus" ? "Номер телефона" : "Phone number"}</small>
                                    <input type="text" className="form-number p-1 bg-transparent text-white"
                                           value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                                           placeholder="+ "
                                    />
                                </div>
                                <div className={"row col-12 g-1 mt-1"}>
                                    <button type={"button"}
                                            onClick={older > 0 ? () => setOlder(older - 1) : () => setOlder(older)}
                                            className={"bg-transparent p-0 border-0 col-2"}><p className={"text-white "}
                                                                                               style={{
                                                                                                   fontSize: "20px",
                                                                                                   float: "left"
                                                                                               }}>-</p></button>
                                    <input type={"number"}
                                           className={"playfair text-white text-center bg-transparent border-0 m-0 p-0 col-8"}
                                           placeholder={localStorage.getItem("lang") === "uzb" ? "Kattalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Взрослых" : "Number of adults"}
                                           value={older === 0 ? localStorage.getItem("lang") === "uzb" ? "Kattalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Взрослых" : "Number of adults" : older}
                                           onChange={e => setOlder(Number.parseInt(e.target.value))}/>
                                    <button type={"button"} onClick={() => setOlder(older + 1)}
                                            className={'col-2 bg-transparent border-0'}><p
                                        className={"text-white "}>+</p></button>
                                </div>
                            </form>
                        </div>
                        <div className={"col-md-4"}>
                            <form>
                                <small
                                    className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "Kelish sanasi" : localStorage.getItem("lang") === "rus" ? "Дата заезда" : "Arrival date"}</small>
                                <input type="date" id={"dateV"} name={"dateV"}
                                       className="form-date p-1  text-light"
                                       placeholder={"dd-mm-yyyy"}
                                       defaultValue={""}
                                       maxLength={10}
                                       value={come_time}
                                       onChange={e => setCome_time(e.target.value)}
                                />
                                <div className={"row col-12 g-1"}>
                                    <button type={"button"}
                                            onClick={young > 0 ? () => setYoung(young - 1) : () => setYoung(young)}
                                            className={"bg-transparent p-0 border-0 col-2"}><p className={"text-white "}
                                                                                               style={{
                                                                                                   fontSize: "20px",
                                                                                                   float: "left"
                                                                                               }}>-</p></button>
                                    <input type={"number"}
                                           className={"text-white playfair text-center bg-transparent border-0 m-0 p-0 col-8"}
                                           placeholder={localStorage.getItem("lang") === "uzb" ? "Kichkinalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Детей" : "Number of children"}
                                           value={young === 0 ? localStorage.getItem("lang") === "uzb" ? "Kichkinalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Детей" : "Number of children" : young}
                                           onChange={e => setYoung(Number.parseInt(e.target.value))}/>
                                    <button type={"button"} onClick={() => setYoung(young + 1)}
                                            className={'playfair col-2 bg-transparent border-0'}><p
                                        className={"text-white playfair"}>+</p></button>
                                </div>
                            </form>
                        </div>
                        <div className={"col-md-4"}>
                            <form>
                                <small
                                    className={"text-white playfair"}>{localStorage.getItem("lang") === "uzb" ? "ketish sanasi" : localStorage.getItem("lang") === "rus" ? "Дата выезда" : "Date of departure"}</small>
                                <input type="date" id={"dateC"} name={"dateC"}
                                       className="form-date p-1  text-white"
                                       placeholder={"Дата выезда"}
                                       value={going_time}
                                       onChange={e => setGoing_time(e.target.value)}
                                />
                                <div className={"row col-12 g-1"}>
                                    <button type={"button"}
                                            onClick={number > 0 ? () => setNumber(number - 1) : () => setNumber(number)}
                                            className={"bg-transparent p-0 playfair border-0 col-2"}><p
                                        className={"text-white "}
                                        style={{
                                            fontSize: "20px",
                                            float: "left"
                                        }}>-</p></button>
                                    <input type={"number"}
                                           className={"text-white playfair text-center bg-transparent border-0 m-0 p-0 col-8"}
                                           value={number === 0 ? localStorage.getItem("lang") === "uzb" ? "Xonalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Номеров" : "Number of rooms" : number}
                                           placeholder={localStorage.getItem("lang") === "uzb" ? "Xonalar soni" : localStorage.getItem("lang") === "rus" ? "Кол-во Номеров" : "Number of rooms"}
                                           onChange={e => setNumber(Number.parseInt(e.target.value))}/>
                                    <button type={"button"} onClick={() => setNumber(number + 1)}
                                            className={'col-2 bg-transparent border-0'}><p
                                        className={"text-white "}>+</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type={'button'} onClick={() => ordering()}
                            className={number === null || young === null || older === null || going_time.length === 0 || come_time.length === 0  ? "btn disabled text-light order-btn mt-4 playfair" : "playfair order-btn btn btn-lg btn-warning rounded-0 mt-4"}>{localStorage.getItem("lang") === "uzb" ? "Buyurtma qilish" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Reserve"}</button>
                </div>
            </div>
        </div>
    )
}