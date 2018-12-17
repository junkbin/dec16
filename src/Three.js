import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './ThreeStyles';

export class Three extends React.Component {
    constructor(props){
        super(props);
        this.state = {'title' : 'Avengers!!'};
    }

    render() {
        return (
            <View style={[styles.container, styles.bgfy]}>
                <Text style={[styles.textify]}>{this.state.title}</Text>
            </View>
        );
    }
}