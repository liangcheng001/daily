<template>
    <el-form :model="form" :rules="rules" label-width="100px" ref="form">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加学生</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <el-form-item label="姓名" prop="username">
            <el-input v-model="form.username" placeholder="Username" clearable>
                <i slot="prefix" class="el-input-icon el-icon-user"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-radio label="男" v-model="form.sex"></el-radio>
            <el-radio label="女" v-model="form.sex"></el-radio>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age" placeholder="Age" clearable>
                <i slot="prefix" class="el-input-icon el-icon-user"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="班级" prop="classes">
            <el-select v-model="form.classes" placeholder="请选择">
                <i slot="prefix" class="el-input-icon el-icon-star-off"></i>
                <el-option v-for="item in classes"
                           :key="item.id" :label="item.cname" :value="item.cname"
                >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="tell">
            <el-input v-model="form.tell" placeholder="联系方式" clearable>
                <i slot="prefix" class="el-input-icon el-icon-phone"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="学号" prop="num">
            <el-input v-model="form.num" placeholder="学号" clearable>
                <i slot="prefix" class="el-input-icon el-icon-document-copy"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" placeholder="password" clearable>
                <i slot="prefix" class="el-input-icon el-icon-lock"></i>
            </el-input>
        </el-form-item>
        <el-button @click="submitForm('form')">提交</el-button>
    </el-form>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: {
                    id: '',
                    username: '',
                    password: '',
                    sex: '',
                    age: '',
                    classes: '',
                    num: '',
                    tell: '',
                },
                classes: [
                    {cid: 1, cname: 'WUIF1907-2'},
                    {cid: 2, cname: 'WUIF1907-1'},
                    {cid: 3, cname: 'WUIF1908-1'},
                    {cid: 4, cname: 'WUIF1908-2'},
                ],
                rules: {
                    username: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
                    ], sex: [
                        {required: true, message: '性别需要选择一个', trigger: 'change'}
                    ], age: [
                        {required: true, message: '请输入年龄', trigger: 'blur'},
                        {min: 1, max: 3, message: '长度在1-3个数字', trigger: 'blur'}
                    ], classes: [
                        {required: true, message: '班级不能不选', trigger: 'change'}
                    ], tell: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        {min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur'}
                    ], num: [
                        {required: true, message: '请输入学号', trigger: 'blur'},
                    ], password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let arr = this.form;//获取数据
                        // console.log(arr);
                        arr.id=Date.now();
                        localStorage.arr = JSON.stringify(arr)
                    } else {
                        return false
                    }
                })
            }
        }

    }
</script>
<style>
    .el-form {
        width: 600px;
    }
</style>
<style scoped>

</style>