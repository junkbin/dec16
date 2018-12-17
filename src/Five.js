import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './FiveStyle';

export class Five extends React.Component {
    constructor(props){
        super(props);
        this.state = {'title' : 'Spidddeeyyyy!!'};
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text>Sppideeyyyy!!!</Text>
            </View>
        );
    }
}