import rasm from '../assets/img/bedroom.png'
import lyuks from '../assets/img/Lyuks/e.jpg'
import twin from '../assets/img/tvin/tvin1.jpg'
import single from '../assets/img/single/e.jpg'
export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Xonalardan panaromatik rasmlar" : localStorage.getItem("lang") === "rus" ? "Панорамные фотографии из номеров" : "Panoramic pictures from the rooms"}</h3>
                <div className={"row col-md-8 answers"}>
                    <div className={"col-md-6 mb-2"}>
                        <img src={lyuks} className={"panorama"} style={{width:"100%"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={twin} className={"w-100 panorama"} style={{width:"100%"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={single} className={"w-100 panorama"} alt=""/>
                    </div>
                    <div className={"col-md-6"}>
                        <img src={rasm} className={"w-100 panorama"} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}