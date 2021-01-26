import React from 'react';
import styled, { css } from 'styled-components';
import { useMergeRefs } from 'use-callback-ref';
import { TextAreaProps } from './typings';

export const Textarea: React.FC<TextAreaProps> = React.forwardRef(
  (
    {
      autoResize,
      isResizable,
      minRows,
      maxRows,
      onChange,
      value,
      ...otherProps
    },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const textareaRef = React.createRef<HTMLTextAreaElement>();

    // get initial height of textarea to provide animated transition value
    // get box sizing, remove bottom padding, margin

    const resizeTextArea = () => {
      if (autoResize && !isResizable && !!textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    const onChangeTextarea = (
      changeEvent: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      onChange?.(changeEvent);
      resizeTextArea();
    };

    React.useLayoutEffect(() => resizeTextArea(), [textareaRef.current, value]);

    return (
      <textarea
        ref={useMergeRefs([textareaRef, ref])}
        onChange={onChangeTextarea}
        {...otherProps}
      />
    );
  }
);

const TextareaBase = styled.textarea<TextAreaProps>(
  ({ autoResize, isResizable }) => css`
    ${(autoResize || isResizable === false) && 'resize: none;'}
    ${autoResize && 'overflow: hidden;'}
  `
);

// debounce
// handle placeholder
