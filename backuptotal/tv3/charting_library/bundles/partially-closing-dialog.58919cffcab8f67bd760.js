(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5001],{259142:function(e,t){var i,n,o;n=[t],i=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var i=!1;if("undefined"!=typeof window){var n={get passive(){i=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),a=[],s=!1,r=-1,l=void 0,m=void 0,u=function(e){return a.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},c=function(e){var t=e||window.event;return!!u(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},p=function(){setTimeout((function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)}))};e.disableBodyScroll=function(e,n){if(o){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!a.some((function(t){return t.targetElement===e}))){var p={targetElement:e,options:n||{}};a=[].concat(t(a),[p]),e.ontouchstart=function(e){1===e.targetTouches.length&&(r=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var i,n,o,a;1===t.targetTouches.length&&(n=e,a=(i=t).targetTouches[0].clientY-r,!u(i.target)&&(n&&0===n.scrollTop&&0<a||(o=n)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&a<0?c(i):i.stopPropagation()))},s||(document.addEventListener("touchmove",c,i?{passive:!1}:void 0),s=!0)}}else{h=n,setTimeout((function(){if(void 0===m){var e=!!h&&!0===h.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(m=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}));var d={targetElement:e,options:n||{}};a=[].concat(t(a),[d])}var h},e.clearAllBodyScrollLocks=function(){o?(a.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",c,i?{passive:!1}:void 0),s=!1),a=[],r=-1):(p(),a=[])},e.enableBodyScroll=function(e){if(o){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,a=a.filter((function(t){return t.targetElement!==e})),s&&0===a.length&&(document.removeEventListener("touchmove",c,i?{passive:!1}:void 0),s=!1)}else 1===a.length&&a[0].targetElement===e?(p(),a=[]):a=a.filter((function(t){return t.targetElement!==e}))}},void 0===(o="function"==typeof i?i.apply(t,n):i)||(e.exports=o)},946587:e=>{e.exports={wrapper:"wrapper-bUw_gKIQ",input:"input-bUw_gKIQ",box:"box-bUw_gKIQ",icon:"icon-bUw_gKIQ",noOutline:"noOutline-bUw_gKIQ","intent-danger":"intent-danger-bUw_gKIQ",check:"check-bUw_gKIQ",
dot:"dot-bUw_gKIQ"}},794090:e=>{e.exports={checkbox:"checkbox-pJWVW1z6",reverse:"reverse-pJWVW1z6",label:"label-pJWVW1z6",baseline:"baseline-pJWVW1z6"}},629950:e=>{e.exports={scrollable:"scrollable-_8urn7kO",content:"content-_8urn7kO",input:"input-_8urn7kO",endSlot:"endSlot-_8urn7kO",message:"message-_8urn7kO",estimation:"estimation-_8urn7kO",label:"label-_8urn7kO"}},408323:(e,t,i)=>{"use strict";i.d(t,{CheckboxInput:()=>m});var n=i(50959),o=i(497754),a=i(72571),s=i(465890),r=i(946587),l=i.n(r);function m(e){const t=o(l().box,l()[`intent-${e.intent}`],{[l().check]:!Boolean(e.indeterminate),[l().dot]:Boolean(e.indeterminate),[l().noOutline]:-1===e.tabIndex}),i=o(l().wrapper,e.className);return n.createElement("span",{className:i,title:e.title,style:e.style},n.createElement("input",{id:e.id,tabIndex:e.tabIndex,className:l().input,type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,autoFocus:e.autoFocus,role:e.role,onChange:function(){e.onChange&&e.onChange(e.value)},ref:e.reference,"aria-required":e["aria-required"]}),n.createElement("span",{className:t},n.createElement(a.Icon,{icon:s,className:l().icon})))}},302946:(e,t,i)=>{"use strict";i.d(t,{Checkbox:()=>m});var n=i(50959),o=i(497754),a=i(732834),s=i(408323),r=i(794090),l=i.n(r);class m extends n.PureComponent{render(){const{inputClassName:e,labelClassName:t,...i}=this.props,a=o(this.props.className,l().checkbox,{[l().reverse]:Boolean(this.props.labelPositionReverse),[l().baseline]:Boolean(this.props.labelAlignBaseline)}),r=o(l().label,t,{[l().disabled]:this.props.disabled});let m=null;return this.props.label&&(m=n.createElement("span",{className:r,title:this.props.title},this.props.label)),n.createElement("label",{className:a},n.createElement(s.CheckboxInput,{...i,className:e}),m)}}m.defaultProps={value:"on"};(0,a.makeSwitchGroupItem)(m)},732834:(e,t,i)=>{"use strict";i.d(t,{SwitchGroup:()=>a,makeSwitchGroupItem:()=>s});var n=i(50959),o=i(719036);class a extends n.PureComponent{constructor(){super(...arguments),this._subscriptions=new Set,this._getName=()=>this.props.name,this._getValues=()=>this.props.values,this._getOnChange=()=>this.props.onChange,this._subscribe=e=>{this._subscriptions.add(e)},this._unsubscribe=e=>{this._subscriptions.delete(e)}}getChildContext(){return{switchGroupContext:{getName:this._getName,getValues:this._getValues,getOnChange:this._getOnChange,subscribe:this._subscribe,unsubscribe:this._unsubscribe}}}render(){return this.props.children}componentDidUpdate(e){this._notify(this._getUpdates(this.props.values,e.values))}_notify(e){this._subscriptions.forEach((t=>t(e)))}_getUpdates(e,t){return[...t,...e].filter((i=>t.includes(i)?!e.includes(i):e.includes(i)))}}function s(e){var t;return t=class extends n.PureComponent{constructor(){super(...arguments),this._onChange=e=>{this.context.switchGroupContext.getOnChange()(e)},this._onUpdate=e=>{e.includes(this.props.value)&&this.forceUpdate()}}componentDidMount(){this.context.switchGroupContext.subscribe(this._onUpdate)}render(){return n.createElement(e,{...this.props,
name:this._getName(),onChange:this._onChange,checked:this._isChecked()})}componentWillUnmount(){this.context.switchGroupContext.unsubscribe(this._onUpdate)}_getName(){return this.context.switchGroupContext.getName()}_isChecked(){return this.context.switchGroupContext.getValues().includes(this.props.value)}},t.contextTypes={switchGroupContext:o.any.isRequired},t}a.childContextTypes={switchGroupContext:o.any.isRequired}},648017:(e,t,i)=>{"use strict";i.r(t),i.d(t,{PartiallyClosingDialog:()=>h});var n=i(509806),o=i(50959),a=i(302946),s=i(960521),r=i(742554),l=i(370981),m=i(180185);var u=i(587125),c=i(563099),p=i(604406),d=i(629950);function h(e){const{positionOrTrade:t,qtyFormatter:h,supportLots:y,qtyStep:f,uiQtyStep:v,minQty:g,message:Q,onClose:b,dialogActionHandler:_,onOpen:k}=e,x=(0,o.useMemo)((()=>Math.abs(t.qty)),[t.qty]),[w,S]=(0,o.useState)(!0),[E,z]=(0,o.useState)(!1),[L,I]=(0,o.useState)(x),[N,T]=(0,o.useState)(!1),[q,C]=(0,o.useState)(!1),[P,D]=(0,o.useState)(),O=(()=>{const[e,t]=(0,o.useState)(!window.navigator.onLine),i=e=>t("offline"===e.type);return(0,o.useEffect)((()=>(window.addEventListener("online",i),window.addEventListener("offline",i),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",i)}))),e})(),j=!q&&null!==L&&L<x;(0,o.useEffect)((()=>{let e;const t=new s.Big(x),o=null!==L?new s.Big(L):null,a=null==o?void 0:o.minus(g).mod(f);null===o?e=n.t(null,void 0,i(706035)):o.gt(t)?e=n.t(null,void 0,i(256206)):!o.eq(t)&&o.lt(g)?e=n.t(null,void 0,i(290371)).replace("{minQty}",String(g)):!o.eq(t)&&t.minus(o).lt(g)?e=n.t(null,void 0,i(521644)).replace("{minQty}",String(g)):o.eq(t)||(null==a?void 0:a.eq(0))||(e=n.t(null,void 0,i(757077)).replace("{step}",String(f))),C(N||void 0!==e),D(e)}),[N,L,x,f,g]),(0,o.useEffect)((()=>{O&&R()}),[O,R]);const M=(0,o.useMemo)((()=>null!==L?(0,p.splitThousands)(h.format(L)," "):""),[L,h]),W=(0,o.useMemo)((()=>null!==L?(0,p.splitThousands)(h.format(new s.Big(x).minus(L).toNumber())," "):""),[L,x,h]),U=E&&null!==L&&L<x?n.t(null,void 0,i(630392)):n.t(null,void 0,i(424356));return o.createElement(c.CreateConfirmDialog,{isOpen:w,isOpened:w,submitButtonDisabled:E&&q,render:function(){const e=(0,p.splitThousands)(h.format(x)," "),s=n.t(null,{context:"close_position_total",plural:"of {positionQty} lots",count:x},i(588465)).replace("{positionQty}",e),l=n.t(null,{context:"close_position_total",plural:"of {positionQty} units",count:x},i(185007)).replace("{positionQty}",e),m=y?s:l;return o.createElement(r.TouchScrollContainer,{className:d.scrollable,onScroll:F},o.createElement("div",{className:d.content},o.createElement("div",{className:d.message},Q),o.createElement(a.Checkbox,{name:"partially-close-checkbox",label:o.createElement("span",{className:d.label},n.t(null,void 0,i(381569))),checked:E,onChange:B,disabled:!1,indeterminate:!1,labelPositionReverse:!1}),E&&o.createElement("form",{onSubmit:H},o.createElement(u.NumberInput,{error:q,errorMessage:P,errorHandler:G,className:d.input,value:L,useFormatter:!0,formatter:h,forceShowControls:!0,min:g,step:f,
uiStep:v,mode:"float",onValueChange:A,onEmptyString:Y,endSlot:o.createElement("p",{className:d.endSlot},m)}),j&&o.createElement("div",{className:d.estimation},o.createElement("div",null,n.t(null,void 0,i(17693)).replace("{symbol}",t.symbol).replace("{quantity}",M)),o.createElement("div",null,n.t(null,void 0,i(381232)).replace("{leavingQty}",W))))))},onClose:R,title:n.t(null,void 0,i(424356)),onSubmit:H,onCancel:()=>{},onKeyDown:function(e){27===(0,m.hashFromEvent)(e)&&R()},dataName:"trading-partial-closing-dialog",backdrop:!0,submitOnEnterKey:!0,defaultActionOnClose:"none",submitButtonText:U,cancelButtonText:n.t(null,void 0,i(620036)),onOpen:k});function B(){z((e=>!e))}function R(){S(!1),_({status:!1}),b()}function H(){_(E?null===L||q?{status:!1}:{status:!0,qty:L}:{status:!0,qty:x}),S(!1),b()}function A(e){I(e)}function Y(){I(null)}function G(e){T(e)}function F(){l.globalCloseDelegate.fire()}}},742554:(e,t,i)=>{"use strict";i.d(t,{TouchScrollContainer:()=>r});var n=i(50959),o=i(259142),a=i(650151),s=i(601227);const r=(0,n.forwardRef)(((e,t)=>{const{children:i,...a}=e,r=(0,n.useRef)(null);return(0,n.useImperativeHandle)(t,(()=>r.current)),(0,n.useLayoutEffect)((()=>{if(s.CheckMobile.iOS())return null!==r.current&&(0,o.disableBodyScroll)(r.current,{allowTouchMove:l(r)}),()=>{null!==r.current&&(0,o.enableBodyScroll)(r.current)}}),[]),n.createElement("div",{ref:r,...a},i)}));function l(e){return t=>{const i=(0,a.ensureNotNull)(e.current),n=document.activeElement;return!i.contains(t)||null!==n&&i.contains(n)&&n.contains(t)}}},906132:(e,t,i)=>{"use strict";var n=i(522134);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,i,o,a,s){if(s!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return i.PropTypes=i,i}},719036:(e,t,i)=>{e.exports=i(906132)()},522134:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},563099:(e,t,i)=>{"use strict";i.d(t,{CreateConfirmDialog:()=>s});var n=i(50959),o=i(409480);const a=n.lazy((async()=>({default:(await Promise.all([i.e(4819),i.e(346),i.e(5761),i.e(8619),i.e(4884),i.e(1140),i.e(7177),i.e(6812),i.e(2754),i.e(1213),i.e(1309),i.e(994),i.e(3566)]).then(i.bind(i,976669))).AdaptiveConfirmDialog}))),s=(0,o.withDialogLazyLoad)(a)},699958:(e,t,i)=>{"use strict";i.d(t,{SplitThousandsFormatter:()=>a});var n=i(604406),o=i(561626);class a{constructor(e=" "){this._divider=e}format(e){const t=(0,n.splitThousands)(e,this._divider);return(0,o.isRtl)()?(0,o.startWithLTR)(t):t}parse(e){const t=(0,o.stripLTRMarks)(e).split(this._divider).join(""),i=Number(t);return isNaN(i)||/e/i.test(t)?{res:!1}:{res:!0,value:i,
suggest:this.format(i)}}}},465890:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'},185007:e=>{e.exports={ar:["لـ {positionQty} وحدة","لـ {positionQty} وحدة","لـ {positionQty} وحدة","لـ {positionQty} وحدات","لـ {positionQty} وحدة","لـ {positionQty} وحدة"],ca_ES:["de {positionQty} unitat","de {positionQty} unitats"],cs:"of {positionQty} unit",de:["von {positionQty} Einheit","von {positionQty} Einheiten"],el:"of {positionQty} unit",en:"of {positionQty} unit",es:["de {positionQty} unidad","de {positionQty} unidades"],fa:["of {positionQty} units"],fr:["de {positionQty} unité","de {positionQty} unités"],he_IL:["של יחידה {positionQty}","של {positionQty} יחידות","של {positionQty} יחידות","של {positionQty} יחידות"],hu_HU:["of {positionQty} units"],id_ID:["dari {positionQty} unit"],it:["di {positionQty} unità","di {positionQty} unità"],ja:["/ {positionQty}ユニット"],ko:["of {positionQty} 유닛"],ms_MY:["untuk unit {positionQty}"],nl_NL:"of {positionQty} unit",pl:["z {positionQty} jednostki","z {positionQty} jednostek","z {positionQty} jednostek","z {positionQty} jednostek"],pt:["de {positionQty} unidade","de {positionQty} unidades"],ro:"of {positionQty} unit",ru:["{positionQty} единицы","{positionQty} единиц","{positionQty} единиц","{positionQty} единиц"],sv:["av {positionQty} enhet","av {positionQty} enheter"],th:["ของ {positionQty} หน่วย"],tr:["{positionQty} birimden","{positionQty} birimden"],vi:["của đơn vị {positionQty}"],zh:["的{positionQty}单位"],zh_TW:["的{positionQty}單位"]}},588465:e=>{e.exports={ar:["لـ {positionQty} عقد","لـ {positionQty} عقد","لـ {positionQty} عقد","لـ {positionQty} عقود","لـ {positionQty} عقداً","لـ {positionQty} عقداً"],ca_ES:["de {positionQty} lot","de {positionQty} lots"],cs:"of {positionQty} lot",de:["von {positionQty} Lot","von {positionQty} Lots"],el:"of {positionQty} lot",en:"of {positionQty} lot",es:["de {positionQty} lote","de {positionQty} lotes"],fa:["of {positionQty} lots"],fr:["de {positionQty} lot","de {positionQty} lots"],he_IL:["של {positionQty} יחידה","של {positionQty} יחידות","של {positionQty} יחידות","של {positionQty} יחידות"],hu_HU:["of {positionQty} lots"],id_ID:["dari {positionQty} lot"],it:["di {positionQty} lotto","di {positionQty} lotti"],ja:["/ {positionQty}ロット"],ko:["of {positionQty} 로트"],ms_MY:["untuk lot {positionQty}"],nl_NL:"of {positionQty} lot",pl:["z {positionQty} lota","z {positionQty} lotów","z {positionQty} lotów","z {positionQty} lotów"],pt:["de {positionQty} lot","de {positionQty} lots"],ro:"of {positionQty} lot",ru:["{positionQty} лота","{positionQty} лотов","{positionQty} лотов","{positionQty} лотов"],sv:["av {positionQty} post","av {positionQty} poster"],th:["ของ {positionQty} ล็อต"],tr:["{positionQty} lottan","{positionQty} lottan"],vi:["của lô {positionQty}"],zh:["的{positionQty}手数"],zh_TW:["的{positionQty}手數"]}},756095:e=>{e.exports={ar:["تخفيض"],ca_ES:["Redueix"],cs:"Decrease",de:["Verringern"],el:"Decrease",en:"Decrease",es:["Reducir"],
fa:"Decrease",fr:["Diminuer"],he_IL:["לְהַקְטִין"],hu_HU:"Decrease",id_ID:["Menurun"],it:["Diminuisci"],ja:["減少"],ko:["줄이기"],ms_MY:["Pengurangan"],nl_NL:"Decrease",pl:["Pomniejsz"],pt:["Diminuir"],ro:"Decrease",ru:["Уменьшить"],sv:["Minska"],th:["ลดลง"],tr:["Azalt"],vi:["Giảm"],zh:["减少"],zh_TW:["減少"]}},146812:e=>{e.exports={ar:["زيادة"],ca_ES:["Augment"],cs:"Increase",de:["Erhöhen"],el:"Increase",en:"Increase",es:["Aumento"],fa:"Increase",fr:["Augmenter"],he_IL:["גידול"],hu_HU:"Increase",id_ID:["Meningkatkan"],it:["Aumenta"],ja:["増加"],ko:["늘어남"],ms_MY:["Pertambahan"],nl_NL:"Increase",pl:["Zwiększ"],pt:["Aumentar"],ro:"Increase",ru:["Увеличить"],sv:["Öka"],th:["เพิ่มขึ้น"],tr:["Yükseliş"],vi:["Tăng"],zh:["增加"],zh_TW:["增加"]}},381232:e=>{e.exports={ar:["ترك مركز ‎{leavingQty}‎"],ca_ES:"Leaving a position of {leavingQty}",cs:"Leaving a position of {leavingQty}",de:["Übrige Position von {leavingQty}"],el:"Leaving a position of {leavingQty}",en:"Leaving a position of {leavingQty}",es:["Dejar una posición de {leavingQty}"],fa:"Leaving a position of {leavingQty}",fr:["Laisser une position de {leavingQty}"],he_IL:["Leaving פוזיציה של {leavingQty}"],hu_HU:"Leaving a position of {leavingQty}",id_ID:["Meninggalkan posisi sebanyak {leavingQty}"],it:["Posizione rimanente di {leavingQty}"],ja:["残ポジション {leavingQty}"],ko:["{leavingQty} 포지션을 남김"],ms_MY:["Tinggalkan satu posisi {leavingQty}"],nl_NL:"Leaving a position of {leavingQty}",pl:["Zostawiając pozycję {leavingQty}"],pt:["Deixando uma posição de {leavingQty}"],ro:"Leaving a position of {leavingQty}",ru:["Оставить позицию {leavingQty}"],sv:["Lämnar en position med {leavingQty}"],th:["ออกจากตำแหน่ง {leavingQty}"],tr:["{leavingQty} pozisyonundan ayrılıyor"],vi:["Rời bỏ vị thế của {leavingQty}"],zh:["保留{leavingQty}手的仓位"],zh_TW:["保留{leavingQty}手的倉位"]}},535563:e=>{e.exports={ar:["تنسيق الرقم غير صالح."],ca_ES:["El format del número no és correcte"],cs:"Number format is invalid.",de:["Ungültiges Zahlenformat"],el:"Number format is invalid.",en:"Number format is invalid.",es:["El formato del número no es correcto."],fa:"Number format is invalid.",fr:["Le format du numéro n'est pas valide."],he_IL:["פורמט המספר אינו חוקי."],hu_HU:"Number format is invalid.",id_ID:["Format angka tidak valid."],it:["Il formato del numero non è valido."],ja:["数字形式が有効なものではありません。"],ko:["넘버 포맷이 잘못 되었습니다."],ms_MY:["Format nombor tidak sah."],nl_NL:"Number format is invalid.",pl:["Błędny format numeru."],pt:["O formato numérico é inválido."],ro:"Number format is invalid.",ru:["Неверный формат числа."],sv:["Nummerformatet är felaktigt."],th:["รูปแบบตัวเลขไม่ถูกต้อง"],tr:["Numara formatı geçersiz"],vi:["Định dạng số không hợp lệ."],zh:["号码格式无效。"],zh_TW:["號碼格式無效。"]}},256206:e=>{e.exports={ar:["القيمة المحددة تفوق الحد الأقصى المسموح به للأداة المالية"],ca_ES:"Specified value is more than the instrument maximum",cs:"Specified value is more than the instrument maximum",de:["Angegebener Wert ist mehr als das Maximum dieses Instruments"],el:"Specified value is more than the instrument maximum",
en:"Specified value is more than the instrument maximum",es:["El valor especificado es superior el máximo establecido para el instrumento"],fa:"Specified value is more than the instrument maximum",fr:["La valeur spécifiée est supérieure au maximum de l'instrument"],he_IL:["הערך שצוין הוא יותר מהמקסימום של המכשיר"],hu_HU:"Specified value is more than the instrument maximum",id_ID:["Nilai yang ditentukan melebihi kapasitas maksimum instrumennya"],it:["Il valore specificato è superiore al massimo per lo strumento"],ja:["指定された値が銘柄の最大値を超えています"],ko:["지정한 값이 종목의 최대값보다 큽니다"],ms_MY:["Nilai yang ditentukan lebih tinggi daripada nilai maksimum instrumen."],nl_NL:"Specified value is more than the instrument maximum",pl:["Określona wartość jest większa niż dozwolone maksimum dla tego instrumentu"],pt:["O valor especificado é maior do que o máximo do instrumento"],ro:"Specified value is more than the instrument maximum",ru:["Указанное значение больше допустимого максимума для инструмента"],sv:["Det angivna värdet är högre än instrumentets maximala värde"],th:["ค่าที่ระบุมากเกินกว่าค่าสูงสุดที่มีของเครื่องมือ"],tr:["Belirtilen değer enstrümanın maksimum değerinden fazladır"],vi:["Giá trị được chỉ định lớn hơn giá trị tối đa của công cụ"],zh:["指定值大于商品最大值"],zh_TW:["指定值大於商品最大值"]}},602607:e=>{e.exports={ar:["القيمة المحددة أكبر من الحد الأقصى للأداة والتي تبلغ ‎{max}."],ca_ES:["El valor especificat és més gran que el màxim de l'instrument: {max}"],cs:"Specified value is more than the instrument maximum of {max}.",de:["Der angegebene Wert ist größer als das Instrumentenmaximum von {max}."],el:"Specified value is more than the instrument maximum of {max}.",en:"Specified value is more than the instrument maximum of {max}.",es:["El valor especificado es mayor al máximo del instrumento: {max}."],fa:"Specified value is more than the instrument maximum of {max}.",fr:["La valeur spécifiée est supérieure au maximum de {max} de l'instrument."],he_IL:["הערך שצוין הוא יותר מהמקסימום של המכשיר {max}."],hu_HU:"Specified value is more than the instrument maximum of {max}.",id_ID:["Nilai yang ditentukan lebih dari maksimum instrumen yaitu {max}."],it:["Il valore specificato è superiore al massimo dello strumento: {max}."],ja:["指定された値が銘柄の最大値 {max} を超えています。"],ko:["지정값이 인스트루먼트 맥시멈인 {max} 보다 큽니다."],ms_MY:["Nilai yang ditentukan adalah lebih daripada instrumen maksimum {max}."],nl_NL:"Specified value is more than the instrument maximum of {max}.",pl:["Podana wartość nie jest wielokrotnością {max}."],pt:["O valor especificado é maior que o instrumento máximo de {max}."],ro:"Specified value is more than the instrument maximum of {max}.",ru:["Указанное значение больше допустимого максимума для {max}."],sv:["Det angivna värdet är större än instrumentets minimum av {max}."],th:["ค่าที่ระบุมากกว่าค่าสูงสุดของเครื่องมือ {max}"],tr:["Belirtilen değer, enstrümanın en fazla değerinden daha fazladır {max}."],vi:["Giá trị đã chỉ định lớn hơn giá trị tối đa của công cụ là {max}."],zh:["指定值大于商品最大值{max}。"],zh_TW:["指定值大於商品最大值{max}。"]}},53669:e=>{e.exports={
ar:["القيمة المحددة أقل من الحد الأدنى للأداة والتي تبلغ {min}."],ca_ES:["El valor especificat és més petit que el mínim de l'instrument: {min}"],cs:"Specified value is less than the instrument minimum of {min}.",de:["Der angegebene Wert ist kleiner als das Instrumentenminimum von {min}."],el:"Specified value is less than the instrument minimum of {min}.",en:"Specified value is less than the instrument minimum of {min}.",es:["El valor especificado es menor al mínimo del instrumento: {min}"],fa:"Specified value is less than the instrument minimum of {min}.",fr:["La valeur spécifiée est inférieure au minimum de {min} de l'instrument."],he_IL:["הערך שצוין הוא פחות מהמינימום של המכשיר {min}."],hu_HU:"Specified value is less than the instrument minimum of {min}.",id_ID:["Nilai yang ditentukan kurang dari minimum instrumen yaitu {min}."],it:["Il valore specificato è inferiore al minimo dello strumento: {min}."],ja:["指定された値が銘柄の最小値 {min} 未満です。"],ko:["지정값이 인스트루먼트 미니멈인 {min} 보다 작습니다."],ms_MY:["Nilai yang ditentukan adalah kurang daripada instrumen minimum {min}."],nl_NL:"Specified value is less than the instrument minimum of {min}.",pl:["Podana wartość jest mniejsza niż minimum instrumentu wynoszące {min}."],pt:["O valor especificado é maior que o instrumento máximo de {min}."],ro:"Specified value is less than the instrument minimum of {min}.",ru:["Указанное значение меньше допустимого минимума для {min}."],sv:["Det angivna värdet är mindre än instrumentets minimum av {min}."],th:["ค่าที่ระบุน้อยกว่าค่าต่ำสุดของเครื่องมือ {min}"],tr:["Belirtilen değer enstrümanın minimum değerinden küçük {min}."],vi:["Giá trị đã chỉ định nhỏ hơn giá trị tối thiểu của công cụ là {min}."],zh:["指定值小于商品最小值{min}。"],zh_TW:["指定值小於商品最小值{min}。"]}},290371:e=>{e.exports={ar:["القيمة المحددة أقل من الحد الأدنى للأداة الذي يعادل {minQty}"],ca_ES:"Specified value is less than the instrument minimum of {minQty}",cs:"Specified value is less than the instrument minimum of {minQty}",de:["Angegebener Wert ist kleiner als das Minimum des Instruments von {minQty}"],el:"Specified value is less than the instrument minimum of {minQty}",en:"Specified value is less than the instrument minimum of {minQty}",es:["El valor especificado es inferior al mínimo establecido para el instrumento que es de {minQty}"],fa:"Specified value is less than the instrument minimum of {minQty}",fr:["La valeur spécifiée est inférieure au minimum de l'instrument {minQty}"],he_IL:["הערך שצוין קטן מהמינימום של המכשיר של {minQty}"],hu_HU:"Specified value is less than the instrument minimum of {minQty}",id_ID:["Nilai yang ditentukan kurang dari kapasitas minimum instrumennya yaitu {minQty}"],it:["Il valore specificato è inferiore al minimo dello strumento ({minQty})"],ja:["指定された値が銘柄の最小値 ({minQty}) 未満です"],ko:["지정한 값이 종목의 최소값인 {minQty} 보다 작습니다"],ms_MY:["Nilai yang ditentukan adalah kurang daripada nilai minimum instrumen {minQty}"],nl_NL:"Specified value is less than the instrument minimum of {minQty}",pl:["Określona wartość jest mniejsza niż dozwolone minimum dla instrumentu wynoszące {minQty}"],
pt:["O valor especificado é menor que o mínimo de {minQty} do instrumento."],ro:"Specified value is less than the instrument minimum of {minQty}",ru:["Указанное значение меньше допустимого минимума для инструмента {minQty}"],sv:["Det specificerade värdet är mindre än instrumentminimum för {minQty}"],th:["ค่าที่ระบุน้อยกว่าค่าต่ำสุดของเครื่องมือ {minQty}"],tr:["Belirtilen değer, enstrümanın minimum {minQty} değerinden düşüktür"],vi:["Giá trị đã chỉ định nhỏ hơn giá trị tối thiểu của công cụ là {minQty}"],zh:["指定值小于商品最小值{minQty}"],zh_TW:["指定值小於商品最小值{minQty}"]}},381569:e=>{e.exports={ar:["إغلاق جزئي"],ca_ES:"Partial close",cs:"Partial close",de:["Teil-Schliessung"],el:"Partial close",en:"Partial close",es:["Cierre parcial"],fa:"Partial close",fr:["Fermeture partielle"],he_IL:["סגירה חלקית"],hu_HU:"Partial close",id_ID:["Menutup sebagian"],it:["Chiusura parziale"],ja:["部分決済"],ko:["일부 청산"],ms_MY:["Ditutup sebahagian"],nl_NL:"Partial close",pl:["Częściowe zamknięcie"],pt:["Fechamento parcial"],ro:"Partial close",ru:["Частичное закрытие"],sv:["Delvis stängning"],th:["ปิดบางส่วน"],tr:["Kısmi kapanış"],vi:["Đóng một phần"],zh:["部分平仓"],zh_TW:["部分平倉"]}},630392:e=>{e.exports={ar:["مغلق جزئياً"],ca_ES:"Partially close",cs:"Partially close",de:["Teilschliessung"],el:"Partially close",en:"Partially close",es:["Parcialmente ejecutado"],fa:"Partially close",fr:["Fermer partiellement"],he_IL:["סגירה חלקית"],hu_HU:"Partially close",id_ID:["Ditutup sebagian"],it:["Chiudi parzialmente"],ja:["部分決済"],ko:["부분 클로즈"],ms_MY:["Tutup sebahagian"],nl_NL:"Partially close",pl:["Zamknij częściowo"],pt:["Fechamento parcial"],ro:"Partially close",ru:["Частично закрыть"],sv:["Delvis stängd"],th:["ปิดบางส่วน"],tr:["Kısmen yakın"],vi:["Đóng một phần"],zh:["部分平仓"],zh_TW:["部分平倉"]}},17693:e=>{e.exports={ar:["إغلاق جزئي لـ {symbol} {quantity}"],ca_ES:"Partially close {symbol} {quantity}",cs:"Partially close {symbol} {quantity}",de:["Teilschliessung {symbol} {quantity}"],el:"Partially close {symbol} {quantity}",en:"Partially close {symbol} {quantity}",es:["Parcialmente cerrado {quantity} {symbol}"],fa:"Partially close {symbol} {quantity}",fr:["Fermer partiellement {quantity} {symbol}"],he_IL:["סגור חלקית ‎{symbol}‎ {quantity}"],hu_HU:"Partially close {symbol} {quantity}",id_ID:["Menutup sebagian {symbol} {quantity}"],it:["Chiusura parziale di {quantity}{symbol}"],ja:["分割決済 {symbol} {quantity}"],ko:["일부 청산 {symbol} {quantity}"],ms_MY:["Tutup sebahagian {symbol} {quantity}"],nl_NL:"Partially close {symbol} {quantity}",pl:["Zamknij częściowo {symbol} {quantity}"],pt:["Fechamento parcial {quantity} {symbol}"],ro:"Partially close {symbol} {quantity}",ru:["Частично закрыть позицию по {symbol}, {quantity}"],sv:["Delvis stängd {symbol} {quantity}"],th:["ปิดบางส่วน {quantity} {symbol}"],tr:["{symbol} {quantity} kısmen kapat"],vi:["Đóng một phần {symbol} {quantity}"],zh:["部分平仓{symbol}{quantity}"],zh_TW:["部分平倉{symbol}{quantity}"]}},521644:e=>{e.exports={ar:["الكمية المتبقية من المركز أقل من الحد الأدنى للأداة الذي يعادل {minQty}"],
ca_ES:"Remaining quantity of position is less than the instrument minimum of {minQty}",cs:"Remaining quantity of position is less than the instrument minimum of {minQty}",de:["Verbleibende Positionsmenge ist kleiner als das Minimum des Instruments von {minQty}"],el:"Remaining quantity of position is less than the instrument minimum of {minQty}",en:"Remaining quantity of position is less than the instrument minimum of {minQty}",es:["La cantidad restante de la posición es inferior al mínimo establecido para el instrumento que es de {minQty}"],fa:"Remaining quantity of position is less than the instrument minimum of {minQty}",fr:["La quantité restante de la position est inférieure au minimum de l'instrument {minQty}"],he_IL:["כמות הפוזיציה הנותרת קטנה מהמינימום של המכשיר של {minQty}"],hu_HU:"Remaining quantity of position is less than the instrument minimum of {minQty}",id_ID:["Kuantitas posisi yang tersisa kurang dari kapasitas minimum instrumennya yaitu {minQty}"],it:["La dimensione residua della posizione è inferiore al minimo consentito per lo strumento ({minQty})"],ja:["ポジションの残数量が銘柄の最小値 ({minQty}) 未満です"],ko:["남은 포지션 수량은 종목 최소값인 {minQty} 보다 작습니다"],ms_MY:["Kuantiti posisi yang tinggal adalah kurang daripada minimum instrumen {minQty}"],nl_NL:"Remaining quantity of position is less than the instrument minimum of {minQty}",pl:["Pozostała wielkość pozycji jest mniejsza niż dozwolone minimum dla instrumentu wynoszące {minQty}"],pt:["A quantidade restante de posição é menor que o mínimo de {minQty} do instrumento."],ro:"Remaining quantity of position is less than the instrument minimum of {minQty}",ru:["Оставшееся количество меньше допустимого минимума для инструмента {minQty}"],sv:["Resterande kvantitet av denna position är mindre än instrumentets minimum av {minQty}."],th:["จำนวนตำแหน่งคงเหลือน้อยกว่าขั้นต่ำของเครื่องมือ {minQty}"],tr:["Kalan pozisyon miktarı, enstrümanın minimum {minQty} değerinden azdır"],vi:["Số lượng vị thế còn lại nhỏ hơn mức tối thiểu của công cụ là {minQty}"],zh:["剩余仓位数量小于商品最小值{minQty}"],zh_TW:["剩餘倉位數量小於商品最小值{minQty}"]}},757077:e=>{e.exports={ar:["القيمة المحددة ليست من مضاعفات ‎{step}‎"],ca_ES:"The specified value is not a multiple of {step}",cs:"The specified value is not a multiple of {step}",de:["Der angegebene Wert ist kein Vielfaches von {step}"],el:"The specified value is not a multiple of {step}",en:"The specified value is not a multiple of {step}",es:["El valor especificado no es un múltiplo de {step}"],fa:"The specified value is not a multiple of {step}",fr:["La valeur spécifiée n'est pas un multiple de {step}"],he_IL:["הערך שצוין אינו מכפיל של {step}"],hu_HU:"The specified value is not a multiple of {step}",id_ID:["Nilai yang ditentukan bukan kelipatan dari {step}"],it:["Il valore specificato non è un multiplo di {step}"],ja:["指定された値が {step} の倍数ではありません。"],ko:["지정한 값은 {step}의 배수가 아닙니다."],ms_MY:["Nilai yang ditentukan adalah bukan {step} berganda"],nl_NL:"The specified value is not a multiple of {step}",pl:["Podana wartość nie jest wielokrotnością {step}"],
pt:["O valor especificado não é um múltiplo de {step}"],ro:"The specified value is not a multiple of {step}",ru:["Указанное значение не кратно {step}"],sv:["Det angivna värdet är inte en multipel av {step}"],th:["ค่าที่ระบุไม่ใช่ผลคูณของ {step}"],tr:["Belirtilen değer {step} ile çarpılabilen değil"],vi:["Giá trị được chỉ định không phải là bội số của {step}"],zh:["指定的值不是{step}的倍数"],zh_TW:["指定的值不是{step}的倍數"]}}}]);