import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-','=',]

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const fistNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    // Faz ação referente tecla pressionada
    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString());
        return;
      case 'x':
        setCurrentNumber((fistNumber * lastNumber).toString());
        return;
      case '/':
        setCurrentNumber((fistNumber / lastNumber).toString());
        break;
      default:
    }
  }

  function handleInput(buttonPressed) {
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        setCurrentNumber (currentNumber * ( -1));
        return;
      default:
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={styles.container}>
      <View style={styles.results} />
      <Text style={styles.historyText}>{lastNumber}</Text>
      <Text style={styles.resultText}>{currentNumber}</Text>

      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ? // Mapeamento do botão =
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: '#2a1940' }]}>
              <Text style={[styles.textButton, { color: "white", fontSize: 30 }]}>{button}</Text>
            </TouchableOpacity>
            : // Mapeamento dos outros botões
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
              <Text style={[styles.textButton, { color: typeof (button) === 'number' ? 'white' : '#7c7c7c' }]}>{button}</Text>
             </TouchableOpacity> )}
      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a1940',
  },
  results: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#2a1940',
  },
  resultText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
  },
  historyText: {
    color: '#7c7c7c',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: '#7c7c7c',
    fontSize: 20,
  },
});
