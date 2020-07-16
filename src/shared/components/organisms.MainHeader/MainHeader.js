import React from 'react';

import { Menu } from 'semantic-ui-react';

import classes from './MainHeader.module.less';

import Logo from '../atom.Logo/Logo';

const MainHeader = () => (
	<Menu
		as={'header'}
		size='massive'
		fixed={'top'}
		className={classes.MainHeader}
		inverted
		borderless>
		<Menu.Item as={'h2'}>
			<Logo />
		</Menu.Item>
	</Menu>
);

export default MainHeader;
