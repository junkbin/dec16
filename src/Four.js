import React from 'react';
import {View, Text} from 'react-native';

export class Four extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'title':'Thor Rangrok'};
    }

    render() {
        return (
            <View>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}