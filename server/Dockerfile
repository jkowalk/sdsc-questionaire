FROM node:16

# Installing dependencies needed by the pdf generator
RUN apt-get update && \
    apt-get -y install xvfb gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
      libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
      libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
      libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
      libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget && \
    rm -rf /var/lib/apt/lists/*

COPY ./app /app
WORKDIR /
COPY ./client /client


ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

ARG REACT_APP_PAGE_TITLE=Survey
ENV REACT_APP_PAGE_TITLE=$REACT_APP_PAGE_TITLE

RUN cd /app; npm i
RUN cd /app; npm install pm2 -g

RUN cd /client; npm i
RUN cd /client; npm run build

RUN cd /client/build; mkdir $REACT_APP_URL; mv static $REACT_APP_URL

CMD ["pm2-runtime", "/app/index.js"]