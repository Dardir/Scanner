import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DynamsoftSDK.css';
import { counsulates, delegationTypes } from './ReferenceData';

const Metadata = (Props) => {
  const [metadataform, setState] = useState({
    counsulate: '',
    barcode: '',
    delegationNumber: '',
    delegationDate: new Date(),
    transactionDate: new Date(),
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

  const handleDelegationDateChange = date => {
    setState({
      ...metadataform,
      delegationDate: date
    });
  };
  const handleTransactionDateChange = date => {
    setState({
      ...metadataform,
      transactionDate: date
    });
  };
  return (
    <div id="Metadata">
      <div id="divEmbassy" className="divinput">
        <ul >
          <li>
            <div className="metaDivType">
              <b> تفاصيل السفارة </b>
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
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_barcode">
                    <p>باركود</p>
                  </label>
                  <input type="text" size="20" id="txt_barcode" name="barcode" onChange={updateField} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegationNumber">
                    <p>رقم التوكيل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" onChange={updateField} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="date_delegationDate">
                    <p>تاريخ التوكيل</p>
                  </label>
                  <DatePicker
                    selected={metadataform.delegationDate}
                    onChange={handleDelegationDateChange}
                    id="date_delegationDate"
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="date_transactionDate">
                    <p>تاريخ المعاملة</p>
                  </label>
                  <DatePicker
                    selected={metadataform.transactionDate}
                    onChange={handleTransactionDateChange}
                    id="date_transactionDate"
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_employeeName">
                    <p>اسم الموظف</p>
                  </label>
                  <input type="text" size="20" id="txt_employeeName" name="employeeName" onChange={updateField} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_employeeNumber">
                    <p>رقم الموظف</p>
                  </label>
                  <input type="text" size="20" id="txt_employeeNumber" name="employeeNumber" onChange={updateField} />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="metaDivType">
              <b> تفاصيل التوكيل </b>
            </div>
            <div id="div_DelegationDetails" className="divTableStyle">
              <ul id="ulDelegationDetails">
                <li>
                  <label htmlFor="delegationType">
                    <p>نوع التوكيل</p>
                  </label>
                  <select size="1" id="delegationType" style={{ position: "relative" }} name="delegationType" onChange={updateField}>
                    {
                      delegationTypes.map((item) => {
                        return (
                          <option value={item.key}>{item.value}</option>
                        );
                      })
                    }
                  </select>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegator">
                    <p>الموكل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegatorPassport">
                    <p>رقم جواز سفر الموكل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField} />
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