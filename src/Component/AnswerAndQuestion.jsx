import question from '../assets/AskQuestion/question.png'
import question1 from '../assets/AskQuestion/question1.png'
import question2 from '../assets/AskQuestion/question2.png'
import question3 from '../assets/AskQuestion/question3.png'
import questioneng from '../assets/AskQuestion/questioneng.png'
import questioneng1 from '../assets/AskQuestion/questioneng2.png'
import questioneng2 from '../assets/AskQuestion/questioneng3.png'
import questioneng3 from '../assets/AskQuestion/questioneng4.png'
import questionuz from '../assets/AskQuestion/questionuz1.png'
import questionuz1 from '../assets/AskQuestion/questionuz.png'
import questionuz2 from '../assets/AskQuestion/questionuz.png'
import questionuz3 from '../assets/AskQuestion/questionuz.png'

export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez-tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Часто задаваемыйе вопросы" : "FAQ"}</h3>
                <div className={"row col-lg-8 answers"}>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ?  question : localStorage.getItem("lang") === "uzb" ? questionuz : questioneng}  className={"panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question1 : localStorage.getItem("lang") === "uzb" ? questionuz1 : questioneng1} className={"w-100 panorama"} style={{width:"100%", height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6 mb-2"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question2 : localStorage.getItem("lang") === "uzb" ? questionuz2 : questioneng2} className={"w-100 panorama"}  style={{height:"27vh"}} alt=""/>
                    </div>
                    <div className={"col-md-6"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question3 : localStorage.getItem("lang") === "uzb" ? questionuz3 : questioneng3} className={"w-100 panorama"} style={{height:"27vh"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}