<template>
    <div>
        <el-col :span="6"><div class="grid-content bg-purple">
            <ve-line :data="lineData" :settings="chartSettings"></ve-line>
            <ve-histogram :data="lineData1" ></ve-histogram>
            <ve-ring :data="lineData2"></ve-ring>
            </div>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "vcharts",
        data() {
            this.chartSettings = {
               labelMap:{
                   number:'提交量'
               }
            };
            return {
                lineData: {
                    columns: ['data', 'number'],
                    rows: [
                        {'data':'2019-10-21','number':20},
                        {'data':'2019-10-22','number':30},
                        {'data':'2019-10-23','number':40},
                        {'data':'2019-10-24','number':43},
                        {'data':'2019-10-25','number':44},
                    ]
                },
                lineData1:{
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                },
                lineData2:{
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>