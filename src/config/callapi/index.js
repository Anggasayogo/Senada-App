import AsyncStorage from "@react-native-community/async-storage";

const { default: Axios } = require("axios")


export const callApi = async (type,endpoint,datas)=>{
    const host = "http://senada.cikupalearningcenter.com"
    const token = await AsyncStorage.getItem('api_token'); 
    if(type == "GET"){
        const res = await Axios.get(`${host}/api/v1/${endpoint}?api_token=${token}`)
        try {
            return res.data;
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }else{
        const res = await Axios.post(`${host}/api/v1/${endpoint}?api_token=${token}`,{
            datas
        })
        try {
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
}