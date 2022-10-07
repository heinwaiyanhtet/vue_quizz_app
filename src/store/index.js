import { createStore } from "vuex";
import QuizzesService from "../services/QuizzesService"

export default createStore({
    state : {
        sourceData : [],
    },
    getters:{
        
    },
    mutations:{
        SET_QUIZZES (state,quizzes) {
            state.sourceData = quizzes;
        },
    },
    actions:{
        fetchQuizzes({commit}){
            return new Promise((resolve,reject) => {
                QuizzesService.getquizzes()
                .then(response => {
                    resolve(commit('SET_QUIZZES',response.data))
                })
                .catch(error => {
                    reject(error)
                })
            })
        }
    }
});