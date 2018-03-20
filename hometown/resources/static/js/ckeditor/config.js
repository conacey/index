/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'autogrow';
	config.autoGrow_minHeight = 250;
	config.autoGrow_maxHeight = 600;

	config.font_names='方正书宋/fzshusong;思源黑体;宋体/SimSun;楷体/	KaiTi';
	 config.toolbarLocation ='top';
	 config.format_tags = 'p;h1;h2;h3;h4;h5;h6';
	 config.extraAllowedContent = 'div(*)';
	 config.extraAllowedContent = 'p(*)';
};
