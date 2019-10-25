<template>
    <div>
        <my-nav @insert="addlist"></my-nav>
        <list :lists="list" @deletes="deletes"></list>
    </div>
</template>

<script>
    import MyNav from '../components/my-nav';
    import List from '../components/list';
    export default {
        name: "index",
        data(){
            return{
                list: [
                    {id: 1, content: '毕业论文--任务书-下周要交', status: false},
                    {id: 2, content: '简历---下周四交', status: false},
                    {id: 3, content: '协同开发计划---下周一交', status: false},
                    {id: 4, content: '持续性项目', status: true},
                    {id: 5, content: '评审---下周六处理', status: false},
                ],
            }
        },
        methods:{
            addlist(value){
                let obj = {};
                // obj.content = this.current;
                obj.content = value;
                obj.status=false;
                obj.id = this.list[this.list.length -1].id + 1;
                this.list.push(obj)
            },
            deletes(id){
                let index = this.list.findIndex(ele=>ele.id==id);
                this.list.splice(index,1)
            }
        },
        components:{
            MyNav,List
        }
    }
</script>
<style scoped>

    .panel{
        width: 300px;
        border: aqua 1px solid;
        margin-top: 30px;
    }
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
   li{
    list-style: none;
   }
</style>

