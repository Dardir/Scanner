import React from 'react';
import './FileSearch.css';
import './DynamsoftSDK.css';

const FileDisplay = ({ metadataObj, navigateBack }) => {
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
                    <div className="column">
                        <div className="row">
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="counsulate">
                                        <p>القنصلية</p>
                                    </label>
                                    <input readOnly type="text" id="txt_counsulate" style={{ paddingLeft: "5px" }} name="counsulate" value={metadataObj.properties.counsulate}  />
                                </li>
                            </div>
                            <div className="internal-column">
                                <li style={{ textAlign: "right", listStyleType: "none" }}>
                                    <label htmlFor="txt_barcode">
                                        <p>باركود</p>
                                    </label>
                                    <input readOnly type="text" id="txt_barcode" style={{ paddingLeft: "5px" }} name="barcode" value={metadataObj.properties.barcode}  />
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