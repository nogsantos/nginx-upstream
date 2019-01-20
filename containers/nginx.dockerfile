FROM nginx:latest

EXPOSE 80 443

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]
