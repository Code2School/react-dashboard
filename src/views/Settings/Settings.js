import React from 'react';

// Libs
import {
    Container,
    Header,
    Segment,
    Grid,
    Item,
    Button,
    Divider
} from 'semantic-ui-react';

// Utils
import useTranslator from '../../shared/hooks/Translator';
import en from './translation.en';
import avatar from '../../assets/barryAllen-avatar.jpg';
import classes from './Settings.module.less';

// Component
import MasterLayout from '../../templates/MasterLayout/MasterLayout';
import GeneralSettingsForm from './components/GeneralSettingsForm/GeneralSettingsForm';
import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm';
import HeaderDivider from '../../shared/components/molecules.HeaderDivider/HeaderDivider';
import Avatar from '../../shared/components/atom.Avatar/Avatar';

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
            <Container as={'article'}>
                <Segment as={'section'} basic>
                    <Grid columns={2}>
                        <Grid.Row>
                            {/* start main settings */}
                            <Grid.Column
                                mobile={16}
                                computer={10}>
                                <Segment>
                                    <Header as={'h2'}>{t('SETTINGS')}</Header>

                                    <HeaderDivider section>
                                        {t('GENERAL_SETTINGS')}
                                    </HeaderDivider>
                                    <GeneralSettingsForm/>

                                    <HeaderDivider section>
                                        {t('PERSONAL_DETAILS')}
                                    </HeaderDivider>
                                    <PersonalDetailsForm/>

                                </Segment>
                            </Grid.Column>
                            {/* end main settings */}

                            {/* start profile picture */}
                            <Grid.Column
                                mobile={16}
                                computer={6}>
                                <Segment>
                                    <Header as={'h2'}>{t('PROFILE_PICTURE')}</Header>
                                    <Item className={classes.avatarContainer}>
                                        <Avatar image={avatar} size={'medium'}/>
                                        <Divider/>
                                        <Button>Change</Button>
                                    </Item>
                                </Segment>
                            </Grid.Column>
                            {/* end profile picture */}
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        </MasterLayout>
    )
};

export default Settings;
