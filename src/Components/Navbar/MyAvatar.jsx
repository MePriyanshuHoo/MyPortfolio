import React from 'react'
import NavContact from './NavContact'
import NavMenu from './NavMenu'

function MyAvatar() {
  return (
    <div>MyAvatar
        {/* on Hover  */}
            <NavContact /> 

            {/* only on home */}
            <NavMenu />
    </div>
  )
}

export default MyAvatar