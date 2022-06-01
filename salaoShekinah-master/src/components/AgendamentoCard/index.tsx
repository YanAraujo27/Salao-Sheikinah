import React from 'react';
import { FlatList } from 'react-native';
import { agendamentos } from '../../utils/agendamentos';
import { 
    Container,
    Title,
    Category,
    Footer,
    ServiceName,
    Date,
    Separator,
    NomeP
 } from './styles';

export interface AgendamentoCardProps{
    title: string;
    key: string;
    date: string;
    type: string;
    nomeProfissional: string;
};

interface Props{
    data: AgendamentoCardProps;
}

export const AgendamentoCard = ({data}: Props) => {

    return(
        <Container>
            <FlatList 
                data={agendamentos}
                style={{flex:1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                <Category>
                    <Category >
                        <ServiceName>Tipo de Serviço: {item.type}</ServiceName>
                        <NomeP>Nome do Profissional: {item.nomeProfissional}</NomeP>
                        <Date>Data do Atendimento: {item.date}</Date>
                    </Category>
                </Category>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />
        </Container>
    )
}