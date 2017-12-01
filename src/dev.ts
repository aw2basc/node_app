/*
import * as chokidar from 'chokidar';
import {EventEmitter} from 'events';
import { ChildProcess } from 'child_process';
import * as child_process from 'child_process';

var args = process.argv.slice(2);

let lint: string = "tslint --type-check --force --format stylish --config \"tslint.json\" --project \"tsconfig.json\""

let watcher: EventEmitter = chokidar.watch("*.ts", {
    ignored: "node_modules",
    ignoreInitial: true
});

watcher.on("all", (e: any, path: any) => {
if (!/^win/.test(process.platform)) { // linux
    var sp = spawn('bunyan', ['-o', 'short'], {
        stdio: [null, process.stdout, process.stderr]
    });
} else { // windows
    var sp = spawn('cmd', ['/s', '/c', 'bunyan', '-o', 'short'], {
        stdio: [null, process.stdout, process.stderr]
    });
}
    child_process.execFile(lint + " " + path, (e, stdout, stderr) => {
        // console.log(e);
        // console.log(stdout);
        // console.log(stderr);
    });
    console.log(e);
    console.log(path);
});

// child_process.exec("tsc --watch");

module.exports = () => {
    console.log("hmmmmmmmm");
};
*/
