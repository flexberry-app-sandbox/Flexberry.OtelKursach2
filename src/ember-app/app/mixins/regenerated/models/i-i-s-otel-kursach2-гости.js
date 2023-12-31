import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодГостя: DS.attr('number'),
  комментарий: DS.attr('string'),
  отчество: DS.attr('string'),
  сотовый: DS.attr('number'),
  фамилия: DS.attr('string'),
  доступ: DS.belongsTo('i-i-s-otel-kursach2-доступ', { inverse: 'гости', async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодГостя: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.кодГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотовый: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.сотовый.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  доступ: {
    descriptionKey: 'models.i-i-s-otel-kursach2-гости.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиE', 'i-i-s-otel-kursach2-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    сотовый: attr('Сотовый', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 })
  });
};
