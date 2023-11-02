import React, { useState, useEffect } from 'react';

function CollapsedDocument() {
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);

    const toggleCollapseHandler = () => {
        setIsCollapsedOpen(!isCollapsedOpen);
    };

    return(
        <h2 onClick={toggleCollapseHandler}>{
        isCollapsedOpen? "data": undefined}</h2>
    )
}

export default CollapsedDocument;