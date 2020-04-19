import React from 'react';
import './FileSearch.css';
import './DynamsoftSDK.css';

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
                        Displaying file of {metadataObj.id}
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
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_barcode">
                                        <p>باركود</p>
                                    </label>
                                    <input readOnly type="text" id="txt_barcode" style={{ paddingLeft: "5px", textAlign: "right" }} name="barcode" value={metadataObj.properties.barcode} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegationNumber">
                                        <p>رقم التوكيل</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegationNumber" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegationNumber" value={metadataObj.properties.delegationNumber} />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="date_delegationDate">
                                        <p style={{ paddingLeft: "74px" }}>تاريخ التوكيل</p>
                                    </label>
                                    <input readOnly type="text" id="date_delegationDate" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegationDate" value={formatDate(metadataObj.properties.delegationDate)} />
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
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_employeeName">
                                        <p>اسم الموظف</p>
                                    </label>
                                    <input readOnly type="text" id="txt_employeeName" style={{ paddingLeft: "5px", textAlign: "right" }} name="employeeName" value={metadataObj.properties.employeeName} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_employeeNumber">
                                        <p>رقم الموظف</p>
                                    </label>
                                    <input readOnly type="text" id="txt_employeeNumber" style={{ paddingLeft: "5px", textAlign: "right" }} name="employeeNumber" value={metadataObj.properties.employeeNumber} />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="delegationType">
                                        <p>نوع التوكيل</p>
                                    </label>
                                    <input readOnly type="text" id="delegationType" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegationType" value={metadataObj.properties.delegationType} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegator">
                                        <p>الموكل</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegator" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegator" value={metadataObj.properties.delegator} />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegatorPassport">
                                        <p>رقم جواز سفر الموكل</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegatorPassport" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegator" value={metadataObj.properties.delegatorPassport} />
                                </li>
                            </div>
                        </div>
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegatedTo">
                                        <p> الموكل اليه</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegatedTo" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegator" value={metadataObj.properties.delegatedTo} />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_delegatedToPassport">
                                        <p> رقم جواز سفر الموكل اليه</p>
                                    </label>
                                    <input readOnly type="text" id="txt_delegatedToPassport" style={{ paddingLeft: "5px", textAlign: "right" }} name="delegatedToPassport" value={metadataObj.properties.delegatedToPassport} />
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