import { createRouter,createWebHistory } from 'vue-router'
import Quiz from '@/pages/appQuizzes'
import welcome from '@/pages/appWelcome'
import NotFound from '@/pages/NotFound'
import congratulation from "@/pages/congratulationJob";
import ErrorDisplay from "@/pages/ErrorDisplay";
import {findById} from "@/helpers";
import store from '@/store'


// const routeParamLength = store.state.sourceData.quizzes.length;
const routes = [
    { 
        path: '/',
        name:'welcome',
        component: welcome,
    },
    {
        path: '/quizzes/:id',
        name:'Quiz',
        component: Quiz,
        async beforeEnter (to,from,next){
            await store.dispatch('fetchQuizzes')
            const quizExist = findById(store.state.sourceData,to.params.id);
            if(quizExist){
                return next();
            }else{
                next({
                    name:'NotFound',
                    params:{error:'notFound'}
                })
            }
        }
    },
    {
        path: '/congratulation',
        name:'congratulation',
        component: congratulation,
    },
    {
        path:'/error/:error',
        name:'ErrorDisplay',
        component: ErrorDisplay
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
  

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router