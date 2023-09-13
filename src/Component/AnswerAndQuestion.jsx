import question from '../assets/AskQuestion/1.jpg'
import question1 from '../assets/AskQuestion/2.jpg'
import question2 from '../assets/AskQuestion/3.jpg'
import question3 from '../assets/AskQuestion/4.jpg'
import questioneng from '../assets/AskQuestion/5.jpg'
import questioneng1 from '../assets/AskQuestion/6.jpg'
import questioneng2 from '../assets/AskQuestion/7.jpg'
import questioneng3 from '../assets/AskQuestion/8.jpg'
import questionuz from '../assets/AskQuestion/9.jpg'
import questionuz1 from '../assets/AskQuestion/10.jpg'
import questionuz2 from '../assets/AskQuestion/11.jpg'
import questionuz3 from '../assets/AskQuestion/12.jpg'

export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"answer container "} style={{marginBottom:"150px", marginTop: "150px"}}>
                <h3 className={"text-white text-center playfair mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez-tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Часто задаваемыйе вопросы" : "FAQ"}</h3>
                <div className={"row col-lg-10 answers"}>
                    <div className={"col-lg-6 mb-4 p-0"}>
                        <img   src={localStorage.getItem("lang") === "rus" ?  question : localStorage.getItem("lang") === "uzb" ?  questionuz : questioneng}  className={"panorama"}  alt=""/>
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