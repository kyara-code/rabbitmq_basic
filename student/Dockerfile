# Usa l'immagine ufficiale di Node.js
FROM node:14

# Crea una directory di lavoro
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice dell'applicazione
COPY . .

# Espone la porta su cui l'app sarà in esecuzione
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["npm", "run", "start"]
