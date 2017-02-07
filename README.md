# steam-group-dissector
Tool for lan parties to see common games for a steam group.

# Installation
## Backend
```
cd lan-steam-backend
npm install
```
After install copy configuration template from `config/default_template.json` and replace configuration values with system specific values. See [config-package](https://www.npmjs.com/package/config) for config file naming and usage.

Config parameters
* **`port`** Port listened by backend server
* **`cross-domain-header`** Used as "Access-Control-Allow-Origin" in http-responses
* **`steam-api-key`** Steam api key used for Steam web api

## Frontend
```
cd lan-steam-backend
npm install
```
After install replace configuration values in `config/env.js`. This will probably change in future.

# Usage
## Backend
```
cd lan-steam-frontend
npm start
```

## Frontend
```
cd lan-steam-backend
npm start
```
