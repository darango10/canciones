import React from 'react';

const Info = ({info}) => {

    if (Object.keys(info).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES} = info

    return (
        <div className='card border-light '>
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt={'Logo Artista'}/>
                <p className="card-text">Género: {strGenre}</p>
                <p className="card-text">Biografía: {strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"/>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"/>
                    </a>
                </p>
            </div>

        </div>
    );
};

export default Info;