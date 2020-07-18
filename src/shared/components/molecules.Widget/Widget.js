import React from 'react';

import { Card } from 'semantic-ui-react';

const Widget = ({ className, children }) => (
    <Card
        as={'article'}
        className={className}
        fluid>
        {children}
    </Card>
);

export const WidgetHeader = React.memo(({ className, children }) => (
    <Card.Header
        as={'h2'}
        className={className}>
        {children}
    </Card.Header>
));
export const WidgetContent = React.memo(({ className, children }) => (
    <Card.Content
        as={'section'}
        className={className}>
        {children}
    </Card.Content>
));

Widget.Header = WidgetHeader;
Widget.Content = WidgetContent;

export default Widget;
