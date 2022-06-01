import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container= styled.View`
    flex: 1;
`
export const Header= styled.View`
    width:100%;

    background-color: ${({theme})=>theme.colors.secondary};

    justify-content: flex-end;
    align-items: center;
`;

export const TitleWrapper= styled.View`
    align-items: center;
`;

export const Title= styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.shape};
    font-size: ${RFValue(30)}px;

    text-align: center;
`;

export const LoginTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;

    text-align: center;
    margin-bottom: 18px;
`;
export const Footer= styled.View` 
    width: 100%;

    background-color: ${({theme})=>theme.colors.background};
`;

export const TextMain= styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    text-align: center;

    margin-top: 20px;
`;

export const TitleAbout = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
  text-decoration: underline;
  text-align: center;

  padding-bottom: 20px;
`;

export const FooterWrapper = styled.View`
    margin-top:${RFPercentage(-4)}px;
    padding: 0 32px;

    justify-content: space-between;
`;

