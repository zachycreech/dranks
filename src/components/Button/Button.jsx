import React, { useState } from 'react'
import { Button as BootButton, Spinner } from 'react-bootstrap'

export function Button(props) {
  const { size, type, title, outline, disabled, value } = props
  const [loading, setLoading] = useState(false)

  if (outline) {
    const outlinedText = eval(`outline-${type}`)
    return outlinedText
  }

  const handleClick = async () => {
    const onPress = props.onClick
    if (typeof onPress === 'function') {
      setLoading(true)
      onPress(props.value)
        .catch((error) => console.log(error))
        .then(() => setLoading(false))
    }
  }
  return (
    <BootButton
      variant={outline ? outlinedText : type}
      size={size}
      disabled={disabled || loading}
      onClick={!loading ? handleClick : null}
    >
      {loading ? <Spinner as="span" animation="border" /> : title}
    </BootButton>
  )
}
Button.defaultProps = {
  size: '',
  type: 'primary',
  outline: false,
  disabled: false,
  title: 'change me',
}
