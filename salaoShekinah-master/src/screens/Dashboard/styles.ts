import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { DatalistProps } from '.';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(27)}px;

  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
`;


export const UserInfo = styled.View` 
  flex-direction: row;

`;
export const UserContainer = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight()+ RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left:17px;
`;
export const UserGretting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size : ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size : ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogoutButton = styled(BorderlessButton)`

`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
  font-size : ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Agendamentos = styled.View`
  flex: 1%;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const AgendamentoList = styled(
  FlatList as new () => FlatList <DatalistProps>
  ).attrs({
  showsVerticalScrollIndicator:false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace()
  }
})
`
`;
export const TitleAgendamento= styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;

