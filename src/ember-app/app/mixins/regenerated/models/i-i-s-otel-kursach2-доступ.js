import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('string'),
  кодДоступа: DS.attr('number'),
  комната: DS.belongsTo('i-i-s-otel-kursach2-комната', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-otel-kursach2-сотрудник', { inverse: null, async: false }),
  регистрЗаписи: DS.hasMany('i-i-s-otel-kursach2-регистр-записи', { inverse: 'доступ', async: false }),
  гости: DS.hasMany('i-i-s-otel-kursach2-гости', { inverse: 'доступ', async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДоступа: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.кодДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрЗаписи: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.регистрЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel-kursach2-доступ.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоступE', 'i-i-s-otel-kursach2-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 })
  });

  modelClass.defineProjection('ДоступL', 'i-i-s-otel-kursach2-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    комната: belongsTo('i-i-s-otel-kursach2-комната', 'Код комнаты', {
      кодКомнаты: attr('Код комнаты', { index: 2 }),
      колвоМест: attr('колво мест', { index: 3 }),
      стоимость: attr('стоимость', { index: 4 }),
      класс: attr('Класс', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-otel-kursach2-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 6 }),
      фамилия: attr('Фамилия', { index: 7 }),
      отчесвто: attr('Отчество', { index: 8 }),
      должность: belongsTo('i-i-s-otel-kursach2-должность', '', {
        наименование: attr('Наименование должности', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
