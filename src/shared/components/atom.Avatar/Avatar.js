import React from 'react';

import { Image } from 'semantic-ui-react';

const Avatar = ({ image }) => (
	<Image
		src={image}
		avatar
		bordered/>
);

export default Avatar;
