<template>
    <div class="todo-container">
        <div class="list">
            <ol class="ol">
                <li v-for="(item, index) in todos" :key="index" class="li">{{ item }}</li>
            </ol>
            <div class="input">
                <input type="text" v-model="item">
                <button v-on:click="submitTodo">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data(){
            return {
                todos:[
                    'web',
                    '追剧',
                    '刷抖音'
            ],
                item:''
            }
        },
        methods:{
            submitTodo(){
                if(this.item !== '') {
                    this.todos = [...this.todos,this.item]
                    this.item = ''
                } else {
                    alert('名称不能为空')
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
