import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Input from '../../../Input';
import Button from '../../../Button';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParse from '../../../../utils/authErrorMessageParse';

const initialFormValues = {
  usermail: '',
  password: '',
};

function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    if (formValues.usermail === '' || formValues.password === '') {
      showMessage({
        message: 'Lütfen bilgileri eksiksiz doldurun',
        type: 'danger',
      });
    } else {
      try {
        showMessage({
          message: 'Hoşgeldin',
          type: 'success',
        });
        setLoading(true);
        await auth().signInWithEmailAndPassword(
          formValues.usermail,
          formValues.password,
        );
        setLoading(false);
      } catch (error) {
        showMessage({
          message: authErrorMessageParse(error.code),
          type: 'danger',
        });
        setLoading(false);
      }
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-postanızı giriniz..."
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="şifrenizi giriniz..."
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  );
}

export default Login;
