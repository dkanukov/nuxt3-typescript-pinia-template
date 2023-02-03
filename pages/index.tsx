export default defineComponent({
    async setup() {
        const { data } = await useFetch('/api/fetchTableData')
        console.log(data)
    },
    render() {
        return (
            <div>
                The rest of the page
            </div>
        )
    }
})
