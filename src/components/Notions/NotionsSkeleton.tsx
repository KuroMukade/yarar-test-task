import React from "react";
import ContentLoader from "react-content-loader";

const NotionSkeleton = () => (
  <ContentLoader 
    speed={1.5}
    width={234}
    height={112}
    viewBox="0 0 234 112"
    backgroundColor="#f0f0f0"
    foregroundColor="#d6d6d6"
  >
    <rect x="0" y="2" rx="9" ry="9" width="234" height="20" /> 
    <rect x="1" y="30" rx="9" ry="9" width="69" height="20" /> 
    <rect x="1" y="58" rx="17" ry="17" width="234" height="51" />
  </ContentLoader>
)

export default NotionSkeleton;