import './main.css';
import Card1 from '../../assets/playlist/1.jpeg';
import Card2 from '../../assets/playlist/2.png';
import Card3 from '../../assets/playlist/3.jpeg';
import Card4 from '../../assets/playlist/4.jpeg';
import Card5 from '../../assets/playlist/5.jpeg';
import Card6 from '../../assets/playlist/6.jpeg';
import Card7 from '../../assets/playlist/7.jpeg';
import Card8 from '../../assets/playlist/8.jpeg';

const Main = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boa tarde</h1>
                    <h2 className="nav-session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* cards */}
                            <a href="" className="cards">
                                <div className="cards card1">
                                    <img src={Card1} alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src={Card2} alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src={Card3} alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src={Card4} alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src={Card5} alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src={Card6} alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src={Card7} alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src={Card8} alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;