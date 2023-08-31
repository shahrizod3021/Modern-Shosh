import {useState} from "react";
import {RequestAction} from "../Service/service.js";
import gis from '../assets/img/2gis.png'

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
    // const map = new mapgl.Map('gis', {
    //     center: [55.31878, 25.23584],
    //     zoom: 13,
    // });
    //
    // const marker = new mapgl.Marker(map, {
    //     coor dinates: [55.31878, 25.23584],
    // });
    return(
        <div id={"contact"}>
            <div className={"container mb-5"}>
                <div className={"row col-md-12"}>
                    <div className={"col-md-5 shadow-lg me-md-5 h-75"} style={{padding:"20px", borderRadius:"20px"}}>
                        <h3 className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Bog'lanish uchun" : localStorage.getItem("lang") === "rus" ? "Забронировать" : "Request"}</h3>
                        <hr className={"text-white"}/>
                        <form >
                            <label htmlFor="name" className={"text-white mt-4"}>{localStorage.getItem("lang") === "uzb" ? "Ismingiz" : localStorage.getItem("lang") === "rus" ? "Ваше имя" : "Your name"}</label>
                            <input type="text" value={name} name={"name"} id={"name"} onChange={e => setName(e.target.value)} className={"form-control text-white  border-0 mb-4"} style={{backgroundColor:"#333"}}/>
                            <label htmlFor="phoneNumber" className={"text-white"}>{localStorage.getItem("lang") === "uzb" ? "Telefon raqamingiz" : localStorage.getItem("lang") === "rus" ? "Ваш номер телефона" : "Your phone number"}</label>
                            <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}   placeholder={"+998 (_) ___ __ __"}  style={{backgroundColor:"#333"}} id={"phoneNumber"} name={"phoneNumber"} className={"text-white form-control border-0"}/>
                            <button className={"btn btn-outline-light mt-4 rounded-0"} type={"button"} onClick={() => request()}>{localStorage.getItem("lang") === "uzb" ? "Yuborish" : localStorage.getItem("lang") === "rus" ? "Отправить" : "Send"}</button>
                            <p className={"text-white mb-3 mt-4 container"}><small>{localStorage.getItem("lang") === "uzb" ? "Tez orada bizning hodimlar siz bilan bog'lanishadi" : localStorage.getItem("lang") === "rus" ? "В течении часа наши сотрудники свяжутся с вами!" : "Within an hour, our staff will contact you!"}</small></p>
                        </form>
                    </div>
                    <div className={"col-md-6 shadow-lg"} style={{padding:"20px", borderRadius:"20px"}}>
                        <div className={"d-flex flex-column"}>
                            <div className={"maps mb-3 "}>
                                <div className="mapouter me-5">
                                    <div className="gmap_canvas">
                                        <iframe
                                            src="https://maps.google.com/maps?q=shosh%20apartments&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                            id="gmap_canvas" frameBorder="0" scrolling="no"
                                            style={{width: "300px", height: "200px"}}></iframe>
                                        {/*<style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style>*/}
                                        {/*<style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style>*/}
                                      </div>
                                </div>
                                <div className={"d-flex flex-column"}>
                                    <h5 className={"text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Biz Google'da" : localStorage.getItem("lang") === "rus" ? "Мы в Google ." : "We are in Google"}</h5>
                                    <a target={"_blank"} href={"https://www.google.com/maps/place/Shosh+apartments/@41.3376502,69.3050155,14.33z/data=!4m6!3m5!1s0x38aef51605c5a48d:0xc371558773fc02c3!8m2!3d41.3329491!4d69.3138707!16s%2Fg%2F11s3793mvn?hl=ru-RU&entry=ttu"} className={"btn btn-outline-light rounded-0 mt-5"}>Открыть</a>
                                </div>
                            </div>
                            <div className={"maps mb-3"}>
                                <iframe
                                     className={"me-5"}
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa10cc9598f06092e7453b3f834ab46a5cd6e26828c0a6852be6d3a64603ba326&amp;source=constructor"
                                    width="300px" height="200px" frameBorder="0"></iframe>
                                <div className={"d-flex flex-column"}>
                                    <h5 className={"text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Biz Yandexda" : localStorage.getItem("lang") === "rus" ? "Мы в Yandex ." : "We are in Yandex"}</h5>
                                    <a target={"_blank"} href={"https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.313731%2C41.333047&mode=usermaps&source=mapframe&um=constructor%3Aa10cc9598f06092e7453b3f834ab46a5cd6e26828c0a6852be6d3a64603ba326&utm_source=mapframe&z=15"} className={"btn btn-outline-light rounded-0 mt-5"}>Открыть</a>
                                </div>
                            </div>
                            <div className={"maps mb-3"}>
                                <div id={'gis'}><a target={"_blank"} href="https://2gis.uz/tashkent/firm/70000001061261679?m=69.314119%2C41.333114%2F17.4"><img src={gis}  width={"300px"} height={"200px"} className={"me-5"} alt=""/></a> </div>
                                <div className={"d-flex flex-column"}>
                                    <h5 className={"text-white mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Biz 2GIS da" : localStorage.getItem("lang") === "rus" ? "Мы в 2GIS ." : "We are in 2GIS"}</h5>
                                    <a target={"_blank"} href={"https://2gis.uz/tashkent/firm/70000001061261679?m=69.314119%2C41.333114%2F17.4"} className={"btn btn-outline-light rounded-0 mt-5"}>Открыть</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}