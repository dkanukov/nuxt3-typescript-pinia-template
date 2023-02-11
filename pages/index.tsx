import {definePageMeta} from '#imports';
import {tableData} from '~/store/table-data';
import {StoreComponent} from '#components';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        })
        const tableDataStore = tableData()

        return () => (
            <div>
                Page text
                <StoreComponent
                    someData={tableDataStore.someData}
                    testIncrement={tableDataStore.testIncrement}
                />
            </div>
        )
    },
})
