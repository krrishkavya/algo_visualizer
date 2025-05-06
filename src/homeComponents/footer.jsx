import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                
                    <GitHubButton href="https://github.com/J-Archie" aria-label="Archie Github">Archie</GitHubButton>
                    &nbsp
                    <GitHubButton href="https://github.com/sujal181218" aria-label="Sujal Github">Sujal</GitHubButton>
                    &nbsp
                    <GitHubButton href="https://github.com/SayyedAdil"  aria-label="Adil Github">Adil</GitHubButton>
                </div>

            </footer>
        );
    }
}

export default Footer;