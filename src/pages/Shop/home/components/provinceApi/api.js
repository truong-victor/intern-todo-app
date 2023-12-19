import axios from "./axiosConfig"
import axiosDefaults from 'axios'

export const ApiCity = () => new Promise(async (resolve, reject) =>{
    try {
        const response =  await axios({
            method: "get",
            url: '/api/vq/province/all'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}) 

export const ApiAdress = () => new Promise(async (resolve, reject) => {
    try {
        const response =  await axiosDefaults({
            method:"get",
            url:'https://vapi.vnappmob.com/api/province/'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

