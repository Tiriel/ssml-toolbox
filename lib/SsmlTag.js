'use strict';

const OPEN_TAG = '<';
const CLOSE_TAG = '>';

class SsmlTag {
    constructor (name, content, attr, orphan) {
        if (typeof name === 'undefined') {
            throw new InvalidArgumentError('The name of the SsmlTag must be defined.');
        }
        if (typeof content === 'boolean' && typeof attr === 'undefined') {
            orphan = content;
            content = null;
            attr = {};
        }
        if (typeof attr === 'boolean' && typeof orphan === 'undefined') {
            orphan = attr;
            attr = content;
            content = null;
        }
        this._name = name;
        this._attr = attr || {};
        this._orphan = orphan || false;
        this._content = content || '';
    }

    get name() {
        return this._name;
    }

    toString () {
        if (this._content instanceof Array) {
            this._content = this._content.reduce(
                (acc, cur) => acc + cur.toString(),
                ''
            );
        } else {
            this._content = this._content.toString();
        }

        let attributes = this.attrAsString();
        let open = OPEN_TAG + this._name;

        if (attributes !== false) {
            open += `${attributes}`;
            if (this._orphan === true) {
                return open + '/' + CLOSE_TAG;
            }
        }
        open += CLOSE_TAG;
        let close = OPEN_TAG + '/' + this._name + CLOSE_TAG;

        return `${open}${this._content}${close}`;
    }

    attrAsString () {
        if (Object.values(this._attr).some(v => v !== undefined)) {
            return String.fromCharCode(32) +
                Object.entries(this._attr)
                .filter(entry => entry[1] !== undefined)
                .map(entry => `${entry[0]}="${entry[1]}"`)
                .join(String.fromCharCode(32));

        }
        return false;
    }
}

module.exports = SsmlTag;