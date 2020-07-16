import React from 'react';

import { Container, Header, Segment } from 'semantic-ui-react';

import MasterLayout from '../../templates/MasterLayout/MasterLayout';

const Home = () => {
	return (
		<MasterLayout>
			<Container as={'article'} fluid>
				<Segment as={'section'} basic>
					<Header as={'h1'}>Home</Header>
				</Segment>
			</Container>
		</MasterLayout>
	)
};

export default Home;
