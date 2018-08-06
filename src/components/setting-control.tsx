import { h, Component } from 'preact'

import * as controller from './settings-controller'

import * as styles from './setting-control.css'

interface ISettingControlProps {
    id: string,
    capabilities: controller.SettingsControllerCapabilities,
    settings: controller.SettingsControllerSettings,
    updateSettings: controller.SettingsControllerUpdateSettings,
}

export default class SettingControl extends Component<ISettingControlProps, null> {
    ref: HTMLInputElement = null

    get value() {
        return this.props.settings[this.props.id]
    }

    resetValue = () => { this.ref.valueAsNumber = this.value }

    onChange = () => {
        const newValue = this.ref.valueAsNumber

        this.props.updateSettings({
            [this.props.id]: newValue
        })
            .catch(this.resetValue)
    }

    componentDidMount() {
        this.resetValue()
    }

    render() {
        const { id, capabilities } = this.props
        const value = this.value

        if(!capabilities[id]) {
            return <span>{value}</span>;
        }

        const min = capabilities[id].min || value
        const max = capabilities[id].max || value

        return (
            <span class={`${styles.container}`}>
                <span class={`${styles.min}`} title={min}>{min}</span>
                <input
                    type="range"
                    value={value}
                    title={`${value}`}
                    min={min}
                    max={max}
                    step="any"
                    class={`${styles.input}`}
                    onChange={this.onChange}
                    ref={r => this.ref = r}
                    />
                <span class={`${styles.max}`} title={max}>{max}</span>
            </span>
        )
    }
}
