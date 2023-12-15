import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-modul-ucheta-договор-l');
  this.route('i-i-s-modul-ucheta-договор-e',
  { path: 'i-i-s-modul-ucheta-договор-e/:id' });
  this.route('i-i-s-modul-ucheta-договор-e.new',
  { path: 'i-i-s-modul-ucheta-договор-e/new' });
  this.route('i-i-s-modul-ucheta-клиент-l');
  this.route('i-i-s-modul-ucheta-клиент-e',
  { path: 'i-i-s-modul-ucheta-клиент-e/:id' });
  this.route('i-i-s-modul-ucheta-клиент-e.new',
  { path: 'i-i-s-modul-ucheta-клиент-e/new' });
  this.route('i-i-s-modul-ucheta-расчет-ост-врем-l');
  this.route('i-i-s-modul-ucheta-расчет-ост-врем-e',
  { path: 'i-i-s-modul-ucheta-расчет-ост-врем-e/:id' });
  this.route('i-i-s-modul-ucheta-расчет-ост-врем-e.new',
  { path: 'i-i-s-modul-ucheta-расчет-ост-врем-e/new' });
  this.route('i-i-s-modul-ucheta-услуги-l');
  this.route('i-i-s-modul-ucheta-услуги-e',
  { path: 'i-i-s-modul-ucheta-услуги-e/:id' });
  this.route('i-i-s-modul-ucheta-услуги-e.new',
  { path: 'i-i-s-modul-ucheta-услуги-e/new' });
});

export default Router;
