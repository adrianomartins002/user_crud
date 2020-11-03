# user-crud
Projeto para criação de um app web onde será possível fazer o cadastro de um usuario com alguns dados básicos

![Tela1](https://imgur.com/bgSSWIz)

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
 - [ReactJs](https://pt-br.reactjs.org/)
 

## Execução o projeto em desenvolvimento
 - Para executar o projeto, basta baixar os pacotes do package.json 
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` yarn start ```.


## Executando o projeto com docker
 - Para executar o projeto em um container docker, basta executar os seguites comandos:
 ``` docker build -t cruduser:dev .```, após executar e ter o feedback do comando, deve ser subida a imagem com o próximo comando: 
 ``` docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm cruduser:dev ```
 - Para acessar o projeto, basta acessar a url localhost:3001

## Api utilizada para testes do backend
 - [MockApi](https://https://www.mockapi.io/Criação/)


## Arquitetura do projeto	

	
	src
		-common
			-apis
			-services
		-components
			-atoms
			-molecules
			-organisms
			-pages
	


### Common
	Coisas comuns para o projeto, entre elas: apis, assets e services
	Nesse caso foi levado em conta que services, seria a parte do projeto responsável por parte 
	da lógica de requisição das informações, elas são montadas na parte de apis
	Para as requests, utilizei o axios


### Atomic design
 - Para design e organização do projeto utilizei parte dos conceitos do Design atomico para aplicacoes react, onde cada componente é criado e reutilizado
 - Não vi necessidade da criação dos diretórios de molecules e organisms, pois somente com os atomos já foi possível a criação da maior parte dos componentes das pages

## Autores
- Adriano Martins de Oliveira Sousa.

## Imagens e SVG (Autores)
- Algumas das imagens e svg's grátis que utilizei vieram do pacote react:
- [ReactIcons] (https://react-icons.github.io/react-icons/)