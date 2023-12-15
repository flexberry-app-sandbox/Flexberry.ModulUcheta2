import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-modul-ucheta-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS.ModulUcheta.ТипДоговора'
});
