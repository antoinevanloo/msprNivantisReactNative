import React from 'react';
import {
    AppRegistry,
    TextInput,
    Alert,
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)

        this.state = {
            TextInputName: '',
            TextInputEmail: '',
            TextInputPrix: '',
        }
    }

    InsertDataToServer = () => {
        const {TextInputName} = this.state;
        const {TextInputEmail} = this.state;
        const {TextInputPrix} = this.state;

        fetch('http://msprreactnative.000webhostapp.com/submit_produit_info.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                nom: TextInputName,

                description: TextInputEmail,

                prix: TextInputPrix,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

// Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
            console.error(error);
        });


    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <TextInput

                    // Adding hint in Text Input using Place holder.
                    placeholder="Nom Produit"

                    onChangeText={TextInputName => this.setState({TextInputName})}

                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput

                    // Adding hint in Text Input using Place holder.
                    placeholder="Description Produit"

                    onChangeText={TextInputEmail => this.setState({TextInputEmail})}

                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput

                    // Adding hint in Text Input using Place holder.
                    placeholder="Prix Produit"

                    onChangeText={TextInputPrix => this.setState({TextInputPrix})}

                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <Button title="Enregistrer" onPress={this.InsertDataToServer} color="#2196F3"/>


            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
// Set border Hex Color Code Here.
        borderColor: '#FF5722',
// Set border Radius.
        //borderRadius: 10 ,
    },
});
