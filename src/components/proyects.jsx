import React, {Component} from 'react'
import '../styles/style.css'
import git_ico from '../img/enlace/github.png'
import enlace_ico from '../img/enlace/enlace.png'
import inventory_app from '../img/proyects/inventory_app.png'
import openQueu_app from '../img/proyects/openqueu.png'
import inventory_wed from '../img/proyects/inventory_page.png'
import openQueu_web from '../img/proyects/openqueu_page.png'

export function Proyects() {
    return (
        <div id='proyect_sect'>
            <div id='title_pro'>
                <h1>Proyects</h1>
            </div>
            <div id='cont_carts'>
                <div className='cont_pro'>
                    <div className='card_img-hover'>
                        <img src={inventory_app} alt='image proyect' />
                    </div>
                    <div className='card_content'>
                        <h2>
                            Inventory
                        </h2>
                        <span>Gestor inventory app in c#</span>
                        <div className='cont_links'>
                            <a href="https://github.com/Jorgezx42513/Inventory" target="_blank">
                                <img src={git_ico} alt="git" />
                            </a>
                            <a href="https://inventory-page.vercel.app/" target="_blank">
                                <img src={enlace_ico} alt="web" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='cont_pro'>
                    <div className='card_img-hover'>
                        <img src={inventory_wed} alt='image proyect' />
                    </div>
                    <div className='card_content'>
                        <h2>
                            Inventory web
                        </h2>
                        <span>Web page of distibute inventory app</span>
                        <div className='cont_links'>
                            <a href="https://github.com/Jorgezx42513/inventory_page" target="_blank">
                                <img src={git_ico} alt="git" />
                            </a>
                            <a href="https://inventory-page.vercel.app/" target="_blank">
                                <img src={enlace_ico} alt="web" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='cont_pro'>
                    <div className='card_img-hover'>
                        <img src={openQueu_app} alt='image proyect' />
                    </div>
                    <div className='card_content'>
                        <h2>
                            OpenQueu
                        </h2>
                        <span>Server gestor ports in c#</span>
                        <div className='cont_links'>
                            <a href="https://github.com/Jorgezx42513/OpenQueu" target="_blank">
                                <img src={git_ico} alt="git" />
                            </a>
                            <a href="https://page-open-queu.vercel.app/" target="_blank">
                                <img src={enlace_ico} alt="web" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='cont_pro'>
                    <div className='card_img-hover'>
                        <img src={openQueu_web} alt='image proyect' />
                    </div>
                    <div className='card_content'>
                        <h2>
                            OpenQueu web
                        </h2>
                        <span>Web page of distibute OpenQueu app</span>
                        <div className='cont_links'>
                            <a href="https://github.com/Jorgezx42513/page_OpenQueu" target="_blank">
                                <img src={git_ico} alt="git" />
                            </a>
                            <a href="https://page-open-queu.vercel.app/" target="_blank">
                                <img src={enlace_ico} alt="web" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sect_more'>
                <a href="https://github.com/Jorgezx42513?tab=repositories">
                    <button>Watch More!!</button>
                </a>
            </div>
        </div>
    )
}
