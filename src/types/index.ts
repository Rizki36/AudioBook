import type {Control, ControllerProps, FieldPath} from 'react-hook-form';
import type {TextInputProps, ViewProps} from 'react-native';

export type RootStackParamList = {
  OnBoarding: undefined;
  Home: undefined;
  Login: undefined;
};

export type OnboardingItemType = {
  id: string;
  title: string;
  desc: string;
  illustration: any;
};

export type InputType = TextInputProps & {containerProps?: ViewProps};

export interface ControlledProps<TFieldValues extends Record<string, any>> {
  controllerProps: Omit<ControllerProps, 'render' | 'control' | 'name'> & {
    control: Control<TFieldValues>;
    name: FieldPath<TFieldValues>;
  };
  inputProps?: InputType;
}

export type User = {id: string; email: string; name: string};
