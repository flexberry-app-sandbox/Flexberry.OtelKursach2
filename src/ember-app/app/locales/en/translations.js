import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
        'application-name': 'Otel kursach2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel kursach2',
          title: 'Otel kursach2'
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
