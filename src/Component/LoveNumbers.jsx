export const LoveNumbers = () => {
    return (
        <div id={""}>
            <div className={"mt-5 love-numbers container"}>
                <h4 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "ModernshoshHotel bilan tanishing: fakt va raqamlarda”\n" : localStorage.getItem("lang") === "rus" ? "Познакомьтесь с ModernshoshHotel: В Цифрах и Фактах" : "Meet ModernshoshHotel: In Facts and Figures"}</h4>
                <p className={"text-white text-center mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Ushbu bo'limda biz sizga ModernshoshHotelni tavsiflovchi asosiy statistik ma'lumotlarni taqdim etamiz." : localStorage.getItem("lang") === "rus" ? "\n" +
                    "В этом разделе мы представляем вам ключевые статистические показатели, которые характеризуют ModernshoshHotel." : "In this section, we present you with key statistics that characterize ModernshoshHotel."}</p>
                <div className={"loving-numbers"}>
                    <div className={" col-xl-4 me-md-4 statistic align-items-center"}>
                        <div className={"w-100"}>
                            <div className={"col-xl-5"}>
                                <div className={"circle"}>
                                    <h3 className={"text-center p-0 m-0 text-white"}>500</h3>
                                </div>
                            </div>
                        </div>
                        <p className={"text-white mt-2 text-center circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mamnun <br/> mijozlar</> : localStorage.getItem("lang") === "rus" ? <p className={'text-center'}>Довольных <br/> клиентов</p> : <>Satisfied <br/> clients</>}</p>
                    </div>
                    <div className={"col-xl-4 me-md-3  statistic align-items-center"}>
                        <div className={"w-100"}>
                            <div className={"col-xl-5"}>
                                <div className={"circle"}>
                                    <h3 className={"text-center  p-0 m-0 text-white"}>10</h3>
                                </div>
                            </div>
                        </div>
                        <p className={"text-center text-white mt-2 circle-text "}>{localStorage.getItem("lang") === "uzb" ? <>Xonalarning <br/> turlari</> : localStorage.getItem("lang") === "rus" ? <>Типы <br/> номеров</> : <>Types <br/> of rooms</>}</p>
                    </div>
                    <div className={'col-xl-4 statistic  align-items-center'}>
                        <div className={"w-100"}>
                            <div className={"col-xl-5 mt-3"}>
                                <div className={"circle "}>
                                    <h3 className={"text-center  p-0 m-0 text-white"}>20 </h3>
                                </div>
                            </div>
                        </div>
                        <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? <>Mijozlar uchun <br/> qulayliklar </> : localStorage.getItem("lang") === "rus" ? <>Удобства для <br/> клиентов</> : <>Customer <br/> amenities</>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}