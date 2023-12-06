import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOtelKursach2ДолжностьLForm from './forms/i-i-s-otel-kursach2-должность-l';
import IISOtelKursach2ДоступLForm from './forms/i-i-s-otel-kursach2-доступ-l';
import IISOtelKursach2КомнатаLForm from './forms/i-i-s-otel-kursach2-комната-l';
import IISOtelKursach2ОтельLForm from './forms/i-i-s-otel-kursach2-отель-l';
import IISOtelKursach2СотрудникLForm from './forms/i-i-s-otel-kursach2-сотрудник-l';
import IISOtelKursach2ДолжностьEForm from './forms/i-i-s-otel-kursach2-должность-e';
import IISOtelKursach2ДоступEForm from './forms/i-i-s-otel-kursach2-доступ-e';
import IISOtelKursach2КомнатаEForm from './forms/i-i-s-otel-kursach2-комната-e';
import IISOtelKursach2ОтельEForm from './forms/i-i-s-otel-kursach2-отель-e';
import IISOtelKursach2СотрудникEForm from './forms/i-i-s-otel-kursach2-сотрудник-e';
import IISOtelKursach2ГостиModel from './models/i-i-s-otel-kursach2-гости';
import IISOtelKursach2ДолжностьModel from './models/i-i-s-otel-kursach2-должность';
import IISOtelKursach2ДоступModel from './models/i-i-s-otel-kursach2-доступ';
import IISOtelKursach2КомнатаModel from './models/i-i-s-otel-kursach2-комната';
import IISOtelKursach2ОтельModel from './models/i-i-s-otel-kursach2-отель';
import IISOtelKursach2РегистрЗаписиModel from './models/i-i-s-otel-kursach2-регистр-записи';
import IISOtelKursach2СотрудникModel from './models/i-i-s-otel-kursach2-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel-kursach2-гости': IISOtelKursach2ГостиModel,
    'i-i-s-otel-kursach2-должность': IISOtelKursach2ДолжностьModel,
    'i-i-s-otel-kursach2-доступ': IISOtelKursach2ДоступModel,
    'i-i-s-otel-kursach2-комната': IISOtelKursach2КомнатаModel,
    'i-i-s-otel-kursach2-отель': IISOtelKursach2ОтельModel,
    'i-i-s-otel-kursach2-регистр-записи': IISOtelKursach2РегистрЗаписиModel,
    'i-i-s-otel-kursach2-сотрудник': IISOtelKursach2СотрудникModel
  },

  'application-name': 'Otel kursach2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Otel kursach2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel kursach2',
          title: 'Otel kursach2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'otel-kursach2': {
          caption: 'OtelKursach2',
          title: 'OtelKursach2',
          'i-i-s-otel-kursach2-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-otel-kursach2-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-otel-kursach2-отель-l': {
            caption: 'Отель',
            title: ''
          },
          'i-i-s-otel-kursach2-доступ-l': {
            caption: 'Доступ',
            title: ''
          },
          'i-i-s-otel-kursach2-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-otel-kursach2-должность-l': IISOtelKursach2ДолжностьLForm,
    'i-i-s-otel-kursach2-доступ-l': IISOtelKursach2ДоступLForm,
    'i-i-s-otel-kursach2-комната-l': IISOtelKursach2КомнатаLForm,
    'i-i-s-otel-kursach2-отель-l': IISOtelKursach2ОтельLForm,
    'i-i-s-otel-kursach2-сотрудник-l': IISOtelKursach2СотрудникLForm,
    'i-i-s-otel-kursach2-должность-e': IISOtelKursach2ДолжностьEForm,
    'i-i-s-otel-kursach2-доступ-e': IISOtelKursach2ДоступEForm,
    'i-i-s-otel-kursach2-комната-e': IISOtelKursach2КомнатаEForm,
    'i-i-s-otel-kursach2-отель-e': IISOtelKursach2ОтельEForm,
    'i-i-s-otel-kursach2-сотрудник-e': IISOtelKursach2СотрудникEForm
  },

});

export default translations;
