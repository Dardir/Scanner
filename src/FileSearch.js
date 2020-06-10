import React, { useState } from 'react';
import './FileSearch.css';
import './DynamsoftSDK.css'
import { counsulates, delegationTypes, keyMap } from './ReferenceData';
//import { mockingSearchResults } from './ReferenceData';
import DatePicker from "react-datepicker";
import useValidateAnyValueInFields from './useValidateAnyValueInFields';
import useFilterSearchResult from './useFilterSearchResult';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FileSearch = ({ displayFile, searchResults }) => {
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
    const [isDisabled] = useValidateAnyValueInFields(metadataform);
    const [searchResultArr, setSearchResultArr] = useState([]);
    let filteredDisplayedArr = null;
    const [filteredSearchResultArr] = useFilterSearchResult(searchResultArr, metadataform, keyMap);
    const isEmptyMetadata = (metadata) => {
        return Object.keys(metadata).every((key) => {
            return metadata[key] === ''
        })
    }

    if (isEmptyMetadata(metadataform)) {
        filteredDisplayedArr = searchResults;
    } else {
        filteredDisplayedArr = filteredSearchResultArr;
    }
    const [errorMessage, setErrorMessage] = useState(null);

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
    const searchForFile = async () => {
        //axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_KEY;
        //const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_SEARCH_PATH}/${process.env.REACT_APP_FOLDER_ID}/children?include=properties&where=(nodeType%3D'${process.env.REACT_APP_NODE_TYPE}')`;
        const url = process.env.REACT_APP_SEARCH_URL + `/${process.env.REACT_APP_FOLDER_ID}`;

        try {
            const response = await axios.get(url);
            //const response = mockingSearchResults;
            console.log(response);
            if (response && response.data && response.data.list && response.data.list.entries) {
                console.log("response.data.list.entries = ");
                console.dir(response.data.list.entries);
                setErrorMessage(null);
                setSearchResultArr(response.data.list.entries);
            } else if (response && response.data) {
                setErrorMessage('' + response.data);
            }

        } catch (error) {
            console.error(error);
            setErrorMessage('' + error);
        }
        //setSearchResultArr(mockingSearchResults);
    }
    function onClickDisplay(id) {
        displayFile(filteredDisplayedArr[id], filteredDisplayedArr);
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
                            <b> تفاصيل المعاملة</b>
                        </div>
                        <div id="div_DelegationDetails" className="divTableSearchStyle" style={{ borderStyle: "ridge" }}>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="delegationType">
                                            <p>نوع المعاملة</p>
                                        </label>
                                        <select size="1" id="delegationType" name="delegationType" onChange={updateField}>
                                            <option value="0">اختر نوع المعاملة</option>
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
                                            <p>صاحب المعاملة</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegator" name="delegator" onChange={updateField} />
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegatorPassport">
                                            <p>رقم جواز سفر صاحب المعاملة / الرقم القومي</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegatorPassport" name="delegatorPassport" onChange={updateField} />
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
                            </div>
                            <div className="row">
                                <div className="internal-column">
                                    <li style={{ textAlign: "right", listStyleType: "none" }}>
                                        <label htmlFor="txt_delegationNumber">
                                            <p>رقم المعاملة</p>
                                        </label>
                                        <input type="text" size="20" id="txt_delegationNumber" name="delegationNumber" value={metadataform.delegationNumber} onChange={updateField} />
                                    </li>
                                </div>
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
                        (errorMessage) ? <div style={{ color: "red" }}>تعذر الاتصال بالنظام<br />{errorMessage} </div> :
                            ((!filteredDisplayedArr) ? 'لا توجد نتائج بحث' :
                                <div className="limiter">
                                    <div className="container-table100">
                                        <div className="wrap-table100">
                                            <div className="table">

                                                <div className="rowTable header">
                                                    <div className="cell" />
                                                    <div className="cell">
                                                        صاحب المعاملة
							                        </div>
                                                    <div className="cell">
                                                        نوع المعاملة
							                        </div>
                                                    <div className="cell">
                                                        القنصلية
							                        </div><div className="cell">
                                                        اسم الملف
							                        </div>

                                                </div>
                                                {
                                                    filteredDisplayedArr.map((result, key) => {
                                                        return (
                                                            <div key={key} className="rowTable">
                                                                <div className="cell" data-title="Display">
                                                                    <button onClick={() => { onClickDisplay(key) }} ><b>عرض الملف</b></button>
                                                                </div>

                                                                <div className="cell" data-title="Delegator">
                                                                    {result.properties.delegator}
                                                                </div>
                                                                <div className="cell" data-title="Delegation Type">
                                                                    {result.properties.delegationType}
                                                                </div>
                                                                <div className="cell" data-title="Consulate">
                                                                    {result.properties.counsulate}
                                                                </div>
                                                                <div className="cell" data-title="File Name">
                                                                    {result.name}
                                                                </div>

                                                            </div>

                                                        )

                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>

        </div>

    )
}

export default FileSearch;