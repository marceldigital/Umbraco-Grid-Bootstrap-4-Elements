(function () {
    function MdBootstrap4GridElementsHeaderTagNameDialog($scope) {
        var vm = this;

        vm.tagName = $scope.dialogData;

        vm.setTagName = function (value) {
            vm.tagName = value;
        };

        vm.tagOptions = [
            {
                localizationKey: "bf4elheader_structualSettingsParapgraph",
                value: "p"
            },
            {
                localizationKey: "bf4elheader_structualSettingsH1",
                value: "h1"
            },
            {
                localizationKey: "bf4elheader_structualSettingsH2",
                value: "h2"
            },
            {
                localizationKey: "bf4elheader_structualSettingsH3",
                value: "h3"
            },
            {
                localizationKey: "bf4elheader_structualSettingsH4",
                value: "h4"
            }
        ];
    }
    angular.module("umbraco").controller("md.bf4gridelements.headerTagNameDialog", MdBootstrap4GridElementsHeaderTagNameDialog);
}());