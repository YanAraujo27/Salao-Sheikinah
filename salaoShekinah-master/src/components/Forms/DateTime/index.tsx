import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


import {
    Container ,
    DateButton,
    TimeButton,
    SelectedDateTimeText,
    SelectedDateTimeContainer
} from './styles';
import { Text, View, } from 'react-native'
import { Button } from '../Button';

export const DateTime = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return(
        <Container>
                <DateButton>
                    <Button onPress={showDatepicker} title="Seleciona a data" />
                </DateButton>
                <TimeButton>
                    <Button onPress={showTimepicker} title="Seleciona o horário" />
                </TimeButton>
                <SelectedDateTimeContainer>
                    <SelectedDateTimeText>Data e Horário Selecionado: {date.toLocaleString()}</SelectedDateTimeText>
                </SelectedDateTimeContainer>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
        </Container>
    )
}