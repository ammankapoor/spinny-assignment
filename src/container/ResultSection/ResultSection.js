import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useInView } from "react-intersection-observer"
import "./ResultSection.scss";

import { RESET_DATA, SET_DATA } from "../../store/actions";

function ResultSection({ data, fetchingData, fetchedSuccess, searchValue, onSearchSuccess, lastPage }) {
  const [pageNumber, setPageNumber] = useState(2);

  const [loadMoreRef, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(()=>{
    if(inView)
    {
      fetch(`https://api.jikan.moe/v3/search/anime?q=${searchValue}&limit=16&page=${pageNumber}`)
      .then(response => response.json())
      .then(result => {
        const temp ={};
        temp.results= [...data, ...result.results];
        temp.last_page= result.last_page;
         onSearchSuccess(temp);
        if(result.last_page != pageNumber)
          setPageNumber(pageNumber + 1);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  },[inView])

  useEffect(()=>{
      if(fetchingData)
      {
        setPageNumber(2);
      }
  },[fetchingData])

  return (
    <div
      className="search-container result-container"
      style={{ justifyContent: fetchedSuccess && "unset", overflow: fetchedSuccess ? "auto" :'hidden' }}
    >
      {fetchingData && (
        <img
          src="https://i.pinimg.com/originals/f9/9f/c8/f99fc83c656da7ec8db2f6cbc88c6fa6.gif"
          alt="loader"
        />
      )}
      {fetchedSuccess && data && (
        <React.Fragment>
          {data.map((data, index) => {
              return (
                <a className="card" href={data.url} target="_blank" key={index}>
                  <img loading='lazy' className="pic" src={data.image_url} />
                  <div className="card-heading">{data.title}</div>
                </a>
              );
            })}
            {pageNumber <= lastPage && <img ref={loadMoreRef} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/dae67631234507.564a1d230a290.gif' alt='loader' />}
        </React.Fragment>
      )}
      {!fetchingData && data.length ===0 &&
        <img className='no-data-img' src='https://www.pngkey.com/png/full/396-3960421_abstract-png-transparent-images-connect-the-data-dots.png' alt='no-data' />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    fetchingData: state.fetchingData,
    fetchedSuccess: state.fetchedSuccess,
    searchValue: state.searchValue,
    lastPage: state.lastPage
  };
};

const mapDisptachToProps = dispatch => {
  return {
    onResetData: () => dispatch({ type: RESET_DATA }),
    onSearchSuccess: (data) => dispatch({type:SET_DATA, data })
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ResultSection);
