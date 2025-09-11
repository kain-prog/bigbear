# Usando Ubuntu 22.04 como base
FROM ubuntu:22.04

# Define variáveis para evitar perguntas interativas no APT
ENV DEBIAN_FRONTEND=noninteractive

# Atualiza o sistema e instala dependências necessárias, incluindo curl
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/* # Verificar a instalação do Node.js e npm
RUN node -v && npm -v

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Expor a porta onde a aplicação será executada
EXPOSE 3000

# Adiciona o comando para manter o container em execução
# Isso permite que você se conecte a ele via `docker exec`
CMD ["tail", "-f", "/dev/null"]


# Iniciar o servidor Next.js automaticamente
# CMD ["npm", "run", "dev"]