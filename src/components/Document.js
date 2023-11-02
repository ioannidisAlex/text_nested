import React, {useState, useEffect, useRef} from 'react';
import CollapsedDocument from './CollapsedDocument';

function Document({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [maxHeight, setMaxHeight] = useState(null);
    const collapsible = useRef(null);

    useEffect(() => {
        if (collapsible.current.offsetHeight > maxHeight || !maxHeight) {
            setMaxHeight(collapsible.current.offsetHeight);
        }
    }, []);

    return (
        <div style={{
            borderTop: "black solid 1px",
            padding: "1rem"
        }}>
            <h1>{title}</h1><button onClick={() => setCollapsed(!collapsed)}>Click</button>
            <p
                ref={collapsible}
                style={{
                    transition: "max-height 1s ease-out",
                    maxHeight: collapsed? maxHeight: 0,
                }}
            >{children}</p>
        </div>
    )
}

export default Document;