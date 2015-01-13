#IoT Telefonicabeta

Código fonte do site [iot.telefonicabeta.com](http://iot.telefonicabeta.com) utilizando o gerador de sites estáticos [Harp.js](http://harpjs.com/).


##Desenvolvimento
Para poder trabalhar no desenvolvimento você tem que instalar o módulo de NodeJS [Harp](https://www.npmjs.com/package/harp).

Para realizar alterações no site você nunva deve alterar nenhum arquivo compilado (ex: **html**) nem que estaja dentro da pasta **www**. A pasta **www** é uma pasta auto gerada pelo Harp e não é versionada na branch **master**.

Os arquivos que você vai trabalhar são os arquvos **.less**, **.ejs**, **json**, **.md**.

* **less** (precompilador para css) [link](http://lesscss.org/)
* **ejs** (templates em javascript) [link](http://www.embeddedjs.com/)
* **md** (markdown -Text to HTML) [link](http://daringfireball.net/projects/markdown/syntax)

Para visualizar as suas alterações você pode deve utilizar o comando:
```
$ harp server
```
Agora abra o navegado na url [http://localhost:9000](http://localhost:9000) e veja suas alterações.


##Deploy
O site está hospedado no [GitHub Pages](https://pages.github.com/), depois de fazer as alterações que deseja e faça o commit do código na branch **master**.

Depois execute o comando:
```
$ make deploy
```

O comando make deploy executa:
* **harp compile** 
	* para gerar o conteúdo estático do site [link](http://harpjs.com/docs/environment/compile)
* checkout da branch **gh-pages**
* faz o commit das alterações na branch **gh-pages**
* faz o checkout da branch **master**
* apaga a pasta auto gerada **www**


##Autor
| [![twitter/vitorleal](http://gravatar.com/avatar/e133221d7fbc0dee159dca127d2f6f00?s=80)](http://twitter.com/vitorleal "Follow @vitorleal on Twitter") |
|---|
| [Vitor Leal](http://vitorleal.com) |