import React from 'react';

// Libs
import { Header, Divider } from 'semantic-ui-react';

// Utils
import classes from './HeaderDivider.module.less';

const HeaderDivider = ({children, section = false}) => (
    <Divider
        className={classes.HeaderDivider}
        section={section}>
        <Header
            as={'h4'}
            className={classes.header}
            color={'grey'}>
            <span>{children}</span>
        </Header>
    </Divider>
);

export default HeaderDivider;
