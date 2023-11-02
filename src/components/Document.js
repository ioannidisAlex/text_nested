import React, {useState, useRef} from 'react';

function Document({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);
    const collapsible = useRef(null);

    return (
        <div style={{
            borderTop: "black solid 1px",
            padding: "1rem"
        }}>
            <h1>{title}</h1><button onClick={() => setCollapsed(!collapsed)}>Click</button>
            <p
                ref={collapsible}
                style={{
                    maxHeight: collapsed? null: 0,
                    overflowX: "auto"
                }}
            >{children}</p>
        </div>
    )
}

export default Document;