import React, { useState, useEffect } from 'react';

// Libs
import { Loader, Dimmer, Item } from 'semantic-ui-react';
import axios from 'axios';

// Utils
import { isMobileOnly } from '../../../../shared/utils/deviceDetector';
import useTranslator from '../../../../shared/hooks/Translator';
import en from '../../translation.en';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';
import VisitSeparationGraphicReport from './components/VisitSeparationGraphicReport/VisitSeparationGraphicReport';
import VisitSeparationTabularReport from './components/VisitSeparationTabularReport/VisitSeparationTabularReport';

const VisitSeparation = ({ height }) => {
    const { t } = useTranslator({
        name: 'home',
        config: [
            {
                lang: 'en',
                resource: en
            }
        ]
    });
    const [record, setRecord] = useState([]);

    const initData = async () => {
        try {
            const { data } = await axios.get('/api/devices/visit');

            setRecord(data);
        } catch (e) {
            // TODO: Error handle for orders
            console.log(e);
        }
    }

    useEffect(() => {
        initData();

        const interval = setInterval(() => {
            initData();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Widget>
            <Widget.Header>
                {t('WIDGET.VISIT_SEPARATION')}
            </Widget.Header>
            <Widget.Content>
                {
                    record ?
                        <>
                            <Item style={{
                                height: isMobileOnly() ? `${parseInt(height) * 2 / 3}rem` : height
                            }}>
                                <VisitSeparationGraphicReport data={record}/>
                            </Item>
                            <VisitSeparationTabularReport data={record}/>
                        </>
                        :
                        <Dimmer active inverted>
                            <Loader>Loading</Loader>
                        </Dimmer>
                }
            </Widget.Content>
        </Widget>
    );
}

export default VisitSeparation;
