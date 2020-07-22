import React from 'react';

import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Logo = () => (
    <Link to={'/'}>
        <Icon name={'cart'}/>
        <span>Store</span>
    </Link>
);

export default Logo;
