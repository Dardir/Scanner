import React, { useState, Fragment } from 'react';
import FileSearch from './FileSearch';
import FileDisplay from './FileDisplay';

const FileSearchApp = ()=>{
    const [mode, setMode] = useState ('search');
    const [searchResults, setSearchResults] = useState (null);
    const [metadataObj, setmetadataObj] = useState({});

    const displayFile = (metadataObj,results)=>{
        setmetadataObj(metadataObj);
        setSearchResults(results);
        setMode('display');
    }

    const navigateBack = ()=>{
        setMode('search');
    }

    return(
        <Fragment>
        {
            (mode === 'search')? <FileSearch displayFile = {displayFile} searchResults={searchResults}/> : <FileDisplay metadataObj = {metadataObj}  navigateBack={navigateBack}/>
        }
        </Fragment>
    )    
}

export default FileSearchApp;