import {defineComponent} from '#imports';
import {LayoutHeader, NuxtPage} from '#components';

export default defineComponent({
    render () {
        return (
            <div>
                <LayoutHeader/>
                <h2>Default layout</h2>
                <NuxtPage/>
            </div>
        )
    }
})
