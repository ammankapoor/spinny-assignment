import React, { useState } from "react";
import { connect } from "react-redux";
import "./Search.scss";

import {SET_DATA, SET_FECTHING_DATA, RESET_DATA, SET_SEARCH_VALUE} from '../../store/actions'; 
import utility from '../../shared/utility';

function Search({onSearchSuccess, onToggleFetchingData, onResetData, onSetSearchValue}) {
  const [searchVal, setSearchVal] = useState("");
  function getQueryData() {
    if(searchVal.length<1)
    return
    onResetData();
    onSetSearchValue(searchVal);
    onToggleFetchingData(true);
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchVal}&limit=16&page=1`)
      .then(response => response.json())
      .then(result => {
        onToggleFetchingData(false);
        onSearchSuccess(result);
      })
      .catch(error => {
        onToggleFetchingData(false);
        console.error("Error:", error);
      });
  }

  const debouncedGetQueryData= utility.debounce(()=>getQueryData(),500);
  return (
    <div className="search-container">
      <div className="search-heading">Try out the Anime Search API</div>
      <div className="search">
        <input
          className="input"
          value={searchVal}
          onKeyDown= {e => {e.keyCode === 13 && debouncedGetQueryData()}}
          onChange={e => setSearchVal(e.target.value)}
          placeholder="search for an anime, e.g Naruto"
        />
        <button className="submitBtn" onClick={() => debouncedGetQueryData()}>
          Go
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDisptachToProps = dispatch =>  {
  return {
    onSearchSuccess: (data) => dispatch({type:SET_DATA, data }),
    onToggleFetchingData: (data) => dispatch({type:SET_FECTHING_DATA, data }),
    onResetData: () => dispatch({type:RESET_DATA}),
    onSetSearchValue:(data) => dispatch({type:SET_SEARCH_VALUE, data }),
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(Search);