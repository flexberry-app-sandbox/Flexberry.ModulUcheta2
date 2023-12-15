import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idКлинета: DS.attr('number'),
  имя: DS.attr('string'),
  наимОрганизации: DS.attr('string'),
  номерТелефона: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  idКлинета: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.idКлинета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОрганизации: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.наимОрганизации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-modul-ucheta-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-modul-ucheta-клиент', {
    idКлинета: attr('Id клинета', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганизации: attr('Наим организации', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-modul-ucheta-клиент', {
    idКлинета: attr('Id клинета', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганизации: attr('Наим организации', { index: 5 })
  });
};
