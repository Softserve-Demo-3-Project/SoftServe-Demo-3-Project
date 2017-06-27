export default function () {
  return {
    restrict: "E",
    scope: {
      body: "=",
      alert: "=",
      onEdit: "="
    },
    template: require('./editingFieldTemplate.html')
  }
}
