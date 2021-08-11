import React from "react";

const Loading = () => {
    console.log("LAZY LOADING");
    return(
    <div className="post-loading">
        <h4><i className="fas fa-cog fa-spin"></i></h4>
    </div>
    )
}

export default Loading;