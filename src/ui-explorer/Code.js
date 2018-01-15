/**
 * @flow
 */

import { createElement, StyleSheet } from 'react-native';

const Code = props => createElement('code', { ...props, style: [styles.code, props.style] });

export default Code;

const styles = StyleSheet.create({
  code: {
    fontSize: 1,
    lineHeight: 1.3125
  }
});
