export const LoveNumbers = () => {
    return (
        <div id={""}>
            <div className={"mt-5 love-numbers container"}>
                <h4 className={"text-white text-center"}>{localStorage.getItem("lang") === "uzb" ? "Odamlar yaxshi ko'radi" : localStorage.getItem("lang") === "rus" ? "Люди любят цифры" : "People Love Numbers"}</h4>
                <p className={"text-white text-center mb-5"}>{localStorage.getItem("lang") === "uzb" ? "Qoniqarli mijozlar yoki sotib olingan chiptalar sonini ko'rsating." : localStorage.getItem("lang") === "rus" ? "\n" +
                    "Хвастайтесь количеством довольных клиентов или купленных билетов." : "Boast the number of happy clients or ticket bought"}</p>
                <div className={"loving-numbers"}>
                    <div className={"col-xl-4 me-md-3"}>
                        <div className={"col-xl-5"}>
                            <div className={"circle"}>
                                <h3 className={"text-center  p-0 m-0 text-white"}>598</h3>
                            </div>
                            <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? "Tayyor loyihalar" : localStorage.getItem("lang") === "rus" ? "Продукты готовы" : "Products done"}</p>
                        </div>
                    </div>
                    <div className={"col-xl-4 me-md-3"}>
                        <div className={"col-xl-5"}>
                            <div className={"circle"}>
                                <h3 className={"text-center  p-0 m-0 text-white"}>26</h3>
                            </div>
                            <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? "Mamlakat serveri" : localStorage.getItem("lang") === "rus" ? "Cервер стран" : "Countries server"}</p>
                        </div>
                    </div>
                    <div className={"col-xl-4"}>
                        <div className={"col-xl-5 mt-3"}>
                            <div className={"circle "}>
                                <h3 className={"text-center  p-0 m-0 text-white"}>78</h3>
                            </div>
                            <p className={"text-center text-white mt-2 circle-text"}>{localStorage.getItem("lang") === "uzb" ? "Ofislar" : localStorage.getItem("lang") === "rus" ? "Офисы" : "Offices"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}