import React from 'react';

// Libs
import { Image } from 'semantic-ui-react';
import cx from 'classnames';

// Utils
import classes from './Avatar.module.less';

const Avatar = ({ image, size = 'mini' }) => (
    <Image
        src={image}
        className={cx(classes.Avatar, { [classes.smallBorder]: size === 'mini' })}
        size={size}
        avatar
        spaced/>
);

export default Avatar;
