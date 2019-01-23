FROM bayesimpact/react-base

RUN rm -rf /usr/app/*
COPY . /usr/app/

RUN npm install
CMD ["npm", "run", "start"]