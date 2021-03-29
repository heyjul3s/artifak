import React from 'react';
import { render, screen } from '@testing-library/react';
import { useClickAway } from '../src';

describe('@artifak/useclickaway', () => {
  const onClickAway = jest.fn();

  const Dummy = () => {
    const ref: React.RefObject<HTMLDivElement> = React.createRef();

    useClickAway(ref, onClickAway);

    const onClick = () => {
      console.log('Clicked');
    };

    return (
      <div>
        Wrapper
        <div ref={ref} onClick={onClick}>
          Click Me
        </div>
      </div>
    );
  };

  it('calls the clickAway callback when click event occurs on non-target ref', () => {
    render(<Dummy />);

    const Wrapper = screen.getByText('Wrapper');

    Wrapper.focus();
    Wrapper.click();

    expect(onClickAway).toHaveBeenCalled();
  });
});
