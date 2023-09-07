import CountUp from "react-countup";
import {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";

export const LoveNumbers = () => {
    const [counter, setCounterOn] = useState(false)
    return (
        <div id={"statistic"}>
            <div className={"mt-5 love-numbers container"}>
                <h4 className={"text-white  text-center mb-5 playfair"}>{localStorage.getItem("lang") === "uzb" ? "Hotel Modern Shosh  Fakt va raqamlardan" : localStorage.getItem("lang") === "rus" ? "Hotel Modern Shosh  В Цифрах и Фактах" : "Hotel Modern Shosh  In Facts and Number"}</h4>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className={"circles"}>
                        <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                            <div className={"circle1 text-white text-center"}>
                                <p style={{fontSize:"150%"}} className={"text-center playfair m-0"}>{counter && <CountUp start={0} duration={3} delay={0} end={500}/>}+</p>
                            </div>
                            <p className={"mt-md-1 mb-5 text-white text-center playfair"}>{localStorage.getItem("lang") === "uzb" ? <>Mamnun  mijozlar</> : localStorage.getItem("lang") === "rus" ?
                              <p className={'text-center'}>Довольных  клиентов
                              </p> : <>Satisfied  clients</>}</p>
                        </div>

                        <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                            <div className={"circle2 text-center text-white "}>
                                <p style={{fontSize:"150%"}} className={"text-center playfair m-0"}>{counter && <CountUp start={0} duration={10} delay={0} end={5}/>}</p>
                            </div>
                            <p className={"mt-md-1 mb-5 text-white text-center playfair me-2"}> {localStorage.getItem("lang") === "uzb" ? <>Xonalarning turlari</> : localStorage.getItem("lang") === "rus" ? <>Типы номеров</> : <>Types  of rooms</>}</p>
                        </div>
                        <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                            <div className={"circle3  text-start text-white"}>
                                <p style={{fontSize:"150%"}} className={"playfair text-center m-0"}>{counter && <CountUp end={20} start={0} duration={5} delay={0}/>}+ </p>
                            </div>
                            <p className={'mt-md-1 mb-5 text-white playfair circle3-text text-center'}>{localStorage.getItem("lang") === "uzb" ? <>Mijozlar
                                    uchun  qulayliklar </> : localStorage.getItem("lang") === "rus" ? <>Удобства
                                    для клиентов</> : <>Customer amenities</>}</p>
                        </div>



                        {/*<div className={"me-md-4  mb-5 statistic align-items-center"}>*/}
                        {/*    <div className={"w-100"}>*/}
                        {/*        <div className={"col-xl-5"}>*/}
                        {/*            <div className={"circle"}>*/}
                        {/*                <h3 className={"text-center p-0 m-0 text-white num"}*/}
                        {/*                    >{counter && <CountUp start={0} end={500} duration={3} delay={0}/>}+</h3>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <p className={"text-white mt-2 text-center circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mamnun <br/> mijozlar</> : localStorage.getItem("lang") === "rus" ?*/}
                        {/*        <p className={'text-center'}>Довольных <br/> клиентов*/}
                        {/*        </p> : <>Satisfied <br/> clients</>}</p>*/}
                        {/*</div>*/}
                        {/*<div className={"me-md-3 mb-4  statistic middle align-items-center"}>*/}
                        {/*    <div className={"w-100"}>*/}
                        {/*        <div className={"col-xl-5"}>*/}
                        {/*            <div className={"circle"}>*/}
                        {/*                <h3 className={"text-center  p-0 m-0 text-white num"}>{counter && <CountUp start={0} end={5} duration={8} delay={0}/>}</h3>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <p className={"text-center text-white mt-2 circle-text "}>{localStorage.getItem("lang") === "uzb" ? <>Xonalarning <br/> turlari</> : localStorage.getItem("lang") === "rus" ? <>Типы <br/> номеров</> : <>Types <br/> of*/}
                        {/*        rooms</>}</p>*/}
                        {/*</div>*/}
                        {/*<div className={'statistic mb-4 align-items-center'}>*/}
                        {/*    <div className={"w-100"}>*/}
                        {/*        <div className={"col-xl-5 mt-3"}>*/}
                        {/*            <div className={"circle "}>*/}
                        {/*                <h3 className={"text-center  p-0 m-0 text-white num"}*/}
                        {/*                    >{counter && <CountUp start={0} end={20} duration={5} delay={0}/>}+</h3>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mijozlar*/}
                        {/*        uchun <br/> qulayliklar </> : localStorage.getItem("lang") === "rus" ? <>Удобства*/}
                        {/*        для <br/> клиентов</> : <>Customer <br/> amenities</>}</p>*/}
                        {/*</div>*/}
                    </div>

                </ScrollTrigger>
            </div>
        </div>
    )
}