import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DynamsoftSDK.css';
import { counsulates, delegationTypes } from './ReferenceData';
import useValidateMandatoryFields from './useValidateMandatoryFields';

const Metadata = ({saveMetadataObj,metadataEnabled}) => {
  const [metadataform, setState] = useState({
    counsulate: '',
    delegationNumber: '',
    transactionDate: '',
    delegationType: '',
    delegator: '',
    delegatorPassport: '',
    delegationSubject: '',
    keySearch: ''
  });
  const mandatoryfields = ['counsulate','delegationNumber','transactionDate','delegationType'];
  const [isDisabled] = useValidateMandatoryFields(metadataform,mandatoryfields);

  const updateField = e => {
    setState({
      ...metadataform,
      [e.target.name]: e.target.value
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
                  <label htmlFor="txt_delegationNumber">
                    <p style={{ color: "red", paddingLeft: "5px" }}>*</p><p>رقم المعاملة</p>
                  </label>
                  <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" onChange={updateField} disabled = {!metadataEnabled}/>
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
              </ul>
            </div>
          </li>
          <li>
            <div className="metaDivType">
              <b> تفاصيل المعاملة </b>
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
                    <p>صاحب المعاملة</p>
                  </label>
                  <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegatorPassport">
                    <p>رقم جواز السفر / الرقم القومي</p>
                  </label>
                  <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField} disabled = {!metadataEnabled}/>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <label htmlFor="txt_delegationSubject">
                    <p>موضوع المعاملة</p>
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