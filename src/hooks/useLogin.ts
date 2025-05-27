import {UserSliceDispatch} from '_models/Authentication';
import {useLoginMutation} from '_rtkQuery/api/authApi';
import {userAuthenticate} from '_services/authenticationService';
import {hideLoader, showLoader} from '_store/features/loader/loaderSlice';
import {useDispatch} from 'react-redux';

const useLogin = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch<UserSliceDispatch>();
  const handleLogin = async (username: string, password: string) => {
    dispatch(showLoader());

    try {
      const result = await login({username, password}).unwrap();
      await userAuthenticate(dispatch, result);
    } catch (error) {
      console.log(error, ' in useLogin');
    } finally {
      dispatch(hideLoader());
    }
  };
  return {handleLogin};
};

export default useLogin;
