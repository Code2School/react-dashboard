import React from 'react';

// Libs
import { Card } from 'semantic-ui-react';
import cx from 'classnames';

// Utils
import classes from './Widget.module.less';

const Widget = ({ className, children, textAlign = 'left' }) => (
    <Card
        as={'article'}
        className={cx(className, classes.Widget)}
        fluid>
        <Card.Content
            as={'section'}
            className={className}
            textAlign={textAlign}>
            {children}
        </Card.Content>
    </Card>
);

export const WidgetHeader = React.memo(({ className, style, children, headerAddition }) => (
    <Card.Content
        className={classes.headerLayout}>
        <Card.Header
            as={'h3'}
            className={cx(className, classes.headerMain)}
            style={style}>
            {children}
        </Card.Header>
        <span>{headerAddition}</span>
    </Card.Content>
));
export const WidgetContent = React.memo(({ className, style, children }) => (
    <Card.Content
        as={'section'}
        className={className}
        style={style}>
        {children}
    </Card.Content>
));

Widget.Header = WidgetHeader;
Widget.Content = WidgetContent;

export default Widget;
