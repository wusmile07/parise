<template>
    <div id="app">
        <todo></todo>
        <praise
                v-for="(item, index) in zanData"
                :key="index"
                :zanData="item"
                @state="getState"
        >
        </praise>
    </div>
</template>

<script>
    import Todo from './components/Todo'
    import praise from "./components/praise";
    export default {
        name: 'app',
        components: {
            praise,
            Todo
        },
        data() {
            return {
                zanData: [
                    {isZan: 0, count: 10, id: 1},
                    {isZan: 1, count: 11, id: 2},
                    {isZan: 0, count: 20, id: '45678'},
                    {isZan: 1, count: 420, id: '4678'},
                    {isZan: 0, count: 32, id: 'fghj'},
                    {isZan: 0, count: 10, id: '345'},
                    {isZan: 0, count: 10, id: '4567gh'},
                    {isZan: 0, count: 10, id: 'erty'},
                ]
            }
        },
        methods: {
            getState(id) {
                this.zanData.forEach(item => {
                    if(item.id === id) {
                        if (item.isZan === 1) {
                            item.isZan = 0
                            item.count = item.count - 1
                        } else {
                            item.isZan = 1
                            item.count = item.count + 1
                        }
                    }
                })
            }
        }
    }
</script>

<style>

</style>
