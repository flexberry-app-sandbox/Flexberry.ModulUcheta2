import {
  defineNamespace,
  defineProjections,
  Model as ДирОтдПоРабСКлMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДирОтдПоРабСКлMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
