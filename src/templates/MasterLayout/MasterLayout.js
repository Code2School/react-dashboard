import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import cx from 'classnames';

import classes from './MasterLayout.module.less';
import {
    isMobile,
    isAndroidDevice,
    isIosDevice
} from '../../shared/utils/deviceDetector';

import MainHeader from '../../shared/components/organisms.MainHeader/MainHeader';
import MainNavigation from '../../shared/components/organisms.MainNavigation/MainNavigation';

const MasterLayout = ({ children }) => {
    const [navPosition, setNavPosition] = useState('left');
    const [navVertical, setNavVertical] = useState(true);
    const location = useLocation();

    const navigations = [
        {
            id: 'home',
            title: 'Home',
            icon: 'home',
            to: '/'
        },
        {
            id: 'notifications',
            title: 'Notifications',
            icon: 'bell',
            to: '/notifications'
        },
        {
            id: 'settings',
            title: 'Settings',
            icon: 'setting',
            to: '/settings'
        },
        {
            id: 'logout',
            title: 'Logout',
            icon: 'sign-out',
        }
    ];

    const [activeNavigation, setActiveNavigation] = useState(navigations[0]);

    const handleMenuActivated = (item = {}) => {
        setActiveNavigation(navigations.find(navigationItem => navigationItem.to === location.pathname));
    }

    useEffect(() => {

        if (isMobile()) {
            setNavVertical(false);
        }

        if (isAndroidDevice()) {
            setNavPosition('top');
        }

        if (isIosDevice()) {
            setNavPosition('bottom');
        }

        handleMenuActivated();

    }, []);

    return (
        <div className={classes.MasterLayout}>
            <MainHeader/>
            <main
                className={cx(classes.mainSection, classes[navPosition])}>
                <MainNavigation
                    className={classes.mainNav}
                    menus={navigations}
                    activeItem={activeNavigation}
                    position={navPosition}
                    vertical={navVertical}
                    menuActived={handleMenuActivated}/>
                <div
                    className={classes.pageContent}>
                    {children}
                </div>
            </main>
        </div>
    )
};

export default MasterLayout;
