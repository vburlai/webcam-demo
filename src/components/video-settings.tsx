import { h } from 'preact'

import SettingControl from './setting-control'
import StringifiedValue from './stringified-value'
import * as controller from './settings-controller'

import * as styles from './video-settings.css'

interface IVideoSettingsProps {
    class?: string,
    settings: controller.SettingsControllerSettings,
    capabilities: controller.SettingsControllerCapabilities,
    updateSettings: controller.SettingsControllerUpdateSettings
}

export default (props: IVideoSettingsProps) => {
    return (
        <pre class={`${props.class||''}`}>
            <h3><i>videoTrack</i><br/>&nbsp;.getSettings():</h3>
            {
                Object.keys(props.settings).map(key =>
                    <dl>
                        <dt class={`${styles.dt}`}>{key}</dt>
                        <dd class={`${styles.dd}`}>
                            {
                                typeof props.settings[key] === 'number' ?
                                    <SettingControl
                                        id={key}
                                        settings={props.settings}
                                        capabilities={props.capabilities}
                                        updateSettings={props.updateSettings}
                                    /> :
                                    <StringifiedValue
                                        value={props.settings[key]}
                                    />
                        }
                        </dd>
                    </dl>
                )
            }
        </pre>
    )
}