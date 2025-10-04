'use client'; 

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PortfolioList from '../portfolios/PortfolioList';
import { i18nProvider } from './i18nProvider';
import { PortfolioCreate } from '../portfolios/PortfolioCreate';
import PortfolioEdit from '../portfolios/PortfolioEdit';

const dataProvider = jsonServerProvider(
    '/api'
); 

export default function AdminContainer() {
    return (
        <Admin 
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
        >
            <Resource 
                name="portfolios" 
                list={PortfolioList} 
                create={<PortfolioCreate />}
                edit={<PortfolioEdit />}
                recordRepresentation="title"
            />
        </Admin>
    );
}