import {LayoutHeader, NuxtPage} from '#components';
import {tableData} from '~/store/table-data';

export default defineComponent({
    setup() {
        return () => (
            <div>
                <LayoutHeader headerMsg={'Propped header msg'} randomArray={[1, 2, 3]}/>
                <h2>Default layout</h2>
                <NuxtPage/>
            </div>
        )
    },
})
