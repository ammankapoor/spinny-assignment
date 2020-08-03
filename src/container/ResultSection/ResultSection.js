import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./ResultSection.scss";

import { RESET_DATA } from "../../store/actions";

function ResultSection({ data, fetchingData, fetchedSuccess }) {
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
      {fetchedSuccess && (
        <React.Fragment>
          {data &&
            data.map((data, index) => {
              return (
                <a className="card" href={data.url} target="_blank" key={index}>
                  <img loading='lazy' className="pic" src={data.image_url} />
                  <div className="card-heading">{data.title}</div>
                </a>
              );
            })}
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
    fetchedSuccess: state.fetchedSuccess
  };
};

const mapDisptachToProps = dispatch => {
  return {
    onResetData: () => dispatch({ type: RESET_DATA })
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ResultSection);
