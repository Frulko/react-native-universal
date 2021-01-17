import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {
  incrementAction,
  decrementAction,
  changeByAmount,
} from '../CounterReducer';

const SimpleCounter = (props) => {
  const increment = () => {
    props.dispatch(incrementAction());
  };

  const decrement = () => {
    props.dispatch(decrementAction());
  };

  const handleInputChange = (event) => {
    props.dispatch(changeByAmount(+event.nativeEvent.text));
  };

  return (
    <View style={styles.container}>
      <Text>Counter: {props.amount}</Text>
      <View style={styles.floatingView}>
        <TouchableOpacity onPress={increment} style={styles.floatingButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.floatingButton}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        keyboardType="numeric"
        placeholder="change                    amount"
        onSubmitEditing={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  floatingView: {},
  floatingButton: {
    backgroundColor: 'blue',

    padding: 20,
  },
});

const mapStateToProps = (state, props) => {
  return {amount: state.counter.amount};
};

export default connect(mapStateToProps)(SimpleCounter);
