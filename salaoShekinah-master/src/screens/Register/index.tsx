import React, { useState } from 'react';
import { 
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert,
    Text,
} from 'react-native';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
} from './styles';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { ServiceSelect } from '../../components/Forms/ServiceSelect'; 
import { DateTime } from '../../components/Forms/DateTime';
import { Service } from '../Servico';

interface FormData{
    name: string;
    email: string;
    telefone: number;
}
const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    email: Yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
    telefone: Yup
    .number()
    .typeError('Informe um valor válido')
    .positive('O valor deve ser positivo')
});

export const Register = () =>{
    const [serviceModalOpen, setServiceModalOpen] = useState(false);
    
    const [service, setService] = useState({
        key: 'service',
        name: 'Serviço',
    });

    const {
       control,
       handleSubmit,
       formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOpenModal = () => {
        setServiceModalOpen(true);
    };

    const handleCloseModal = () =>{
        setServiceModalOpen(false);
    };

    const handleRegister = (form: FormData) =>{
        if(service.key === 'service')
            return Alert.alert('Selecione um serviço');
        
        const data={
            name: form.name,
            email: form.email,
            telefone: form.telefone,
            service: service.key
        }
        console.log(data);
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>
                    Faça seu Agendamento
                </Title>
            </Header>
            <Form>
                <Fields>
                    <Text>Seus Dados:</Text>
                    <InputForm 
                        placeholder='Nome Completo'
                        name='name'
                        control={control}
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error = {errors.name && errors.name.message}
                    />
                    <InputForm 
                        placeholder='Email'
                        name='email'
                        control={control}
                        autoCapitalize='none'
                        autoCorrect={false}
                        error = {errors.email && errors.email.message}
                    />
                    <InputForm 
                        placeholder='Telefone'
                        name='telefone'
                        control={control}
                        keyboardType='numeric'
                        error={errors.telefone && errors.telefone.message}
                    />
                    <Text>Serviço:</Text>
                    <ServiceSelect
                     title={service.name}
                     onPress={handleOpenModal}
                    />
                    <Text>Data e Hora:</Text>
                    <DateTime />
                </Fields>
                <Button 
                    title='Enviar'
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>
            <Modal visible={serviceModalOpen}>
                <Service 
                    service={service}
                    setService={setService}
                    closeSelectService={handleCloseModal}
                />
            </Modal>
            
        </Container>
    </TouchableWithoutFeedback>
    );
}