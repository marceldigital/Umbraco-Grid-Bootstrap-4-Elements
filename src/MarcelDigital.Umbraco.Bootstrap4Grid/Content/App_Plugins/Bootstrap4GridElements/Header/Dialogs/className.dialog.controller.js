(function () {
    function MdBootstrap4GridElementsHeaderClassNameDialog($scope) {
        var vm = this;

        vm.text = $scope.dialogData.currentText;
        vm.className = $scope.dialogData.currentClassName;

        vm.setClassName = function (value) {
            vm.className = value;
        };

        vm.cssOptions = [
            {
                localizationKey: "bf4elheader_visualSettingsH1",
                value: "h1"
            },
            {
                localizationKey: "bf4elheader_visualSettingsH2",
                value: "h2"
            },
            {
                localizationKey: "bf4elheader_visualSettingsH3",
                value: "h3"
            },
            {
                localizationKey: "bf4elheader_visualSettingsH4",
                value: "h4"
            },
            {
                localizationKey: "bf4elheader_visualSettingsDisplay1",
                value: "display-1"
            },
            {
                localizationKey: "bf4elheader_visualSettingsDisplay2",
                value: "display-2"
            },
            {
                localizationKey: "bf4elheader_visualSettingsDisplay3",
                value: "display-3"
            },
            {
                localizationKey: "bf4elheader_visualSettingsDisplay4",
                value: "display-4"
            }
        ];
    }
    angular.module("umbraco").controller("md.bf4gridelements.headerClassNameDialog", MdBootstrap4GridElementsHeaderClassNameDialog);
}());
