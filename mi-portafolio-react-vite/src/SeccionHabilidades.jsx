import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function SeccionHabilidades(){
    return (
        <>
        <section id="skills">
        <div class="contenedor-skills" id="skills">
        <h3>Skills </h3>
        <div class="skill">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src='../src/assets/bootstrap_plain_wordmark_logo_icon_146620.png'/>
                        <br/>
                        Bootstrap
                    </div>
                    <div class="col"><img src='../src/assets/c_sharp_icon_213045.png'/>
                    <br/>
                        C Sharp</div>
                    <div class="col"><img src='../src/assets/confluence_original_wordmark_logo_icon_146588.png'/>
                    <br/>
                        Confluence</div>
                    <div class="col"><img src='../src/assets/css_3721.png'/><br/>
                        CSS</div>  
                    <div class="col"><img src='../src/assets/dot_net_plain_wordmark_logo_icon_146545.png'/><br/>
                        .NET</div>               
                </div>
               
               
                <tr>
                    <td><img src='../src/assets/file_type_js_official_icon_130509.png'/></td>
                    <td><img src='../src/assets/git_original_wordmark_logo_icon_146510.png'/></td>
                    <td><img src='../src/assets/golang_official_logo_icon_169092.png'/></td>
                    <td><img src='../src/assets/html_application_3021.png'/></td>  
                    <td><img src='../src/assets/java_original_wordmark_logo_icon_146459.png'/></td>               
                </tr>
                <tr>
                    <td>Javascript</td>
                    <td>Git</td>
                    <td>Golang</td>
                    <td>HTML</td>
                    <td>Java</td>
                </tr>
                <tr>
                    <td><img src='../src/assets/jquery_plain_wordmark_logo_icon_146445.png'/></td>
                    <td><img src='../src/assets/json_file_icon_215021.png'/></td>
                    <td><img src='../src/assets/mysql_official_logo_icon_169938.png'/></td>
                    <td><img src='../src/assets/react_original_wordmark_logo_icon_146375.png'/></td>  
                    <td><img src='../src/assets/teamcity_94405.png'/></td>               
                </tr>
                <tr>
                    <td>Javascript</td>
                    <td>JSON</td>
                    <td>MySQL</td>
                    <td>React</td>
                    <td>TeamCity</td>
                </tr>
                <tr>
                    <td><img src='../src/assets/atlassian_jira_logo_icon_170511.png'/></td>
                    <td><img src='../src/assets/bitbucket_original_wordmark_logo_icon_146622.png'/></td>
                    <td><img src='../src/assets/file_type_sql_icon_130152.png'/></td>
                    <td><img src='../src/assets/Visual_Studio_icon-icons.com_56597.png'/></td>  
                    <td><img src='../src/assets/spring.png' width={48} height={48}/></td>               
                </tr>
                <tr>
                    <td>Jira</td>
                    <td>Bitbucket</td>
                    <td>SQL Server</td>
                    <td>Visual Studio</td>
                    <td>Sprintboot</td>
                </tr>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Html & Css</p>
                <span class="porcentaje">95%</span>
            </div>

            <div class="barra">
                <div class="" id="html"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Javascript</p>
                <span class="porcentaje">90%</span>
            </div>

            <div class="barra">
                <div class="" id="js"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Bases de Datos</p>
                <span class="porcentaje">90%</span>
            </div>

            <div class="barra">
                <div class="" id="bd"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Photoshop</p>
                <span class="porcentaje">85%</span>
            </div>

            <div class="barra">
                <div class="" id="ps"></div>
            </div>
        </div>
    </div>
    </section>

        </>
    )
}

export default SeccionHabilidades