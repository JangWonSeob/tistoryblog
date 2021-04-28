import React, { useState } from 'react';
import styled from 'styled-components';


const Search = () => {
    const [text, setText] = useState("검색어 입력...");
    const onChangetext = (e) =>{
        setText(e.target.value);
        console.log(e.target.value);
    }
    return(
        <table className={"table"}>
            <tr>
                <td>
                    <input type={"text"} size={"25"} className={"input-sm"} placeholder={"검색어 입력.."}  onChange = {onChangetext}/>
                </td>
            </tr>
        </table>
    );
}

export default Search;
