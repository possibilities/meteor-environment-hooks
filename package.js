Package.describe({
  summary: "A hack to detect if code is running in a development or production environment"
});

Package.on_use(function (api) {
  api.use('underscore', ['client', 'server']);

  api.add_files('client.js', 'client');
  api.add_files('server.js', 'server');
});
