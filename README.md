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


https://github.com/gptaibox/langchain-vue/assets/20916783/94761082-a33f-45d7-922f-4179c0301d16


- Chat via langchain's Conversational Retrieval QA, vectorstore is used.

## Backend Server and API key

In this starter project, we are using https://api.lib2gpt.com as langchain server with api-key which would be expired after 15 days.
If you want to try, please get runnable api-key via join our wechat group or emailto: service@gptaibox.com .
![Weixin Image_20230801225203](https://github.com/gptaibox/langchain-vue/assets/20916783/32df331f-b61d-43da-9a1d-2f99005b66c4)

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
