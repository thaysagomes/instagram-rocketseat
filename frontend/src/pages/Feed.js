import React, {Component} from 'react';
import './Feed.css';
import api from '../services/api';
import io from 'socket.io-client';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

class Feed extends Component {

    state = { //variável para armazenar informações para serem alteradas
        feed: [],
    };

    async componentDidMount(){

        this.registerToSocket();

        const response = await api.get('posts'); //o que é passado dentro dos parênteses vai funcionar junto com a url, ex: 'localhost:3333/posts'

        this.setState({ feed: response.data });
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        //duas informações em real time: post e like

        socket.on('post', newPost => {
            this.setState({feed: [newPost, ...this.state.feed]}); //newPost sendo o primeiro da lista e o resto vindo sucessivamente
        });

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                )
            })
        });
    }


    handleLike = id => {
        api.post(`/posts/${id}/like`); //a mesma rota que é utilizada na api
    }

    render() {
        return(
            <section id="post-list">
                {this.state.feed.map( post => ( //sempre que utilizar o map, deve-se colocar o key no primeiro elemento que retornar
                    <article key={post._id}>  
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
                            <button type="button" onClick={ () => this.handleLike(post._id)}>
                            <img src={like} alt="Curtidas"/>
                            <button/>
                            <img src={comment} alt="Comentários"/>
                            </button>
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