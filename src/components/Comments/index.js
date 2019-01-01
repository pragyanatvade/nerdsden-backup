import React from "react";
import FacebookProvider, { Comments as FBComments } from "react-facebook";

const Comments = ({ facebook, slug, siteUrl }) => {
  console.log("facebook", facebook, slug, siteUrl);

  return (
    <div id="post-comments" className="comments">
      {/* <FacebookProvider appId={facebook.appId}>
        <FBComments href={`${siteUrl}/${slug}`} width="100%" colorscheme="light" />
      </FacebookProvider> */}
    </div>
  );
};

export default Comments;
