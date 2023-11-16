# Welcome to the PowerShell Runner!


## Table of Contents
- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Testing Node.js Server with Postman](#testing-nodejs-server-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install
```
## Development

```bash
npm run dev
```
## Production
```bash
npm start
```

# Testing Node.js Server with Postman

1. **Open Postman.**

2. **Create a new request:**
   - Set the request type to **POST.**
   - Enter the URL: `http://localhost:<PORT>/run.`

3. **In the Headers tab, add a new header:**
   - Key: `Content-Type`
   - Value: `application/json`

4. **Switch to the Body tab, select the raw option, and enter the JSON data for your request.**

   - For running a script:

     ```json
     {
       "path": "your_script_path.ps1"
     }
     ```

   - For running a command:

     ```json
     {
       "command": "Get-Process"
     }
     ```

   Make sure to replace `"your_script_path.ps1"` with the actual path to your PowerShell script.

5. **Click the "Send" button to make the request.**

6. **Check the response in the "Body" section of the response to see the output of your PowerShell script or command.**
