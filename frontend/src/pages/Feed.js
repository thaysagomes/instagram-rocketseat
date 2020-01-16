import React, {Component} from 'react';
import './Feed.css';
import api from '../services/api';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

class Feed extends Component {

    state = { //variável para armazenar informações para serem alteradas
        feed: [],
    };

    async componentDidMount(){
        const response = await api.get('posts'); //o que é passado dentro dos parênteses vai funcionar junto com a url, ex: 'localhost:3333/posts'

        this.setState({ feed: response.data });
    }
    render() {
        return(
            <section id="post-list">
                {this.state.feed.map( post => (
                    <article>
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>

                        <img src={more} alt="Mais informações"/>

                    </header>
                    
                    <img src={`http://localhost:3333/files/${post.image}`}/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Curtidas"/>
                            <img src={comment} alt="Comentários"/>
                            <img src={send} alt="Compartilhar publicação"/>
                        </div>
                        <strong>{post.likes} curtidas</strong>
                        <p>{post.description}<span>{post.hashtags}</span></p>
                    </footer>

                </article>
                ))}
            </section>
        );
    }
}

export default Feed;