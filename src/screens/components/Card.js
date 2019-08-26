import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class Card extends Component {
    render() {
        return (
            <Container>
                <CardHeader>
                    <AvatarContainer>
                        <Avatar source={require('../../assets/images/avatar.jpg')} />
                        <ProfileContainer>
                            <ProfileName>sarahannloreth</ProfileName>
                            <ProfileLocation>Kauai, Hawaii</ProfileLocation>
                        </ProfileContainer>
                    </AvatarContainer>
                </CardHeader>
                <Image source={require('../../assets/images/photo-bg.jpg')} />
                <PostContainer>
                    <Post>"Hope begins in the dark, the stubborn hope that if
you just show up and try to do the right thing, the da…</Post>
                    <PostActivityContainer>

                        <LikeContainer>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Icon name="heart" size={20} />
                                <LikesCount>123 likes</LikesCount>
                            </TouchableOpacity>
                        </LikeContainer>
                        <CommentContainer>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Icon name="comment" size={20} />
                                <CommentText>10 comments</CommentText>
                            </TouchableOpacity>
                        </CommentContainer>
                        <TimelineContainer>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Icon name="paper-plane" size={20} />
                                <Timeline>
                                    3 days
                            </Timeline>
                            </TouchableOpacity>
                        </TimelineContainer>

                    </PostActivityContainer>
                </PostContainer>
            </Container>
        )
    }
}

const Container = styled.View`
background-color: #FFFFFF;
height: 406px;
width: 100%;
margin-bottom: 7px;
`
const CardHeader = styled.View`
height: 55px;
justify-content: center;
`
const AvatarContainer = styled.View`
position: absolute;
flex-direction: row;
left: 23px;
`
const Avatar = styled.Image`
width: 38px;
height: 38px;
position: absolute;
align-self: flex-start;
border-radius: 16px;


`

const ProfileContainer = styled.View`
height: 34px;
margin-left: 55px;
`
const ProfileName = styled.Text`
font-family: 'roboto';
font-size: 14px;
font-weight: 500;
align-self: flex-start;
color: #000000;
`
const ProfileLocation = styled.Text`
font-size: 13px;
font-weight: 500;
color: #AAAAAA;
`

const Image = styled.Image`
height: 240px;
width: 100%;

`
const PostContainer = styled.View`
height: 111px;
background-color: #FFFFFF;
`

const Post = styled.Text`
margin-left: 20px;
margin-right: 20px;
margin-top: 7px;
`
const PostActivityContainer = styled.View`
flex-direction: row;
position: absolute;
margin-left: 25px;
margin-right: 25px;
align-items: center;
height: 20px;
bottom: 17px;
`
const LikeContainer = styled.View`
flex-direction: row;
margin-right: 25px;
`
const LikesCount = styled.Text`
margin-left: 13px;
`
const CommentContainer = styled.View`
flex-direction: row;
margin-right:25px;
`
const CommentText = styled.Text`
margin-left: 13px;
`
const TimelineContainer = styled.View`
flex-direction: row;
margin-right:25px;
`
const Timeline = styled.Text`
margin-left: 13px;
`
export default Card