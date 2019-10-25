<template>
    <div>
        <div style="text-align: center;margin-top: -10px"><strong>学生日报表</strong></div>
            <el-form  class="demo-form-inline" :model="form">
                <el-form-item label="内容">
                    <el-input v-model="form.content" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="查询日期-对应日报">
                    <el-date-picker
                            v-model="form.ctime"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-left: 10px" type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        <el-table :data="daily" border style="width: 100%">
            <el-table-column prop="ctime" label="日期"></el-table-column>
            <el-table-column prop="names" label="学生姓名"></el-table-column>
            <el-table-column  prop="classes" label="班级"></el-table-column>
            <el-table-column  prop="finish" label="完成情况"></el-table-column>
            <el-table-column  prop="suggest" label="建议"></el-table-column>
            <el-table-column  prop="content" label="内容"></el-table-column>
            <el-table-column  prop="problem" label="遇到问题"></el-table-column>
            <el-table-column  prop="motto" label="座右铭"></el-table-column>
            <el-table-column  prop="other" label="其他"></el-table-column>
            <el-table-column  prop="feeling" label="心得体会"></el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click.native.prevent="deleteRow(scope.$index, daily)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--<el-pagination-->
                <!--background-->
                <!--layout="total,prev, pager, next"-->
                <!--:total="total">-->
        <!--</el-pagination>-->
        <my-page :page-size="size" :total="total" @pagechange = getDaily></my-page>
    </div>
</template>

<script>
    import myPage from "../../components/my-page";
    export default {
        name: "query",
        data(){
            return{
                user:null,
                daily: [],
                total:0,
                // pages:1,// 几页
                size:1,// 一页几条
                form:{
                    content:'',
                    ctime:'',
                }
            }
        },
        methods:{
           getDaily(i=1){
               let user = this.user.username;
               let qs ='?names='+user+'&page='+i+'&size='+this.size;
               fetch('http://www.daily-end.com/index/index/query' + qs)
                   .then(res=>res.json())
                   .then(data=>{
                       // console.log(data);
                       this.daily = data.data;
                       this.total = data.count;
                   })
           },
           getUser(){
                this.user = JSON.parse(localStorage.username);

           },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        },
        beforeMount() {
            this.getUser();
            this.getDaily();
        },
        components:{
          myPage
        }
    }
</script>
<style>
</style>
<style scoped>

</style>