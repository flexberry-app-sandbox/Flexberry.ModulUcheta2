import {
  defineNamespace,
  defineProjections,
  Model as ОказаниеУслугMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-оказание-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказаниеУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
