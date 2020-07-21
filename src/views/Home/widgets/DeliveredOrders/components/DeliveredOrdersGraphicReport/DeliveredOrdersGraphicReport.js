import React from 'react';

// Libs
import { ResponsiveBar } from '@nivo/bar';

// Utils
import { isMobileOnly } from '../../../../../../shared/utils/deviceDetector';

const DeliveredOrdersGraphicReport = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={['Delivered', 'Estimated']}
        indexBy="month"
        margin={{ top: 10, right: 0, bottom: 50, left: 30 }}
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
            tickRotation: isMobileOnly() ? -45 : 0,
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
);

export default DeliveredOrdersGraphicReport;
