<template>
    <li class="list-group-item" :class="'list-group-item-'+classname">{{content}}
    <span style="float: right" @click="lidelete">X</span>
    </li>

</template>

<script>
    export default {
        name: "my-li",
        props:{
            content:{
                require:true,
                type:String
            },
            status:{
                require: true,
                type: Boolean
            },
            id:{
              require:true,
              type:Number
            }
        },
        computed:{
            classname(){
                return this.status?'success':'danger'
            }
        }
        ,methods:{
            lidelete(){
                this.$emit('listdelete',this.id)
            }
        }
    }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
</style>