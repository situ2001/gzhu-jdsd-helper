# gzhu-jdsd-helper

Your star is the biggest motivation for me.

## How to use

First, you should get `key` from the request to WeChat MiniProgram by using fiddler.

Then, if you run locally, you should put your key into file `./src/config.ts` and execute command `yarn start`

Or if you run with GitHub Action, you should just set a secret named `jdsd_key` with your `key` as its value. (The workflow runs **every day at 9:00 CST**)

## Todo

- [x] ~~Daily sign-in~~
- [x] ~~Daily practice~~
- [x] ~~Daily reading~~
- [x] ~~Error handling with retrying~~
- [ ] HTTP MITM proxy
- [ ] CLI
- [ ] ~~PVP~~
