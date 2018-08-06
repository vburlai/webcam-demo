import { h, Component } from 'preact'

interface IVideoProps {
    srcObject?: MediaStream,
    class?: string,
}

export default class Video extends Component<IVideoProps, null> {
    ref: HTMLVideoElement = null

    static defaultProps = {
        class: ''
    }

    componentDidMount() {
        if (this.ref) {
            this.ref.srcObject = this.props.srcObject
            this.ref.onloadedmetadata = () => this.ref.play()
        }
    }

    render() {
        return (
            <video ref={r => this.ref = r} class={`${this.props.class}`}/>
        )
    }
}