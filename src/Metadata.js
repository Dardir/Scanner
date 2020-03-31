import React, { useState } from 'react';
import './DynamsoftSDK.css';
const Metadata = (Props) => {
    const [metadataform, setState] = useState({
       counsulate:'',
        barcode:'',
        delegationNumber:'',
        delegationDate:'',
        transactionDate:'',
        employeeName:'',
        employeeNumber:'',
        delegationType:'',
        delegator:'',
        delegatorPassport:'',
        delegatedTo:'',
        delegatedToPassport:'',
        delegationSubject:'',
        keySearch:''
    });
    
      const updateField = e => {
        setState({
          ...metadataform,
          [e.target.name]: e.target.value
        });
      };
    return (
        <div id="Metadata">MetaData Section</div>
    )
}
export default Metadata;