import { h, render } from 'preact'

import App from './components/app'

const constraints = {
    video: true
}

try {
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            render(
                <App stream={stream} />,
                document.getElementById('app')
            )
        })
} catch (error) {
    render(
        <div>
            <h1>Browser does not support/allow camera API access</h1>
            <h2>Try using latest Chrome</h2>
            <pre>{error.message}</pre>
        </div>,
        document.getElementById('error')
    )
}