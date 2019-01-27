FROM node:10.15.0 as build-deps
RUN git clone https://github.com/smokja/BPMNManager.git 
WORKDIR /BPMNManager
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

