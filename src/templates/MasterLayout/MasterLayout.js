import React, { useEffect, useState } from 'react';

import cx from 'classnames';

import classes from './MasterLayout.module.less';
import { isMobile, isAndroidDevice, isIosDevice } from '../../shared/utils/deviceDetector';

import MainHeader from '../../shared/components/organisms.MainHeader/MainHeader';
import MainNavigation from '../../shared/components/organisms.MainNavigation/MainNavigation';

const MasterLayout = ({children}) => {
	const [navPosition, setNavPosition] = useState('left');
	const [navVertical, setNavVertical] = useState(true);

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

	}, []);

	return (
		<>
			<MainHeader/>
			<MainNavigation
				className={cx(classes.mainNav, classes[navPosition])}
				position={navPosition}
				vertical={navVertical}/>
			<main
				className={cx(classes.mainSection, classes[navPosition])}>
				{children}
			</main>
		</>
	)
};

export default MasterLayout;
