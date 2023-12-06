import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-kursach2-отель', 'Unit | Model | i-i-s-otel-kursach2-отель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otel-kursach2-гости',
    'model:i-i-s-otel-kursach2-должность',
    'model:i-i-s-otel-kursach2-доступ',
    'model:i-i-s-otel-kursach2-комната',
    'model:i-i-s-otel-kursach2-отель',
    'model:i-i-s-otel-kursach2-регистр-записи',
    'model:i-i-s-otel-kursach2-сотрудник',
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
