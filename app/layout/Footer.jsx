import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class Footer extends React.Component {
    render() {
        return <footer class="footer">
            <Button id="closeBtn" bsStyle="danger" href="javascript:window.close()">Close this Window</Button>
        </footer>
    }
}