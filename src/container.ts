export class Container {

    private _deps: any = {};
    private _key: string;

    constructor() { }

    public bind(name: string) {
        this._key = name;
        return this;
    }

    to(dep: any) {
        this._deps[this._key] = dep;
        this._key = "";
    }

    public get<T>(name: string): T {
        if (this._deps[name]) {
            return new this._deps[name]
        }
        return undefined as any;
    }

}
