<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
        <el-breadcrumb-item>查看学生</el-breadcrumb-item>
    <el-table
            :data="student"
            style="width: 100%" >
        <el-table-column
                prop="id"
                label="ID">
        </el-table-column>
        <el-table-column
                prop="username"
                label="姓名">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <!--<el-button>-->
                    <!--<router-link :to="{name:'studentedit'}">编辑</router-link>-->
                <!--</el-button>-->
                <router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button" >编辑</router-link>
                <el-button @click="deleteStudent(scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    </el-breadcrumb>
</template>

<script>
    import student from "../../data/students";
    export default {
        name: "query",
        data() {
            return {
                student: []
            }
        },
        methods:{
            getStudent(){
                let obj = JSON.parse(localStorage.getItem('arr'));
                student.push(obj);
                this.student = student;
            },
            deleteStudent(id){
                this.student=this.student.filter(ele=>ele.id!=id);
            }
        },
        //    生命周期函数
        mounted() {
           this.getStudent();
        }

    }


</script>

<style scoped>
a{
    color: #333333;
}
</style>