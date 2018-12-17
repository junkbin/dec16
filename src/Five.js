import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './FiveStyle';

export class Five extends React.Component {
    constructor(props){
        super(props);
        this.state = {'title' : 'Hey, Spiddeeyy!!'};
    }

    render() {
        return (
            <View style={[styles.container, styles.bgfy]}>
                <Text style={styles.textify}>{this.state.title}</Text>
            </View>
        );
    }
}