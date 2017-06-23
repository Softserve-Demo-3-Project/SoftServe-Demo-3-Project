export default function () {
  return {
    restrict: "E",
    scope: {
      body: "=",
      onEdit: "="
    },
    template: require('./editingFieldTemplate.html')
  }
}
