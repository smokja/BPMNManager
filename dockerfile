FROM node:10.15.0 as build-deps
RUN git clone https://github.com/smokja/BPMNManager.git 
WORKDIR /BPMNManager
RUN npm install
RUN npm run-script build


FROM nginx:latest
COPY --from=build-deps /BPMNManager/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
