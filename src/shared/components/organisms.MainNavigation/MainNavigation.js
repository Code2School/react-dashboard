import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Libs
import { Menu, Icon } from 'semantic-ui-react';
import cx from 'classnames';

// Utils
import classes from './MainNavigation.module.less';

const MainNavigation = ({ className, vertical = true, menus = [], activeItem, menuActived }) => {
    const handleItemClick = (item) => menuActived(item)

    return (
        <Menu
            as={'nav'}
            className={cx(className, classes.MainNavigation)}
            icon='labeled'
            compact
            vertical={vertical}
            inverted
            widths={menus.length}
            attached
            borderless>

            {
                menus.length > 0 &&
                menus.map(({ id, title, icon, to }) => (
					<Menu.Item
						as={Link}
						to={to || '#'}
						key={id}
						name={id}
						active={activeItem.id === id}
						className={classes.menuItem}
						onClick={() => handleItemClick({ id, title, icon, to })}>
						<Icon name={icon}/>
						{title}
					</Menu.Item>
                ))
            }
        </Menu>
    );
}

export default MainNavigation;
