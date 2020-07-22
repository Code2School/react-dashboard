import React from 'react';

// Libs
import { Table } from 'semantic-ui-react';

const VisitSeparationTabularReport = ({ data = [] }) => (
    <Table basic='very'>
        <Table.Body>
            {
                data.map(({ id, label, value }) => (
                    <Table.Row key={id}>
                        <Table.Cell>{label}</Table.Cell>
                        <Table.Cell>{value}</Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
);

export default VisitSeparationTabularReport;
