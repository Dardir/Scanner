import React , { useState } from 'react';

const FileSearch = ({initialMetaData,displayFile}) =>{
    const [metadataform, setState] = useState({
        counsulate: initialMetaData.counsulate,
        barcode: initialMetaData.barcode,
        delegationNumber: initialMetaData.delegationNumber,
        delegationDate: initialMetaData.delegationDate,
        transactionDate: initialMetaData.transactionDate,
        employeeName: initialMetaData.employeeName,
        employeeNumber: initialMetaData.employeeNumber,
        delegationType: initialMetaData.delegationType,
        delegator: initialMetaData.delegator,
        delegatorPassport: initialMetaData.delegatorPassport,
        delegatedTo: initialMetaData.delegatedTo,
        delegatedToPassport: initialMetaData.delegatedToPassport,
        delegationSubject: initialMetaData.delegationSubject,
        keySearch: initialMetaData.keySearch
      });
      const updateField = e => {
        setState({
          ...metadataform,
          [e.target.name]: e.target.value
        });
      };
    return (
        <div>File Search</div>
    )
}

export default FileSearch;