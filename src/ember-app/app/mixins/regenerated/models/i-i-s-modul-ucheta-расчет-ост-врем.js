import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доступно: DS.attr('decimal'),
  использовано: DS.attr('decimal'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-договор', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-modul-ucheta-оказание-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетВремениE', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    дата: attr('Дата', { index: 0 }),
    использовано: attr('Использовано', { index: 1 }),
    доступно: attr('Доступно', { index: 2 }),
    оказаниеУслуг: hasMany('i-i-s-modul-ucheta-оказание-услуг', 'Оказание услуг', {
      дата: attr('Дата', { index: 0 })
    })
  });

  modelClass.defineProjection('РасчетВремениL', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    дата: attr('Дата', { index: 0 }),
    использовано: attr('Использовано', { index: 1 }),
    доступно: attr('Доступно', { index: 2 })
  });

  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    доступно: attr('Доступно', { index: 0 }),
    использовано: attr('Использовано', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    договор: belongsTo('i-i-s-modul-ucheta-договор', 'Договор', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    оказаниеУслуг: hasMany('i-i-s-modul-ucheta-оказание-услуг', 'Оказание услуг', {
      дата: attr('Дата', { index: 0 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    доступно: attr('Доступно', { index: 0 }),
    использовано: attr('Использовано', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    договор: belongsTo('i-i-s-modul-ucheta-договор', 'Номер', {
      номер: attr('Номер', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
