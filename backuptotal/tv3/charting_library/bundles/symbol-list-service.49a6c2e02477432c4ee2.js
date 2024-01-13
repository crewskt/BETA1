(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[1026],{605011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{activeSymbolListNavigator:()=>u});var o=n(254773),s=n(336349),l=n(411589),a=n(601373),i=n(688401),r=n(706474);function*u(){const e=(0,o.eventChannel)((e=>{const t=(t,n)=>{t.target===document.body&&e(n)},n=l.createGroup({desc:"Active Symbol List Navigation"});return n.add({desc:"Select previous symbol",hotkey:38,handler:e=>t(e,"previous")}),n.add({desc:"Select previous symbol",hotkey:l.Modifiers.Shift+32,handler:e=>t(e,"previous")}),n.add({desc:"Select next symbol",hotkey:32,handler:e=>t(e,"next")}),n.add({desc:"Select next symbol",hotkey:40,handler:e=>t(e,"next")}),()=>n.destroy()}));try{for(;;){const t=yield(0,s.take)(e),n=(0,a.getGlobalActiveSymbolList)(yield(0,s.select)());if(null===n)continue;const{symbols:o}=n;if(0===o.length)continue;const l=(0,r.getSymbolFromList)(i.linking.symbol.value(),o),u=o.indexOf(l||"");switch(t){case"previous":{const e=-1===u?o.length-1:(u+o.length-1)%o.length;if((0,r.isValidSeparatorItem)(o[e])){const t=(0,r.findNextAvailableSymbol)(e,o,"previous");t&&i.linking.symbol.setValue(t);break}i.linking.symbol.setValue(o[e]);break}case"next":{const e=-1===u?0:(u+o.length+1)%o.length;if((0,r.isValidSeparatorItem)(o[e])){const t=(0,r.findNextAvailableSymbol)(e,o,"next");t&&i.linking.symbol.setValue(t);break}i.linking.symbol.setValue(o[e]);break}}}}finally{e.close()}}},2595:(e,t,n)=>{"use strict";n.r(t),n.d(t,{configureStore:()=>h});var o=n(64482),s=n(254773),l=n(691622),a=n(316230),i=n(244e3),r=n(70644);function u(e,t,n,o){return{id:e,tickerType:t,columns:n,options:o,selectedSymbols:[],sorting:null,highlightedSymbols:null,listId:null,isLoading:!1,symbolsBeforeSorting:null,sortingListId:null,scrollToId:null}}function c(e,t){if(e.length!==t.length)return!1;const n=[...e].sort(),o=[...t].sort();return(0,a.default)(n,o)}function d(e,t){return{...e,[t]:{...e[t],sorting:null,symbolsBeforeSorting:null,sortingListId:null}}}var m=n(706474);const y=(0,l.combineReducers)({positions:function(e={},t){switch(t.type){case r.UPDATE_POSITIONS:{const{symbol:n,position:o}=t;return(0,m.isEqualRecords)(e[n],o)?e:{...e,[n]:o}}case r.UPDATE_BULK_POSITIONS:{const{map:n}=t,o={...e};let s=!1;for(const[t,l]of Object.entries(n))(0,m.isEqualRecords)(e[t],l)||(s=!0,o[t]=l);return s?o:e}default:return e}},customLists:i.reducer,hotLists:(e,t)=>null,markedLists:(e,t)=>null,widgets:function(e={},t){if(i.setup.match(t)||i.insert.match(t)||i.exclude.match(t)||i.exact.match(t)||i.replace.match(t)){let n=e;for(const o of Object.values(e)){const{listId:s,sortingListId:l,symbolsBeforeSorting:a}=o;if(null!==s){if(s===l&&i.setup.match(t)){const e=t.payload.lists.find((e=>e.id===l));if(void 0!==e&&null!==a&&c(e.symbols,a))continue}n=d(e,o.id)}}return n}return function(e={},t){var n;switch(t.type){case r.INIT_WIDGET:{const{id:n,tickerType:o,columns:s,options:l}=t;return{...e,[n]:u(n,o,s,l)}}case r.UPDATE_WIDGET:{const{widgetId:o,widget:s}=t,l={...e,[o]:{...e[o],...s}
},a=e[o].tickerType,i=s.tickerType,r="short_name"===(null===(n=e[o].sorting)||void 0===n?void 0:n.column);return void 0!==i&&a!==i&&r?d(l,o):l}case r.UPDATE_WIDGET_OPTIONS:{const{widgetId:n,options:o}=t;return{...e,[n]:{...e[n],options:{...e[n].options,...o}}}}default:return e}}(e,t)},isAuthenticated:()=>!1,activeSymbolList:function(e=null,t){return t.type===r.UPDATE_ACTIVE_LIST?t.id:e}});function h(){const e=(0,s.default)();return{store:(0,o.configureStore)({reducer:y,middleware:t=>[...t(),e,null,null].filter((e=>null!==e))}),runner:e}}},215078:(e,t,n)=>{"use strict";function o(e){return t=>e+"__"+t}n.d(t,{createActionTypeFactory:()=>o})},377145:(e,t,n)=>{"use strict";function o(e,t){return e===t}function s(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,s=0;s<o;s++)if(!e(t[s],n[s]))return!1;return!0}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}n.d(t,{createSelector:()=>a});var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),s=0;s<t;s++)o[s]=arguments[s];var a=0,i=o.pop(),r=l(o),u=e.apply(void 0,[function(){return a++,i.apply(null,arguments)}].concat(n)),c=e((function(){for(var e=[],t=r.length,n=0;n<t;n++)e.push(r[n].apply(null,arguments));return u.apply(null,e)}));return c.resultFunc=i,c.dependencies=r,c.recomputations=function(){return a},c.resetRecomputations=function(){return a=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=null,l=null;return function(){return s(t,n,arguments)||(l=e.apply(null,arguments)),n=arguments,l}}))},279984:e=>{e.exports={ar:["إنشاء قائمة جديدة"],ca_ES:["Crear nova llista"],cs:"Create New List",de:["Neue Liste erstellen"],el:"Create New List",en:"Create New List",es:["Crear nueva lista"],fa:"Create New List",fr:["Créer une Nouvelle Liste"],he_IL:["צור רשימה חדשה"],hu_HU:["Új Lista Létrehozása"],id_ID:["Buat Daftar Baru"],it:["Crea nuova lista"],ja:["新規リスト作成"],ko:["새 리스트 만들기"],ms_MY:["Cipta Senarai Baru"],nl_NL:"Create New List",pl:["Utwórz nową liste"],pt:["Criar nova lista"],ro:"Create New List",ru:["Создать новый список"],sv:["Skapa ny lista"],th:["สร้างรายการใหม่"],tr:["Yeni Liste Oluştur"],vi:["Tạo Danh sách Mới"],zh:["创建新的列表"],zh_TW:["建立新清單"]}},799217:e=>{e.exports={ar:["حفظ القائمة كـ..."],ca_ES:["Desa llista com a"],cs:"Save List As",de:["Liste speichern als"],el:"Save List As",en:"Save List As",es:["Guardar lista como"],fa:"Save List As",fr:["Sauvegarder la Liste Sous"],he_IL:["שמור רשימה בשם"],hu_HU:["Lista Mentése Mint"],id_ID:["Simpan Daftar Sebagai"],it:["Salva lista come"],ja:["名前を付けてリストを保存"],ko:["리스트 다른 이름으로 저장"],ms_MY:["Simpan Senarai Sebagai"],nl_NL:"Save List As",pl:["Zapisz Listę jako"],pt:["Salvar lista como"],ro:"Save List As",ru:["Сохранить список как"],
sv:["Spara lista som"],th:["บันทึกรายการเป็น"],tr:["Listeyi Yeni Adla Sakla"],vi:["Lưu Danh sách dưới dạng"],zh:["保存列表为"],zh_TW:["儲存列表為..."]}},83796:e=>{e.exports={ar:["اسم قائمة الرموز"],ca_ES:["Nom de la llista de símbols"],cs:"Symbol list name",de:["Name der Symbolliste"],el:"Symbol list name",en:"Symbol list name",es:["Nombre de la lista de símbolos"],fa:"Symbol list name",fr:["Liste de noms des symboles"],he_IL:["שם רשימת הסימולים"],hu_HU:["Szimbólum lista neve"],id_ID:["Nama daftar simbol"],it:["Nome lista simboli"],ja:["シンボルのリスト名"],ko:["심볼 리스트 이름"],ms_MY:["Nama senarai simbol"],nl_NL:"Symbol list name",pl:["Nazwa listy symboli"],pt:["Nome na listagem de símbolos"],ro:"Symbol list name",ru:["Имя списка инструментов"],sv:["Symbolers namnlista"],th:["ชื่อรายการสัญลักษณ์"],tr:["Sembol listesin adı"],vi:["Danh sách tên Mã giao dịch"],zh:["商品列表名称"],zh_TW:["商品列表名稱"]}},33115:e=>{e.exports={ar:["حدث خطأ في قائمة المراقبة"],ca_ES:["Error en la llista de seguiment"],cs:"Watchlist error",de:["Watchlist Error"],el:"Watchlist error",en:"Watchlist error",es:["Error en la lista de seguimiento"],fa:"Watchlist error",fr:["Erreur dans la liste de surveillance"],he_IL:["שגיאת רשימת מעקב"],hu_HU:"Watchlist error",id_ID:["Daftar pantau error"],it:["Errore watchlist"],ja:["ウォッチリストエラー"],ko:["왓치리스트 에러"],ms_MY:["Kesilapan Senarai Amatan"],nl_NL:"Watchlist error",pl:["Błąd listy obserwowanych"],pt:["Erro na Lista de Observação"],ro:"Watchlist error",ru:["Ошибка списка котировок"],sv:["Bevakningslista fel"],th:["รายการเฝ้าระวังผิดพลาด"],tr:["Watchlist hatası"],vi:["Lỗi danh sách theo dõi"],zh:["自选表错误"],zh_TW:["觀察清單錯誤"]}},222045:e=>{e.exports={ar:["هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟","هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟","هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟","هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟","هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟","هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟"],ca_ES:["Realment voleu eliminar {count} símbol seleccionat?","Realment voleu eliminar {count} símbols seleccionats?"],cs:"Do you really want to delete {count} selected symbol?",de:["Möchten Sie wirklich das ausgewählte Symbol {count} löschen?","Möchten Sie wirklich das ausgewählte Symbole {count} löschen?"],el:"Do you really want to delete {count} selected symbol?",en:"Do you really want to delete {count} selected symbol?",es:["¿Realmente desea eliminar {count} símbolo seleccionado?","¿Realmente desea eliminar {count} símbolos seleccionados?"],fa:["Do you really want to delete {count} selected symbols?"],fr:["Voulez-vous vraiment supprimer {count} symbole sélectionné?","Voulez-vous vraiment supprimer {count} symboles sélectionnés?"],he_IL:["האם אתה באמת רוצה למחוק {count} סימול נבחר?","האם אתה באמת רוצה למחוק {count} סימולים נבחרים?","האם אתה באמת רוצה למחוק {count} סימולים נבחרים?","האם אתה באמת רוצה למחוק {count} סימולים נבחרים?"],hu_HU:["Do you really want to delete {count} selected symbols?"],id_ID:["Apakah anda benar-benar ingin menghapus {count} simbol yang dipilih ?"],
it:["Vuoi davvero eliminare {count} simbolo selezionato?","Vuoi davvero eliminare i {count} simboli selezionati?"],ja:["本当に選択した{count}個のシンボルを削除しますか？"],ko:["선택한 종목 {count}개를 정말로 삭제하시겠습니까?"],ms_MY:["Adakah anda pasti untuk memadamkan {count} simbol yang dipilih?"],nl_NL:"Do you really want to delete {count} selected symbol?",pl:["Czy na pewno chcesz usunąć {count} wybrany symbol?","Czy na pewno chcesz usunąć {count} wybrane symbole?","Czy na pewno chcesz usunąć {count} wybranych symboli?","Czy na pewno chcesz usunąć {count} wybranych symboli?"],pt:["Você realmente quer deletar o {count} símbolo selecionado?","Você realmente quer deletar os {count} símbolos selecionados?"],ro:"Do you really want to delete {count} selected symbol?",ru:"Do you really want to delete {count} selected symbol?",sv:["Vill du verkligen radera {count} symbol?","Vill du verkligen radera {count} symboler?"],th:["คุณต้องการลบ {count} สัญลักษณ์ที่เลือกจริง ๆ หรือไม่?"],tr:["Seçilen {count} sembolü gerçekten silmek istiyor musunuz?","Seçilen {count} sembolü gerçekten silmek istiyor musunuz?"],vi:["Bạn có thực sự muốn xóa {count} mã đã chọn?"],zh:["您真的要删除{count}个选定的商品吗？"],zh_TW:["您真的要刪除{count}個選定的商品嗎？"]}}}]);