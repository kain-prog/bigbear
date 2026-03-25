'use client';

import { 
    Create, 
    SimpleForm, 
    TextInput, 
    ImageInput, 
    required,
    useNotify,
    useRedirect,
    SaveButton,
    Toolbar,
    FileField 
} from 'react-admin';
import { Box } from '@mui/material';
import Payload from '@/app/types/Payload';

export const convertFileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });

export const transformPortfolio = async (data: any) => {

    if (data.image && data.image.rawFile instanceof File) {
        try {
            const base64String = await convertFileToBase64(data.image.rawFile);
            
            return {
                ...data,
                image: base64String, 
            };
        } catch (error) {
            throw new Error('Falha ao converter imagem para Base64.');
        }
    }
    return data;
};

const CustomToolbar = (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSuccess = () => {
        notify('Projeto criado com sucesso!', { type: 'success' });
        redirect('list', 'portfolios');
    };

    const handleError = (error: any) => {

        const errorMessage = error?.body?.error || error.message || 'Erro desconhecido ao criar projeto.';
        notify(`Erro ao criar projeto: ${errorMessage}`, { type: 'error' });
    };

    return (
        <Toolbar {...props} sx={{ justifyContent: 'space-between' }}>
            <SaveButton 
                mutationOptions={{ 
                    onSuccess: handleSuccess, 
                    onError: handleError 
                }} 
                label="Salvar Projeto"
            />
        </Toolbar>
    );
};

// 4. Componente Principal
export const PortfolioCreate = () => (
    <Create 
        title="Criar Novo Projeto" 
        transform={transformPortfolio}
    >
        <SimpleForm toolbar={<CustomToolbar />}>
            <Box sx={{ width: 500 }}>
                <TextInput 
                    source="title" 
                    label="Título do Projeto" 
                    validate={[required()]} 
                    fullWidth
                />

                <TextInput 
                    source="url" 
                    label="URL do Projeto" 
                    validate={[required()]} 
                    fullWidth
                />
                
                <ImageInput 
                    source="image" 
                    label="Imagem Principal" 
                    maxSize={5000000} // 5MB limit
                    validate={[required()]}
                >
                    <FileField source="src" title="title" />
                </ImageInput>
            </Box>
        </SimpleForm>
    </Create>
);

export default PortfolioCreate;