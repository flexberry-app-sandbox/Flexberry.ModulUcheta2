import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДирОтдПоРабСКлMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДирОтдПоРабСКлMixin, Validations, {
});

defineProjections(Model);

export default Model;
