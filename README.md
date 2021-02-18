# Smarkio Comment-Reader
Um website que do lado esquerdo você pode postar um comentário, e do lado direito você pode visualizá-lo e ouvi-lo.

## Indice
* [Screenshots](#screenshots)
* [Tecnologias](#tecnologias)
* [Instalação](#3)
* [Configuração](#configuração)
* [Funcionalidades](#funcionalidades)
* [FeedBack](#so)

## Screenshots

<img src="client/public/images/app-image-1.png" width="400" />

<img src="client/public/images/app-image-2.png" width="400" />

<br>Link da pasta das imagens <a href="https://github.com/Rods27/smarkio-page/tree/main/client/public">aqui.</a>


## Tecnologias
<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
  <li><a href="https://www.ibm.com/br-pt/cloud/watson-text-to-speech">IBM Watson - Text to Speech</a></li>
  <li><a href="https://reactjs.org">React</a></li>
  <li><a href="https://sass-lang.com/">Sass</a></li>
</ul>

## Criando conta na IBM Cloud

## Instalação
Assim que tiver clonado o repositório, usando o terminal do [vscode](https://code.visualstudio.com/) ou o terminal do seu sistema operacional, abra-o na pasta server.
- Installe as dependencias usando :
```
npm install;
```
Execute o mesmo comando na pasta client.

Certifique-se que tem instalado o [Node](#tecnologias) e o [MySql](#tecnologias).

## Configuração

#### Criando o Database
- Assim que tiver tudo instalado, installe e abra o [MySQLWorkBench](https://www.mysql.com/products/workbench/), entre no seu servidor local, abra uma nova query e digite: 
```
CREATE DATABASE IF NOT EXISTS Smarkio_DB;
```
depois:
```
CREATE TABLE Smarkio_DB.commentaries (
	id INT unsigned NOT NULL auto_increment,
    comment varchar(200) NOT NULL,
    CONSTRAINT pk_commentaries PRIMARY KEY (id)
);
```
E o banco de dados estará criado.

#### Configurando a Conexão
É importante que antes de tentar iniciar a aplicação configure a conexão do seu servidor com o front-end, na pasta server/models/connection.js.
```
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Smarkio_DB',
  port: '3306',
})
```
#### Configurando o Text to Speech
Vá na pasta ```server/models/commentModel.js```.
```
//Text to Speech
const textToSpeech = new TextToSpeech({
  authenticator: new IamAuthenticator({ apikey: ''}),
  serviceUrl: '',
  disableSslVerification: true,
});
```
Coloque a sua chave fornecida pela IBM em ```apikey: ''```, e sua Url fornecida pela IBM em ```serviceUrl: ''```, para autenticação do microserviço.

#### Iniciando a aplicação
- Vá na pasta server e digite ```npm run dev```, para abrir o servidor, na porta 3000.
- Vá na pasta client e digite ```npm start```, para iniciar a aplicação no browser, na porta 3001.

## Funcionalidades


## Feedback 

Ficarei bem agradecido caso queira me dar um feedback costrutivo, caso queira meus contatos estarão abaixo!

Email: rods.leite27@gmail.com e <a href="https://linkedin.com/in/rodrigoleite27">Linkedin</a>.

