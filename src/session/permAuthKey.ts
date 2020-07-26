import AuthKey from "./authKey";

class PermAuthKey extends AuthKey {
    _authorized = false
    /**
     * Check if perm auth key is logged into an account
     * @returns boolean
     */
    isAuthorized() {
        return this._authorized
    }
    /**
     * Signal that perm auth key was logged into an account
     * @param {boolean} authorized 
     */
    authorized(authorized) {
        this._authorized = authorized
    }
}
export default PermAuthKey
