import React, { Component } from 'react';
import './Search.css';
import axios from 'axios'

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            artistfirst: '',
            artistlast: '',
            artistRes: [],
            playlist: []
        }
    }



    updateArtistsFirst(val) {
        this.setState({
            artistfirst: val

        })
        console.log(this.state.artistfirst)
    }
    updateArtistsLast(val) {
        this.setState({
            artistlast: val

        })
        console.log(this.state.artistlast)
    }

    getArtist() {
        let first = this.state.artistfirst;
        let last = this.state.artistlast;
        let promise = axios.get(`https://itunes.apple.com/search?term=${first}+${last}&music&limit=10`)
        promise.then(res => {
            this.setState({
                artistRes: res.data.results
            })
             console.log(this.state.artistRes)
        })
    }

    addToPlaylist(a,b,c,d) {
        console.log("a,b,c,d", a, b, c, d)
        let obj = {a:a,b:b,c:c,d:d}
        let promise = axios.post('http://localhost:3001/api/playlist', obj)
        promise.then(res => {
            console.log(res)
            this.setState({
                playlist: res.data
            })
             console.log(this.state.playlist)
        })
    }


    render() {
        let list = this.state.artistRes.map((e, i) => {
            return (
                <div key={i}>
                    <p>Artist: {e.artistName}</p>
                    <p>Title: {e.trackName}</p>
                    <p>Album: {e.collectionName}</p>
                    <p>Genre: {e.primaryGenreName}</p>
                    <button onClick={() => this.addToPlaylist(e.artistName,e.trackName,e.collectionName,e.primaryGenreName)}>Add to playlist</button>
                </div>
            )
        })
        console.log(this.state.playlist.length!== 0 ? this.state.playlist.a: null)
        console.log(this.state.playlist)
        let playlist = this.state.playlist.map((e,eye)=>{
            return(
                <div key={eye}>
                    <p>Artist: {e.a}</p>
                    <p>Title: {e.b}</p>
                    <p>Album: {e.c}</p>
                    <p>Genre: {e.d}</p>
                </div>
            )
        })

        return (
            <div>
                <input onChange={e => this.updateArtistsFirst(e.target.value)} placeholder='Search For Artists First Name' />
                <input onChange={e => this.updateArtistsLast(e.target.value)} placeholder='Search For Artists Last Name' />
                <button onClick={() => this.getArtist()}>Search</button>
                {list}
                <h3>Playlist:</h3>
                {playlist ? playlist : null}
            </div>
        )
    }
}