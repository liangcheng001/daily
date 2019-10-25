<template>
    <div class="panel panel-info">
        <ul class="list-group">
            <!--<li  class="list-group-item" v-for="v in lists" :key="v.id">-->
                <!--{{v.content}}-->
            <!--</li>-->
            <my-li v-for="v in lists" :key="v.id" :content="v.content" :status="v.status" :id="v.id" @listdelete="listdelete">

            </my-li>
        </ul>
    </div>
</template>

<script>
    import MyLi from '../components/my-li';
    export default {
        name: "list",
        props:{
            lists:{
                require:true,
                type:Array
            }
        },
        components:{
            MyLi
        },
        methods:{
            listdelete(id){
                this.$emit('deletes',id)
            }
        }
    }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
</style>