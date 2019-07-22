# Build the project

```
yarn install
yarn build
docker build -t proxy ./
```

# Run the project

The application is running on port 3001 inside the docker container.

```
docker run -p 3001:3001 proxy
```

# ENV VARIABLES

| Variable name | Description | Example |
|---|---|---|
| `BASE_URL` | The base url that you want to access and it does not allow CORS | `https://api.zonky.cz` |
| `HOST` | Hostname of the application that can access the API | `app.zonky.cz` |
| `ORIGIN` | Fake origin of the request (usually is the same as host with protocol deined) | `https://app.zonky.cz` |

# Example run command of the build docker image

```
docker run --rm -it --name proxy -e BASE_URL="https://api.zonky.cz" -e HOST="app.zonky.cz" -e ORIGIN="https://app.zonky.cz" -e ACCESS_CONTROL_ALLOW_ORIGIN="*" -p 3001:3001 proxy
```
