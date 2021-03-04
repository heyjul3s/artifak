# `@artifak/usedebouncefn`

A react hook to debounce functions/callbacks.

## Installation

### Yarn

```sh
yarn add @artifak/usedebouncefn
```

### NPM

```sh
npm install @artifak/usedebouncefn
```

## Usage

```ts
import React from 'react';
import { useDebouncedFn } from 'artifak';

export function Debounce() {
  const [searchString, setSearchString] = React.useState('');
  const [dropDownOptions, setDropdownOptions] = React.useState([]);

  const getDropDown = async val => {
    await fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw res;
      })
      .then(res => {
        const data = res.filter(datum => {
          return datum.title.includes(val);
        });

        setDropdownOptions(data);
      })
      .catch(res => {
        console.error(res);
      });
  };

  const debounceDropDown = useDebouncedFn(
    nextValue => getDropDown(nextValue),
    1000
  );

  const onInputChangeHandler = ev => {
    const nextValue = ev.target.value;
    setSearchString(nextValue);
    debounceDropDown(nextValue);
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Type Something..."
        onChange={onInputChangeHandler}
        value={searchString}
      />

      {dropDownOptions.length && (
        <div className="options">
          {dropDownOptions.map(dropDownOption => (
            <div key={dropDownOption.id}>{dropDownOption.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
```
