import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`

`;
export const DateButton = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};

    margin-bottom: 6px;
    border-radius: 5px;
    align-items: center;
`;
export const TimeButton = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};

    margin-bottom: 6px; 
    border-radius: 5px;
    align-items: center;
`;
export const SelectedDateTimeText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.tittle};
    margin-bottom: 12px; 
    margin-top: 12px; 
`;
export const SelectedDateTimeContainer = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.shape};

    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 8px;
    margin-top: 8px;
`;