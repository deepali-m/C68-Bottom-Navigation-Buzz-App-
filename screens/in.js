import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
export default class In extends React.Component {
     render(){
        return(
            <View>
                <Header 
                    backgroundColor = {'pink'}

                    centerComponent = {{
                        text : 'Buzz App',
                        style : { color: 'black', fontSize: 20, fontWeight:500}
                    }}
                />
                <View style={styles.container}>
                <Text style={styles.textin}>Instagram</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     marginTop:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textin: {
    color:'blue',
    fontWeight:500,
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});