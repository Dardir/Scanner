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
            <div  className="divDisplayFile" style={{ borderStyle: "ridge" ,Height: '688px'}}>
                <div className="row">
                    <div className="columnDisplay" style={{Width: '583px', Height: '688px',borderStyle: 'groove',display:'block'}}>
                            Displaying file of {metadataObj.id}
                    </div>
                    <div className="column">
                        Displaying Metadata
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FileDisplay;