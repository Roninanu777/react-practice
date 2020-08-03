import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    return (
        <div>
            { song && <h3>Details for:</h3> }
            { song && <p>Title: {song.title} <br/> Duration: {song.duration}</p>}
            { !song && <h4>Select a song</h4>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);