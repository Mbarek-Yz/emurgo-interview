import React from 'react';
import {View, Text, Image} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import styles from './loginScreenStyles';
import useLogin from '_hooks/useLogin';
import CustomTextInput from '_components/CustomTextInput/CustomTextInput';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {
  type LoginSchemaType,
  loginSchema,
} from '_utils/validation/loginScreenValidation';
import CustomButton from '_components/CustomButton/CustomButton';
import {translate} from '_i18n';
import {HeightDimentions} from '_utils/dimensions';
import {images} from '_utils/images';

const LoginScreen = () => {
  const {handleLogin} = useLogin();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onLoginPress = async (data: LoginSchemaType) => {
    const {email, password} = data;
    await handleLogin('Yazan@example.com', 'StrongPassword123');
  };

  const handleLoginSubmitPress = () => {
    handleSubmit(onLoginPress)();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{translate('login_screen.welcome_back')}</Text>
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_5} />
      <Image source={images.LOGIN} style={styles.image} />
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_4} />
      <Text style={styles.login}>{translate('login_screen.login')}</Text>
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_4} />
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder={translate('login_screen.username_placeholer')}
            text={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label={translate('login_screen.username_placeholer')}
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_2} />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder={translate('login_screen.password_placeholer')}
            text={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry
            label={translate('login_screen.password_placeholer')}
            extraStyles={styles.extraStyles}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_3} />
      <CustomButton
        title={translate('global.login')}
        onPress={handleLoginSubmitPress}
      />
    </View>
  );
};

export default LoginScreen;
