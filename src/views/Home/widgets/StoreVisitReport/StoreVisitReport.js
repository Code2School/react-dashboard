import React, { useState, useEffect } from 'react';

// Libs
import axios from 'axios';

// Utils
import { isMobileOnly } from '../../../../shared/utils/deviceDetector';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';
import useTranslator from '../../../../shared/hooks/Translator';
import en from '../../translation.en';
import { Dimmer, Loader } from 'semantic-ui-react';
import StoreVisitGraphicReport from './components/StoreVisitGraphicReport/StoreVisitGraphicReport';

const StoreVisitReport = ({ height }) => {
    const { t } = useTranslator({
        name: 'home',
        config: [
            {
                lang: 'en',
                resource: en
            }
        ]
    });
    const [record, setRecord] = useState({});
    const initData = async () => {
        try {
            const { data } = await axios.get('/api/visitors');
            const { currentYearVisitors, lastYearVisitors, monthlyVisitors } = data;
            const thisYearRecord = monthlyVisitors.map(({ month, currentYear }) => (
                {
                    x: month,
                    y: currentYear
                }
            ));
            const lastYearRecord = monthlyVisitors.map(({ month, lastYear }) => (
                {
                    x: month,
                    y: lastYear
                }
            ));
            setRecord({
                currentYearVisitors,
                lastYearVisitors,
                data: [
                    {
                        id: 'Last Year',
                        data: lastYearRecord
                    },
                    {
                        id: 'This Year',
                        data: thisYearRecord
                    }
                ]
            });
        } catch (e) {
            // TODO: Error handle for orders
            console.log(e);
        }
    }

    useEffect(() => {
        initData();
        const interval = setInterval(() => {
            initData();

        }, 2000)
        return () => clearInterval(interval);
    }, []);

    return (
        <Widget>
            <Widget.Header>
                {t('WIDGET.ONLINE_STORE_VISITORS')}
            </Widget.Header>
            <Widget.Content style={{
                height: isMobileOnly() ? `${parseInt(height) * 2 / 3}rem` : height
            }}>
                {
                    record.data ?
                        <StoreVisitGraphicReport data={record.data}/> :
                        <Dimmer active inverted>
                            <Loader>Loading</Loader>
                        </Dimmer>
                }
            </Widget.Content>
        </Widget>
    );
}

export default StoreVisitReport;
