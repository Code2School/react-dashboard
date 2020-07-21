import React from 'react';

// Libs
import { Container, Segment } from 'semantic-ui-react';

// Utils
import useTranslator from '../../shared/hooks/Translator';
import en from './translation.en';
import widgetMapper from './widgets/widgets.mapper';
import { rows } from './widgets';

// Component
import MasterLayout from '../../templates/MasterLayout/MasterLayout';
import WidgetContentLoader from '../../shared/components/organisms.WidgetContentLoader/WidgetContentLoader';

const Home = () => {
	const { t } = useTranslator({
		name: 'home',
		config: [
			{
				lang: 'en',
				resource: en
			}
		]
	});

	return (
		<MasterLayout>
			<Container as={'article'} fluid>
				<Segment as={'section'} basic>
					<WidgetContentLoader rows={rows} mapper={widgetMapper}/>
				</Segment>
			</Container>
		</MasterLayout>
	)
};

export default Home;
