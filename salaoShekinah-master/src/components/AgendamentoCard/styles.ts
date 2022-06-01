import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.shape};
    flex: 1;
`;

export const Title= styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Category= styled.View`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: column;
    align-items: center;
`;


export const Footer= styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;
export const ServiceName= styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.tittle};
`;
export const Date= styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.tittle};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const NomeP= styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.tittle};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};

`;