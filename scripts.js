const _0x73293=_0x3a48;(function(_0x940d12,_0x3e5392){const _0x17a17a=_0x3a48,_0x58f18a=_0x940d12();while(!![]){try{const _0xb6248c=parseInt(_0x17a17a(0xe8))/0x1*(-parseInt(_0x17a17a(0xc9))/0x2)+parseInt(_0x17a17a(0xe0))/0x3+parseInt(_0x17a17a(0xc5))/0x4+parseInt(_0x17a17a(0x104))/0x5*(parseInt(_0x17a17a(0x118))/0x6)+-parseInt(_0x17a17a(0xea))/0x7+-parseInt(_0x17a17a(0x116))/0x8*(-parseInt(_0x17a17a(0xd8))/0x9)+-parseInt(_0x17a17a(0x101))/0xa;if(_0xb6248c===_0x3e5392)break;else _0x58f18a['push'](_0x58f18a['shift']());}catch(_0x4a8e36){_0x58f18a['push'](_0x58f18a['shift']());}}}(_0x9591,0x7e25f));let saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0};function _0x9591(){const _0x4463ec=['usdtToEuro','select','.divisas','.cargar_jugadorA','overlay','CREDITOS','.cargar_jugadorB\x20+\x20.divisas','input','parse','apuestaBOutput','Fecha:\x20','_TO_','winner','saldo_jugadorB','none','487840xsySUG','currency','gameHistory','236815GRiPQw',',\x20Monto\x20Ganado:\x20','showHistorial','textContent','monedaB','remove','removeItem','apuestaA','saldoB-USDT','click','.cargar_jugadorA\x20+\x20.divisas','querySelector','stringify','execCommand','querySelectorAll','select2','show','textarea','1778584KvzOLF','display','18nzlViH','target','date','appendChild','saldoB-EURO','.fiarB','EURO','saldoA-CREDITOS','\x22\x20class=\x22img-flag\x22\x20/>\x20','innerHTML','select2:select','forEach','monedaA','checked','322436ewWGhU','getItem','saldoA-USDT','euroToUsdt','731330jDxEyf','style','addEventListener','add','change','join','Jugador\x20B','USDT','saldoB-CREDITOS','DOMContentLoaded','popup','ready','getElementById','floor','saldo_jugadorA','36TeBgGm','amountWon',',\x20Ganador:\x20Jugador\x20','onload','thumbnail','.cargar_jugadorB','body','classList','2542029dHvgSU','reiniciarHistorial','push','round','setItem','</span>','element','text','1uAVcaU','Copy','7197267HVZHKw','#monedaA','createElement','saldoA-EURO','value','.fiarA','Jugador\x20A','<span><img\x20src=\x22'];_0x9591=function(){return _0x4463ec;};return _0x9591();}function getConversionRate(_0x416336,_0x1a0775){const _0x5aa626=_0x3a48;if(_0x416336===_0x5aa626(0xd0)&&_0x1a0775==='EURO')return parseFloat(document[_0x5aa626(0xd5)]('usdtToEuro')[_0x5aa626(0xee)]);else{if(_0x416336===_0x5aa626(0xbd)&&_0x1a0775===_0x5aa626(0xd0))return parseFloat(document[_0x5aa626(0xd5)](_0x5aa626(0xc8))['value']);else{let _0xf3a517=_0x416336+_0x5aa626(0xfd)+_0x1a0775,_0x34a885={'USDT_TO_USDT':0x1,'EURO_TO_EURO':0x1,'CREDITOS_TO_EURO':1.4/0x32,'CREDITOS_TO_USDT':1.5/0x32,'USDT_TO_CREDITOS':0x32/1.5,'EURO_TO_CREDITOS':0x32/1.4};return _0x34a885[_0xf3a517]||0x1;}}}let monedaAElement=document['getElementById']('monedaA'),monedaBElement=document['getElementById'](_0x73293(0x108));$(_0x73293(0xeb))['on'](_0x73293(0xc1),calculateBets),$('#monedaB')['on']('select2:select',calculateBets);function calculateBets(){const _0x5ca0a7=_0x73293;let _0xb1ba1=parseFloat(document[_0x5ca0a7(0xd5)](_0x5ca0a7(0x10b))[_0x5ca0a7(0xee)]);if(isNaN(_0xb1ba1)||_0xb1ba1===0x0){document['getElementById']('apuestaBOutput')[_0x5ca0a7(0xee)]='';return;}let _0x117e35=monedaAElement[_0x5ca0a7(0xee)],_0x41c733=monedaBElement[_0x5ca0a7(0xee)],_0x3e7366=convertCurrency(_0xb1ba1,_0x117e35,_0x41c733);document[_0x5ca0a7(0xd5)](_0x5ca0a7(0xfb))[_0x5ca0a7(0xee)]=_0x3e7366;}document[_0x73293(0xd5)]('apuestaA')[_0x73293(0xcb)](_0x73293(0xf9),function(_0x24a0d0){const _0x485df3=_0x73293;let _0x42b708=parseFloat(_0x24a0d0['target'][_0x485df3(0xee)]);_0x42b708<0x0?(_0x24a0d0[_0x485df3(0x119)][_0x485df3(0xee)]='',alert('Introduzca\x20una\x20apuesta\x20positiva')):calculateBets();}),document['getElementById']('monedaA')['addEventListener']('change',calculateBets),document['getElementById'](_0x73293(0x108))['addEventListener'](_0x73293(0xcd),calculateBets);function convertCurrency(_0x296e3d,_0x304d1a,_0x2f60c1){const _0x5aff4b=_0x73293;let _0x5f25bd=getConversionRate(_0x304d1a,_0x2f60c1);return Math[_0x5aff4b(0xe3)](_0x296e3d*_0x5f25bd);}function getCommission(_0x596473,_0x49b85d){const _0x317f2b=_0x73293;switch(_0x49b85d){case _0x317f2b(0xd0):case'EURO':return Math[_0x317f2b(0xd6)](_0x596473*0.1);case _0x317f2b(0xf7):return calcularComisionCreditos(_0x596473);default:return 0x0;}}function calcularValor(_0x1edb54){const _0xe061ca=_0x73293,_0x526870=0x3e8,_0x52b149=0x1f4,_0x507c52=0x64,_0xd01148=0x32;if(_0x1edb54<_0x526870)return null;let _0x170ca1=Math[_0xe061ca(0xd6)]((_0x1edb54-_0x526870)/_0x52b149);return _0x507c52+_0xd01148*_0x170ca1;}function calcularComisionCreditos(_0x1dad4b){if(_0x1dad4b>=0x3e8)return calcularValor(_0x1dad4b);if(0xa<=_0x1dad4b&&_0x1dad4b<=0xe)return 0x3;if(0xf<=_0x1dad4b&&_0x1dad4b<=0x13)return 0x4;if(0x14<=_0x1dad4b&&_0x1dad4b<=0x19)return 0x5;if(0x1a<=_0x1dad4b&&_0x1dad4b<=0x23)return 0x6;if(0x24<=_0x1dad4b&&_0x1dad4b<=0x27)return 0x7;if(0x28<=_0x1dad4b&&_0x1dad4b<=0x2d)return 0x8;if(0x2e<=_0x1dad4b&&_0x1dad4b<=0x31)return 0x9;if(0x32<=_0x1dad4b&&_0x1dad4b<=0x63)return 0xa;if(0x64<=_0x1dad4b&&_0x1dad4b<=0x95)return 0x14;if(0x96<=_0x1dad4b&&_0x1dad4b<=0x1f3)return 0x1e;if(0x1f4<=_0x1dad4b&&_0x1dad4b<=0x3e7)return 0x32;else return 0x0;}function setInitialBalances(){const _0x11178c=_0x73293;let _0x4fe5a9=document[_0x11178c(0x112)](_0x11178c(0x10e)),_0x106b56=document[_0x11178c(0x112)](_0x11178c(0xf5));_0x106b56[_0x11178c(0xc2)]((_0x48ca65,_0x5ded87)=>{const _0x3d75dd=_0x11178c;let _0x5ecb2d=parseFloat(_0x48ca65['value'])||0x0,_0x77d68b=_0x4fe5a9[_0x5ded87][_0x3d75dd(0xee)];_0x5ecb2d!==0x0&&(saldo_jugadorA[_0x77d68b]?saldo_jugadorA[_0x77d68b]+=_0x5ecb2d:saldo_jugadorA[_0x77d68b]=_0x5ecb2d);});let _0x2297d6=document[_0x11178c(0x112)](_0x11178c(0xf8)),_0x3427ea=document[_0x11178c(0x112)](_0x11178c(0xdd));_0x3427ea['forEach']((_0x1d8c8c,_0x576bdb)=>{const _0xa9e57d=_0x11178c;let _0x322aa6=parseFloat(_0x1d8c8c[_0xa9e57d(0xee)])||0x0,_0x46f370=_0x2297d6[_0x576bdb][_0xa9e57d(0xee)];_0x322aa6!==0x0&&(saldo_jugadorB[_0x46f370]?saldo_jugadorB[_0x46f370]+=_0x322aa6:saldo_jugadorB[_0x46f370]=_0x322aa6);}),displayResults();}window[_0x73293(0xdb)]=function(){const _0x595de2=_0x73293;localStorage[_0x595de2(0xc6)]('usdtToEuro')&&(document['getElementById'](_0x595de2(0xf2))['value']=localStorage['getItem'](_0x595de2(0xf2))),localStorage[_0x595de2(0xc6)](_0x595de2(0xc8))&&(document['getElementById'](_0x595de2(0xc8))[_0x595de2(0xee)]=localStorage[_0x595de2(0xc6)](_0x595de2(0xc8)));};function saveToLocalStorage(){const _0x45c664=_0x73293;localStorage['setItem'](_0x45c664(0xf2),document['getElementById'](_0x45c664(0xf2))['value']),localStorage['setItem'](_0x45c664(0xc8),document[_0x45c664(0xd5)](_0x45c664(0xc8))[_0x45c664(0xee)]);}document['getElementById'](_0x73293(0xf2))[_0x73293(0xcb)](_0x73293(0xcd),saveToLocalStorage),document[_0x73293(0xd5)](_0x73293(0xc8))['addEventListener'](_0x73293(0xcd),saveToLocalStorage),document[_0x73293(0xcb)](_0x73293(0xd2),loadGameHistory);function calculatePoints(_0x4fb740,_0x3c54dc){const _0x525ac3=_0x73293;switch(_0x4fb740){case _0x525ac3(0xd0):return _0x3c54dc/1.5;case'EURO':return _0x3c54dc/1.4;case _0x525ac3(0xf7):return _0x3c54dc/0x32;default:return 0x0;}}function declareWinner(_0x811888){const _0x87dc9=_0x73293;let _0x1f1279=parseFloat(document[_0x87dc9(0xd5)](_0x87dc9(0x10b))[_0x87dc9(0xee)]),_0xd168e9=document[_0x87dc9(0x10f)](_0x87dc9(0xef))[_0x87dc9(0xc4)],_0x9ca38e=document[_0x87dc9(0x10f)](_0x87dc9(0xbc))[_0x87dc9(0xc4)];if(isNaN(_0x1f1279)||_0x1f1279===0x0){alert('Por\x20favor,\x20ingrese\x20una\x20cantidad\x20de\x20apuesta\x20para\x20el\x20jugador\x20A.');return;}let _0x43b936=document[_0x87dc9(0xd5)](_0x87dc9(0xc3))[_0x87dc9(0xee)],_0x777116=document[_0x87dc9(0xd5)](_0x87dc9(0x108))[_0x87dc9(0xee)],_0x41b9c6=convertCurrency(_0x1f1279,_0x43b936,_0x777116),_0x20864e,_0x11269b;_0x811888==='A'?(_0x11269b=getCommission(_0x1f1279,_0x43b936),_0xd168e9||saldo_jugadorA[_0x43b936]!==0x0?_0x20864e=_0x1f1279-_0x11269b:_0x20864e=_0x1f1279+_0x1f1279-_0x11269b,saldo_jugadorA[_0x43b936]+=_0x20864e,saldo_jugadorB[_0x777116]-=_0x41b9c6,updateGameHistory(_0x811888,_0x20864e,_0x43b936)):(_0x11269b=getCommission(_0x41b9c6,_0x777116),_0x9ca38e||saldo_jugadorB[_0x777116]!==0x0?_0x20864e=_0x41b9c6-_0x11269b:_0x20864e=_0x41b9c6+_0x41b9c6-_0x11269b,saldo_jugadorB[_0x777116]+=_0x20864e,saldo_jugadorA[_0x43b936]-=_0x1f1279,updateGameHistory(_0x811888,_0x20864e,_0x777116)),displayResults();}document[_0x73293(0xd5)](_0x73293(0x106))['addEventListener'](_0x73293(0x10d),openPopup),document[_0x73293(0xd5)]('reiniciarHistorial')[_0x73293(0xcb)](_0x73293(0x10d),function(){const _0x3c3174=_0x73293;localStorage[_0x3c3174(0x10a)](_0x3c3174(0x103)),displayGameHistory();}),document['getElementById'](_0x73293(0x106))[_0x73293(0xcb)](_0x73293(0x10d),function(){openPopup(),loadGameHistory();});function openPopup(){const _0x1d561b=_0x73293;document[_0x1d561b(0xd5)](_0x1d561b(0xd3))['style'][_0x1d561b(0x117)]='block',document['getElementById'](_0x1d561b(0xf6))[_0x1d561b(0xca)][_0x1d561b(0x117)]='block';}function closePopup(){const _0x1751fe=_0x73293;document['getElementById']('popup')['style']['display']=_0x1751fe(0x100),document[_0x1751fe(0xd5)](_0x1751fe(0xf6))[_0x1751fe(0xca)][_0x1751fe(0x117)]=_0x1751fe(0x100);}function updateGameHistory(_0xe9ea6b,_0x1b686f,_0x135640){const _0x4979d6=_0x73293,_0x4e6298={'date':new Date()['toLocaleString'](),'winner':_0xe9ea6b,'amountWon':_0x1b686f,'currency':_0x135640};let _0x5151e0=JSON['parse'](localStorage[_0x4979d6(0xc6)](_0x4979d6(0x103))||'[]');_0x5151e0[_0x4979d6(0xe2)](_0x4e6298),localStorage[_0x4979d6(0xe4)](_0x4979d6(0x103),JSON[_0x4979d6(0x110)](_0x5151e0)),displayGameHistory();}function displayGameHistory(){const _0x48ad34=_0x73293;let _0x239d44=JSON[_0x48ad34(0xfa)](localStorage[_0x48ad34(0xc6)](_0x48ad34(0x103))||'[]'),_0x181237=document[_0x48ad34(0xd5)]('historialPartidas');_0x181237[_0x48ad34(0xc0)]='',_0x239d44[_0x48ad34(0xc2)](_0x399b51=>{const _0x50618e=_0x48ad34;let _0x96b626=document[_0x50618e(0xec)]('li');_0x96b626['textContent']=_0x50618e(0xfc)+_0x399b51[_0x50618e(0x11a)]+_0x50618e(0xda)+_0x399b51[_0x50618e(0xfe)]+_0x50618e(0x105)+_0x399b51[_0x50618e(0xd9)]+'\x20'+_0x399b51[_0x50618e(0x102)],_0x181237[_0x50618e(0x11b)](_0x96b626);});}function loadGameHistory(){displayGameHistory();}document[_0x73293(0xd5)](_0x73293(0xe1))[_0x73293(0xcb)](_0x73293(0x10d),resetGameHistory);function resetGameHistory(){const _0x2918b6=_0x73293;localStorage[_0x2918b6(0x10a)](_0x2918b6(0x103)),displayGameHistory();}function displayResults(){const _0x458773=_0x73293;let _0xd39c0e=document[_0x458773(0x10f)](_0x458773(0xef))[_0x458773(0xc4)],_0x316972=document['querySelector'](_0x458773(0xbc))[_0x458773(0xc4)];!_0xd39c0e&&saldo_jugadorA[_0x458773(0xd0)]<0x0&&(saldo_jugadorA[_0x458773(0xd0)]=0x0),!_0xd39c0e&&saldo_jugadorA[_0x458773(0xbd)]<0x0&&(saldo_jugadorA['EURO']=0x0),!_0xd39c0e&&saldo_jugadorA['CREDITOS']<0x0&&(saldo_jugadorA['CREDITOS']=0x0),!_0x316972&&saldo_jugadorB[_0x458773(0xd0)]<0x0&&(saldo_jugadorB[_0x458773(0xd0)]=0x0),!_0x316972&&saldo_jugadorB[_0x458773(0xbd)]<0x0&&(saldo_jugadorB['EURO']=0x0),!_0x316972&&saldo_jugadorB['CREDITOS']<0x0&&(saldo_jugadorB[_0x458773(0xf7)]=0x0),document['getElementById'](_0x458773(0xc7))['textContent']=saldo_jugadorA['USDT'],document[_0x458773(0xd5)](_0x458773(0xed))[_0x458773(0x107)]=saldo_jugadorA[_0x458773(0xbd)],document[_0x458773(0xd5)](_0x458773(0xbe))[_0x458773(0x107)]=saldo_jugadorA[_0x458773(0xf7)],document['getElementById'](_0x458773(0x10c))[_0x458773(0x107)]=saldo_jugadorB[_0x458773(0xd0)],document['getElementById'](_0x458773(0x11c))[_0x458773(0x107)]=saldo_jugadorB['EURO'],document[_0x458773(0xd5)](_0x458773(0xd1))[_0x458773(0x107)]=saldo_jugadorB[_0x458773(0xf7)],localStorage[_0x458773(0xe4)](_0x458773(0xd7),JSON['stringify'](saldo_jugadorA)),localStorage['setItem'](_0x458773(0xff),JSON[_0x458773(0x110)](saldo_jugadorB));}localStorage[_0x73293(0xc6)](_0x73293(0xd7))&&(saldo_jugadorA=JSON[_0x73293(0xfa)](localStorage[_0x73293(0xc6)](_0x73293(0xd7))));localStorage['getItem']('saldo_jugadorB')&&(saldo_jugadorB=JSON[_0x73293(0xfa)](localStorage[_0x73293(0xc6)]('saldo_jugadorB')));displayResults();const CURRENCIES=['USDT',_0x73293(0xbd),_0x73293(0xf7)];function getBalanceString(_0xacf7f9,_0x574ac3){const _0x35e35e=_0x73293;return CURRENCIES['map'](_0x73e4aa=>{if(_0xacf7f9[_0x73e4aa]!==0x0)return _0x574ac3+':\x20'+_0xacf7f9[_0x73e4aa]+'\x0a\x20'+_0x73e4aa+'\x20';return'';})[_0x35e35e(0xce)]('');}function copyToClipboard(_0x35d247){const _0x26b849=_0x73293,_0x103d5d=document[_0x26b849(0xec)](_0x26b849(0x115));_0x103d5d[_0x26b849(0xee)]=_0x35d247,document[_0x26b849(0xde)]['appendChild'](_0x103d5d),_0x103d5d[_0x26b849(0xf3)](),document[_0x26b849(0x111)](_0x26b849(0xe9)),_0x103d5d[_0x26b849(0x109)](),showToast();}function _0x3a48(_0x11f3a6,_0x53081f){const _0x959163=_0x9591();return _0x3a48=function(_0x3a48db,_0x403705){_0x3a48db=_0x3a48db-0xbc;let _0x533669=_0x959163[_0x3a48db];return _0x533669;},_0x3a48(_0x11f3a6,_0x53081f);}function copyBalancesToClipboard(){const _0xdd0662=_0x73293;let _0x5959e2=getBalanceString(saldo_jugadorA,_0xdd0662(0xf0))+getBalanceString(saldo_jugadorB,_0xdd0662(0xcf));copyToClipboard(_0x5959e2);}function copyBalancesJugadorA(){const _0x26f4cb=_0x73293;let _0x5f6cda=getBalanceString(saldo_jugadorA,_0x26f4cb(0xf0));copyToClipboard(_0x5f6cda);}function copyBalancesJugadorB(){const _0x484f1e=_0x73293;let _0xb4ae38=getBalanceString(saldo_jugadorB,_0x484f1e(0xcf));copyToClipboard(_0xb4ae38);}function showToast(){const _0x3d7664=_0x73293;let _0x51b0be=document['getElementById']('toast');_0x51b0be[_0x3d7664(0xdf)][_0x3d7664(0xcc)](_0x3d7664(0x114)),setTimeout(()=>{const _0x463d30=_0x3d7664;_0x51b0be[_0x463d30(0xdf)][_0x463d30(0x109)](_0x463d30(0x114));},0xbb8);}function resetSaldoA(){saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},displayResults();}function resetSaldoB(){saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},displayResults();}function resetAll(){const _0x2fbc75=_0x73293;saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},document['getElementById'](_0x2fbc75(0xfb))['textContent']='',displayResults();}$(document)[_0x73293(0xd4)](function(){const _0x428b06=_0x73293;function _0x221575(_0xbb008a){const _0x5cea4d=_0x3a48;if(!_0xbb008a['id'])return _0xbb008a['text'];var _0x52b090=$(_0xbb008a[_0x5cea4d(0xe6)])['data'](_0x5cea4d(0xdc)),_0x47fd7b=$(_0x5cea4d(0xf1)+_0x52b090+_0x5cea4d(0xbf)+_0xbb008a[_0x5cea4d(0xe7)]+_0x5cea4d(0xe5));return _0x47fd7b;};function _0x31eaf4(_0x521e86){const _0x206d30=_0x3a48;if(!_0x521e86['id'])return _0x521e86[_0x206d30(0xe7)];var _0x4df0c4=$(_0x521e86['element'])['data'](_0x206d30(0xdc));return $('<span><img\x20src=\x22'+_0x4df0c4+_0x206d30(0xbf)+_0x521e86[_0x206d30(0xe7)]+_0x206d30(0xe5));}$(_0x428b06(0xf4))[_0x428b06(0x113)]({'templateResult':_0x221575,'templateSelection':_0x31eaf4});});