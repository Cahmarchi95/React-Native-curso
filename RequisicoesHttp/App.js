import {View, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';
import api from './src/services/api';
import Filme from './src/components/Filme/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Filme data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
