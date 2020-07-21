import React from 'react';

import { Form } from 'semantic-ui-react';
import useTranslator from '../../../../shared/hooks/Translator';
import en from '../../translation.en';

const genderOptions = [
    { key: 'male', value: 'male', text: 'Male' },
    { key: 'female', value: 'female', text: 'Female' },
    { key: 'other', value: 'other', text: 'Other' },
]

const PersonalDetailsForm = () => {
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
        <Form widths={'equal'}>
            <Form.Group inline>
                <Form.Input
                    label={t('FORM.FIRST_NAME')}
                    placeholder={t('FORM.FIRST_NAME_PLACEHOLDER')}
                    value={'Barry'}
                    inline
                    fluid />

                <Form.Input
                    label={t('FORM.LAST_NAME')}
                    placeholder={t('FORM.LAST_NAME_PLACEHOLDER')}
                    value={'Allen'}
                    inline
                    fluid />
            </Form.Group>
            <Form.Group inline>
                <Form.Select
                    label={t('FORM.GENDER')}
                    options={genderOptions}
                    placeholder={t('FORM.GENDER_PLACEHOLDER')}
                    value={'male'}
                    fluid />
                <Form.Input
                    label={t('FORM.EMAIL')}
                    placeholder={t('FORM.EMAIL_PLACEHOLDER')}
                    value={'barry.allen@gmail.com'}
                    inline
                    fluid />

            </Form.Group>
            <Form.Group inline>
                <Form.Input
                    label={t('FORM.PHONE')}
                    placeholder={t('FORM.PHONE_PLACEHOLDER')}
                    value={'001652432344'}
                    inline
                    fluid />
                <Form.Input
                    label={t('FORM.LOCATION')}
                    placeholder={t('FORM.LOCATION_PLACEHOLDER')}
                    value={'USA, New York'}
                    inline
                    fluid />

            </Form.Group>
        </Form>
    );
}

export default PersonalDetailsForm;
