import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../constants/Colors';
import {BorderRadius, Spacing} from '../../constants/Dimensions';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

const Card: React.FC<CardProps> = ({children, style, padding = Spacing.md}) => {
  return (
    <View style={[styles.card, {padding}, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: Spacing.xs,
  },
});

export default Card;