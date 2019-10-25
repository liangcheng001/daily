import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'u-reset.css';



// 1.引入组件
// import index from "./views/index";
import login from "./views/login";
import main from "./views/main";
import studentAdd from "./views/student/add";
import studentQuery from "./views/student/query";
import studentEdit from "./views/student/edit";
import student from "./views/student";
import write from "./views/daily/write";
import query from "./views/daily/query";
import vcharts from "./views/vcharts";
import Vchars from "v-charts";


//插入，引入
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vchars);

let router = new VueRouter({
    routes: [
        // {path: '/', component: index},
        {path: '/login', component: login,meta:{title:'请登录'}},
        {path: '/main', component: main,name:'main',
            children:[
                {path:'studentadd',component:studentAdd,meta:{title:'添加学生'}},
                {path:'studentquery',component:studentQuery,meta:{title:'查看学生'}},
                {path:'studentedit/:id',component:studentEdit,name: 'studentedit',meta:{title:'修改学生'}},
                {path:'vcharts',component:vcharts,name:'vcharts',meta:{title:'数据可视化'}},
            ]
        },
        {path:'/student',component:student,name:'student',meta:{title:'欢迎来到日报管理系统'},
            children:[
                {path:'write',component:write,name:'studentwrite',meta:{title:'写日报,兴奋不'}},
                {path:'query',component:query,name:'studentquery',meta:{title:'看日报'}},
            ]
        }
    ]
});
router.beforeEach((to,from,next)=>{
    let title = to.meta.title;
    document.title = title;
    next();
});
/*
*1.监听组件切换
* 2.当前组件标题
* 3.设置文档标题
* */
new Vue({
    render: h => h(App),
    router
}).$mount('#app');
