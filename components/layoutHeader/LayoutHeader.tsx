import {defineProps} from '@vue/runtime-core';
import styles from './styles.module.css'

interface Props {
    headerMsg: string
}
export default defineComponent({
    setup() {
        const props = defineProps<Props>()
        return () => (
            <h1 class={styles.headerColor}>{{props}} 123</h1>
        )
    }
})
