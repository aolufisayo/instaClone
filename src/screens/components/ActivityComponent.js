import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components';

class ActivityComponent extends Component {
    render() {
        return (
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ActivityItem>
                        <ActivityCard>
                            <Image source={require('../../assets/images/avatar.jpg')} />
                            <ProfileCard>
                                <Name>awesome_earthpiece</Name>
                                <Location>Liked your photo</Location>
                            </ProfileCard>
                        </ActivityCard>

                    </ActivityItem>
                    <ActivityItem>
                        <ActivityCard>
                            <Image source={require('../../assets/images/avatar.jpg')} />
                            <ProfileCard>
                                <Name>awesome_earthpiece</Name>
                                <Location>Liked your photo</Location>
                            </ProfileCard>
                        </ActivityCard>

                    </ActivityItem>
                    <ActivityItem>
                        <ActivityCard>
                            <Image source={require('../../assets/images/avatar.jpg')} />
                            <ProfileCard>
                                <Name>awesome_earthpiece</Name>
                                <Location>Liked your photo</Location>
                            </ProfileCard>
                        </ActivityCard>

                    </ActivityItem>

                </ScrollView>
            </Container>
        )
    }
}

const Container = styled.View`
flex: 1;
margin-top: 17px;
`
const ActivityItem = styled.View`
width: 100%;
height:50px;
flex-direction: row;
`

const ActivityCard = styled.View`
position: absolute;
flex-direction: row;
left: 23px;
`
const Image = styled.Image`
width: 38px;
height: 38px;
position: absolute;
align-self: flex-start;
border-radius: 16px;


`

const ProfileCard = styled.View`
height: 34px;
margin-left: 55px;
`
const Name = styled.Text`
font-family: 'roboto';
font-size: 14px;
font-weight: 500;
align-self: flex-start;
color: #000000;
`
const Location = styled.Text`
font-size: 13px;
font-weight: 500;
color: #AAAAAA;
`


export default ActivityComponent