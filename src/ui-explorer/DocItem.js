/* eslint-disable react/prop-types */

/**
 * @flow
 */

import AppText from './AppText';
import insertBetween from './insertBetween';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Divider = () => <View style={styles.verticalDivider} />;

const createDescription = description => {
  const nodeList = React.Children.toArray(description);
  let content;
  if (nodeList.length === 1) {
    content = <Text>{nodeList}</Text>;
  } else {
    content = insertBetween(() => <Divider key={Math.random()} />, nodeList);
  }
  return <Text style={styles.text}>{content}</Text>;
};

const DocItem = ({ description, example = {}, name, typeInfo, label }) => (
  <View style={styles.example}>
    {name && (
      <AppText style={styles.title}>
        <PropText label={label} name={name} typeInfo={typeInfo} />
      </AppText>
    )}
    {description && <View style={styles.description}>{createDescription(description)}</View>}
    {(example.render || example.code) && (
      <View style={styles.renderBox}>
        <AppText style={styles.exampleText}>Example</AppText>
        {example.render && <View>{example.render()}</View>}
        {example.render && example.code && <View style={styles.verticalDivider} />}
        {example.code && <Text style={styles.code}>{example.code}</Text>}
      </View>
    )}
  </View>
);

const PropText = ({ label, name, typeInfo }) => (
  <AppText>
    {label && <Text style={[styles.label, label === 'web' && styles.webLabel]}>{label}</Text>}
    <Text style={styles.propName}>{name}</Text>
    {typeInfo && (
      <Text>
        {': '}
        <Text style={styles.code}>{typeInfo}</Text>
      </Text>
    )}
  </AppText>
);

const styles = StyleSheet.create({
  code: {
    fontSize: 1,
    lineHeight: 1.3125
  },
  example: {
    marginBottom: 0.5 * 1.3125
  },
  title: {
    fontSize: 1
  },
  text: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 1,
    lineHeight: 1.3125
  },
  label: {
    backgroundColor: '#ddd',
    borderRadius: 1,
    color: '#555',
    marginRight: 0.5,
    paddingVertical: 0.125,
    paddingHorizontal: 0.5
  },
  propName: {
    fontWeight: 'bold'
  },
  webLabel: {
    backgroundColor: '#bdebff',
    color: '#025268'
  },
  description: {
    marginTop: 0.5 * 1.3125
  },
  renderBox: {
    borderColor: '#E6ECF0',
    borderWidth: 1,
    padding: 1.3125,
    marginTop: 1.3125
  },
  exampleText: {
    color: '#AAB8C2',
    fontSize: 0.8,
    fontWeight: 'bold',
    marginBottom: 0.5 * 1.3125
    
  },
  verticalDivider: {
    height: 1
  }
});

export default DocItem;
