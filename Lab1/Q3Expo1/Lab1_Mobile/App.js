import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';
export default () => {
  const [pressCount, setPressCount] = useState(0); 

  return (
    <View style={{ alignItems: "center", marginTop: 20}}>
      <Text>You have pressed the button: {pressCount}</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)} />
    </View>
  );
};
