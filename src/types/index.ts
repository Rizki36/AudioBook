import type {Control, ControllerProps, FieldPath} from 'react-hook-form';
import type {TextInputProps, ViewProps} from 'react-native';

export type TRootStackParamList = {
  OnBoarding: undefined;
  Home: undefined;
  Login: undefined;
};

export type TOnboardingItem = {
  id: string;
  title: string;
  desc: string;
  illustration: any;
};

export type TInput = TextInputProps & {containerProps?: ViewProps};

export interface ControlledProps<TFieldValues extends Record<string, any>> {
  controllerProps: Omit<ControllerProps, 'render' | 'control' | 'name'> & {
    control: Control<TFieldValues>;
    name: FieldPath<TFieldValues>;
  };
  inputProps?: TInput;
}

export type TUser = {id: string; email: string; name: string};
