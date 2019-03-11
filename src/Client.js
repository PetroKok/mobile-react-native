import React, {Component} from 'react';
import {Alert, View, ScrollView} from 'react-native';
import {List, ListItem, Button, SearchBar} from 'react-native-elements';
import NavBar from './components/NavBar'
import axios from 'axios';

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Guest",
            data: []
        }
    }

    componentDidMount() {
        axios.post('https://mplayer2.herokuapp.com/load-music')
            .then(res => {
                this.setState({data: res.data}, () => {
                    // console.log(this.state.data);
                });
            })
            .catch(err => console.log(err));
    }

    listOfItems() {
        return (
            <ScrollView>
                <List>
                    {
                        this.state.data.map(i => (
                            <ListItem
                                roundAvatar
                                avatar={{uri: `https://mplayer2.herokuapp.com/${i.img}`}}
                                subtitle={i.title}
                                key={i._id}
                                title={i.title}
                            />
                        ))
                    }
                </List>
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NavBar/>

                <SearchBar
                    lightTheme
                    onChangeText={(name) => this.setState({name})}
                    placeholder='Type Here...' />

                <Button
                    icon={{name:"cached"}}
                    backgroundColor={"green"}
                    containerStyle={{marginTop: 20}}
                    onPress={() => {
                        console.log('test');
                        Alert.alert(`Hello it, ${this.state.name}`);
                    }}
                    title="Press me"/>

                {this.listOfItems()}
            </View>
        );
    }
}

export default Client;
