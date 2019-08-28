import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styled from 'styled-components';
import ActivityComponent from './components/ActivityComponent';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MENU_WIDTH = DEVICE_WIDTH / 2;

class Likes extends Component {

    static navigationOptions = {
        headerTitle: "Activity",
        headerTitleStyle: { textAlign: "center", flex: 1 }
    }
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 1
        }
    }

    setTabIndex = (index) => {
        this.setState({
            tabIndex: index
        })
    }

    tabs = () => {
        const { tabIndex } = this.state;
        if (tabIndex === 1) {
            return (
                <ActivityComponent />
            )
        }
        if (tabIndex === 2) {
            return (
                <ActivityComponent />
            )
        }
    }


    render() {
        const { tabIndex } = this.state;
        return (
            <Container>
                <Menu>
                    <TouchableWithoutFeedback onPress={() => this.setTabIndex(1)}>
                        <View style={tabIndex === 1 ? [styles.menu, styles.active] : styles.menu}>
                            <Text style={tabIndex === 1 ? styles.activeText : styles.text}>Following</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setTabIndex(2)}>
                        <View style={tabIndex === 2 ? [styles.menu, styles.active] : styles.menu} >
                            <Text style={tabIndex === 2 ? styles.activeText : styles.text} >You</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Menu>
                {this.tabs()}
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    menu: {
        width: MENU_WIDTH,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    active: {
        backgroundColor: "black"
    },
    activeText: {
        color: "#FFFFFF",
        fontFamily: "roboto",
        fontSize: 13,
        fontWeight: "500"
    },
    text: {
        color: "#000000",
        fontFamily: "roboto",
        fontSize: 13,
        fontWeight: "500"
    }
})

const Container = styled.View`
flex: 1;
`
const Menu = styled.View`
flex-direction: row;
height: 34px;
width: 100%;
`


export default Likes;