import React from 'react';
import {
    ActivityIndicator,
    ListView,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {ExpoLinksView} from '@expo/samples';

export default class LinksScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    static navigationOptions = {
        title: 'Links',
    };

    componentDidMount() {

        return fetch('http://msprreactnative.000webhostapp.com/select_produit.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    GetItem (produitDescription) {
        Alert.alert(produitDescription);
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator={this.ListViewItemSeparator}

                    enableEmptySections={true}

                    renderRow={(rowData) => <Text style={styles.rowViewContainer}
                                                  onPress={this.GetItem.bind(this, rowData.description)}>{rowData.nom} {rowData.prix}€</Text>}

                />

                <TouchableOpacity
                    style={{
                        backgroundColor:'green', borderRadius:10,
                        flex:1, width:100, height:50, margin:20,
                        flexDirection:'row', justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={this.componentDidMount.bind(this)}
                >
                    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                        GET
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10

    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});