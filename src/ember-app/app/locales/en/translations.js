import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModulUchetaДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l';
import IISModulUchetaДоговорLForm from './forms/i-i-s-modul-ucheta-договор-l';
import IISModulUchetaКлиентLForm from './forms/i-i-s-modul-ucheta-клиент-l';
import IISModulUchetaРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-l';
import IISModulUchetaУслугиLForm from './forms/i-i-s-modul-ucheta-услуги-l';
import IISModulUchetaДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e';
import IISModulUchetaДоговорEForm from './forms/i-i-s-modul-ucheta-договор-e';
import IISModulUchetaКлиентEForm from './forms/i-i-s-modul-ucheta-клиент-e';
import IISModulUchetaРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-e';
import IISModulUchetaУслугиEForm from './forms/i-i-s-modul-ucheta-услуги-e';
import IISModulUchetaДирОтдПоРабСКлModel from './models/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл';
import IISModulUchetaДоговорModel from './models/i-i-s-modul-ucheta-договор';
import IISModulUchetaКлиентModel from './models/i-i-s-modul-ucheta-клиент';
import IISModulUchetaОказаниеУслугModel from './models/i-i-s-modul-ucheta-оказание-услуг';
import IISModulUchetaРасчетОстВремModel from './models/i-i-s-modul-ucheta-расчет-ост-врем';
import IISModulUchetaУслугиModel from './models/i-i-s-modul-ucheta-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл': IISModulUchetaДирОтдПоРабСКлModel,
    'i-i-s-modul-ucheta-договор': IISModulUchetaДоговорModel,
    'i-i-s-modul-ucheta-клиент': IISModulUchetaКлиентModel,
    'i-i-s-modul-ucheta-оказание-услуг': IISModulUchetaОказаниеУслугModel,
    'i-i-s-modul-ucheta-расчет-ост-врем': IISModulUchetaРасчетОстВремModel,
    'i-i-s-modul-ucheta-услуги': IISModulUchetaУслугиModel
  },

  'application-name': 'Modul ucheta',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul ucheta',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul ucheta',
          title: 'Modul ucheta'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочник: {
          caption: 'Справочник',
          title: 'Справочник',
          'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': {
            caption: 'Директор',
            title: ''
          },
          'i-i-s-modul-ucheta-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        договор: {
          caption: 'Договор',
          title: 'Договор',
          'i-i-s-modul-ucheta-расчет-ост-врем-l': {
            caption: 'Расчет оставшегося времени',
            title: ''
          },
          'i-i-s-modul-ucheta-договор-l': {
            caption: 'Договор',
            title: ''
          }
        },
        прочее: {
          caption: 'Прочее',
          title: 'Прочее',
          'i-i-s-modul-ucheta-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': IISModulUchetaДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-договор-l': IISModulUchetaДоговорLForm,
    'i-i-s-modul-ucheta-клиент-l': IISModulUchetaКлиентLForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-l': IISModulUchetaРасчетОстВремLForm,
    'i-i-s-modul-ucheta-услуги-l': IISModulUchetaУслугиLForm,
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e': IISModulUchetaДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-договор-e': IISModulUchetaДоговорEForm,
    'i-i-s-modul-ucheta-клиент-e': IISModulUchetaКлиентEForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-e': IISModulUchetaРасчетОстВремEForm,
    'i-i-s-modul-ucheta-услуги-e': IISModulUchetaУслугиEForm
  },

});

export default translations;
