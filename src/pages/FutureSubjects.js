import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getPendingRequest } from '../Requests';
import Subject from '../components/Subject';

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 36,
  },
});

const FutureSubjects = ({ registration, pass }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getPendingRequest({ registration, pass })
      .then(response => {
        setSubjects(response.data.values.pendingSubjects);
      })
      .catch(() => {
        alert('Tivemos um problema ao tentar carregar suas disciplinas!');
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      {subjects.map(eachSubject => {
        return <Subject subject={eachSubject} isPrevious={false} isFuture />;
      })}
    </View>
  );
};

export default FutureSubjects;
