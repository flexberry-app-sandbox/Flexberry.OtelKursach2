import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-kursach2-комната', 'Unit | Serializer | i-i-s-otel-kursach2-комната', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel-kursach2-комната',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
