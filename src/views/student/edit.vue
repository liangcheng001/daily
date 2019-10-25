<template>
    <div>
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>学生管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改学生</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form" v-if="form">
            <el-form :model="form" :rules="rules" label-width="100px">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data: function () {
            return {
                form: null,
                classes: [
                    {cid: 1, cname: 'WUIF1907-2'},
                    {cid: 2, cname: 'WUIF1907-1'},
                    {cid: 3, cname: 'WUIF1908-1'},
                    {cid: 4, cname: 'WUIF1908-2'},
                ],
                id: 0,
            }
        },
        methods: {
            submitForm() {

            },
            getStudent() {
                let arr = localStorage.getItem('arr');
                if (arr) {
                    this.form = JSON.parse(arr)
                } else {
                    this.$message.error('数据获取失败')
                }
            }
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.getStudent();
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