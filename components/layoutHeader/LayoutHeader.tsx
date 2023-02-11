import {PropType} from '@vue/runtime-core';
import styles from './styles.module.css'

export default defineComponent({
    props: {
        headerMsg: {
            type: String as PropType<string>,
            required: true
        },
        randomArray: {
            type: Array as PropType<number[]>,
        }
    },
    setup(props) {
        return () => (
            <div>
                <h1 class={styles.headerColor}>{props.headerMsg}</h1>
                <span>{props.randomArray}</span>
            </div>
        )
    }

})
