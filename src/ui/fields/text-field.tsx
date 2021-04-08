/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, useState, useCallback } from 'react';
import { useController, Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import styled from '@theme/styled-components';
import { ErrorWrapper, TextError } from './base';
import { BottomBorder } from './bottom-border';
import { Label } from './label';

const Wrapper = styled.View`
  position: relative;
  align-items: center;
  flex-direction: row;
  padding-bottom: 8px;
`;

const StyledTextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.text.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.emphasis.high};
  padding: 4px 12px;
  flex: 1;
`;

interface TextFieldProps
  extends Pick<
    TextInputProps,
    | 'value'
    | 'placeholder'
    | 'keyboardType'
    | 'autoFocus'
    | 'onSubmitEditing'
    | 'testID'
    | 'autoCompleteType'
    | 'autoCapitalize'
    | 'accessibilityLabel'
    | 'returnKeyType'
    | 'autoCorrect'
    | 'secureTextEntry'
  > {
  label?: string;
  helperText?: string;
  name: string;
  control: Control<Record<string, string>>;
  rules: any;
  error?: string;
}

export const TextField: FunctionComponent<TextFieldProps> = ({
  /** Text show lable text field */
  label,
  /** Text to be used as name to identify the field on react hook form  */
  name,
  /** Conect control for field on react hook form  */
  control,
  /** Make input focus when screen is showing */
  autoFocus,
  /** Helps users to fill in forms easily by displaying the previously typed information */
  autoCompleteType,
  /** Upper and lower case spelling can also be influenced or set */
  autoCapitalize,
  /** A label that identifies the accessibility element */
  accessibilityLabel,
  /** The type of keyboard to use for editing the text */
  keyboardType,
  /** Explained text for input */
  placeholder,
  /** The action that can be performed directly from the keyboard */
  onSubmitEditing,
  /** Determines how the return key should look */
  returnKeyType,
  /** Is an automatic data validation function commonly found in word */
  autoCorrect,
  /**  the text input obscures the text entered so that sensitive text like passwords stay secure */
  secureTextEntry,
  /** Input validation rules */
  rules,
  /** Text error */
  error,
}) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });
  const [isFocused, setIsFocused] = useState(false);

  const onFocusChange = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlurChange = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <Label
        label={label}
        value={field.value}
        focused={placeholder ? true : isFocused}
      />
      <Wrapper>
        <StyledTextInput
          onChangeText={field.onChange}
          onFocus={onFocusChange}
          onBlur={onBlurChange}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          accessibilityLabel={accessibilityLabel}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
        />
        <BottomBorder focused={isFocused} value={field.value} />
      </Wrapper>
      <ErrorWrapper>
        <TextError testID="field-error">{error}</TextError>
      </ErrorWrapper>
    </>
  );
};
