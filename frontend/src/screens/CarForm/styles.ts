import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Spacing } from "../../styles";

export const Container = styled.View`
  backgroundColor: ${Colors.cardColor};
  padding: ${Spacing.padding}px
  display: flex;
  flex: 1;
  flexDirection: column;
  justifyContent: space-between;

`;

export const Field = styled.View`
  flexdirection: row;
  alignitems: center;
  justifycontent: space-between;
  paddingvertical: 8px;
`;

export const Input = styled.TextInput`
  height: 40px;
  bordercolor: #d8d8d8;
  borderwidth: 1px;
  borderradius: 4px;
  width: 250px;
  padding: 8px;
`;

export const Label = styled.Text`
  color: ${Colors.textColor};
  fontsize: 14px;
  fontfamily: Arial;
`;
export const ErrorLabel = styled.Text`
  color: ${Colors.alertColor};
  fontsize: 14px;
  fontfamily: Arial;
  paddingvertical: ${Spacing.extraMargin}px;
`;

export const Caption = styled.Text`
  color: ${Colors.disabledColor};
  fontsize: 14px;
  fontfamily: Arial;
`;

export const Loading = styled.Text`
  color: ${Colors.textColor};
  fontsize: 14px;
  fontfamily: Arial;
`;

export const Submit = styled.TouchableOpacity``;

export const Remove = styled.TouchableOpacity``;

export const ActionText = styled.Text`
  fontsize: 16px;
  fontfamily: Arial;
  textalign: center;
`;

export const Actions = styled.View`
  flexdirection: row;
  alignitems: center;
  justifycontent: space-between;
`;

export const DeleteIcon = styled(AntDesign).attrs(() => ({
  name: "delete",
  color: Colors.alertColor,
  size: 32,
}))``;

export const SubmitIcon = styled(AntDesign).attrs(() => ({
  name: "check",
  color: Colors.textColor,
  size: 32,
}))``;
/// added propsType
interface StarProps {
  star: any;
}
export const StarIcon = styled(AntDesign).attrs((props: StarProps) => ({
  name: props.star ? "star" : "staro",
  color: props.star ? Colors.starColor : Colors.textColor,
  size: 24,
}))``;
