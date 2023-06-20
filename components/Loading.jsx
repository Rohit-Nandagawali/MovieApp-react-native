import { View, Dimensions} from 'react-native'
import React from 'react'
import { theme } from '../theme';
import * as Progress from 'react-native-progress';

const {width, height} =  Dimensions.get('window');

export default function Loading() {
  return (
    <View style={{height, width}} className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
    </View>
  )
}