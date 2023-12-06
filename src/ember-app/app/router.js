import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel-kursach2-должность-l');
  this.route('i-i-s-otel-kursach2-должность-e',
  { path: 'i-i-s-otel-kursach2-должность-e/:id' });
  this.route('i-i-s-otel-kursach2-должность-e.new',
  { path: 'i-i-s-otel-kursach2-должность-e/new' });
  this.route('i-i-s-otel-kursach2-доступ-l');
  this.route('i-i-s-otel-kursach2-доступ-e',
  { path: 'i-i-s-otel-kursach2-доступ-e/:id' });
  this.route('i-i-s-otel-kursach2-доступ-e.new',
  { path: 'i-i-s-otel-kursach2-доступ-e/new' });
  this.route('i-i-s-otel-kursach2-комната-l');
  this.route('i-i-s-otel-kursach2-комната-e',
  { path: 'i-i-s-otel-kursach2-комната-e/:id' });
  this.route('i-i-s-otel-kursach2-комната-e.new',
  { path: 'i-i-s-otel-kursach2-комната-e/new' });
  this.route('i-i-s-otel-kursach2-отель-l');
  this.route('i-i-s-otel-kursach2-отель-e',
  { path: 'i-i-s-otel-kursach2-отель-e/:id' });
  this.route('i-i-s-otel-kursach2-отель-e.new',
  { path: 'i-i-s-otel-kursach2-отель-e/new' });
  this.route('i-i-s-otel-kursach2-сотрудник-l');
  this.route('i-i-s-otel-kursach2-сотрудник-e',
  { path: 'i-i-s-otel-kursach2-сотрудник-e/:id' });
  this.route('i-i-s-otel-kursach2-сотрудник-e.new',
  { path: 'i-i-s-otel-kursach2-сотрудник-e/new' });
});

export default Router;
