import React, { useState } from 'react';
import './FileSearch.css';
import './DynamsoftSDK.css'
import { counsulates, delegationTypes,keyMap,mockingSearchResults } from './ReferenceData';
import DatePicker from "react-datepicker";
import useValidateAnyValueInFields from './useValidateAnyValueInFields';
import useFilterSearchResult from './useFilterSearchResult';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const [isDisabled] = useValidateAnyValueInFields(metadataform);
    const [searchResultArr, setSearchResultArr] = useState([]);
    const [filteredSearchResultArr] = useFilterSearchResult(searchResultArr,metadataform,keyMap);
    const [errorMessage, setErrorMessage] = useState(null);

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
    const searchForFile = async () => {
        axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_KEY;
        const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_SEARCH_PATH}/${process.env.REACT_APP_FOLDER_ID}/children?include=properties&where=(nodeType%3D'${process.env.REACT_APP_NODE_TYPE}')`;
        /*try {
            const response = await axios.get(url);
            console.log(response);
            if(!response && !response.data){
                setErrorMessage(null);
                setSearchResultArr(response.data.entries);
            }

          } catch (error) {
            console.error(error);
            setErrorMessage(''+error);
          }*/
          setSearchResultArr(mockingSearchResults);

        

    }
    return (
        <div id="DWTcontainer" className="container">
            <ul className="search-header">
                <li className="search-header">
                    <button onClick={searchForFile} style={{ width: "133px" }} disabled={isDisabled}><b>ابحث</b></button>
                </li>
                <li className="search-header" style={{ paddingLeft: "5px", float: "left" }}>
                    <Link to="/scan" style={{ width: "133px" }}>
                        <button style={{ width: "133px" }} ><b>المسح الضوئي</b></button>
                    </Link>
                </li>
            </ul>
            <div id="SearchDetails" className="divTableStyle" style={{ borderStyle: "ridge" }}>
                <div className="row">
                    <div className="column">
                        <div className="metaDivType" style={{ borderStyle: "ridge" }}>
                            <b> تفاصيل التوكيل</b>
                        </div>
                        <div id="div_DelegationDetails" className="divTableSearchStyle" style={{ borderStyle: "ridge" }}>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="delegationType">
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
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegator">
                                            <p>الموكل</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegatorPassport">
                                            <p>رقم جواز سفر الموكل</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField} />
                                    </li>
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegatedTo">
                                            <p> الموكل اليه</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegatedTo" name="delegatedTo" onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegatedToPassport">
                                            <p> رقم جواز سفر الموكل اليه</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegatedToPassport" name="delegatedToPassport" onChange={updateField} />
                                    </li>
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_keySearch">
                                            <p>كلمات بحثية</p>
                                        </label>
                                        <input type="text" size="20" id="txt_keySearch" name="keySearch" onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column" />
                                <div className="internal-column" />
                            </div>
                            <div className="row">
                                <div className="internal-column" />
                                <div className="internal-column" />
                            </div>
                            <div className="row">
                                <div className="internal-column" />
                                <div className="internal-column" />
                            </div>
                            <div className="row" style={{ paddingBottom: "3px" }}>
                                <div className="internal-column" />
                                <div className="internal-column" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="metaDivType" style={{ borderStyle: "ridge" }}>
                            <b> تفاصيل السفارة</b>
                        </div>
                        <div id="div_DelegationDetails" style={{ borderStyle: "ridge" }}>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="counsulate">
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
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_barcode">
                                            <p>باركود</p>
                                        </label>
                                        <input type="text" size="20" id="txt_barcode" style={{ paddingLeft: "5px" }} name="barcode" value={metadataform.barcode} onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegationNumber">
                                            <p>رقم التوكيل</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" value={metadataform.delegationNumber} onChange={updateField} />
                                    </li>
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="date_delegationDate">
                                            <p style={{ paddingLeft: "74px" }}>تاريخ التوكيل</p>
                                        </label>
                                        <DatePicker
                                            selected={metadataform.delegationDate}
                                            onChange={handleDelegationDateChange}
                                            id="date_delegationDate"
                                            onSelect={handleDelegationDateChange}
                                        />

                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="date_transactionDate">
                                            <p style={{ paddingLeft: "74px" }}>تاريخ المعاملة</p>
                                        </label>
                                        <DatePicker
                                            selected={metadataform.transactionDate}
                                            onChange={handleTransactionDateChange}
                                            id="date_transactionDate"
                                            onSelect={handleTransactionDateChange}
                                        />

                                    </li>
                                </div>
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_employeeName">
                                            <p>اسم الموظف</p>
                                        </label>
                                        <input type="text" size="20" id="txt_employeeName" name="employeeName" value={metadataform.employeeName} onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_employeeNumber">
                                            <p>رقم الموظف</p>
                                        </label>
                                        <input type="text" size="20" id="txt_employeeNumber" name="employeeNumber" value={metadataform.employeeNumber} onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="metaDivType" style={{ borderStyle: "ridge" }}>
                    <b> نتــــائـــج البـــحـــث  </b>
                </div>
                <div id="div_ResultsDetails" className="divTableStyle" style={{ borderStyle: "ridge" }}>
                    {
                        (errorMessage)? <div style={{color:"red"}}>تعذر الاتصال بالنظام<br/>{errorMessage} </div>: 
                        ((!filteredSearchResultArr)? 'لا توجد نتائج بحث' : <div>Rendering table ...</div>)
                    }
                </div>
            </div>

        </div>

    )
}

export default FileSearch;