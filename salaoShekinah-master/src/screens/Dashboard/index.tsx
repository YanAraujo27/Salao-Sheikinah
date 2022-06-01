import React, { useState } from "react";
import { Text } from "react-native";
import { AgendamentoCard, AgendamentoCardProps } from "../../components/AgendamentoCard";
import { agendamentos } from "../../utils/agendamentos";
import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  Title,
  TitleAgendamento,
  LogoutButton,
  Agendamentos,
  AgendamentoList,
} 
from "./styles";

export interface DatalistProps extends AgendamentoCardProps{
  id:string;
}

export const Dashboard = () =>{
  const [data, setData] = useState(agendamentos);
    return (
      <Container>
        <Header>
          <UserContainer>
            <UserInfo>
              <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/92161850?v=4'}}
              />
              <User>
                <UserGretting>Olá,</UserGretting>
                <UserName>Ag</UserName>
              </User>
            </UserInfo>
            <LogoutButton onPress={()=>{}}>
              <Icon name="power" />
            </ LogoutButton>
          </UserContainer>
          <Title>Seus Agendamentos</Title>
        </Header>
        <Agendamentos>
        <TitleAgendamento>
          Seus Agendamentos
        </TitleAgendamento>
        <AgendamentoCard data={agendamentos[0]} />
        </Agendamentos>

      </Container>
    );
}