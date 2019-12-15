import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Lists from "./components/Lists/Lists";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';


class App extends Component {
    state = {
        searchText: '',
        images: [],
        show: false,
        activeItem: ''
    }
    handleSeartchText = (event) => {
        this.setState({
            searchText: event.target.value
        })

    }
    handleApiCall = (e) => {
        e.preventDefault()
        const apiKey = '7586b02ed48cc5e49ae6e7f04dbb7cb28ffac5c170c0f6b46fcbc601450752ef';
        const unsplashLink = `https://api.unsplash.com/search/photos?page=1&query=${this.state.searchText}`;

        axios.get(unsplashLink, {
            headers: {
                Authorization: `Client-ID ${apiKey}`
            }
        })
            .then(response => {
                this.setState({
                    images: response.data
                })

            })
            .catch(err => {
                throw new Error(err)
            })

    }
    handleShow = (item) => {
        this.setState({activeItem:item}, ()=> this.setState({ show: true }));
    };
    handleModalHide = ()=> {
        this.setState({
            activeItem: '',
            show: false
        })
    };

    render() {
        return (
            <div className='app'>
                <Container maxWidth="lg">
                    <h1 className='title'>Unsplash image browser</h1>
                    <form action="" className='form'>
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined"
                                   onChange={this.handleSeartchText.bind(this)}/>
                        <Button variant="contained"
                                color="primary"
                                type='submit'
                                onClick={this.handleApiCall.bind(this)}
                                className='button'>
                            Browse image
                        </Button>
                    </form>
                    <Lists images={this.state.images}
                           handleModal={this.handleShow.bind(this)}
                           show={this.state.show}
                           handleHide={this.handleModalHide.bind(this)}
                           activeItem={this.state.activeItem}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
