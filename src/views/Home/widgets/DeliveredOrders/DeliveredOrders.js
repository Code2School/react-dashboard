import React, { useState, useEffect } from 'react';

// Libs
import { Loader, Dimmer } from 'semantic-ui-react';
import axios from 'axios';

// Utils
import classes from './DeliveredOrders.module.less';
import { isMobileOnly } from '../../../../shared/utils/deviceDetector';
import useTranslator from '../../../../shared/hooks/Translator';
import en from '../../translation.en';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';
import DeliveredOrdersGraphicReport from './components/DeliveredOrdersGraphicReport/DeliveredOrdersGraphicReport';
import DeliveredOrdersSummaryReport from './components/DeliveredOrdersSummaryReport/DeliveredOrdersSummaryReport';

const DeliveredOrders = ({ height }) => {
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
            const { data } = await axios.get('/api/orders');
            const { totalDelivered, totalEstimated, monthlyOrders } = data;
            const orderRecord = monthlyOrders.map(({ month, delivered, estimated }) => ({
                month,
                Delivered: delivered,
                Estimated: estimated,
            }));

            setRecord({
                totalDelivered,
                totalEstimated,
                data: orderRecord
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
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Widget>
            <Widget.Header>
                {t('WIDGET.DELIVERED_ORDERS')}
            </Widget.Header>
            <Widget.Content style={{
                height: isMobileOnly() ? `${parseInt(height) * 2 / 3}rem` : height
            }}>
                {
                    (Object.keys(record).length === 0 && record.constructor === Object) ?
                        <Dimmer active inverted>
                            <Loader>Loading</Loader>
                        </Dimmer> :
                        <>
                            <DeliveredOrdersSummaryReport
                                totalDelivered={record.totalDelivered}
                                totalEstimated={record.totalEstimated}/>
                            <div className={classes.chartContent}>
                                {
                                    record.data &&
                                    <DeliveredOrdersGraphicReport data={record.data}/>
                                }
                            </div>
                        </>
                }
            </Widget.Content>
        </Widget>
    );
}

export default DeliveredOrders;
