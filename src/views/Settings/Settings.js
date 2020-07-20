import React from 'react';

// Libs
import { Container, Header, Segment } from 'semantic-ui-react';

// Utils
import useTranslator from '../../shared/hooks/Translator';
import en from './translation.en';

// Component
import MasterLayout from '../../templates/MasterLayout/MasterLayout';

const Settings = () => {
    const { t } = useTranslator({
        name: 'settings',
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
                    <Header as={'h2'}>{t('SETTINGS')}</Header>
                </Segment>
            </Container>
        </MasterLayout>
    )
};

export default Settings;
