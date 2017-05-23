import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return <div className='container-fluid'>            
                <div className='row'>
                    <NavMenu />
                </div>
                <div className='row'>
                    { this.props.body }
                </div>
            
        </div>;
    }
}
