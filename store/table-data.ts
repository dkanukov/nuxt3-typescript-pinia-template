import {defineStore} from 'pinia';

export const tableData = defineStore('tableDara', {
    state: () => ({
        someData: 1 as number,
    }),
    actions: {
        testIncrement() {
            this.someData++
        }
    },
    getters: {
        doubleSomeData(state): number {
            return this.someData * 2
        }
    }
})
