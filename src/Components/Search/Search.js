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
    }

    getArtist() {
        let first = this.state.artistfirst;
        let promise = axios.get(`https://itunes.apple.com/search?term=${first}+&music&limit=10`)
        promise.then(res => {
            this.setState({
                artistRes: res.data.results
            })
        })
    }

    addToPlaylist(a, b, c, d) {
        let id = this.state.playlist.id;
        id = 0;
        let obj = { a: a, b: b, c: c, d: d, id }
        console.log(obj)
        let promise = axios.post('http://localhost:3001/api/playlist', obj)
        promise.then(res => {
            // console.log(res)
            this.setState({
                playlist: res.data
            })
            console.log(this.state.playlist)
        })
    }
    removeFromPlaylist(eye) {
        console.log(eye)
        // let id = eye;
        let promise = axios.delete(`/api/playlist/${eye}`)
        promise.then(res => {
            console.log(res)
            this.setState({
                playlist: res.data
            })
        })
    }
    moveUp(eye, a, b, c, d) {
        let id = eye;
        console.log(id)
        let obj = { a: a, b: b, c: c, d: d }
        let promise = axios.put(`/api/playlist/up/${id}`, obj)
        promise.then(res => {
            this.setState({
                playlist: res.data
            })
        })
    }
    moveDown(eye, a, b, c, d) {
        let id = eye;
        console.log(id)
        let obj = { a: a, b: b, c: c, d: d }
        let promise = axios.put(`/api/playlist/down/${id}`, obj)
        promise.then(res => {
            this.setState({
                playlist: res.data
            })
        })
    }
    loadPlaylist() {
        let promise = axios.get('/api/playlist')
        promise.then(res => {
            this.setState({
                playlist: res.data
            })
        })
    }

    render() {
        let list = this.state.artistRes.map((e, i) => {
            return (
                <div className='search-list' key={i}>
                    <p>{e.id}</p>
                    <p>Artist: {e.artistName}</p>
                    <p>Title: {e.trackName}</p>
                    <p>Album: {e.collectionName}</p>
                    <p>Genre: {e.primaryGenreName}</p>
                    <button className='playlist-button' onClick={() => this.addToPlaylist(e.artistName, e.trackName, e.collectionName, e.primaryGenreName)}>Add to playlist</button>
                </div>
            )
        })
        // console.log(this.state.playlist.length!== 0 ? this.state.playlist.a: null)
        // console.log(this.state.playlist)
        let playlist = this.state.playlist.map((e, eye) => {
            return (
                <div className='playlist-items' key={eye}>
                    <div>Artist: {e.a}</div>
                    <div>Title: {e.b}</div>
                    <div>Album: {e.c}</div>
                    <div>Genre: {e.d}</div>
                    <button className='button-delete' onClick={() => this.removeFromPlaylist(eye)}>🚮</button>
                    <button className='button-up' onClick={() => this.moveUp(eye, e.a, e.b, e.c, e.d)}>⬆️</button>
                    <button className='button-down' onClick={() => this.moveDown(eye, e.a, e.b, e.c, e.d)}>⬇️</button>
                </div>
            )
        })

        return (
            <div className='screen'>
                <div className='top-half'></div>
                <div className='bottom-half'></div>
                <div className='search-fields'>
                    <input className='search-input' onChange={e => this.updateArtistsFirst(e.target.value)} placeholder='Search For Music' />
                    <button className='search-button' onClick={() => this.getArtist()}>Search</button>
                    <button className='playlistload-button' onClick={() => this.loadPlaylist()}>Load Playlist</button>
                </div>
                <div className='content'>
                    <h3 className='search-title'>Search Results:</h3>
                    <p className='list'>{list}</p>
                    <h3 className='playlist-title'>Playlist:</h3>
                    <h6 className='playlist'>{playlist ? playlist : null}</h6>
                </div>
            </div>
        )
    }
}