import React, { useState, useEffect } from 'react';

// Libs
import { Statistic } from 'semantic-ui-react';

// Utils
import classes from './DashboardCounter.module.less';
import useTranslator from '../../../../shared/hooks/Translator';

// Components
import Widget from '../../../../shared/components/molecules.Widget/Widget';
import en from '../../translation.en';

const DashboardCounter = ({ title, counter: initCounter, counterLimit, color }) => {
    const [counter, setCounter] = useState(initCounter);
    const COUNTER_LIMIT = counterLimit || 5000;
    const { t } = useTranslator({
        name: 'home',
        config: [
            {
                lang: 'en',
                resource: en
            }
        ]
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter > COUNTER_LIMIT) {
                clearInterval(interval);
            } else {
                setCounter(counter + Math.ceil(Math.random() * 100));
            }
        }, 5000)
        return () => clearInterval(interval);
    }, [counter]);

    return (
        <Widget className={classes.DashboardCounter} textAlign={'center'}>
            <Statistic size='large' color={color}>
                <Statistic.Label as={'h3'}>{t(title)}</Statistic.Label>
                <Statistic.Value as={'p'}>{counter.toLocaleString()}</Statistic.Value>
            </Statistic>
        </Widget>
    );
}

export default DashboardCounter;
