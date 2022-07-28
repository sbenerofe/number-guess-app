import { View, Text, Button } from 'react-native';
export default function PrimaryButton(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}
