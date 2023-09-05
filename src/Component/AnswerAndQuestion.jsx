import question from '../assets/AskQuestion/question.png'
import question1 from '../assets/AskQuestion/question4..png'
import question2 from '../assets/AskQuestion/question2.png'
import question3 from '../assets/AskQuestion/question3.png'
export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez-tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Часто задаваемыйе вопросы" : "FAQ"}</h3>
                <div className={"row col-lg-8 answers"}>
                    <div className={"col-md-6 mb-2"}>
                        <img src={question}  className={"panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={question1} className={"w-100 panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={question2} className={"w-100 panorama"}  style={{height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6"}>
                        <img src={question3} className={"w-100 panorama"} style={{height:"27vh"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}