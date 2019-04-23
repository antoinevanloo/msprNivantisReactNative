import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    ListView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default class SettingsScreen extends React.Component {

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    }
    watchID: ? number = null;
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }

    latitudeEtLongitude = () =>{
        if (this.state.lastPosition != "unknown") {
            var myLocalisation = JSON.parse(this.state.lastPosition);
            console.log(myLocalisation);
        }
    }

    render() {
        this.latitudeEtLongitude();
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>
                    Initial position:
                </Text>

                <Text>
                    {this.state.initialPosition}
                </Text>

                <Text style={styles.boldText}>
                    Current position:
                </Text>

                <Text>
                    {this.state.lastPosition}
                </Text>

                <Text style={styles.boldText}>
                    position:
                </Text>

                <Text>

                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
});
