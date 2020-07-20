import React, { useState, useEffect } from 'react';

// Libs
import { ResponsiveLine } from '@nivo/line';
import axios from 'axios';

// Utils
import { isMobileOnly } from '../../../../shared/utils/deviceDetector';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';

const StoreVisitReport = ({ height }) => {
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
                Online Store Visitors
            </Widget.Header>
            <Widget.Content style={{
                height: isMobileOnly() ? `${parseInt(height)*2/3}rem` : height
            }}>
                {
                    record.data &&
                    <ResponsiveLine
                        data={record.data}
                        margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        curve="natural"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 0,
                            tickPadding: 10,
                            tickRotation: isMobileOnly() ? -45 : 0,
                            legend: '',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 0,
                            tickPadding: 10,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        colors={['rgb(198, 219, 239)', 'rgb(8, 81, 156)']}
                        enableGridX={false}
                        enableGridY={false}
                        pointSize={5}
                        pointColor={{ from: 'color', modifiers: [] }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'color', modifiers: [] }}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 50,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                }
            </Widget.Content>
        </Widget>
    );
}

export default StoreVisitReport;
