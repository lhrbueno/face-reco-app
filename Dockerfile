# Node 12.14
FROM node:erbium

WORKDIR /usr/src/smart-brain-api

COPY . .

RUN npm i

CMD ["/bin/bash"]