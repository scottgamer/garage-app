import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ICar, RootStackParamList } from "../../types";
import Cover from "../../components/Cover";

import {
  Card,
  Header,
  Details,
  Line,
  Model,
  MakeYear,
  StarIcon,
  Description,
  EditIcon,
  Actions,
} from "./styles";
import { useCarDetailHook } from "./hook";

interface DetialProps {
  route: { params: ICar };
  navigation: StackNavigationProp<RootStackParamList>;
}

const Detail = ({ route, navigation }: DetialProps) => {
  const { car, star, onEdit, onToggleStar } = useCarDetailHook({
    route,
    navigation,
  });

  if (!car) {
    return null;
  }
  return (
    <ScrollView>
      <Card>
        <Cover source={car?.image?.url} />
        <Details>
          <Header>
            <Model>{car.model}</Model>
            <Actions>
              <TouchableOpacity onPress={onEdit}>
                <EditIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={onToggleStar}>
                <StarIcon star={star} />
              </TouchableOpacity>
            </Actions>
          </Header>
          <Line />
          <MakeYear>{car.year}</MakeYear>
          <Description>{JSON.stringify(car, null, 2)}</Description>
        </Details>
      </Card>
    </ScrollView>
  );
};

export default Detail;
