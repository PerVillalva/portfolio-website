import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const token = process.env.REACT_APP_SPOTIFY_API_TOKEN;

const config = {
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
};

const CurrentlyPlaying = () => {
    const [songId, setSongId] = useState('');

    useEffect(() => {
        const getSong = async () => {
            try {
                const result = await axios.get(URL, config);
                setSongId(result.data.item.id);
            } catch (e) {
                console.log(e);
            }
        };
        getSong();
    }, []);

    console.log(songId);
    const songURL = `https://open.spotify.com/embed/track/${songId}`;

    return (
        <div className='h-auto w-full rounded-xl'>
            <iframe
                style={{ borderRadius: '12px' }}
                src={songURL}
                width='100%'
                height='152'
                frameBorder='0'
                allowfullscreen=''
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
            ></iframe>
        </div>
    );
};

export default CurrentlyPlaying;
