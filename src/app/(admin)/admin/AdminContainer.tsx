// src/app/(admin)/admin/AdminContainer.tsx

'use client'; 

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PortfolioList from '../portfolios/PortfolioList';
import { i18nProvider } from './i18nProvider';

const dataProvider = simpleRestProvider('/api'); 

export default function AdminContainer() {
    return (
        <Admin 
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
        >
            <Resource 
                name="portfolios" 
                list={PortfolioList} 
            />
        </Admin>
    );
}