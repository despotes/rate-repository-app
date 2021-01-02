import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Avatar = ({ src, style, ...props }) => {
  const avatarStyle = [styles.avatar, style];
  return <Image source={{ uri: src }} style={avatarStyle} {...props} />;
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
