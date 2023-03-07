import React, { useCallback, useMemo, useRef } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface TestProps {
    tx: string;
}


const Test: React.FC<TestProps> = ({ tx }) => {
    // const [current, set] = React.useState("vazio");
    const out = useRef("vazio"); //useRef atualiza o valor mas não causa uma renderização do component no return caso o valor dele esteja lá
    out.current = tx
    const handle = () => {out.current = "clicouuu"; console.log(out.current)}
    const memoizedText = useMemo(() => { // useMemo não é chamado dentro da função insertName caso seus props não mudarem, mesmo que todo o resto do componente seja chamado
    console.log("test component rendering: " + out.current)
    return <Text onPress={handle} style={styles.text}>{out.current}</Text>;
    }, [tx],);
  
    return memoizedText;
  };

const styles = StyleSheet.create({
    text: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      position: 'absolute',
      top: 0
    },
  });

export default Test