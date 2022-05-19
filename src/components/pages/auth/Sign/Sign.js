import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import Input from '../../../Input';
import Button from '../../../Button';
import styles from './Sign.style';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParse from '../../../../utils/authErrorMessageParse';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.usermail === '' || formValues.password === '') {
      showMessage({
        message: 'Lütfen bilgileri eksiksiz doldurun',
        type: 'danger',
      });
    } else if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    } else {
      try {
        await auth().createUserWithEmailAndPassword(
          formValues.usermail,
          formValues.password,
        );
        showMessage({
          message: 'Kullanıcı oluşturuldu',
          type: 'success',
        });
        navigation.navigate('LoginPage');
      } catch (error) {
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
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="şifrenizi tekrar giriniz..."
              isSecure
            />
            <Button text="Giriş Yap" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Sign;
