import { h } from 'preact'

import * as styles from './stringified-value.css'

interface IStringifiedValueProps {
    value: any
}

export default (props: IStringifiedValueProps) => {
    const value = JSON.stringify(props.value)

    return (
        <span
            class={`${styles.value}`}
            title={value}
        >{value}</span>
    )
}