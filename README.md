# user-crud
Projeto para criação de um app web onde será possível fazer o cadastro de um usuario com alguns dados básicos

![Tela1](https:teste)

# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em 
um sistema ativo.

## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- react-native
- yarn ou npm


## Desenvolvido com
 - JavaScript
 - [ReactJs](https://facebook.github.io/react-native/)
 - [facebook-proptypes](https://github.com/facebook/prop-types)

## Execução o projeto em desenvolvimento
 - Para executar o aplicativo pela avd do android sdk basta baixar os pacotes do package.json 
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` yarn start ```.

## Executando o projeto com docker
 - Para executar o projeto em um container docker, basta executar os seguites comandos:
 ``` docker build -t cruduser:dev .```, após executar e ter o feedback do comando, deve ser subida a imagem com o próximo comando: 
 ``` docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm cruduser:dev ```
 - Para acessar o projeto, basta acessar a url localhost:3001

## Api utilizada para testes do backend
 - [Open Weather](https://https://www.mockapi.io/Criação/)


## Arquitetura do projeto	

	
	shared
		-stacks
			-carregamento
			-principal
			-permissoes
		-common
			-apis
			-assets
			-services
		-components
			-atoms
			-molecules
			-organisms
	

### Stacks
	
	- Parte do projeto onde conterá os fluxos para transição entre as telas
	- Fiz uso do react-navigation para a transição, ele já possui um conceito de container, switch 
	e stack de navegação, a parte de stack foi meio que pensada nisso
	A stack de carregamento por exemplo, monta a page de carregamento, e permissão de localização, 
	para caso o usuário não dê permissão realizar a transição entre elas
	A stack principal, como o próprio nome já diz, contem a tela principal onde mostrará as 
	informações de clima
	

### Common
	Coisas comuns para o projeto, entre elas: apis, assets e services
	Nesse caso foi levado em conta que services, seria a parte do projeto responsável por parte 
	da lógica de requisição das informações, elas são montadas na parte de apis
	Para as requests, utilizei o axios


### Atomic design
 - Para design e organização do projeto utilizei parte dos conceitos do Design atomico para aplicacoes react, onde cada componente é criado e reutilizado

## Autores
- Adriano Martins de Oliveira Sousa.

## Imagens e SVG (Autores)
    Algumas das imagens e svg's grátis que utilizei vieram do site [Flaticon](https://www.flaticon.com/)
- Autores :

    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
	<div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

