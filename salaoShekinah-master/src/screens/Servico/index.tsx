import React from "react";
import { FlatList } from "react-native";

import { Button } from "../../components/Forms/Button";
import { services } from "../../utils/services";

import {
    Container,
    Header,
    Title,
    ServiceItem,
    Icon,
    Name,
    Separator,
    Footer,
} from './styles'

interface Service{
    key:string;
    name:string;
}
interface CategoryProps{
    service: Service;
    setService: (category: Service) => void;
    closeSelectService: () => void;
}

export const Service = ({
    service,
    setService,
    closeSelectService
}:CategoryProps) =>{

    const handleServiceSelect = (service: Service) =>{
        setService(service);
    }
    

    return(
        <Container>
            <Header>
                <Title>
                    Serviço
                </Title>
            </Header>
            <FlatList 
                data={services}
                style={{flex:1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <ServiceItem
                        onPress={() => handleServiceSelect(item)}
                        isActive={service.key === item.key}
                    >
                        <Name>{item.name}</Name>
                    </ServiceItem>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />
            <Footer>
                <Button title='Selecionar'
                    onPress={closeSelectService}
                />
            </Footer>
            
        </Container>
    )
};