import React, { useState } from 'react';
import FileSearch from './FileSearch';
import FileDisplay from './FileDisplay';

const FileSearchApp = ()=>{
    const [mode, setMode] = useState ('search');
    const [metadataObj, setmetadataObj] = useState({
        counsulate: '',
        barcode: '',
        delegationNumber: '',
        delegationDate: '',
        transactionDate: '',
        employeeName: '',
        employeeNumber: '',
        delegationType: '',
        delegator: '',
        delegatorPassport: '',
        delegatedTo: '',
        delegatedToPassport: '',
        delegationSubject: '',
        keySearch: ''
      });

    const displayFile = (metadataObj)=>{
        setmetadataObj(metadataObj);
        setMode('display');
    }

    const navigateBack = ()=>{
        setMode('search');
    }

    return(
        <div>
        {
            (mode === 'search')? <FileSearch initialMetaData = {metadataObj} displayFile = {displayFile}/> : <FileDisplay metadataObj = {metadataObj}  navigateBack={navigateBack}/>
        }
        </div>
    )    
}

export default FileSearchApp;