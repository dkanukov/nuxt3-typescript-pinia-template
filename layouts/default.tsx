import {LayoutHeader, NuxtPage} from '#components';

export default defineComponent({
    render () {
        return (
            <div>
                <LayoutHeader headerMsg={'Propped header msg'} randomArray={[1, 2, 3]}/>
                <h2>Default layout</h2>
                <NuxtPage/>
            </div>
        )
    }
})
