import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={1.5}
    width={544}
    height={140}
    viewBox="0 0 544 140"
    backgroundColor="#f0f0f0"
    foregroundColor="#d6d6d6"
  >
    <rect x="3" y="2" rx="13" ry="13" width="180" height="140" /> 
    <rect x="201" y="7" rx="6" ry="6" width="300" height="22" /> 
    <rect x="201" y="41" rx="6" ry="6" width="344" height="20" /> 
    <rect x="201" y="73" rx="9" ry="9" width="336" height="62" />
  </ContentLoader>
)

export default Skeleton