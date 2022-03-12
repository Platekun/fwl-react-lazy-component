FROM node:16-alpine

RUN npm install -g npm@8.5.3

ENV TERM xterm-256color

WORKDIR /fwl-react-lazy-component

COPY ./library .

CMD ["npm", "run", "build"]
