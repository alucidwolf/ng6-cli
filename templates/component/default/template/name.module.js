import <%=name_camel%>Component from './<%= name %>.component';

var module = angular.module('<%= moduleName %>', []);

module.component('<%= name_camel %>', <%=name_camel%>Component);

<% if( cli.request.options.view || cli.request.options.v ) { %>
//configure component states
module.config(function($stateProvider) {
  'ngInject';

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      template: '<<%= name %>></<%= name %>>'
    });
});
<% } %>

export default module.name;