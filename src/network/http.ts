import Stream from "../TL/stream"

class Http {
    private uri: string;
    private onMessage: any;
    private xhr: any;

    connect(ctx) {
        this.uri = ctx.getUri('http')
        return Promise.resolve()
    }
    write(payload) {
        let xhr = new XMLHttpRequest()
        xhr.onload = this.onHttpMessage.bind({
            xhr,
            onMessage: this.onMessage
        })
        xhr.open('POST', this.uri, true)
        xhr.responseType = 'arraybuffer'
        xhr.send(payload.getBuffer())
    }

    getBuffer(length) {
        const s = new Stream(new Uint32Array(5 + (length || 0)));
        s.pos += 5;
        (s as any).initPos = 0  // fixed. TODO: check it
        return s
    }
    onHttpMessage() {
        if (this.xhr.status === 200) {
            return this.onMessage(new Stream(this.xhr.response))
        }
        this.onMessage(new Stream(new Uint32Array(1).buffer).writeSignedInt(-this.xhr.status).reset())
    }
    isHttp() {
        return true
    }
    close() {

    }
}
export default Http;
