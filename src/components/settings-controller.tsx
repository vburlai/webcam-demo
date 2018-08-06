import { h, Component } from 'preact'

import VideoSettings from './video-settings'

interface ISettingsControllerProps {
    stream: MediaStream,
    class?: string,
}

export interface SettingsControllerCapabilities extends MediaTrackCapabilities {
    [key: string]: any
}

export interface SettingsControllerSettings extends MediaTrackSettings {
    [key: string]: any
}

interface ISettingsControllerState {
    stream: MediaStream,
    settings: SettingsControllerSettings,
    capabilities: SettingsControllerCapabilities,
}

export type SettingsControllerUpdateSettings = (s: MediaTrackSettings) => Promise<void>

export default class SettingsContoller extends Component<ISettingsControllerProps, ISettingsControllerState> {
    state = {
        stream: this.props.stream,
        settings: this.props.stream.getVideoTracks()[0].getSettings ?
            this.props.stream.getVideoTracks()[0].getSettings() : {},
        capabilities: this.props.stream.getVideoTracks()[0].getCapabilities ?
            this.props.stream.getVideoTracks()[0].getCapabilities() : {},
    }

    get videoTrack(): MediaStreamTrack {
        return this.state.stream.getVideoTracks()[0]
    }

    applyVideoTrackConstraints: SettingsControllerUpdateSettings = (settings) => 
        this.videoTrack.applyConstraints(settings)

    updateSettings: SettingsControllerUpdateSettings = (settings) => {
        const newSettings = {
            ...this.state.settings,
            ...settings,
        }

        return this.applyVideoTrackConstraints(newSettings)
            .then(() => {
                this.setState({ settings: newSettings })
            })
    }

    render() {
        return (
            <div class={`${this.props.class||''}`}>
                <VideoSettings
                    settings={this.state.settings}
                    capabilities={this.state.capabilities}
                    updateSettings={this.updateSettings}
                />
            </div>
        )
    }
}