import express, { NextFunction, Request, Response } from 'express';
import fs from "fs";
import path from "path";

const app = express();

interface Route {
    path: string,
    result: string
}

interface ServerOptions {
    port?: number,
    defaultRedirect?: string
}

class Server {
    private port: number = 8080;
    private defaultRedirect: string = 'https://igalaxy.dev';

    constructor(options?: ServerOptions){
        this.port = options?.port || this.port;
        this.defaultRedirect = options?.defaultRedirect || this.defaultRedirect;
    }

    public register = (route: Route) => {
        app.get(`/${route.path}`, (req, res) => {
            return res.redirect(route.result);
        });
    }

    public start = () => {
        app.get('*', (req, res) => {
            return res.redirect(this.defaultRedirect);
        });
        
        app.listen(this.port, () => {
            console.log(`URL shortener started on port ${this.port}`);
        });
    }
}

let port = 8080;
let defaultRedirect = 'https://igalaxy.dev';

const server = new Server({port: port, defaultRedirect: defaultRedirect});

const routes = JSON.parse(fs.readFileSync(path.join(__dirname, '_files', 'routes.json')).toString());
routes.forEach((route: Route) => {
    server.register(route);
});
server.start();