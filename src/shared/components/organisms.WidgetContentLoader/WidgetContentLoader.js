import React from 'react';

// Libs
import { Grid } from 'semantic-ui-react';

const WidgetContentLoader = ({ rows, mapper }) => (
    <Grid doubling>
        {
            !!rows &&
            rows.map((row, rowKey) => (
                <Grid.Row key={rowKey}>
                    {
                        !!row.columns &&
                        row.columns.map((column, columnKey) => {
                            const {
                                width,
                                responsive = {}
                            } = column || {};
                            return (
                                <Grid.Column
                                    key={columnKey}
                                    mobile={width || 16}
                                    tablet={responsive.tablet || undefined}
                                    computer={responsive.computer || undefined}>
                                    {
                                        !!column.cells &&
                                        column.cells.map(cell => {
                                            const { widget, property } = cell;
                                            const WidgetComponent = mapper[widget];
                                            return (<WidgetComponent key={widget} {...property}/>)
                                        })
                                    }
                                </Grid.Column>
                            )
                        })
                    }
                </Grid.Row>
            ))
        }
    </Grid>
);

export default WidgetContentLoader;
