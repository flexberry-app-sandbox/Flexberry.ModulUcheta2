import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  длительность: DS.attr('decimal'),
  едВремени: DS.attr('i-i-s-modul-ucheta-ед-времени'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-modul-ucheta-статус'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-modul-ucheta-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-modul-ucheta-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-modul-ucheta-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  едВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.едВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-modul-ucheta-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: attr('Длительность', { index: 5 }),
    едВремени: attr('Единица времени', { index: 6 })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-modul-ucheta-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: attr('Длительность', { index: 5 }),
    едВремени: attr('Единица времени', { index: 6 })
  });
};
