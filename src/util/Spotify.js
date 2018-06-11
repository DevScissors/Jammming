const clientID = '3e5d473c1c524feab8353cdd596c0ba9';
const uri = 'https://scizjammming.surge.sh';

let accessToken;

const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } 
        else {
            let url = window.location.href;
            const accessTokenMatch = url.match(/access_token=([^&]*)/);
            const expiresInMatch = url.match(/expires_in=([^&]*)/);
            if (accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState(accessToken, null, '/');
            } 
            else if (!accessTokenMatch) {
                window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${uri}`;
            }
        }
    },

    search(searchInput) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchInput}`,
            {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.searchResults) {
                    jsonResponse.searchResults.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    })
                    )
                }
            });
    },
    
    savePlaylist(name, URI) {
        if (name && URI) {
        } 
        else {
            return;
        }
        let accessToken;
        let headers = {
            Authorization: `Bearer ${accessToken}`
        }
        let userID;
        fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.users) {
                    return jsonResponse.users.map(user => userID = user.id);
                }
            });

        fetch('/v1/users/{user_id}/playlists', {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
                "playlistName": name,
                "playlistID": userID
            })
        })

        fetch('/v1/users/{user_id}/playlists/{playlist_id}/tracks', {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
                "URI": URI,
                "playlistID": userID

            })
        })
    }
}

export default Spotify;