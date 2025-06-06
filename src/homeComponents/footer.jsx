import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                
                    <GitHubButton href="https://github.com/krrishkavya" aria-label="Krrish Github">Krrish</GitHubButton>
                </div>

            </footer>
        );
    }
}

export default Footer;