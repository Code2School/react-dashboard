import React from 'react';

// Libs
import { Image } from 'semantic-ui-react';

// Utils
import classes from './Avatar.module.less';

const Avatar = ({ image }) => (
	<Image
		src={image}
		className={classes.Avatar}
		avatar
		spaced/>
);

export default Avatar;
