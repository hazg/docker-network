## Before launch

### Hosts
Edit /etc/hosts on **host** machine
```
127.0.0.1 one
127.0.0.1 two
```
### Create network

```bash
docker network create nginx_network
docker network create db_network
```

### Commands

### Install
```bash
git clone git@github.com:hazg/docker-network.git
cd docker-network
./up
```

### Make certs
```
./make_certs
```
or
```
./attach_nginx
certbot
```
### Restart

```bash
./down;./up
```