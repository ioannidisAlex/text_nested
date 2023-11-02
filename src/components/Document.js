import React, { useState, useEffect } from 'react';
import CollapsedDocument from './CollapsedDocument';

function Document() {
    return (
        <div>
            <Document>
                Name
            </Document>
            <CollapsedDocument></CollapsedDocument>
        </div>
    )
 }

export default Document;