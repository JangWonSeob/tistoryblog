import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const Bodystyle = styled.div`
    text-align: center;
`;

const Inputstyle = styled.input`
    width: 50%;
    font-size: 32px;
    font-weight: 600;
    hight: 40px;
    border: 0;
    border-bottom: 1px solid gray;
`;

const Buttonstyle = styled.input`
    padding: 6px 6px 6px 6px;
    border: 0;
    border-bottom: 1px solid gray;
`;



const Search = () => {
    const [text, setText] = useState();
    const onChangetext = (e) =>{
        setText(e.target.value);
    }
    console.log(text)
    return(
        <Bodystyle>
            <Inputstyle type="text" size="50" className="input-serach" placeholder={"검색어 입력.."}  onChange = {onChangetext}/>
            <Buttonstyle onClick={
                function(e){
                var _delete = e.tatget.value;
                _delete.splice(1,1);
            }.bind(this)} type="button" value="delete"></Buttonstyle>
        </Bodystyle>
    );
}

export default Search;
