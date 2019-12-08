import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { getCoursingRequest } from '../Requests';
import Subject from '../components/Subject';

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 36,
  },
});

const CurrentSubjects = ({ name, registration, pass }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getCoursingRequest({ registration, pass })
      .then(response => {
        console.log(response.data);
        setSubjects(response.data.values.coursingSubjects);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(subjects);

  return (
    <View style={styles.rootContainer}>
      {subjects.map(eachSubject => {
        return <Subject subject={eachSubject} />;
      })}
    </View>
  );
};

export default CurrentSubjects;
