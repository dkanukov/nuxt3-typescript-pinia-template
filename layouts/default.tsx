import {defineComponent} from '#imports';
import {NuxtPage} from '#components';

export default defineComponent({
    render () {
        return (
            <div>
                <h1>Default layout</h1>
                <NuxtPage/>
            </div>
        )
    }
})
