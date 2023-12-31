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
          caption: i18n.t('forms.application.sitemap.otel-kursach2.caption'),
          title: i18n.t('forms.application.sitemap.otel-kursach2.title'),
          children: [{
            link: 'i-i-s-otel-kursach2-должность-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-должность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otel-kursach2-комната-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-комната-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otel-kursach2-отель-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-отель-l.title'),
            children: null
          }, {
            link: 'i-i-s-otel-kursach2-доступ-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-доступ-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-otel-kursach2-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach2.i-i-s-otel-kursach2-сотрудник-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})