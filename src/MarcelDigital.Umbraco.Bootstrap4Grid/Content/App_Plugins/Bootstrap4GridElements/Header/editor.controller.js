(function () {
    function MdBootstrap4GridElementsHeader($scope, $timeout, dialogService) {
        var vm = this;

        if (!$scope.control.value) {
            $scope.control.value = {
                options: angular.copy($scope.control.editor.config.defaultHeaderOptions)
            };
        }

        vm.openClassNameDialog = function () {
            dialogService.open({
                template: '/app_plugins/bootstrap4gridelements/header/dialogs/className.dialog.html',
                show: true,
                callback: function (className) {
                    $scope.control.value.options.className = className;

                    // Jiggle the value to trigger the umb-auto-resize
                    $scope.control.value.text ? $scope.control.value.text += "|" : $scope.control.value.text = "|";
                    $timeout(function () {
                        $scope.control.value.text = $scope.control.value.text.slice(0, $scope.control.value.text.length - 1);
                    }, 50);
                },
                dialogData: {
                    currentText: $scope.control.value.text ? angular.copy($scope.control.value.text) : "Lorem Ipsum",
                    currentClassName: angular.copy($scope.control.value.options.className),
                    options: $scope.control.editor.config.classNameOptions
                }
            });
        };

        vm.openTagNameDialog = function () {
            dialogService.open({
                template: '/app_plugins/bootstrap4gridelements/header/dialogs/tagName.dialog.html',
                show: true,
                callback: function (tagName) {
                    $scope.control.value.options.tagName = tagName;
                },
                dialogData: {
                    currentTagName: angular.copy($scope.control.value.options.tagName),
                    options: $scope.control.editor.config.tagNameOptions
                }
            });
        };
    }
    angular.module("umbraco").controller("md.bf4gridelements.header", MdBootstrap4GridElementsHeader);
}());
