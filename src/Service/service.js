import axios from "axios";
import {BaseUrl} from "./BaseUrl.js";
import {Apis} from "./Apis.js";
import toast from "react-hot-toast";
import {isSuccess} from "./isSuccess.js";

export const GetNews = async () => {
    try {
        const res = await axios.get(BaseUrl + Apis.blogs)
        return res.data
    }catch (err){
        return toast.error('новостей не найдено')
    }
}

export const Order= async (data) => {
    try {
        const res = await axios.post(BaseUrl + Apis.order, data)
        if (isSuccess(res.status)){
            return toast.success(res.data.message, {duration:3000})
        }
    }catch (err){
        return toast.error(localStorage.getItem("lang") === "uzb" ? "Buyurtma qabul qilinmadi" : localStorage.getItem("lang") === "rus" ? "Заказ не был принят" : "Order not accepted")
    }
}

export const RequestAction = async (data) => {
    try {
        const res = await axios.post(BaseUrl + Apis.request, data)
        if (isSuccess(res.status)){
            return toast.success(localStorage.getItem("lang") === "uzb" ? "So'rovingiz qabul qilindi" : localStorage.getItem("lang") === "rus" ? "Ваш запрос принят" : "Your request has been accepted")
        }
    }catch (err){
        return toast.success(localStorage.getItem("lang") === "uzb" ? "sizning so'rovingiz qabul qilinmadi" : localStorage.getItem("lang") === "rus" ? "Ваш запрос не принят" : "your request was not accepted")
    }
}