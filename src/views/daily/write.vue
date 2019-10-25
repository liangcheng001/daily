<template>
    <div>
        <el-form :model="daily" ref="daily" :rules="rules">
            <el-form-item label="座右铭" prop="motto">
            <el-input  v-model="daily.motto" placeholde="请输入您的座右铭" maxlength="50" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="完成情况" prop="content">
                <el-input  v-model="daily.finish" type="textarea" placeholde="请输入您的内容" ></el-input>
            </el-form-item>
            <el-form-item label="学习内容" prop="content">
                <el-input  v-model="daily.content" type="textarea" placeholde="请输入您的内容" ></el-input>
            </el-form-item>
            <el-form-item label="遇到问题" prop="problem">
                <el-input  v-model="daily.problem" type="textarea" placeholde="请输入您的内容" ></el-input>
            </el-form-item>
            <el-form-item label="心得体会" prop="feeling">
                <el-input  v-model="daily.feeling"  placeholde="请输入心得体会" minlength="50"></el-input>
            </el-form-item>
            <el-form-item label="建议" prop="suggest">
                <el-input  v-model="daily.suggest"  placeholde="请输入建议" ></el-input>
            </el-form-item>
            <el-form-item label="其他" prop="other">
                <el-input  v-model="daily.other"  placeholde="其他" ></el-input>
            </el-form-item>
            <!--<el-button type="primary" @click="submitda">提交</el-button>-->
            <el-button @click="submitda">提交</el-button>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "write",
        data(){
            return{
                daily:{
                    names:'',
                    classes:'WUIF190702',
                    motto:'',
                    content:'',
                    finish:'',
                    problem:'',
                    feeling:'',
                    suggest:'',
                    other:'',
                },
                rules:{
                    motto:[
                        { required: true, message: '请输入座右铭', trigger: 'blur' },
                        { min: 5, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
          submitda(){
                this.daily.names=JSON.parse(localStorage.username).username;
                // console.log(this.daily);
              fetch('http://www.daily-end.com/index/index/index',{
                  method:'POST',
                  body:JSON.stringify(this.daily),
                  headers:new Headers({
                      'Content-Type':'application/json'
                  })
              })
                  .then(res=>res.json())
                  .then(data=>{
                      if (data.code==200){
                          this.$message.success(data.msg);
                          this.$refs.daily.resetFields();
                      } else {
                          this.$message.error(data.msg)
                      }
                  })
          }
        },


    }
</script>
<style>
    .el-textarea__inner{
        resize: none;
    }
</style>
<style scoped>

</style>