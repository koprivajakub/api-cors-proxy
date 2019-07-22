FROM node:10

WORKDIR /app

ENV BASE_URL="http://localhost" \
    HOST="http://localhost" \
    ORIGIN="localhost" \
    ACCESS_CONTROL_ALLOW_ORIGIN="*"

EXPOSE 3001

ADD ./dist /app
ADD ./node_modules /app/node_modules

CMD ["node", "/app/index.js"]
