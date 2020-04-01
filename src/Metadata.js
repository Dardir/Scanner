import React, { useState } from 'react';
import './DynamsoftSDK.css';
import { counsulates } from './ReferenceData';

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
      <div id="divEmbassy" className="divinput">
        <ul className="PCollapse">
          <li>
            <div className="divType">
              <div className="mark_arrow expanded"></div>
                                    تفاصيل السفارة
            </div>
            <div id="div_EmbassyDetails" className="divTableStyle">
              <ul id="ulEmbassyDetails">
                <li>
                  <label htmlFor="counsulate">
                    <p>القنصلية</p>
                  </label>
                  <select size="1" id="counsulate" style={{ position: "relative" }} name="counsulate" onChange={updateField}>
                    <option value="0">اختر القنصلية</option>
                    {
                      counsulates.map((item) => {
                        return (
                          <option value={item.key}>{item.value}</option>
                        );
                      })
                    }
                  </select>
                </li>
                <li style={{paddingTop:"10px"}}>
                  <label htmlFor="txt_barcode">
                    <p>باركود</p>
                  </label>
                  <input type="text" size="20" id="txt_barcode" name="barcode" onChange={updateField} />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Metadata;