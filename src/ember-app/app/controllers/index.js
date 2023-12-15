import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник.caption'),
          title: i18n.t('forms.application.sitemap.справочник.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.справочник.i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник.i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник.i-i-s-modul-ucheta-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник.i-i-s-modul-ucheta-клиент-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.договор.caption'),
          title: i18n.t('forms.application.sitemap.договор.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.договор.i-i-s-modul-ucheta-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.договор.i-i-s-modul-ucheta-расчет-ост-врем-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-договор-l',
            caption: i18n.t('forms.application.sitemap.договор.i-i-s-modul-ucheta-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.договор.i-i-s-modul-ucheta-договор-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.прочее.caption'),
          title: i18n.t('forms.application.sitemap.прочее.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-услуги-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-услуги-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})