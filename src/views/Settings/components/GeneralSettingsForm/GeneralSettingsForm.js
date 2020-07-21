import React, { useState, useEffect } from 'react';

import { Form } from 'semantic-ui-react';

import { twelveHourGenerator } from '../../../../shared/utils/hourSeriesGenerator';
import useTranslator from '../../../../shared/hooks/Translator';
import en from '../../translation.en';

const GeneralSettingsForm = () => {
    const { t } = useTranslator({
        name: 'settings',
        config: [
            {
                lang: 'en',
                resource: en
            }
        ]
    });
    const languageOptions = [
        { key: 'en', value: 'en', text: 'English (US)' },
    ]

    const timeZoneOptions = [
        { key: 'us-ny', value: 'us-ny', text: '(GMT-05:00) Eastern Time - New York' },
    ]

    const [hourSeriesOption, setHourSeriesOption] = useState([]);
    const [workFrom, setWorkFrom] = useState('');
    const [workTo, setWorkTo] = useState('');

    useEffect(() => {
        const hourSeries = twelveHourGenerator();
        const hourOption = hourSeries.map(({ key, time, midday }) => (
            {
                key,
                value: `${time}-${midday}`,
                text: `${time}:00 ${midday}`
            }
        ));
        setHourSeriesOption(hourOption);
        setWorkFrom('8-AM');
        setWorkTo('5-PM');
    }, []);

    const handleWorkFromSelect = (e, { value }) => {
        setWorkFrom(value);
    };

    const handleWorkToSelect = (e, { value }) => {
        setWorkTo(value);
    }

    return (
        <Form widths={'equal'}>
            <Form.Group>
                <Form.Select
                    label={t('FORM.LANGUAGE')}
                    placeholder={t('FORM.LANGUAGE_PLACEHOLDER')}
                    options={languageOptions}
                    value={'en'}
                    fluid/>
                <Form.Select
                    label={t('FORM.TIME_ZONE')}
                    placeholder={t('FORM.TIME_ZONE_PLACEHOLDER')}
                    options={timeZoneOptions}
                    value={'us-ny'}
                    fluid/>
            </Form.Group>
            <Form.Field label={t('FORM.WORK_HOURS')}/>

            {
                hourSeriesOption.length > 0 &&
                <Form.Group inline>
                    <Form.Select
                        label={t('FORM.FROM')}
                        placeholder={t('FORM.FROM')}
                        options={hourSeriesOption}
                        value={workFrom}
                        onChange={handleWorkFromSelect}
                        fluid/>
                    <Form.Select
                        label={t('FORM.TO')}
                        placeholder={t('FORM.TO')}
                        options={hourSeriesOption}
                        value={workTo}
                        onChange={handleWorkToSelect}
                        fluid/>
                </Form.Group>
            }
        </Form>
    );
}

export default GeneralSettingsForm;
