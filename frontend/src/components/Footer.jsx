import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export const Footer = () => {
    return (
        <footer style={{paddingTop: '10px'}}>
            <div class="card">
                <div class="card-header">
                    Social Media 
                </div>
                <div class="card-body" id="footer">
                    <div class="button-connect">
                        <a href="https://github.com/devanfer02" class="btn" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-github.svg" alt="github" class="svg-footer"/>
                        </a>
                    </div>
                    <div class="button-connect">
                        <a href="https://www.linkedin.com/in/dvnnfrr/" class="btn" target="_blank" rel="noreferrer">
                            <img src="/icons/icons8-linkedin.svg" alt="linkedin" class="svg-footer"/>
                        </a>
                    </div>
                    <div class="button-connect">
                        <a href="https://www.instagram.com/dvnf20/" class="btn" target="_blank" rel="noreferrer">
                            <img src="/icons/icons8-instagram.svg" alt="instagram" class="svg-footer"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
