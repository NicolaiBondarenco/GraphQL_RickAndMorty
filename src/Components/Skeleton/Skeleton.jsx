import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={0}
    width={330}
    height={330}
    viewBox="0 0 315 330"
    backgroundColor="#e0e0e0"
    foregroundColor="#fba2a2"
  >
    <rect x="3" y="-1" rx="20" ry="20" width="300" height="300" />
    <rect x="86" y="306" rx="10" ry="10" width="125" height="23" />
  </ContentLoader>
)

export default Skeleton
