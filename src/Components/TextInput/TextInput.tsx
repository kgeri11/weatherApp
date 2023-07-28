import React from 'react'
import style from './textInput.module.scss'
import { TextInputProps } from './TextInput.types'

const TextInput = ({
  id = 'exampleTextInput',
  name = 'exampleTextInput',
  value,
  placeholder = 'City name...',
  onChange,
}: TextInputProps): React.ReactElement => {
  return (
    <input
      className={style.inputText}
      type="text"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextInput
