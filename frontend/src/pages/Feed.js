import React, {Component} from 'react';
import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

class Feed extends Component {
    render() {
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Thyago Gomes</span>
                            <span className="place">Rio de Janeiro</span>
                        </div>

                        <img src={more} alt="Mais informações"/>

                    </header>
                    
                    <img src="http://localhost:3333/files/20180103_171608.jpg"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Curtidas"/>
                            <img src={comment} alt="Comentários"/>
                            <img src={send} alt="Compartilhar publicação"/>
                        </div>
                        <strong>20 curtidas</strong>
                        <p>Esse dia foi massa! <span>#riodejaneiro #rocketseat</span></p>
                    </footer>

                </article>
                
                <article>
                    <header>
                        <div className="user-info">
                            <span>Thyago Gomes</span>
                            <span className="place">Rio de Janeiro</span>
                        </div>

                        <img src={more} alt="Mais informações"/>

                    </header>
                    
                    <img src="http://localhost:3333/files/20180103_171608.jpg"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Curtidas"/>
                            <img src={comment} alt="Comentários"/>
                            <img src={send} alt="Compartilhar publicação"/>
                        </div>
                        <strong>20 curtidas</strong>
                        <p>Esse dia foi massa! <span>#riodejaneiro #rocketseat</span></p>
                    </footer>

                </article>
            </section>
        );
    }
}

export default Feed;