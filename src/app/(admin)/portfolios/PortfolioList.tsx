
'use client';

import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const PortfolioList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" label="Título do Projeto" />
            <DateField source="date" label="Data de Criação" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PortfolioList;