const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress
}) => ( <
  View style = {
    styles.container
  } >
  <
  TouchableOpacity onPress = {
    onDownPress
  } >
  <
  Image style = {
    styles.button
  }
  source = {
    require('../img/ic_keyboard_arrow_down_white.png')
  }
  /> <
  /TouchableOpacity> <
  Text onPress = {
    onMessagePress
  }
  style = {
    styles.message
  } > {
    message.toUpperCase()
  } < /Text> <
  TouchableOpacity onPress = {
    onQueuePress
  } >
  <
  Image style = {
    styles.button
  }
  source = {
    require('../img/ic_queue_music_white.png')
  }
  /> <
  /TouchableOpacity> <
  /View>
);
