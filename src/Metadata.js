import React, { useState } from 'react';
import './DynamsoftSDK.css';
const Metadata = (Props) => {
  const [metadataform, setState] = useState({
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

  const updateField = e => {
    setState({
      ...metadataform,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div id="Metadata">
      <ul className="PCollapse">
        <li>
          <div className="divType">
            <div className="mark_arrow expanded"></div>
                                    تفاصيل السفارة
            </div>
          <div id="div_ScanImage" className="divTableStyle">
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Metadata;