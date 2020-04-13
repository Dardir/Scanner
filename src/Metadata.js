import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DynamsoftSDK.css';
import { counsulates, delegationTypes } from './ReferenceData';
import useValidateMandatoryFields from './useValidateMandatoryFields';

const Metadata = ({saveMetadataObj,metadataEnabled}) => {
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
  const mandatoryfields = ['counsulate','delegationNumber','delegationDate','transactionDate','employeeName','delegationType','delegator','delegatorPassport','delegatedTo','delegatedToPassport'];
  const [isDisabled] = useValidateMandatoryFields(metadataform,mandatoryfields);

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
  const saveButtonClicked = () => {
    saveMetadataObj(metadataform);
  }

  return (
    <div id="Metadata">
      <div id="divEmbassy" className="divinput">
        <ul >
          <li>
            <div className="metaDivType">
              <b> تفاصيل السفارة </b>
            </div>
            <div id="div_EmbassyDetails" className="divTableStyle" >
              <ul id="ulEmbassyDetails">
                <li>
                  <label htmlFor="counsulate">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>القنصلية</p>
                  </label>
                  <select size="1" id="counsulate"  name="counsulate" onChange={updateField} disabled = {!metadataEnabled}>
                    <option value="0">اختر القنصلية</option>
                    {
                      counsulates.map((item) => {
                        return (
                          <option key={item.key} value={item.value}>{item.value}</option>
                        );
                      })
                    }
                  </select>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_barcode">
                    <p>باركود</p>
                  </label>
                  <input type="text" size="20" id="txt_barcode" name="barcode" onChange={updateField} disabled = {!metadataEnabled} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegationNumber">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>رقم التوكيل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="date_delegationDate">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>تاريخ التوكيل</p>
                  </label>
                  <DatePicker
                    selected={metadataform.delegationDate}
                    onChange={handleDelegationDateChange}
                    id="date_delegationDate"
                    onSelect={handleDelegationDateChange}
                    disabled = {!metadataEnabled}
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="date_transactionDate">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>تاريخ المعاملة</p>
                  </label>
                  <DatePicker
                    selected={metadataform.transactionDate}
                    onChange={handleTransactionDateChange}
                    onSelect={handleTransactionDateChange}
                    id="date_transactionDate"
                    disabled = {!metadataEnabled}
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_employeeName">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>اسم الموظف</p>
                  </label>
                  <input type="text" size="20" id="txt_employeeName" name="employeeName" onChange={updateField} disabled = {!metadataEnabled} />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_employeeNumber">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>رقم الموظف</p>
                  </label>
                  <input type="text" size="20" id="txt_employeeNumber" name="employeeNumber" onChange={updateField} disabled = {!metadataEnabled}/>
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
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>نوع التوكيل</p>
                  </label>
                  <select size="1" id="delegationType"  name="delegationType" onChange={updateField} disabled = {!metadataEnabled}>
                  <option value="0">اختر نوع التوكيل</option>
                    {
                      delegationTypes.map((item) => {
                        return (
                          <option key={item.key} value={item.value}>{item.value}</option>
                        );
                      })
                    }
                  </select>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegator">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>الموكل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegatorPassport">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>رقم جواز سفر الموكل</p>
                  </label>
                  <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegatedTo">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p> الموكل اليه</p>
                  </label>
                  <input type="text" size="20" id="txt_delegatedTo" name="delegatedTo" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegatedToPassport">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p> رقم جواز سفر الموكل اليه</p>
                  </label>
                  <input type="text" size="20" id="txt_delegatedToPassport" name="delegatedToPassport" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegationSubject">
                    <p>موضوع التوكيل</p>
                  </label>
                  <textarea rows="5" cols="47" id="txt_delegationSubject" name="delegationSubject" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_keySearch">
                    <p>كلمات بحثية</p>
                  </label>
                  <textarea rows="5" cols="47" id="txt_keySearch" name="keySearch" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div id="div_SaveMetadata" className="divTableStyle">
              <button id="btnSaveForm" onClick={saveButtonClicked} disabled = {isDisabled}>حفظ</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Metadata;