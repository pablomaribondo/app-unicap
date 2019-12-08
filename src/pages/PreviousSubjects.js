import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getCoveredRequest } from '../Requests';
import Subject from '../components/Subject';

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 36,
  },
});

const PreviousSubjects = ({ registration, pass }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getCoveredRequest({ registration, pass })
      .then(response => {
        console.log(response.data)
        setSubjects(response.data.values.coveredSubjects);
      })
      .catch(() => {
        alert('Tivemos um problema ao tentar carregar suas disciplinas!');
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      {subjects.map(eachSubject => {
        return <Subject subject={eachSubject} isPrevious isFuture={false}/>;
      })}
    </View>
  );
};

export default PreviousSubjects;
