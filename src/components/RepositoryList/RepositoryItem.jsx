import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';

import Avatar from '../Avatar';
import Count from '../Count';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  row: { flexDirection: 'row' },
  description: {
    marginHorizontal: 10,
    flexShrink: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  marginBot: {
    marginBottom: 10,
  },
  counters: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

const RepositoryItem = ({ details }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = details;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Avatar src={ownerAvatarUrl} />
        </View>
        <View style={styles.description}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.marginBot}
          >
            {fullName}
          </Text>
          <View style={styles.marginBot}>
            <Text fontSize="body" color="textSecondary">
              {description}
            </Text>
          </View>
          <View style={styles.language}>
            <Text color="white">{language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.counters]}>
        <Count text="Stars" count={stargazersCount} />
        <Count text="Forks" count={forksCount} />
        <Count text="Reviews" count={reviewCount} />
        <Count text="Rating" count={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
