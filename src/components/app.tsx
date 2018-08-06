import { h } from 'preact'

import Video from './video'
import SupportedConstaints from './supported-constraints'
import SettingsContoller from './settings-controller'

import * as styles from './app.css'

interface IAppProps {
    stream: MediaStream
}

export default (props: IAppProps) => (
    <div>
        <h1>Playing with webcam (modern browser required)</h1>
        <div class={`${styles.container}`}>
            <Video srcObject={props.stream} class={`${styles.column} ${styles.spring}`} />
            <div class={`${styles.column} ${styles.small}`}>
                <SettingsContoller stream={props.stream} />
                <SupportedConstaints class={`${styles.mindthegap}`} />
            </div>
        </div>
    </div>
)