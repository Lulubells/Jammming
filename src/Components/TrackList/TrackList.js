import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
 render() {
    return (
      <div className="TrackList"> {
          this.props.tracks.map(track => {
            return <Track track={track} 
                        Key={track.id}
                        onAdd={this.props.onAdd}
                        isRemoval={this.props.isRemoval} 
                        onRemove={this.onRemove} />
          })  
        }
        </div>
      );
    }    
}

export default TrackList;
