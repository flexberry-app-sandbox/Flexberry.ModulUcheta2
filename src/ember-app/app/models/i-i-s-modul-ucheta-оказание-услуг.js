import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОказаниеУслугMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-оказание-услуг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОказаниеУслугMixin, Validations, {
});

defineProjections(Model);

export default Model;
