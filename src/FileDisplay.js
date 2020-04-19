import React from 'react';
import './FileSearch.css';

const FileDisplay = ({ metadataObj,navigateBack }) => {
    return (
        <div id="DWTcontainer" className="container">
            <ul className="search-header">
                <li className="search-header" style={{ paddingLeft: "5px", float: "left" }}>
                    <button onClick={navigateBack} style={{ width: "133px" }} ><b>رجوع</b></button>
                </li>
            </ul>
            Displaying file with ID = {metadataObj.id}
        </div>
    )
}

export default FileDisplay;