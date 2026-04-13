## DOCKER INSTALLATION

- install docker
- create a network 
- start postgres container with the network

- docker run -p 5432:5432 --network my-network -e POSTGRES_USER=praveen  -e POSTGRES_PASSWORD=password   -e POSTGRES_DB=mydb  postgres

- build your app
- docker build -t my-app .

- run the my-app
- docker run -p 3000:3000 --network my-network my-app

- push schema to db and sync them
- docker exec -it container_name/id npx prisma db push

## DOCKER COMPOSE INSTALLATION

- run
- docker-compose up