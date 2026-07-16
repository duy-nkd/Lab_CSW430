import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';

export default function App() {
const [displayValue, setDisplayValue] = useState('0');
const [operator, setOperator] = useState(null);
const [firstValue, setFirstValue] = useState('');

const handleNumberInput = (num) => {
  if (displayValue === '0') {
    setDisplayValue(num.toString());
  } else {
    setDisplayValue(displayValue + num);
  }
};

const handleOperatorInput = (operator) => {
  setOperator(operator);
  setFirstValue(displayValue);
  setDisplayValue('0');
};

const handleEqual = () => {
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(displayValue);

  if (operator === '+') {
    setDisplayValue((num1 + num2).toString());
  } else if (operator === '-') {
    setDisplayValue((num1 - num2).toString());
  } else if (operator === '*') {
    setDisplayValue((num1 * num2).toString());
  } else if (operator === '/') {
    setDisplayValue((num1 / num2).toString());
  }

  setOperator(null);
  setFirstValue('');
};

const handleClear = () => {
  setDisplayValue('0');
  setOperator(null);
  setFirstValue('');
};
return (
  <SafeAreaView style={styles.container}>

    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{displayValue}</Text>
    </View>

    <View style={styles.keypad}>

      <View style={styles.row}>
        {["7","8","9"].map(num=>(
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={()=>handleNumberInput(num)}>
            <Text style={styles.textNum}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={()=>handleOperatorInput("/")}>
          <Text style={styles.textOp}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["4","5","6"].map(num=>(
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={()=>handleNumberInput(num)}>
            <Text style={styles.textNum}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={()=>handleOperatorInput("*")}>
          <Text style={styles.textOp}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["1","2","3"].map(num=>(
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={()=>handleNumberInput(num)}>
            <Text style={styles.textNum}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={()=>handleOperatorInput("-")}>
          <Text style={styles.textOp}>−</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>

        <TouchableOpacity
          style={styles.zeroButton}
          onPress={()=>handleNumberInput("0")}>
          <Text style={styles.textNum}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={()=>handleOperatorInput("+")}>
          <Text style={styles.textOp}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,styles.equalButton]}
          onPress={handleEqual}>
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.clearRow}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}>
          <Text style={styles.textNum}>C</Text>
        </TouchableOpacity>
      </View>

    </View>

  </SafeAreaView>
);

}