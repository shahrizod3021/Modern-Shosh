import {useState} from "react";
import {RequestAction} from "../Service/service.js";
import gis from '../assets/gis2.png'

export const Request =  () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const request = async () => {
        const data = {
            name, phoneNumber
        }
        await RequestAction(data)
        setName("")
        setPhoneNumber("")
    }

    return(
        <div id={"contact"}>
            <div className={"container mb-5"}>
                <div className={"row col-xl-12"}>
                    <div className={"col-xl-5 shadow-lg me-md-5"} style={{padding:"20px", borderRadius:"20px"}}>
                        <h3 className={"text-white playfair "}>{localStorage.getItem("lang") === "uzb" ? "Bog'lanish uchun" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Request"}</h3>
                        <hr className={"text-white "}/>
                        <form >
                            <label htmlFor="name" className={"text-white playfair mt-4 mb-2"}>{localStorage.getItem("lang") === "uzb" ? "Ismingiz" : localStorage.getItem("lang") === "rus" ? "Ваше имя" : "Your name"}</label>
                            <input type="text" value={name} name={"name"} id={"name"} onChange={e => setName(e.target.value)} className={"playfair form-control-lg w-100 text-white  border-0 mb-5"} style={{backgroundColor:"#333"}}/>
                            <label htmlFor="phoneNumber" className={"text-white mb-2 playfair"}>{localStorage.getItem("lang") === "uzb" ? "Telefon raqamingiz" : localStorage.getItem("lang") === "rus" ? "Ваш номер телефона" : "Your phone number"}</label>
                            <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}   placeholder={"+998 (__) ___ __ __"}  style={{backgroundColor:"#333"}} id={"phoneNumber"} name={"phoneNumber"} className={"text-white playfair form-control-lg w-100  mb-3 border-0"}/>
                            <button className={phoneNumber.length === 0 || name.length === 0 ? "btn disabled text-white playfair mt-4" : "playfair btn btn-outline-light mt-4 rounded-0"} type={"button"} onClick={() => request()}>{localStorage.getItem("lang") === "uzb" ? "Yuborish" : localStorage.getItem("lang") === "rus" ? "Отправить" : "Send"}</button>
                            <p className={"text-white mb-3 mt-4 container playfair"}><small>{localStorage.getItem("lang") === "uzb" ? "Tez orada bizning hodimlar siz bilan bog'lanishadi!" : localStorage.getItem("lang") === "rus" ? "В течении часа наши сотрудники свяжутся с Вами!" : "Within an hour, our staff will contact you!"}</small></p>
                        </form>
                    </div>
                    <div className={"col-xl-6 media-width shadow-lg mb-0"} style={{padding:"10px", borderRadius:"20px"}}>
                        <div className={"d-flex flex-column"}>
                            <div className={"maps mb-1"}>
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe
                                                    src="https://maps.google.com/maps?q=41.261600,69.231141&amp;ll=41.261600,69.231141&amp;z=16&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                                    id="gmap_canvas" frameBorder="0" scrolling="no"
                                                    className={"map"}></iframe>
                                                </div>
                                        </div>
                                      </div>
                                </div>
                                <div className={"d-flex flex-column"}>
                                    <h5 className={"playfair text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Biz Google'da" : localStorage.getItem("lang") === "rus" ? "Мы в Google" : "We are in Google"}</h5>
                                    <a target={"_blank"} href={"https://www.google.com/maps/place/Hotel+Shosh+Modern/@41.2615658,69.2309568,18.63z/data=!4m20!1m10!3m9!1s0x38ae8ba9cd7471e5:0x51dc5c15367e2b88!2sHotel+Shosh+Modern!5m2!4m1!1i2!8m2!3d41.2615301!4d69.2311691!16s%2Fg%2F11vcmw4szs!3m8!1s0x38ae8ba9cd7471e5:0x51dc5c15367e2b88!5m2!4m1!1i2!8m2!3d41.2615301!4d69.2311691!16s%2Fg%2F11vcmw4szs?hl=ru-US&entry=ttu"} className={"btn btn-outline-light playfair rounded-0 mt-5"}>{localStorage.getItem("lang") === "uzb" ? "Ko'rish" : localStorage.getItem("lang") === "rus" ? "Открыть" : "Open"}</a>
                                </div>
                            </div>
                            <hr className={"text-white"}/>
                            <div className={"maps mt-3"}>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b81bf5b7b5eb8794386e3bf2807aea69434ab58f5be5729a3b9417f51c38be7&amp;source=constructor"
                                    className={"map"} frameBorder="0"></iframe>
                                <div className={"d-flex flex-column"}>
                                    <h5 className={"playfair text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Biz Yandexda" : localStorage.getItem("lang") === "rus" ? "Мы в Yandex " : "We are in Yandex"}</h5>
                                    <a target={"_blank"} href={"https://yandex.uz/maps/org/shosh_modern/153743864084/?from=mapframe&ll=69.230976%2C41.261361&mode=search&sctx=ZAAAAAgBEAAaKAoSCUhRZ%2B4hVFFAEZUNayqLqkRAEhIJJGO1%2BX%2FVgT8Rlpf8T%2F7ubT8iBgABAgMEBSgKOABApJ8GSAFiF2V4cF9pZD1wcnVubmVkX2Zvcm11bGFzagJ1ep0BzcxMPaABAKgBAL0BhegIMMIBBpTi5N68BOoBAPIBAPgBAIICEkhvdGVsIHNob3NoIG1vZGVybooCAJICBTEwMzM1mgIMZGVza3RvcC1tYXBz&sll=69.230976%2C41.261361&source=mapframe&sspn=0.003464%2C0.001455&text=Hotel%20shosh%20modern&um=constructor%3Aa10cc9598f06092e7453b3f834ab46a5cd6e26828c0a6852be6d3a64603ba326&utm_source=mapframe&z=18.45"} className={"btn btn-outline-light rounded-0 playfair mt-5"}>{localStorage.getItem("lang") === "uzb" ? "Ko'rish" : localStorage.getItem("lang") === "rus" ? "Открыть" : "Open"}</a>
                                </div>
                            </div>
                            <hr className={"text-white mb-1"}/>
                            <div className={"maps mt-3"}>
                                <div id={'gis'}><a target={"_blank"} href="https://2gis.uz/tashkent/firm/70000001061261679?m=69.314119%2C41.333114%2F17.4"><img src={gis}  className={"map gis"} alt=""/></a> </div>
                                <div className={"d-flex flex-column gis-text"}>
                                    <h5 className={"text-white playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Biz 2GIS da" : localStorage.getItem("lang") === "rus" ? "Мы в 2GIS " : "We are in 2GIS"}</h5>
                                    <a target={"_blank"} href={"https://2gis.uz/tashkent/firm/70000001078621031/69.231427%2C41.261741?m=69.231795%2C41.261542%2F19.14"} className={"btn playfair btn-outline-light rounded-0 mt-5"}>{localStorage.getItem("lang") === "uzb" ? "Ko'rish" : localStorage.getItem("lang") === "rus" ? "Открыть" : "Open"}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}