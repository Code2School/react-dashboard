import React from 'react';

// Libs
import { Grid } from 'semantic-ui-react';

// Utils
import classes from '../../DeliveredOrders.module.less';
import useTranslator from '../../../../../../shared/hooks/Translator';
import en from '../../../../translation.en';

const DeliveredOrdersSummaryReport = ({ totalDelivered, totalEstimated }) => {
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
        <Grid columns={'equal'} padded>
            <Grid.Row as={'section'}>
                <Grid.Column as={'aside'} textAlign={'center'}>
                    <label>{t('WIDGET.TOTAL_DELIVERED')}</label>
                    {totalDelivered && (
                        <p className={classes.totalDelivered}>{totalDelivered}</p>)}
                </Grid.Column>
                <Grid.Column as={'aside'} textAlign={'center'}>
                    <label>{t('WIDGET.TOTAL_ESTIMATED')}</label>
                    {totalEstimated && (
                        <p className={classes.totalEstimated}>{totalEstimated}</p>)}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default DeliveredOrdersSummaryReport;
