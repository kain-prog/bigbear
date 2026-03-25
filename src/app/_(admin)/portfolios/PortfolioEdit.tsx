'use client';

import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    ImageInput, 
    FileField, 
    required, 
    Toolbar, 
    SaveButton, 
    useNotify, 
    useRedirect 
} from 'react-admin';
import { Box } from '@mui/material';
import { convertFileToBase64, transformPortfolio } from './PortfolioCreate'; // Reaproveita funções

const CustomToolbarEdit = (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar {...props} sx={{ justifyContent: 'space-between' }}>
            <SaveButton 
                mutationOptions={{
                    onSuccess: () => {
                        notify('Projeto atualizado com sucesso!', { type: 'success' });
                        redirect('list', 'portfolios');
                    },
                    onError: (error) => {
                        notify(`Erro ao atualizar projeto: ${(error as any).message}`, { type: 'error' });
                    },
                }}
                label="Salvar Alterações"
            />
        </Toolbar>
    );
};

export const PortfolioEdit = () => (
    <Edit title="Editar Projeto" transform={transformPortfolio}>
        <SimpleForm toolbar={<CustomToolbarEdit />}>
            <Box sx={{ width: 500 }}>
                <TextInput source="title" label="Título do Projeto" validate={[required()]} fullWidth />
                <TextInput source="url" label="URL do Projeto" fullWidth />
                <ImageInput source="image" label="Imagem Principal" maxSize={5000000}>
                    <FileField source="src" title="title" />
                </ImageInput>
            </Box>
        </SimpleForm>
    </Edit>
);

export default PortfolioEdit;
