import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      btn: 'Iniciar',
      ultimo: null,
    };

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn: 'Iniciar'});
    } else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1});
      }, 100);
      this.setState({btn: 'Pause'});
    }
  }
  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      btn: 'Iniciar',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.img} />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

        <View style={styles.btnarea}>
          <TouchableOpacity style={styles.touch} onPress={this.iniciar}>
            <Text style={styles.btntxt}>{this.state.btn}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.btntxt} onPress={this.limpar}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ultitxtarea}>
          <Text style={styles.ultitxt}>
            {this.state.ultimo > 0
              ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2) + 's'
              : ''}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5965E0',
  },
  timer: {
    marginTop: -155,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnarea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 10,
  },
  btntxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5965E0',
  },
  ultitxtarea: {
    marginTop: 50,
  },
  ultitxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 50,
  },
});

export default App;
