---
author: harshil-donga
categories: ["DevOps"]
date: 'Aug 27 2025'
featured: false
image: ./images/docker_blue.png
title: Docker Explained Simply from Images to Containers
---

## What is Docker?

Docker is a platform for developing, shipping, and running applications. It enables you to separate your applications from your infrastructure to deliver software quickly.  

Imagine you have an app that works perfectly on your computer, but when you try to run it on another computer, it breaks because something is missing (maybe incorrect version of a library or a dependency). Docker solves this problem by packaging your app with everything it needs (code, libraries, dependencies) into a **container (just like a container on a ship)**.  

This container runs the same way on any computer, whether it’s your laptop, a cloud server, or someone else’s machine.

Before we start using Docker, it is important to understand a few key concepts:

- Docker Images
- Containers
- Volumes
- Networks
- Dockerfiles
- Docker Compose
- Docker CLI

## Docker Image

A **Docker image** is a lightweight, standalone, and executable package that contains everything needed to run a piece of software.  

It is like a **blueprint** for a **Docker container** and provides a predefined environment that ensures your application runs consistently across different machines.

### Key Characteristics
- ✅ **Immutable** – Cannot modify an image; changes create a new one.  
- ✅ **Versioned** – Images have tags (`python:3.9`, `nginx:latest`).  
- ✅ **Layered** – Each Dockerfile command adds a layer, optimizing storage.  
- ✅ **Portable** – Runs consistently across any OS supporting Docker.  
- ✅ **Shared** – Can be pushed/pulled from DockerHub or private registries.  

### Useful Commands
```docker
# docker image build command which uses dockerfile to build image
docker build -t my-app:latest .

# list docker images
docker images

# remove docker image
docker rmi my-app:latest

# remove all unused images, including dangling and unreferenced ones
docker image prune

# tag existing image before pushing to dockerhub
docker tag my-app:latest myrepo/my-app:v1

# login to your dockerhub account on cli
docker login

# pull docker image from docker hub
docker pull nginx:latest

# push image to docker hub
docker push myrepo/my-app:v1
```

---

## Docker Container

A **Docker container** is a lightweight, portable, and isolated environment that runs an application along with all its dependencies. Containers are created from **images**.

### Containers vs Virtual Machines

| Feature | **Docker Container** | **Virtual Machine (VM)** |
|---------|----------------------|--------------------------|
| **Architecture** | Shares the host OS kernel | Runs a full OS with its own kernel |
| **Startup Time** | Seconds | Minutes |
| **Resource Usage** | Lightweight | Heavy |
| **Isolation** | Process-level | Full OS-level |
| **Performance** | Near-native | Slower |
| **Portability** | High | Limited |
| **Use Case** | Microservices, CI/CD | Multiple OS on one host |

### Useful Commands
```docker
# list running containers
docker ps

# list all containers (running or stopped)
docker ps -a

# run a docker container from image with a name
docker run --name my_container <image_name>

# map ports using -p flag
docker run --name my_container -p 8000:8000 <image_name>

# run in inter
docker run -it <image_name>

# run container in interactive mode with shell or bash 
docker run -it nginx sh
docker run -it nginx /bin/bash

# run container in detached mode use -d flag.
docker run -itd --name mynginx nginx
# reattach 
docker attach mynginx  
# inspect a running container
docker exec -it mynginx /bin/bash

# pause or unpause a container
docker pause <container_name or id>
docker unpause <container_name or id>

# start or stop a container
docker stop <container_name or id>
docker start <container_name or id>
docker restart <container_name or id>

# remove a stopped contianer
docker rm <container_name or id>

# view container logs
docker logs <container_name or id>
```

---

## Docker Volumes

A **Docker volume** is a storage mechanism that allows data to persist beyond the lifecycle of a container. Useful for databases, logs, and persistent data.

### Useful Commands
```docker
# create docker volume
docker volume create <volume_name>

# list all volumes
docker volume ls

# inspect volumes for details
docker volume inspect <volume_name>

# remove docker volume
docker volume rm <volume_name>

# run a docker container with volume mounted
docker run --name my_container -v volume_name:/app/data myimage:v1

# copy file to container
docker cp data.txt my_container:/app/data

# this maps local directory to containers directory
docker run -v /path/on/host:/app/data my_container
```

---

## Docker Networking

Docker networking enables containers to communicate internally or with external systems.

### Bridge Network
Default, isolated, secure communication between containers.  
Containers talk using **names** instead of IPs.  

