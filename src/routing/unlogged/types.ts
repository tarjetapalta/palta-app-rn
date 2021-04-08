import { StackScreenProps } from '@react-navigation/stack';

import { WordingHomeType, WordingEmailPasswordType } from '@store/wording';

export type UnloggedStackParamList = {
  Home: {
    wording: WordingHomeType;
  };
  SignIn: undefined;
  SignUp: undefined;
};

export type HomeProps = StackScreenProps<UnloggedStackParamList, 'Home'>;

export type SignInParamList = {
  EmailPassword: {
    wording: WordingEmailPasswordType;
  };
  NewPassword: {
    email: string;
    code: string;
  };
};

export type EmailPasswordProps = StackScreenProps<
  SignInParamList,
  'EmailPassword'
>;
