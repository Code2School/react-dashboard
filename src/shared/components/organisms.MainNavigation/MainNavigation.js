import React, { useState } from 'react';

import { Menu, Icon } from 'semantic-ui-react';

const MainNavigation = ({className, position = 'left', vertical = true}) => {
	const [activeItem, setActiveItem] = useState('home');

	const handleItemClick = (item) => setActiveItem(item);

	return (
		<Menu
			as={'nav'}
			className={className}
			icon='labeled'
			compact
			vertical={vertical}
			inverted
			widths={3}
			fixed={position}>
			<Menu.Item
				name='home'
				active={activeItem === 'home'}
				onClick={() => handleItemClick('home')}>
				<Icon name='home'/>
				Home
			</Menu.Item>

			<Menu.Item
				name='notifications'
				active={activeItem === 'notifications'}
				onClick={() => handleItemClick('notifications')}>
				<Icon name='bell'/>
				Notifications
			</Menu.Item>

			<Menu.Item
				name='settings'
				active={activeItem === 'settings'}
				onClick={() => handleItemClick('settings')}>
				<Icon name='setting'/>
				Settings
			</Menu.Item>
		</Menu>
	);
}

export default MainNavigation;
