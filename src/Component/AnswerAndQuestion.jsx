import question from '../assets/AskQuestion/qu.png'
import question1 from '../assets/AskQuestion/qu1.png'
import question2 from '../assets/AskQuestion/qu2.png'
import question3 from '../assets/AskQuestion/qu3.png'
import questioneng from '../assets/AskQuestion/queng.png'
import questioneng1 from '../assets/AskQuestion/queng1.png'
import questioneng2 from '../assets/AskQuestion/queng2.png'
import questioneng3 from '../assets/AskQuestion/queng3.png'
import questionuz from '../assets/AskQuestion/quuz.png'
import questionuz1 from '../assets/AskQuestion/quuz1.png'
import questionuz2 from '../assets/AskQuestion/quuz2.png'
import questionuz3 from '../assets/AskQuestion/quuz3.png'

export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px", marginTop: "150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez-tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Часто задаваемыйе вопросы" : "FAQ"}</h3>
                <div className={"row col-lg-10 answers"}>
                    <div className={"col-lg-6 mb-4 p-0"}>
                        <img src={localStorage.getItem("lang") === "rus" ?  question : localStorage.getItem("lang") === "uzb" ?  questionuz : questioneng}  className={"panorama"}  alt=""/>
                    </div>
                    <div className={"col-lg-6 mb-4 p-0"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question1 : localStorage.getItem("lang") === "uzb" ? questionuz1 : questioneng1} className={"panorama"}  alt=""/>
                    </div>
                    <div className={"col-lg-6 mb-4 p-0"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question2 : localStorage.getItem("lang") === "uzb" ? questionuz2 : questioneng2} className={"panorama"}   alt=""/>
                    </div>
                    <div className={"col-lg-6 p-0"}>
                        <img src={localStorage.getItem("lang") === "rus" ? question3 : localStorage.getItem("lang") === "uzb" ? questionuz3 : questioneng3} className={"panorama"}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}