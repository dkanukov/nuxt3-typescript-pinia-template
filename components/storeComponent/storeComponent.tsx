import {PropType} from '@vue/runtime-core';

export default defineComponent({
    props: {
        someData: {
            type: Number,
            required: true,
        },
        testIncrement: {
            type: Function as PropType<() => void>,
            required: true
        }
    },
    setup(props) {

        function handleButtonClick(e: MouseEvent) {
            console.log(e)
            props.testIncrement()
        }
        return () => (
            <div>
                <p>data from store: {props.someData}</p>
                <button onClick={handleButtonClick}>click me</button>
            </div>
        )
    }
})
