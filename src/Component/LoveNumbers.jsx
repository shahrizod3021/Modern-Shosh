import CountUp from "react-countup";
import {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";

export const LoveNumbers = () => {
    const [counter, setCounterOn] = useState(false)
    return (
        <div id={"statistic"}>
            <div className={"mt-5 love-numbers container"}>
                <h4 className={"text-white text-center mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Modern Shosh Hotel Fakt va raqamlardan" : localStorage.getItem("lang") === "rus" ? "Modern Shosh Hotel В Цифрах и Фактах" : "Modern Shosh Hotel In Facts and Number"}</h4>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className={"loving-numbers"}>

                        <div className={" col-xl-4 me-md-4  mb-5 statistic align-items-center"}>
                            <div className={"w-100"}>
                                <div className={"col-xl-5"}>
                                    <div className={"circle"}>
                                        <h3 className={"text-center p-0 m-0 text-white num"}
                                            >{counter && <CountUp start={0} end={500} duration={3} delay={0}/>}+</h3>
                                    </div>
                                </div>
                            </div>
                            <p className={"text-white mt-2 text-center circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mamnun <br/> mijozlar</> : localStorage.getItem("lang") === "rus" ?
                                <p className={'text-center'}>Довольных <br/> клиентов
                                </p> : <>Satisfied <br/> clients</>}</p>
                        </div>
                        <div className={"col-xl-4 me-md-3 mb-4  statistic middle align-items-center"}>
                            <div className={"w-100"}>
                                <div className={"col-xl-5"}>
                                    <div className={"circle"}>
                                        <h3 className={"text-center  p-0 m-0 text-white num"}>{counter && <CountUp start={0} end={5} duration={2} delay={0}/>}</h3>
                                    </div>
                                </div>
                            </div>
                            <p className={"text-center text-white mt-2 circle-text "}>{localStorage.getItem("lang") === "uzb" ? <>Xonalarning <br/> turlari</> : localStorage.getItem("lang") === "rus" ? <>Типы <br/> номеров</> : <>Types <br/> of
                                rooms</>}</p>
                        </div>
                        <div className={'col-xl-4 statistic mb-4 align-items-center'}>
                            <div className={"w-100"}>
                                <div className={"col-xl-5 mt-3"}>
                                    <div className={"circle "}>
                                        <h3 className={"text-center  p-0 m-0 text-white num"}
                                            >{counter && <CountUp start={0} end={20} duration={2} delay={0}/>}+</h3>
                                    </div>
                                </div>
                            </div>
                            <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mijozlar
                                uchun <br/> qulayliklar </> : localStorage.getItem("lang") === "rus" ? <>Удобства
                                для <br/> клиентов</> : <>Customer <br/> amenities</>}</p>
                        </div>
                    </div>

                </ScrollTrigger>
            </div>
        </div>
    )
}