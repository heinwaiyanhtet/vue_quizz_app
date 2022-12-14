import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:false,
    headers:{
         Accept:'application/json',
        'Content-type':'application/json'
    }
})

export default {
    getquizzes(){
        return apiClient.get('/quizzes')
    },
    getquizz(id){
        return apiClient.get('/quizzes/'+id)
    }
}