```docker
docker network create my_bridge
docker run -d --name mysql --network my_bridge -e MYSQL_ROOT_PASSWORD=root mysql
docker run -d --name nginx --network my_bridge -p 8080:80 nginx
```

### Host Network
Direct access to host network (no port mapping needed).  

```docker
docker run -d --network host nginx
```

### Useful Commands
```docker
# port mapping when running a container
docker run --name my_container -p 8080:80 myapp

# list all networks
docker network ls

# inspect networks for details
docker network inspect network_name

# create docker network
docker network create network_name

# connect a container to a network
docker network connect network_name container_name

# disconnect a container to a network
docker network disconnect network_name container_name
```

---

## Docker Compose

**Docker Compose** simplifies multi-container applications using a `docker-compose.yml` file.

### Example
```yaml
version: "3.9"
services:
  app:
    image: node:latest
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
```

### Commands
```docker
# start services
docker-compose up -d

# stop services
docker-compose down

# view logs
docker-compose logs -f

# list running services
docker-compose ps

# restart particular service
docker-compose restart app

# running a command inside specific service
docker-compose exec app ls
```

### Benefits
- **Easier multi-container management** (`docker-compose up` starts everything).
- **Automatic networking** (containers can talk using service names).
- **Scalability** (`docker-compose up --scale app=3` runs 3 instances).

---

## Dockerfile Example

```docker
FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "server.js"]
```

---

## Best Practices

- ✅ Use **small base images** (Alpine, Distroless).  
- ✅ Pin versions (`node:20-alpine`, not `latest`).  
- ✅ Avoid root – use non-root users.  
- ✅ Use **multi-stage builds**.  
- ✅ Use `.dockerignore` to avoid unnecessary files.  

---

Example of writing a dockerfile for a nodejs application using typescript.

1. use a smaller base image(alpine based)
2. use multi-stage build like like builder and runner where builder is responsible for building the application and runner just takes the compiled files to run the application and any unnecessary files and tools from builder are not included in the runner stage which make the image more efficient and lightweight.
3. created a user and assigned just the requirements that are needed by the user.


```docker
# ===========================
# 1st Stage: Build Stage
# ===========================
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy TypeScript source files
COPY tsconfig.json ./
COPY src/ src/

# Compile TypeScript to JavaScript
RUN npm run build

# ===========================
# 2nd Stage: Production Image
# ===========================
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

# Set correct permissions
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose application port
EXPOSE 3000

# Set the startup command
CMD ["node", "dist/index.js"]
```

Example of writing a docker file for python application by following docker best practices

```docker
# ===========================
# 1st Stage: Build Stage
# ===========================
FROM python:3.11-slim AS builder

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source code
COPY . .

# ===========================
# 2nd Stage: Production Image
# ===========================
FROM python:3.11-slim

WORKDIR /app

# Create a non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Copy only necessary files from the builder stage
COPY --from=builder /app /app

# Set correct permissions
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

EXPOSE 8000

CMD ["python", "app.py"]
```

## Advanced Topics

- If you want to learn about the internal workings of docker then you might have to explore about namespaces and cgroups which are linux kernel features that enable containerization by providing process isolation and resource control. Namespaces are said to limit what the containers can see and cgroups are said to limit how much resources a container can use. I found an interesting short article related to this topic which you might want to read.

<a href="https://medium.com/@mrdevsecops/namespace-vs-cgroup-60c832c6b8c8" target="_blank">📖[Docker Namespace vs Cgroup]</a>

- There are also some alternatives to docker like podman, containerd, linux containers(LXC). Apart from docker I have used podman which is an opensource alternative of docker maintained by redhat engineers and the opensource community. Unlike docker, podman follows a deamonless architecture which can reduce attack surface.

#### Key Features of Podman
- Runs containers without root privileges*, reducing security risks.
- Unlike Docker, Podman does not rely on a long-running background service (`dockerd`) instead containers are managed as individual processes.
- Most of Docker commands are compatible with podman just by replacing docker with podman in the commands.



### Docker vs Podman

| Feature | **Podman** | **Docker** |
|---------|------------|------------|
| Rootless | ✅ Yes | ❌ Extra setup |
| Daemon | ❌ None | ✅ `dockerd` |
| Security | ✅ More secure | ❌ Requires root |
| Compatibility | ✅ OCI images | ✅ OCI images |


🐳 Thats it! Thats all about docker. This is all you need to get started.