import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome'


const DEVICE_WIDTH = Dimensions.get('window').width;

const PHOTO_WIDTH = DEVICE_WIDTH / 3



class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }
    }

    setTabIndex = (index) => {
        this.setState({
            tabIndex: index
        })
    }

    render() {
        return (
            <Container>
                <Cover>
                    <TouchableOpacity>
                        <Icon
                            name="ellipsis-h"
                            size={21}
                            style={{ position: 'absolute', top: 11, left: 15 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            name="user-plus"
                            size={21}
                            style={{ position: 'absolute', top: 11, right: 15 }}
                        />
                    </TouchableOpacity>
                    <ProfileAvatar />
                    <ProfileName>Christine Sanchez</ProfileName>
                    <ProfileText>Just a girl and her camera. Nature, animals, food.</ProfileText>
                    <CountContainer>
                        <Count>650</Count>
                        <Count>240k</Count>
                        <Count>436</Count>
                    </CountContainer>
                    <CountCaption>
                        <Text>Posts</Text>
                        <Text>Followers</Text>
                        <Text>Followings</Text>
                    </CountCaption>
                </Cover>
                <CoverNav>
                    <MenuContainer>
                        <TouchableWithoutFeedback>
                            <Icon
                                name="th"
                                size={21}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Icon
                                name="list"
                                size={21}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Icon
                                name="map-marker"
                                size={21}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Icon
                                name="tag"
                                size={21}
                            />
                        </TouchableWithoutFeedback>
                    </MenuContainer>
                </CoverNav>
                <ScrollView>
                    <GalleryContainer>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Photo />
                        </TouchableWithoutFeedback>

                    </GalleryContainer>
                </ScrollView>
            </Container >
        )
    }
}



const Container = styled.View`
flex:1;


`
const Cover = styled.View`
height: 188px;
`
const CoverNav = styled.View`
height: 50px;
width: 100%;
position: relative;


`
const GalleryContainer = styled.View`
width: 100%;
flex:1;
flex-direction: row;
flex-wrap: wrap;
`

const MenuContainer = styled.View`
height: 100%;
flex-direction: row;
justify-content:space-between;
margin-left: 30px;
margin-right: 30px;
align-items: center;

`

const Photo = styled.Image`
flex-basis: auto;
background-color: pink;
width: ${PHOTO_WIDTH};
height: ${PHOTO_WIDTH};
border-width:2px;
border-color: red;
`
const ProfileName = styled.Text`
font-size: 16px;
font-family: 'roboto';
font-weight: 400;
text-align: left;
color: #000000;
position: absolute;
bottom: 84px;
align-self: center;

`
const ProfileText = styled.Text`
color: #000000;
font-family: 'roboto';
font-size: 12px;
position: absolute;
align-self: center;
bottom: 65px;
`
const ProfileAvatar = styled.Image`
width: 56px;
height: 56px;
border-radius: 28px;
background-color: blue;
position: absolute;
align-self: center;
top:17px;
`

const CountContainer = styled.View`
width: 236px;
height: 23px;
position:absolute;
bottom: 30px;
align-self: center;
flex-direction: row;


`
const Count = styled.Text`
font-family: 'roboto';
font-size: 20px;
color: #000000;
justify-content: center;
margin-right: 40px;

`
const CountCaption = styled.View`
flex-direction: row;
position: absolute;
justify-content: space-between;
width: 236px;
align-self:center;
bottom: 11px;
`

export default Account;