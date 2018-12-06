import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults';

class TrackList extends React.Component {
 render() {
    return (
      <div className="TrackList"> 
        {
          this.props.tracks.map(track => {
            return <Track track={track} 
                        Key={track.id}
                        onAdd={this.props.onAdd}
                        addTrack= {this.props.track}
                        isRemoval={this.props.isRemoval} 
                        onRemove={this.removeTrack} />
          })  
        }
        </div>
      );
    }    
}

export default TrackList;