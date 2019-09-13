import React from 'react';
import Aux from '../../hoc/AuxWrapper';
import clasess from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div className="">Toolbar, SideDrawer, Backdrop</div>
        <main className={clasess.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;