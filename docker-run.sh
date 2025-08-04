git pull
docker build -t blockchain-rio-landing2025 .
docker stop blockchain-rio-landing2025
docker rm blockchain-rio-landing2025
docker run -d -p 3000:3000 --name blockchain-rio-landing2025 --network nginx-proxy-manager_nginx-proxy blockchain-rio-landing2025
