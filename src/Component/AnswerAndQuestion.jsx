import question from '../assets/AskQuestion/question.png'
import question1 from '../assets/AskQuestion/question1.png'
import question2 from '../assets/AskQuestion/question2.png'

export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez-tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Часто задаваемыйе вопросы" : "FAQ"}</h3>
                <div className={"row col-lg-8 answers"}>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ?  question : localStorage.getItem("lang") === "uzb" ? "" : ""}  className={"panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question1 : localStorage.getItem("lang") === "uzb" ? "" : ""} className={"w-100 panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question2 : localStorage.getItem("lang") === "uzb" ? '' : ""} className={"w-100 panorama"}  style={{height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6"}>
                        <img src={localStorage.getItem("lang") === "rus" ? "" : localStorage.getItem("lang") === "uzb" ? "" : ""} className={"w-100 panorama"} style={{height:"27vh"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}