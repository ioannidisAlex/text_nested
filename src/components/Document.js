import React, {useState, useRef} from 'react';
import {Icon} from "./Icon";

function Document({ title, icon, color, children }) {
    const [collapsed, setCollapsed] = useState(false);
    const collapsible = useRef(null);

    return (
        <div className='document'>
            <button className='header-button' onClick={() => setCollapsed(!collapsed)}>
                <p className='element-icon' style={{backgroundColor: color}}>{icon}</p>
                <p>{title}</p>
                <Icon>{collapsed? 'expand_more' : 'expand_less'}</Icon>
            </button>
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