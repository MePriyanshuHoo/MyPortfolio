import React from 'react'
import LargeProjectCard from './LargeProjectCard'
import SmallProjectCards from './SmallProjectCards'

function Projects() {
  return (
    <div>Projects

        {/* 
            project ideas:

            Large projects:
            - Discord clone
            - Better Meet
            - Penpal app
            - Better Twitter

            Small projects:
            - chat app
            //TODO: add more small projects

        */}

        <LargeProjectCard/>
        <SmallProjectCards/>
    </div>
  )
}

export default Projects