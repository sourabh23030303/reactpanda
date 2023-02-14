import React from 'react'

export default function Alert(props) {
  return (
   props.Alert&& <div><div class={`alert alert-${props.Alert.type} alert-dismissible fade show`}role="alert">
     <strong>{props.Alert.type}</strong>  <strong>{props.Alert.msg}</strong>       
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div></div>
  )
}
