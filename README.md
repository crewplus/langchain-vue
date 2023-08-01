# langchain-vue

This is a langchain vue starter project

Client is built upon vue2 & element-ui

Server side is made by langchain (openai) and SSE (Server-Sent Events) for streaming langchain output. 

You can easily extend this starter project to support following scenarios:
- ChatOpenAI
- LLM Chain
- Conversational Retrieval QA
- ...

## Demo

- Chat via langchain's ChatOpenAI, no vectorstore is used. 

![langchain-streaming-vue](https://github.com/gptaibox/langchain-vue/assets/20916783/1465b123-e287-4b77-b6da-fe2897650db6)


- [Coming] Chat via langchain's Conversational Retrieval QA, vectorstore is used.

## Backend Server and API key

In this starter project, we are using https://api.lib2gpt.com as langchain server with api-key which would be expired after 15 days.
If you want to try, please get runnable api-key via join our wechat group or emailto: service@gptaibox.com .

<img src="https://github.com/gptaibox/langchain-vue/assets/20916783/c9b90a64-db5b-4d33-bc7a-6108b4db2236" width = "200" height = "300" alt="join us" align=center />


You may also setup your own server for langchain's ChatOpenAI w. SSE, the server side code can be downloaded here: https://github.com/sugarforever/LangChain-Tutorials/tree/main/StreamChat, the author's code is neat and clean.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## i18n version
In this starter project, vue version is 2.6.x, and for compatability vue-i18n@8.2.1 is installed via command
```
npm install vue-i18n@8.2.1 --save
```
If you are using different vue version, please change vue-i18n version accordingly

## License
This project is licensed under the MIT License - see the LICENSE file for details.
