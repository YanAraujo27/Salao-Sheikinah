import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  justify-content: flex-end;
  align-items: center;
`;

export const Footer= styled.View`
    width: 100%;
    padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
  text-align: center;

  padding-bottom: 20px;

`;
export const MidContainer = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex-direction: row;
`;

export const Icon = styled(MaterialIcons)`
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(72)}px;
`;

export const IconAgendamento = styled.View`

`;
export const IconZap = styled.Text`

`;
export const TitleAgendamento = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
export const TitleZap = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
export const TextAgendamento = styled.Text`
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TextZap = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;

export const ImgContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
    flex-direction: row;
`;
