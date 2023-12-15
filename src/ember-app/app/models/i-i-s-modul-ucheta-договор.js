import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДоговорMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-договор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДоговорMixin, Validations, {
});

defineProjections(Model);

export default Model;
