import React, { Component } from 'react';
import Player from './Player';
import Video from 'react-native-video';



export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "https://omerta.is/Her/King_Los_-_Dope_Dealer_(feat._Wiz_Khalifa).mp3?pt=m8rZ9xdqAlYRv1S1rNrdzg5oaIZD1MdyiYyxyazYHeo%3D",
  },
  {
    title: 'Love Yourself',
    artist: 'Anderson Paak',
    albumArtUrl: "https://i.scdn.co/image/fdce21f4a373a44f831f71f70cbbd02360b676c9",
    audioUrl: 'https://soundcloud.com/migosatl/bad-and-boujee-feat-lil-uzi-vert-prod-by-metro-boomin',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}
