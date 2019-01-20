# Nginx proxy

Reverse proxy example with docker compose.

## Setup

Install, on `src/api`

```bash
$ npm i
```

Up

```bash
$ docker-compose up --build
```

> Ps.: Build flag is for the first time. And -d to up dettached

The clusters in action

```bash
$ docker-compose ps

Name          Command          State                    Ports
-------------------------------------------------------------------------------
api1    npm start              Up      3000/tcp
api2    npm start              Up      3000/tcp
api3    npm start              Up      3000/tcp
proxy   nginx -g daemon off;   Up      0.0.0.0:443->443/tcp, 0.0.0.0:80->80/tcp
```

End points

- http://localhost/
- http://localhost/hello

