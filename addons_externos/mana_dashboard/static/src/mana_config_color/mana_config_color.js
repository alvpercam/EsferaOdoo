/** @odoo-module alias=mana_dashboard.config_color **/
function a0_0x5b70(_0x5d3c7c,_0x3c6fd9){var _0x384382=a0_0x3843();return a0_0x5b70=function(_0x5b7035,_0x4b34a4){_0x5b7035=_0x5b7035-0x16e;var _0x315315=_0x384382[_0x5b7035];return _0x315315;},a0_0x5b70(_0x5d3c7c,_0x3c6fd9);}var a0_0x5d8cd9=a0_0x5b70;(function(_0x3ea164,_0x33273f){var _0x306292=a0_0x5b70,_0x40713f=_0x3ea164();while(!![]){try{var _0x2a6306=-parseInt(_0x306292(0x16e))/0x1*(parseInt(_0x306292(0x176))/0x2)+-parseInt(_0x306292(0x17e))/0x3*(-parseInt(_0x306292(0x17a))/0x4)+parseInt(_0x306292(0x171))/0x5*(parseInt(_0x306292(0x17c))/0x6)+parseInt(_0x306292(0x173))/0x7+parseInt(_0x306292(0x17b))/0x8*(-parseInt(_0x306292(0x179))/0x9)+-parseInt(_0x306292(0x177))/0xa+parseInt(_0x306292(0x178))/0xb;if(_0x2a6306===_0x33273f)break;else _0x40713f['push'](_0x40713f['shift']());}catch(_0x5033f0){_0x40713f['push'](_0x40713f['shift']());}}}(a0_0x3843,0x42ac9));
 import {_lt}  from '@web/core/l10n/translation';
 import {Component,useEffect,useState,useRef,onMounted}  from '@odoo/owl';
 import  ManaColorPicker  from 'mana_dashboard.color_picker';
export  default class ManaConfigColor extends Component{[a0_0x5d8cd9(0x175)](){var _0x5a2f09=a0_0x5d8cd9;this[_0x5a2f09(0x172)]=useState({'value':this[_0x5a2f09(0x170)][_0x5a2f09(0x17d)]});}};
 function a0_0x3843(){var _0x41a18a=['components','props','554465mkTkql','state','2712430uxcPTG','template','setup','399752gUZTJw','3069300hSSgDM','4791699PwyOeP','18wghJnI','1720mtfdYo','2098808HVOGoG','12BhNrMb','value','1812tagmJa','1cWOlhF'];a0_0x3843=function(){return _0x41a18a;};return a0_0x3843();}ManaConfigColor[a0_0x5d8cd9(0x170)]={'title':{'type':String,'optional':0x1},'canDisable':{'type':Boolean,'optional':0x1},'enabled':{'type':Boolean,'optional':0x1},'color':{'optional':0x1},'onChange':{'type':Function,'optional':!![]},'onChangeEnabled':{'type':Function,'optional':!![]}},ManaConfigColor['defaultProps']={'canDisable':![],'enabled':!![],'onChangeEnabled':()=>{}},ManaConfigColor[a0_0x5d8cd9(0x16f)]={'ManaColorPicker':ManaColorPicker},ManaConfigColor[a0_0x5d8cd9(0x174)]='mana_dashboard.config_color';