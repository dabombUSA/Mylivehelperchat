<div class="form-group" ng-non-bindable>
    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Name');?></label>
    <input type="text" maxlength="250" class="form-control form-control-sm" name="name" value="<?php echo htmlspecialchars($item->name)?>" />
</div>

<div class="form-group">
    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','Department');?></label>
    <div class="row" style="max-height: 500px; overflow: auto">
        <?php
        $params = array (
            'input_name'     => 'DepartmentID[]',
            'display_name'   => 'name',
            'css_class'      => 'form-control',
            'multiple'       => true,
            'wrap_prepend'   => '<div class="col-4">',
            'wrap_append'    => '</div>',
            'selected_id'    => $item->department_ids_front,
            'list_function'  => 'erLhcoreClassModelDepartament::getList',
            'list_function_params'  => array('sort' => 'sort_priority ASC, id ASC', 'limit' => '1000000')
        );

        $params['optional_field'] = erTranslationClassLhTranslation::getInstance()->getTranslation('department/edit','Any');

        echo erLhcoreClassRenderHelper::renderCheckbox( $params ); ?>
    </div>
</div>

<div class="form-group">
    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Template HTML');?></label>
    <textarea id="response-template" class="form-control form-control-sm" name="template"><?php echo htmlspecialchars($item->template)?></textarea>
    <p><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Supported replaceable variable.');?> {operator}, {department}</small></p>
</div>

<script>
    $(document).ready(function(){
        tinymce.init({
            selector: '#response-template',
            height: 320,
            automatic_uploads: true,
            file_picker_types: 'image',
            images_upload_url: '<?php echo erLhcoreClassDesign::baseurl('mailconv/uploadimage')?>',
            paste_data_images: true,
            relative_urls : false,
            browser_spellcheck: true,
            paste_as_text: true,
            contextmenu: false,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor image lhfiles',
                'searchreplace visualblocks code fullscreen',
                'media table paste help',
                'print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media template codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons'
            ],
            toolbar_mode: 'wrap',
            toolbar:
                'undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor | \
                alignleft aligncenter alignright alignjustify | lhfiles insertfile image pageembed template link anchor codesample | \
                bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help'
        });
    });
</script>

<div class="form-group">
    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Template Plain text');?></label>
    <textarea rows="10" class="form-control form-control-sm" name="template_plain"><?php echo htmlspecialchars($item->template_plain)?></textarea>
    <p><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Supported replaceable variable.');?> {operator}, {department}</small></p>
</div>