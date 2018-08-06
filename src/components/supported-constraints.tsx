import { h, Component } from 'preact'

import * as styles from './supported-constraints.css'

import True from './true'
import False from './false'

interface ISupportedConstraintsProps {
    class?: string,
}

interface ISupportedConstraintsState {
    expanded: boolean,
}

interface ExtendedMediaTrackSupportedConstraints extends MediaTrackSupportedConstraints {
    [key: string]: any
}

export default class SupportedConstrains extends Component<ISupportedConstraintsProps,ISupportedConstraintsState> {
    state = {
        expanded: true,
    }

    toggleState = () => this.setState({ expanded: !this.state.expanded })

    render() {
        let constaints: ExtendedMediaTrackSupportedConstraints = {}

        const { expanded } = this.state

        if (expanded && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints) {
            constaints = navigator.mediaDevices.getSupportedConstraints()
        }
    
        return (
            <pre class={`${this.props.class||''}`}>
                <h3
                    class={`${styles.title} ${expanded ? styles.expanded:''}`}
                    onClick={this.toggleState}
                >navigator<br/>&nbsp;.mediaDevices<br/>&nbsp;.getSupportedConstraints():</h3>
                {
                    Object.keys(constaints).map(key => 
                        <div>{key}: {constaints[key] ? <True/> : <False/>}</div>
                    )
                }
            </pre>
        )
    }
}