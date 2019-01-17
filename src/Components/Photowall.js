import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photowall(props) {
    return <div>
             <button onClick={props.onNavigate} className="addIcon"> + </button>
             <div className="photoGrid">
              {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
             </div>
           </div>

}

Photowall.propTypes = {
  posts : PropTypes.array.isRequired,
  onRemovePhoto : PropTypes.func.isRequired
}

export default Photowall
