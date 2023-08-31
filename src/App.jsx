import {Navbar} from "./Component/Navbar.jsx";
import {Basic} from "./Component/Basic.jsx";
import {Ordering} from "./Component/Ordering.jsx";
import {Gallarey} from "./Component/Gallarey.jsx";
import {Rooms} from "./Component/Rooms.jsx";
import {LoveNumbers} from "./Component/LoveNumbers.jsx";
import {Comments} from "./Component/Comments.jsx";
import {Feature} from "./Component/Feature.jsx";
import {News} from "./Component/News.jsx";
import {AnswerAndQuestion} from "./Component/AnswerAndQuestion.jsx";
import {Footer} from "./Component/Footer.jsx";
import {Request} from "./Component/Request.jsx";

export const App = () => {
    return(
        <div className={" w-100 app"}>
            <Navbar/>
            <Basic/>
            <Ordering/>
            <Gallarey/>
            <Rooms/>
            <LoveNumbers/>
            {/*<Comments/>*/}
            <Feature/>
            <News/>
            <AnswerAndQuestion/>
            <Request/>
            <Footer/>
        </div>
    )
}