(function () {
    function MdBootstrap4GridElementsRte($scope, tinyMceService, editorState) {
        var vm = this;

        vm.config = {
            selector: "textarea",
            toolbar: ['code', 'styleselect', 'bold', 'italic', 'strikethrough', 'underline', 'alignleft', 'aligncenter', 'alignright', 'bullist', 'numlist', 'link'],
            stylesheets: ['bootstrap4-elements-formats']
        };
        vm.openLinkPicker = openLinkPicker;

        function openLinkPicker(editor, currentTarget, anchorElement) {
            vm.linkPickerOverlay = {
                view: 'linkpicker',
                currentTarget: currentTarget,
                anchors: tinyMceService.getAnchorNames(JSON.stringify(editorState.current.properties)),
                show: true,
                submit: function (model) {
                    tinyMceService.insertLinkInEditor(editor, model.target, anchorElement);
                    vm.linkPickerOverlay.show = false;
                    vm.linkPickerOverlay = null;
                }
            };
        }
    }
    angular.module("umbraco").controller("md.bf4gridelements.rte", MdBootstrap4GridElementsRte);
}());
