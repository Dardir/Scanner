import React, { useState } from 'react';
import FileSearch from './FileSearch';
import FileDisplay from './FileDisplay';

const FileSearchApp = ()=>{
    const [mode, setMode] = useState ('search');
    const [metadataObj, setmetadataObj] = useState (null);
    const [file, setFile] = useState (null);

    const displayFile = (metadataObj,file)=>{
        setmetadataObj(metadataObj);
        setFile(file);
        setMode('display');
    }

    const navigateBack = ()=>{
        setMode('search');
    }

    return(
        <div>
        {
            (mode === 'search')? <FileSearch initialMetaData = {metadataObj} displayFile = {displayFile}/> : <FileDisplay metadataObj = {metadataObj} file={file} navigateBack={navigateBack}/>
        }
        </div>
    )    
}

export default FileSearchApp;