(function () {
    function MdBootstrap4GridElementsHeaderTagNameDialog($scope) {
        var vm = this;

        vm.tagName = $scope.dialogData.currentTagName;
        vm.tagOptions = $scope.dialogData.options;

        vm.setTagName = function (value) {
            vm.tagName = value;
        };
    }
    angular.module("umbraco").controller("md.bf4gridelements.headerTagNameDialog", MdBootstrap4GridElementsHeaderTagNameDialog);
}());
