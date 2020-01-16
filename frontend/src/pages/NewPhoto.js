import React, {Component} from 'react';
import './NewPhoto.css';
import api from '../services/api';

class NewPhoto extends Component {
    
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleChange = e => { //função para pegar o que for escrito no input (e = evento)
        this.setState({[e.target.name]: e.target.value});
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleSubmit = async e => {
        e.preventDefault(); //evita que atualize a página ao submeter o form

        const data = new FormData(); //como não está utilizando json, deve-se instanciar o FormData

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data);

        this.props.history.push('/'); //direcionar o usuário para uma rota específica
    }

    render() {
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />

                <input
                type="text"
                name="author"
                placeholder="Autor do post"
                onChange={this.handleChange}
                value={this.state.author}
                />

                
                <input
                type="text"
                name="place"
                placeholder="Local do post"
                onChange={this.handleChange}
                value={this.state.place}
                />

                
                <input
                type="text"
                name="description"
                placeholder="Descrição do post"
                onChange={this.handleChange}
                value={this.state.description}
                />

                
                <input
                type="text"
                name="hashtags"
                placeholder="Hashtags do post"
                onChange={this.handleChange}
                value={this.state.hashtags}
                />

                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default NewPhoto;