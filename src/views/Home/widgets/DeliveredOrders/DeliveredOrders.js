import React, { useState, useEffect } from 'react';

// Libs
import { ResponsiveBar } from '@nivo/bar';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

// Utils
import classes from './DeliveredOrders.module.less';
import { isMobile } from '../../../../shared/utils/deviceDetector';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';

const DeliveredOrders = ({ height }) => {
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
                Delivered Orders
            </Widget.Header>
            <Widget.Content style={{ height }}>
                <Grid columns={'equal'} padded>
                    <Grid.Row as={'section'}>
                        <Grid.Column as={'aside'} textAlign={'center'}>
                            <label>Total Delivered</label>
                            { record.totalDelivered && (<p>{record.totalDelivered}</p>) }
                        </Grid.Column>
                        <Grid.Column as={'aside'} textAlign={'center'}>
                            <label>Total Estimated</label>
                            { record.totalEstimated && (<p>{record.totalEstimated}</p>) }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div className={classes.chartContent}>
                    {
                        record.data &&
                        <ResponsiveBar
                            data={record.data}
                            keys={['Delivered', 'Estimated']}
                            indexBy="month"
                            margin={{ top: 10, right: 0, bottom: 90, left: 30 }}
                            padding={0.3}
                            groupMode="grouped"
                            colors={['rgb(8, 81, 156)', 'rgb(198, 219, 239)']}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 0,
                                tickPadding: 10,
                                tickRotation: isMobile() ? -45 : 0,
                                legend: '',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 0,
                                tickPadding: 10,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: -40,
                                legendPosition: 'middle'
                            }}
                            enableGridY={false}
                            enableLabel={false}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={'#fff'}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 50,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 12,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    }
                </div>
            </Widget.Content>
        </Widget>
    );
}

export default DeliveredOrders;
