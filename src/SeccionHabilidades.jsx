import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function SeccionHabilidades(){
    return (
        <>
        <section id="skills">
        <div className="contenedor-skills" id="skills">
        <h3>Skills </h3>
        <div className="skill">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-bootstrap"></div>
                        <br/>
                        Bootstrap
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-csharp"></div>
                        <br/>
                        C Sharp</div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-confluence"></div>
                        <br/>
                        Confluence</div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-css"></div><br/>
                        CSS</div>  
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-dotnet"></div><br/>
                        .NET</div>               
                </div>
               
               
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-js"></div><br/>
                        Javascript
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-git"></div><br/>
                        Git
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-go"></div><br/>
                        Golang
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-html"></div><br/>
                        Html
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-java"></div><br/>
                        Java
                    </div>           
                </div>
              
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-jquery"></div><br/>
                        JQuery
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-json"></div><br/>
                        JSON
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-mysql"></div><br/>
                        MySQL
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-react"></div><br/>
                        React JS
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-teamcity"></div><br/>
                        TeamCity
                    </div>              
                </div>

                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-jira"></div><br/>
                        Jira
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-bitbucket"></div><br/>
                        Bitbucket
                    </div>
                    <div className="col d-flex flex-column align-iteitbucketms-center">
                        <div className="icon-skill2 icon-sql"></div><br/>
                        SQL Server
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-vs"></div><br/>
                        Visual Studio
                    </div> 
                    <div className="col d-flex flex-column align-items-center">
                        <div className="icon-skill2 icon-sprintboot"></div><br/>
                        Sprintboot
                    </div>             
                </div>
            </div>
        </div>
        <h3>Otros Skills</h3>
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Construcción de Web API Rest, Continuous Deployment</p>
               
            </div>
        </div>
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Dominio de Agile. Experiencia trabajando con Sprint, Daily, ceremonias de inicio y cierre. Refinamientos y retrospectiva. Experiencia liderando como Deputy de Scrum Master.</p>
            </div>

        </div>
       
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Trabajo en equipo, proactividad, facilidad de adaptación y aprendizaje. </p>
                
            </div>

           
        </div>
        
    </div>
    </section>
    </>
    )
}

export default SeccionHabilidades