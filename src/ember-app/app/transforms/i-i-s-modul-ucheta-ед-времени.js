import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдВремениEnum from '../enums/i-i-s-modul-ucheta-ед-времени';

export default FlexberryEnum.extend({
  enum: ЕдВремениEnum,
  sourceType: 'IIS.ModulUcheta.ЕдВремени'
});
