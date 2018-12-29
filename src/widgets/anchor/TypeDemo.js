import React from 'react';
import {Anchor} from '@lugia/lugia-web';

const { Link } = Anchor;

export default class AnchorDemo extends React.Component {
    render(){
        return (
            <div>
                <Anchor slideType="none">
                    <Link title="anchor-link1" href="#anchor-link1" />
                    <Link title="anchor-link2" href="#anchor-link2" />
                    <Link title="anchor-link3" href="#anchor-link3">
                        <Link title="anchor-link3.1" href="#anchor-link3.1" />
                        <Link title="anchor-link3.2" href="#anchor-link3.2" />
                    </Link>
                    <Link title="anchor-link4" href="#anchor-link4" />
                </Anchor>
            </div>

        );
    }
}
