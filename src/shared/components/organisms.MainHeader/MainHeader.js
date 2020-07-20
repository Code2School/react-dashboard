import React from 'react';

import { Menu, Header } from 'semantic-ui-react';

import classes from './MainHeader.module.less';
import avatar from '../../../assets/barryAllen-avatar.jpg';

import Logo from '../atom.Logo/Logo';
import Avatar from '../atom.Avatar/Avatar';

const MainHeader = () => (
    <Menu
        as={'header'}
        size='massive'
        attached
        className={classes.MainHeader}
        inverted
        borderless>
        <Menu.Item as={'h2'} style={{
        	marginBottom: 0,
			flex: 1
        }}>
            <Logo/>
        </Menu.Item>
        <Menu.Item className={classes.userInfo}>
            <Avatar image={avatar}/>
			<aside>
                <div className={classes.name}>Barry Allen</div>
                <div className={classes.role}>Admin</div>
            </aside>
        </Menu.Item>
    </Menu>
);

export default MainHeader;
