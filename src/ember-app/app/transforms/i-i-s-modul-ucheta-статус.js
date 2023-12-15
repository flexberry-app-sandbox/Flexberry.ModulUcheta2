import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-modul-ucheta-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS.ModulUcheta.Статус'
});
