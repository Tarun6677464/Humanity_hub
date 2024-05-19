# Humanity_hub


# Docker build

1. Go to client folder and run this command 
```docker
    docker build --no-cache -t tarunpurush/bms:frontend-v1 .
```

2. Go to server folder and run this command

```docker 
    docker build --no-cache -t tarunpurush/bms:backend-v1 .
```

3. Push the images

```docker
    docker push docker.io/tarunpurush/bms:frontend-v1 

    docker push docker.io/tarunpurush/bms:backend-v1 
```

4. Go to aws ec2 instance. (Run from git bash)

```bash
    ssh -i "ubuntu.pem" ec2-user@ec2-3---.ap-south-1.compute.amazonaws.com
```

5. Inside aws ec2 instance run the following commands

```bash
    # Pull latest images of version v.
    docker pull tarunpurush/bms:frontend-v1
    docker pull tarunpurush/bms:backend-v1
    # Stop the old containers
    docker ps #note down the container id
    docker stop <container_ID> 
    docker run -d -p 80:3000 tarunpurush/bms:frontend-v1 
    docker run -d -p 8080:8080 tarunpurush/bms:backend-v1 --env-file=.env
```

# Performance improve on ec2

1. ec2 t2 micro free tier only has 1core and 1gb ram, frontend and backend takes up more resources and to handle the application running on free tier, we had to use swap method to increase ram. Following commands were used to create swap. After create swap the performance of the application improved.

```bash
    sudo dd if=/dev/zero of=/swapfile bs=1MB count=1536
    df -h
    sudo chmod 600 /swapfile
    free -h
    sudo mkswap /swapfile
    sudo swapon /swapfile
    free -h
```

