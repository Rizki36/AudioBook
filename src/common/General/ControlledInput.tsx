import {ControlledProps} from '@app/types';
import React from 'react';
import {Controller} from 'react-hook-form';
import Input from './Input';

const ControlledInput = <TFieldValues extends Record<string, any>>({
  inputProps = {},
  controllerProps,
}: ControlledProps<TFieldValues>) => {
  return (
    <Controller
      {...controllerProps}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...inputProps}
        />
      )}
    />
  );
};

export default ControlledInput;
