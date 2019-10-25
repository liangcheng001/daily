<template>
    <div id="container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="Username" prop="username">
            <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" clearable v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input placeholder="请输入密码" clearable show-password v-model="ruleForm.password">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roles">
            <el-radio-group v-for="(item,index) in role" :key="index" v-model="ruleForm.role">
                <el-radio :label=item></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
    import admin from "../data/admin";
    import students from "../data/students";
    import teacher from "../data/teacher";
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password:'',
                    role:'',
                },
                role:['admin','students','teacher'],
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
                    ],

                },
            };
        },
        methods: {
            submitForm(formName) {
                // 1.箭头函数 2.把this存一个临时的变量 3.bind绑定this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let role = this.ruleForm.role;
                        let model = null;
                        if (role == "admin") {
                            model = admin
                        } else if (role == "students") {
                            model = students
                        } else {
                            model = teacher
                        }
                        let flag=model.filter(ele => ele.username == this.ruleForm.username && ele.password == this.ruleForm.password);
                        //  alert('submit!');

                        if(flag.length){
                            localStorage.username=JSON.stringify(flag[0]);
                            if (model == students){
                                this.$router.push({name:"student"})
                            }else {
                                this.$router.push({name:"main"})
                            }
                        }else {
                            this.$message.warning("用户名密码不匹配")
                        }
                        console.log(flag);
                    }
                });
            },
        }
    }
</script>
<style>
    html,body{
        width: 100%;
        height: 100%;
    }
    .el-form-item__label{
        font-size: 12px ;
    }
</style>
<style scoped>
    #container{
        background: url("../assets/timg.jpeg");
    }
    .demo-ruleForm{
        width: 350px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(50%,-50%);
        padding: 10px 20px;
        background-color: #fff;
        /*box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);*/
        margin: 0 auto;
    }
</style>