import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УслугиMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-услуги';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УслугиMixin, Validations, {
});

defineProjections(Model);

export default Model;
