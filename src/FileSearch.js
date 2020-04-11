import React, { useState } from 'react';
import './DynamsoftSDK.css';
import { counsulates, delegationTypes } from './ReferenceData';
import DatePicker from "react-datepicker";

const FileSearch = ({ initialMetaData, displayFile }) => {
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
    const searchForFile = () => {

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" />
                    <form className="form-inline">
                        <button className="btn btn-primary active" aria-pressed="true" onClick={searchForFile} style={{ width: "133px" }} disabled={false}>ابحث</button>
                    </form>
                </div>
            </nav>
            <div class="container-fluid">
                <div class="row h-50">
                    <div class="col">
                        <div className="metaDivType" style={{ borderStyle: "ridge" }}>
                            <b> تفاصيل التوكيل </b>
                        </div>
                        <div id="div_DelegationDetails" className="divTableStyle" style={{ borderStyle: "ridge" }}>
                            <ul id="ulDelegationDetails">
                                <li style={{ textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="delegationType">
                                        <p>نوع التوكيل</p>
                                    </label>
                                    <select size="1" id="delegationType" name="delegationType" onChange={updateField}>
                                        <option value="0">اختر نوع التوكيل</option>
                                        {
                                            delegationTypes.map((item) => {
                                                return (
                                                    <option key={item.key} value={item.key}>{item.value}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </li>
                                <li style={{ paddingTop: "10px",textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_delegator">
                                        <p>الموكل</p>
                                    </label>
                                    <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px",textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_delegatorPassport">
                                        <p>رقم جواز سفر الموكل</p>
                                    </label>
                                    <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField}/>
                                </li>
                                <li style={{ paddingTop: "10px",textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_delegatedTo">
                                        <p> الموكل اليه</p>
                                    </label>
                                    <input type="text" size="20" id="txt_delegatedTo" name="delegatedTo" onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px",textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_delegatedToPassport">
                                        <p> رقم جواز سفر الموكل اليه</p>
                                    </label>
                                    <input type="text" size="20" id="txt_delegatedToPassport" name="delegatedToPassport" onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px",textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_keySearch">
                                        <p>كلمات بحثية</p>
                                    </label>
                                    <input type="text" size="20" id="txt_keySearch" name="keySearch" onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "20px",textAlign: "right" }}/>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div className="metaDivType" style={{ borderStyle: "ridge" }}>
                            <b> تفاصيل السفارة </b>
                        </div>
                        <div id="div_EmbassyDetails" className="divTableStyle" style={{ borderStyle: "ridge" }} >
                            <ul id="ulEmbassyDetails">
                                <li style={{ textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="counsulate">
                                        <p>القنصلية</p>
                                    </label>
                                    <select size="1" id="counsulate" name="counsulate" onChange={updateField}>
                                        <option value="0" >اختر القنصلية</option>
                                        {
                                            counsulates.map((item) => {
                                                return (
                                                    <option key={item.key} value={item.key}>{item.value}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_barcode">
                                        <p>باركود</p>
                                    </label>
                                    <input type="text" size="20" id="txt_barcode" name="barcode" value={metadataform.barcode} onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <label htmlFor="txt_delegationNumber" style={{ marginBottom: "-1.5rem" }}>
                                        <p>رقم التوكيل</p>
                                    </label>
                                    <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" value={metadataform.delegationNumber} onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <DatePicker
                                        selected={metadataform.delegationDate}
                                        onChange={handleDelegationDateChange}
                                        id="date_delegationDate"
                                        onSelect={handleDelegationDateChange}
                                    />
                                    <label htmlFor="date_delegationDate" style={{ marginBottom: "-1.5rem" }}>
                                        <p style={{ paddingLeft: "20px" }}>تاريخ التوكيل</p>
                                    </label>

                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <DatePicker
                                        selected={metadataform.transactionDate}
                                        onChange={handleTransactionDateChange}
                                        onSelect={handleTransactionDateChange}
                                        id="date_transactionDate"
                                    />
                                    <label htmlFor="date_transactionDate" style={{ marginBottom: "-1.5rem" }}>
                                        <p style={{ paddingLeft: "20px" }}>تاريخ المعاملة</p>
                                    </label>

                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_employeeName">
                                        <p>اسم الموظف</p>
                                    </label>
                                    <input type="text" size="20" id="txt_employeeName" name="employeeName" value={metadataform.employeeName} onChange={updateField} />
                                </li>
                                <li style={{ paddingTop: "10px", textAlign: "right" }}>
                                    <label style={{ marginBottom: "-1.5rem" }} htmlFor="txt_employeeNumber">
                                        <p>رقم الموظف</p>
                                    </label>
                                    <input type="text" size="20" id="txt_employeeNumber" name="employeeNumber" value={metadataform.employeeNumber} onChange={updateField} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row h-50">
                </div>
            </div>
        </div>

    )
}

export default FileSearch;