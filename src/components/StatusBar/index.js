/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StatusBar, View } from 'react-native';

export default function TopStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: 20 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
