<template>
    <div>
        <!---->
        <ul class="number">
            <li :class="{active:currenting==i}" @click="numberpage(i)" v-for="i in pageNumber" :key="i">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-page",
        props:{
          total:{
              require:true,
              type:Number
          },
          pageSize:{
              type:Number,
              default:10,
          }
        },
        computed:{
            pageNumber(){
                return Math.ceil(this.total/this.pageSize)
            },
        },
        methods:{
            numberpage(i){
                if (this.currenting == i){
                    return;
                }
                this.currenting = i;
                this.$emit('pagechange',i)
            }
        },
        data(){
            return{
                currenting:1,
            }
        }
    }
</script>

<style scoped>
    .number{
        margin-top: 10px;
        width: 100%;
        height: 30px;
        /*background-color: #f4f4f5;*/
        display: flex;
    }
    .number > li{
        width: 30px;
        height: 28px;
        background-color: #f4f4f5;
        margin-left: 10px;
        border-radius: 3px;
        text-align: center;
        line-height: 28px;
    }
    .number > li.active{
        color: #fff;
        background-color: #409eff;
    }
</style>