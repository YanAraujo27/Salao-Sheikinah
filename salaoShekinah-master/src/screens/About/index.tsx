import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../components/Forms/Button';

import {
  Container,
  Header,
  Footer,
  Title,
  MidContainer,
  Icon,
  IconAgendamento,
  IconZap,
  TitleZap,
  TextZap,
  TextAgendamento,
  TitleAgendamento,
  ImgContainer,
} from "./styles";

import ZapSvg from '../../assets/whatsapp1.svg';
import ImgMain from '../../assets/imgMain.svg';
import ImgLuzes from '../../assets/luzes.svg';
import ImgMaquiagem from '../../assets/maquiagem.svg';
import ImgPenteados from '../../assets/penteados.svg';
import ImgCorte from '../../assets/corte.svg';
import ImgTratamento from '../../assets/tratamento.svg';
import ImgQuimica from '../../assets/quimica.svg';


const Icons = {
    agendamento: 'schedule',
}

const url = 'https://api.whatsapp.com/send?phone=5511986364371';
interface AboutProps{
    closeAbout: () => void;
}
export const About =({
    closeAbout
}:AboutProps) =>{

    return (
      <Container>
        <Header>
          <Button title="Voltar para Tela de Login" onPress={closeAbout} />
        </Header>

        <Footer>
          <MidContainer>
            <IconAgendamento>
              <Icon name={Icons.agendamento} />
              <TitleAgendamento>Horário de Atendimento</TitleAgendamento>
              <TextAgendamento>
                De segunda a sabado {`\n`}
                das 08:00 as 18:00 horas.
              </TextAgendamento>
            </IconAgendamento>
            <IconZap onPress={() => Linking.openURL(url)}>
              <ZapSvg width={RFValue(58)} height={RFValue(58)} />
              {`\n`}
              <TitleZap>Contato</TitleZap>
              {`\n`}
              <TextZap>
                Clique no balão acima para {`\n`}
                entrar em contato conosco {`\n`}
                via Whatsapp
              </TextZap>
            </IconZap>
          </MidContainer>
          <ImgMain
            width={RFValue(280)}
            height={RFValue(250)}
            alignSelf="center"
          />
          <Title>Confira alguns dos nossos Serviços</Title>
          <ImgContainer>
            <ImgCorte
              width={RFValue(220)}
              height={RFValue(220)}
            />
            <ImgLuzes
              width={RFValue(220)}
              height={RFValue(220)}
            />
            <ImgMaquiagem
              width={RFValue(220)}
              height={RFValue(220)}
            />
            <ImgPenteados
              width={RFValue(220)}
              height={RFValue(220)}
            />
            <ImgQuimica
              width={RFValue(220)}
              height={RFValue(220)}
            />
            <ImgTratamento
              width={RFValue(220)}
              height={RFValue(220)}
            />
          </ImgContainer>
        </Footer>
      </Container>
    );
}