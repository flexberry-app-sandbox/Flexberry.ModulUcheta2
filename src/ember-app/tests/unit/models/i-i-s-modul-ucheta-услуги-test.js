import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-услуги', 'Unit | Model | i-i-s-modul-ucheta-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-ucheta-дир-отд-по-раб-с-кл',
    'model:i-i-s-modul-ucheta-договор',
    'model:i-i-s-modul-ucheta-клиент',
    'model:i-i-s-modul-ucheta-оказание-услуг',
    'model:i-i-s-modul-ucheta-расчет-ост-врем',
    'model:i-i-s-modul-ucheta-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
