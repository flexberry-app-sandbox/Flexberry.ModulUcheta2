import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугаEnum from '../enums/i-i-s-modul-ucheta-услуга';

export default FlexberryEnum.extend({
  enum: УслугаEnum,
  sourceType: 'IIS.ModulUcheta.Услуга'
});
