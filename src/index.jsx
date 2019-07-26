import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Profile } from './components/Profile/Profile';
import { Gallery } from './components/Gallery/Gallery';
import { pictures } from './pictures';
class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <Profile avatar="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                        name="janedoe_"
                        />
                    </div>
                </header>
                <main>
                    <div className="container">
                        <Gallery pictures={pictures} />
                    </div>
                </main>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));