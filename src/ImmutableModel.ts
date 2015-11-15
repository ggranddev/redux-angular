

import {Map} from 'immutable';

export class Ng2StoreModel<M extends Ng2StoreModel> {

    _data: Map;

    constructor(properties: Object) {
        this._data = Map(properties);
        Ng2StoreModel.initModel(this);
    }

    static from(original: M, differences: Object): M {

        //TODO basic validation

        let copiedModel = <M> {
            _data: original._data.merge(differences)
        };
        Ng2StoreModel.initModel(copiedModel);
        return copiedModel;
    }

    private static initModel(model: M) {

        //TODO basic validation

        let keys: string[] = <string[]>model._data.keySeq().toArray();

        keys.forEach( (property) => {
            Object.defineProperty(model, property, {
                get: () => model._data.get(property)
            });
        });

    }


}