function a0_0x2e4d(_0xd219ad,_0x6bd16c){const _0x542015=a0_0x5420();return a0_0x2e4d=function(_0x2e4dcd,_0x2dc636){_0x2e4dcd=_0x2e4dcd-0x167;let _0x42fe91=_0x542015[_0x2e4dcd];return _0x42fe91;},a0_0x2e4d(_0xd219ad,_0x6bd16c);}const a0_0x3098d4=a0_0x2e4d;function a0_0x5420(){const _0x40d978=['4662raBcPG','content','then','runCommand','20608azvimp','values','2XoBtKg','editor','3561570HSuMOf','trigger','length','1689167bSbYYh','record','define','init','2476866doUQyc','2075857cvxcNZ','extend','components','345NqIYzO','14606292JnhlSF','bus','context','16760yXojze','update_preview','11aekouo','6BLLHjf','$el'];a0_0x5420=function(){return _0x40d978;};return a0_0x5420();}(function(_0x1debab,_0x11722e){const _0x22a98c=a0_0x2e4d,_0x45d241=_0x1debab();while(!![]){try{const _0xd5ecc0=-parseInt(_0x22a98c(0x170))/0x1*(-parseInt(_0x22a98c(0x16b))/0x2)+parseInt(_0x22a98c(0x174))/0x3+-parseInt(_0x22a98c(0x17c))/0x4*(-parseInt(_0x22a98c(0x178))/0x5)+-parseInt(_0x22a98c(0x17f))/0x6*(-parseInt(_0x22a98c(0x175))/0x7)+-parseInt(_0x22a98c(0x169))/0x8*(parseInt(_0x22a98c(0x181))/0x9)+parseInt(_0x22a98c(0x16d))/0xa+-parseInt(_0x22a98c(0x17e))/0xb*(parseInt(_0x22a98c(0x179))/0xc);if(_0xd5ecc0===_0x11722e)break;else _0x45d241['push'](_0x45d241['shift']());}catch(_0x48a678){_0x45d241['push'](_0x45d241['shift']());}}}(a0_0x5420,0xdcf58),odoo[a0_0x3098d4(0x172)]('mana_dashboard.preview_widget',function(require){'use strict';const _0x161c35=a0_0x3098d4;const _0x15e7bc=require('mana_dashboard.block_registry'),_0x2cc7a3=require('mana_dashboard.content_block'),_0x2ee554=require('web.widget_registry'),_0x3cdb0a=require('web.Widget'),_0x32d5e5=require('web.core');let _0x3cac8=_0x3cdb0a[_0x161c35(0x176)]({'init':function(_0x1a57ee,_0xcabf81,_0x32d618){const _0x22d416=_0x161c35;return this[_0x22d416(0x182)]=_0xcabf81[_0x22d416(0x17b)][_0x22d416(0x182)]||'',this[_0x22d416(0x171)]=_0xcabf81,this._super.apply(this,arguments);},'start':function(){const _0x162d68=_0x161c35;this._super.apply(this,arguments)[_0x162d68(0x167)](()=>{const _0x580f44=_0x162d68;_0x32d5e5['bus']['on']('mana_dashboard.update_preview',this,this[_0x580f44(0x17d)]);});},'on_attach_callback':function(){const _0x2c6784=_0x161c35;let _0x49fcab=['blocks-bootstrap4',_0x2cc7a3],_0x1fae02=_0x15e7bc[_0x2c6784(0x16a)]();for(let _0x24e63c=0x0;_0x24e63c<_0x1fae02[_0x2c6784(0x16f)];_0x24e63c++){_0x49fcab['push'](_0x1fae02[_0x24e63c]);}let _0x4e5adf={'showOffsets':0x1,'noticeOnUnload':0x0,'container':this[_0x2c6784(0x180)]['get'](0x0),'height':'100%','fromElement':![],'jsInHtml':![],'cssInHtml':![],'editor_mode':'view','storageManager':{'autoload':0x0,'autosave':0x0},'plugins':_0x49fcab,'allowScripts':0x0,'storageManager':![],'widget':this,'preview':!![],'panels':{'defaults':[]}};_0x4e5adf[_0x2c6784(0x177)]=this['content']||'<div class="container"><div class="row"><div class="col">Some thing is error!</div></div></div>',this[_0x2c6784(0x16c)]=grapesjs[_0x2c6784(0x173)](_0x4e5adf),setTimeout(()=>{const _0x1f64e1=_0x2c6784;this[_0x1f64e1(0x16c)][_0x1f64e1(0x168)]('preview');},0x0);},'update_preview':function(){const _0xe9f54=_0x161c35;_0x32d5e5[_0xe9f54(0x17a)][_0xe9f54(0x16e)]('mana_dashboard.force_reload_config',this[_0xe9f54(0x16c)]);},'get_theme_name':function(){const _0x5e23db=_0x161c35;let _0x3048fc=this['record'][_0x5e23db(0x17b)]['theme_name']||'default';return _0x3048fc;},'willStart':function(){return this._super.apply(this,arguments);},'destroy':function(){const _0x292949=_0x161c35;_0x32d5e5[_0x292949(0x17a)]['off']('mana_dashboard.update_preview',this,this['update_preview']);if(this['editor']){this[_0x292949(0x16c)]['select']();let _super=this._super;setTimeout(()=>{const _0x4526d7=_0x292949;this[_0x4526d7(0x16c)]['destroy'](),this['editor']=null,_super['apply'](this,arguments);},0x0);}else this._super.apply(this,arguments);}});return _0x2ee554['add']('mana_dashboard.preview_widget',_0x3cac8),_0x3cac8;}));