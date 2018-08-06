import { h } from 'preact'
import Video from './video'

describe('Video component', () => {
    it('should render', () => {
        expect(<Video />).toMatchSnapshot()
    });

    it('should pass class prop', () => {
        expect(<Video class="test" />).toMatchSnapshot()
    })
})