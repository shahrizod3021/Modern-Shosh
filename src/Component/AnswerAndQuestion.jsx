export const AnswerAndQuestion = () => {
    return (
        <div>
            <div className={"container mb-5"}>
                <h3 className={"text-center text-white mb-4"}>{localStorage.getItem("lang") === "uzb" ? "Tez tez so'raladigan savollar" : localStorage.getItem("lang") === "rus" ? "Часто задаваемый вопрос" : "FAQ"}</h3>
                <div className={"row col-lg-12 friquently"} >
                    <div className={"col-lg-5 me-4 mb-4 p-0 pt-2 pb-0"} style={{border:"1px solid rgba(84, 84, 84, 1)", borderRadius:"10px"}}>
                        <div className={"faq w-100"}>
                            <div className={"question "}>
                                <p className={'text-start text-white  p-3'} style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? <>Sizda transfer hizamti mavjudmi ?</> : localStorage.getItem("lang") === "rus" ? "Имеются ли у вас услуги трансфера ?" : "Do you have transfer service ?"}</p>
                            </div>
                            <div className={""} style={{marginRight:"10%"}}>
                                <p className={"answer text-start  text-warning mt-1 p-2"}  style={{float: "right",backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? "Ha albatta mehmonxonamizda transfer hizmati kechayu kunduz mavjud." : localStorage.getItem("lang") === "rus" ? "Да, конечно. Вызов трансфера в нашем отеле осуществляется круглосуточно." : "Yes, sure, transfer call in our hotel is available around the clock."}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-5  pt-2 p-0 mb-4 pb-0"} style={{border:"1px solid rgba(84, 84, 84, 1)", borderRadius:"10px"}}>
                        <div className={"faq w-100"}>
                            <div className={"question "}>
                                <p className={'text-start text-white p-3'} style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? <>Mehmonxonada nikox guvohnomasi siz yashash mumkinmi ?</> : localStorage.getItem("lang") === "rus" ? "Возможно ли проживание без ЗАГСа?" : "Is it possible to live without a marriage registry ?"}</p>
                            </div>
                            <div className={""} style={{marginRight:"10%"}}>
                                <p className={"answer text-start text-warning p-2 "}  style={{float: "right",backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? "Afsuski O'zbekiston Fuqarolari FHDYO to'g'risidagi hujjatni taqdim etishlari kerak." : localStorage.getItem("lang") === "rus" ? "К сожалению, гражданам Узбекистана необходимо предоставление документов о наличии ЗАГСа." : "Unfortunately, citizens of Uzbekistan need to provide documents on the presence of a marriage registry."}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-5 me-4 pt-2  p-0 pb-0"} style={{border:"1px solid rgba(84, 84, 84, 1)", borderRadius:"10px"}}>
                        <div className={"faq w-100"}>
                            <div className={"question "}>
                                <p className={'text-start text-white p-3'} style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? <>Ovqatlanish uchun. Mehmonxona atrofida restoran yoki cafe bormi ?</> : localStorage.getItem("lang") === "rus" ? "Есть ли поблизости рестораны и кафе, где можно поужинать?" : "Are there restaurants and cafes nearby where you can have dinner ?"}</p>
                            </div>
                            <div className={""} style={{marginRight:"10%"}}>
                                <p className={"answer text-start text-warning p-3 mt-2"}  style={{float: "right",backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? "Ha albatta. Savdo markazi mehmonxonadan 500 metr uzoqlikda joylashgan." : localStorage.getItem("lang") === "rus" ? "Да, конечно. Торговый центр находится в 500 метрах от отеля." : "Yes, sure. The shopping center is 500 meters from the hotel."}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-5 pt-2 p-0 pb-0"} style={{border:"1px solid rgba(84, 84, 84, 1)", borderRadius:"10px"}}>
                        <div className={"faq w-100"}>
                            <div className={"question"}>
                                <p className={'text-start text-white p-3'} style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? <>Sizlarda naqd pulsiz to'lov amalga oshirish mumkinmi ?</> : localStorage.getItem("lang") === "rus" ? "Можно ли произвести оплату безналичным путем? " : "Is it possible to make cashless payment ?"}</p>
                            </div>
                            <div className={""} style={{marginRight:"10%"}}>
                                <p className={"answer text-start text-warning p-3 mt-2"}  style={{float: "right",backgroundColor:"rgba(36, 37, 39, 1)"}}>{localStorage.getItem("lang") === "uzb" ? "Siz karta yoki naqd pul bilan to'lashingiz mumkin." : localStorage.getItem("lang") === "rus" ? " Вы можете оплатить проживание картой или наличными." : "You can pay by card or cash."}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}