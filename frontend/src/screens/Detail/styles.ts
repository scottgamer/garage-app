import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Spacing } from "../../styles";

export const Card = styled.View`
  backgroundcolor: ${Colors.cardColor};
  marginhorizontal: ${Spacing.padding}px;
  shadowopacity: 0.25;
  shadowradius: 20px;
  elevation: 2;
`;

export const Details = styled.View`
  padding: ${Spacing.padding}px;
`;

export const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  paddingVertical: ${Spacing.extraMargin}px;
`;

export const Model = styled.Text`
  color: ${Colors.textColor};
  fontSize: 30px;
  fontFamily: Arial;
`;

export const Line = styled.View`
  height: 1px;
  backgroundcolor: ${Colors.divisorColor};
  marginvertical: ${Spacing.extraMargin}px;
`;

export const Actions = styled.View`
  flexDirection: row;
`;
export const MakeYear = styled.Text`
  paddingvertical: ${Spacing.extraMargin}px;
`;

export const Description = styled.Text`
  color: ${Colors.textColor};
  fontSize: 16px;
  fontFamily: Arial;
`;
/// added propsType
interface StarProps {
  star: any;
}
export const StarIcon = styled(AntDesign).attrs((props: StarProps) => ({
  name: props.star ? "star" : "staro",
  color: props.star ? Colors.starColor : Colors.textColor,
  size: 24,
}))``;

export const EditIcon = styled(AntDesign).attrs(() => ({
  name: "edit",
  color: Colors.textColor,
  size: 24,
}))`
  marginhorizontal: ${Spacing.extraMargin}px;
`;
