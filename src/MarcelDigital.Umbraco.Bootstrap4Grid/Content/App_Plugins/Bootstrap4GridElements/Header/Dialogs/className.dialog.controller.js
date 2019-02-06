(function () {
    function MdBootstrap4GridElementsHeaderClassNameDialog($scope) {
        var vm = this;

        vm.text = $scope.dialogData.currentText;
        vm.className = $scope.dialogData.currentClassName;
        vm.cssOptions = $scope.dialogData.options;

        vm.setClassName = function (value) {
            vm.className = value;
        };
    }
    angular.module("umbraco").controller("md.bf4gridelements.headerClassNameDialog", MdBootstrap4GridElementsHeaderClassNameDialog);
}());
