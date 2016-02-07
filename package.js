Package.describe({
  name: 'veeramarni:ionicons-less',
  version: '1.2.4',
  summary: "Ionicons Framework in LESS and bundled for Meteor.",
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('less', 'client');

  // less
  api.addFiles('ionicons.import.less', 'client');
  api.addFiles('lib/less/_ionicons-font.less', 'client', {isImport: true});
  api.addFiles('lib/less/_ionicons-icons.less', 'client', {isImport: true});
  api.addFiles('lib/less/_ionicons-variables.less', 'client', {isImport: true});
  api.addFiles('lib/less/ionicons.less', 'client', {isImport: true});

  // fonts
  api.addAssets('lib/fonts/ionicons.eot', 'client');
  api.addAssets('lib/fonts/ionicons.svg', 'client');
  api.addAssets('lib/fonts/ionicons.ttf', 'client');
  api.addAssets('lib/fonts/ionicons.woff', 'client');
});

