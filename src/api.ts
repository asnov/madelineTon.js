import Objects from "./TL/objects";
import Parser from "./TL/parser";
import DataCenter from "./datacenter";
import Auther from "./auth";

class API {
    loggedIn = false
    lastDc = 4
    layer = 105

    TLObjects = new Objects(this.settings['schemes'])
    TLParser = new Parser(this.TLObjects, undefined)    // fixed. TODO: check it
    datacenter = new DataCenter
    auther = new Auther(this)

    constructor(private settings) {
    }
    async connect() {
        await this.auther.auth()
        console.log("Done connecting to DCs!")

    }
    methodCall(method, args, aargs) {
        if (aargs['dcId']) {
            this.lastDc = aargs['dcId']
        }
        return this.datacenter.sockets[this.lastDc].methodCall(method, args, aargs)
    }
    getTL() {
        return this.TLParser
    }
    getDatacenter() {
        return this.datacenter
    }
}

export default API
