'use strict';

class SsmlTag {
    constructor (name, content, attr, orphan) {
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

    toString () {
        if (this._content instanceof Array) {
            this._content = this._content.map(v => v.toString());
        } else {
            this._content = this._content.toString();
        }

        let attributes = this.attrAsString();
        let open = attributes !== false ? `<${this._name} ${attributes}` : `<${this._name}`;
        let body = this._orphan !== false ? ' />' : `${this._content}</${this._name}>`;

        return open+body;
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

exports.SsmlTag = SsmlTag;