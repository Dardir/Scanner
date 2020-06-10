import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './FileSearch.css';
import './DynamsoftSDK.css';
//import { mockingFileURL } from './ReferenceData';

const FileDisplay = ({ metadataObj, navigateBack }) => {
    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    
    const [errorMessage, setErrorMessage] = useState(null);
    const [fileURL, setFileURL] = useState(null);

    useEffect(() => {
        async function fetchFileURL() {
            axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_KEY;
            //const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_SEARCH_PATH}/${metadataObj.id}/content?attachment=false`;
            const url = process.env.REACT_APP_FETCH_URL + `/${metadataObj.id}`;
            console.log("Calling the following URL to fetch file content");
            console.log(url); 
            try {
                const response = await axios.get(url);
                console.log(response);
                if (response && response.data) {
                    setErrorMessage(null);
                    console.log("response.data = "+response.data);
                    return response.data;
                }

            } catch (error) {
                console.error(error);
                setErrorMessage('' + error);
                return null;
            }
        }
        setFileURL(fetchFileURL());
        //setFileURL(mockingFileURL);

    }, [metadataObj.id]);


    return (
        <div id="DWTcontainer" className="container">
            <ul className="search-header">
                <li className="search-header" style={{ paddingLeft: "5px", float: "left" }}>
                    <button onClick={navigateBack} style={{ width: "133px" }} ><b>رجوع</b></button>
                </li>
            </ul>
            <div className="divDisplayFile" style={{ borderStyle: "ridge", Height: '688px' }}>
                <div className="row">
                    <div className="columnDisplay" style={{ Width: '583px', Height: '688px', borderStyle: 'groove', display: 'block' }}>
                    {
                        (errorMessage)? <div style={{ color: "red" }}>تعذر الاتصال بالنظام<br />{errorMessage} </div> : <iframe title='Display File' src={fileURL} width="100%" height="100%"></iframe>
                    }
                        
                    </div>
                    <div className="column" style={{ float: 'right' }}>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="counsulate">
                                        <p>القنصلية</p>
                                    </label>
                                    <input readOnly type="text" id="txt_counsulate" style={{ paddingLeft: "5px", textAlign: "right" }} name="counsulate" value={metadataObj.properties.counsulate} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegationNumber">
                                        <p>رقم المعاملة</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegationNumber" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegationNumber" value={metadataObj.properties.delegationNumber} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="date_transactionDate">
                                        <p style={{ paddingLeft: "74px" }}>تاريخ المعاملة</p>
                                    </label>
                                    <input readOnly type="text" id="date_transactionDate" style={{ paddingLeft: "5px", textAlign: "right" }} name="transactionDate" value={formatDate(metadataObj.properties.transactionDate)} />

                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="delegationType">
                                        <p>نوع المعاملة</p>
                                    </label>
                                    <input readOnly type="text" id="delegationType" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegationType" value={metadataObj.properties.delegationType} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegator">
                                        <p>صاحب المعاملة</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegator" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegator" value={metadataObj.properties.delegator} />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegatorPassport">
                                        <p>رقم جواز سفر صاحب المعاملة / الرقم القومي</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegatorPassport" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegator" value={metadataObj.properties.delegatorPassport} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_keySearch">
                                        <p>كلمات بحثية</p>
                                    </label>
                                    <input readOnly type="text" id="txt_keySearch" style={{ paddingLeft: "5px", textAlign: "right" }} name="keySearch" value={metadataObj.properties.keySearch} />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FileDisplay;