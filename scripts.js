const _0x142e0c=_0x119b;(function(_0x4fc437,_0xa18b58){const _0x239a98=_0x119b,_0x5996aa=_0x4fc437();while(!![]){try{const _0x373e99=-parseInt(_0x239a98(0x145))/0x1+-parseInt(_0x239a98(0x11c))/0x2+-parseInt(_0x239a98(0x134))/0x3*(parseInt(_0x239a98(0x150))/0x4)+-parseInt(_0x239a98(0x157))/0x5+parseInt(_0x239a98(0x15e))/0x6+parseInt(_0x239a98(0x149))/0x7*(parseInt(_0x239a98(0x138))/0x8)+parseInt(_0x239a98(0x111))/0x9*(parseInt(_0x239a98(0x11f))/0xa);if(_0x373e99===_0xa18b58)break;else _0x5996aa['push'](_0x5996aa['shift']());}catch(_0x5a24d3){_0x5996aa['push'](_0x5996aa['shift']());}}}(_0x57a0,0x74fb2));let saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0},saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0};function getConversionRate(_0x4604f0,_0x2372e2){const _0x4aa369=_0x119b;if(_0x4604f0===_0x4aa369(0x10e)&&_0x2372e2===_0x4aa369(0x160))return parseFloat(document[_0x4aa369(0x14a)]('usdtToEuro')[_0x4aa369(0x147)]);else{if(_0x4604f0==='EURO'&&_0x2372e2==='USDT')return parseFloat(document[_0x4aa369(0x14a)]('euroToUsdt')[_0x4aa369(0x147)]);else{let _0x285e77=_0x4604f0+_0x4aa369(0x13d)+_0x2372e2,_0x11524f={'USDT_TO_USDT':0x1,'EURO_TO_EURO':0x1,'CREDITOS_TO_EURO':1.4/0x32,'CREDITOS_TO_USDT':1.5/0x32,'USDT_TO_CREDITOS':0x32/1.5,'EURO_TO_CREDITOS':0x32/1.4};return _0x11524f[_0x285e77]||0x1;}}}let monedaAElement=document[_0x142e0c(0x14a)](_0x142e0c(0x151)),monedaBElement=document[_0x142e0c(0x14a)](_0x142e0c(0x107));$(_0x142e0c(0x105))['on'](_0x142e0c(0x14e),calculateBets),$(_0x142e0c(0x104))['on'](_0x142e0c(0x14e),calculateBets);function calculateBets(){const _0x70e401=_0x142e0c;let _0x467a83=parseFloat(document[_0x70e401(0x14a)]('apuestaA')[_0x70e401(0x147)]);if(isNaN(_0x467a83)||_0x467a83===0x0){document[_0x70e401(0x14a)](_0x70e401(0x164))[_0x70e401(0x147)]='';return;}let _0x4adfc0=monedaAElement['value'],_0x27e4d5=monedaBElement['value'],_0x38c6f7=convertCurrency(_0x467a83,_0x4adfc0,_0x27e4d5);document[_0x70e401(0x14a)](_0x70e401(0x164))[_0x70e401(0x147)]=_0x38c6f7;}document[_0x142e0c(0x14a)](_0x142e0c(0x13a))['addEventListener'](_0x142e0c(0x137),function(_0x11ded3){const _0x37d383=_0x142e0c;let _0x3507ae=parseFloat(_0x11ded3[_0x37d383(0x16b)][_0x37d383(0x147)]);_0x3507ae<0x0?(_0x11ded3['target'][_0x37d383(0x147)]='',alert('Introduzca\x20una\x20apuesta\x20positiva')):calculateBets();}),document[_0x142e0c(0x14a)]('monedaA')[_0x142e0c(0x10c)]('change',calculateBets),document[_0x142e0c(0x14a)](_0x142e0c(0x107))['addEventListener'](_0x142e0c(0x13b),calculateBets);function convertCurrency(_0x598d66,_0x2413fa,_0x33b91f){const _0xe1cab=_0x142e0c;let _0x48f6f7=getConversionRate(_0x2413fa,_0x33b91f);return Math[_0xe1cab(0x131)](_0x598d66*_0x48f6f7);}document[_0x142e0c(0x14a)](_0x142e0c(0x13a))[_0x142e0c(0x10c)]('input',function(){const _0x5464b0=_0x142e0c;let _0xbbdd5f=parseFloat(document[_0x5464b0(0x14a)](_0x5464b0(0x13a))[_0x5464b0(0x147)]),_0x271945=document['getElementById'](_0x5464b0(0x151))[_0x5464b0(0x147)],_0x46d8be=getCommission(_0xbbdd5f,_0x271945);document[_0x5464b0(0x14a)](_0x5464b0(0x15f))[_0x5464b0(0x15c)]='Comisión:\x20'+_0x46d8be,document['getElementById'](_0x5464b0(0x13a))[_0x5464b0(0x147)]!==''?document[_0x5464b0(0x14a)]('comisionA')[_0x5464b0(0x148)][_0x5464b0(0x16c)]='block':document[_0x5464b0(0x14a)](_0x5464b0(0x15f))[_0x5464b0(0x148)]['display']=_0x5464b0(0x161);});function getCommission(_0x4512c6,_0x246c65){const _0xc83a8c=_0x142e0c;switch(_0x246c65){case _0xc83a8c(0x10e):case _0xc83a8c(0x160):return Math[_0xc83a8c(0x13c)](_0x4512c6*0.1);case _0xc83a8c(0x13e):return calcularComisionCreditos(_0x4512c6);default:return 0x0;}}function calcularValor(_0x383547){const _0x3c8d88=_0x142e0c,_0x5156b8=0x3e8,_0x4f3747=0x1f4,_0x52c29e=0x64,_0x38b96e=0x32;if(_0x383547<_0x5156b8)return null;let _0x4a4f33=Math[_0x3c8d88(0x13c)]((_0x383547-_0x5156b8)/_0x4f3747);return _0x52c29e+_0x38b96e*_0x4a4f33;}function calcularComisionCreditos(_0x41c102){if(_0x41c102>=0x3e8)return calcularValor(_0x41c102);if(0xa<=_0x41c102&&_0x41c102<=0xe)return 0x3;if(0xf<=_0x41c102&&_0x41c102<=0x13)return 0x4;if(0x14<=_0x41c102&&_0x41c102<=0x19)return 0x5;if(0x1a<=_0x41c102&&_0x41c102<=0x23)return 0x6;if(0x24<=_0x41c102&&_0x41c102<=0x27)return 0x7;if(0x28<=_0x41c102&&_0x41c102<=0x2d)return 0x8;if(0x2e<=_0x41c102&&_0x41c102<=0x31)return 0x9;if(0x32<=_0x41c102&&_0x41c102<=0x63)return 0xa;if(0x64<=_0x41c102&&_0x41c102<=0x95)return 0x14;if(0x96<=_0x41c102&&_0x41c102<=0x1f3)return 0x1e;if(0x1f4<=_0x41c102&&_0x41c102<=0x3e7)return 0x32;else return 0x0;}function setInitialBalances(){const _0x188f78=_0x142e0c;let _0x3fe815=document[_0x188f78(0x169)](_0x188f78(0x12e)),_0x29d698=document[_0x188f78(0x169)](_0x188f78(0x12a));_0x29d698['forEach']((_0x776e40,_0x43b185)=>{const _0x262434=_0x188f78;let _0x505fd2=parseFloat(_0x776e40[_0x262434(0x147)])||0x0,_0x658ede=_0x3fe815[_0x43b185][_0x262434(0x147)];_0x505fd2!==0x0&&(saldo_jugadorA[_0x658ede]?saldo_jugadorA[_0x658ede]+=_0x505fd2:saldo_jugadorA[_0x658ede]=_0x505fd2);});let _0x59d440=document[_0x188f78(0x169)]('.cargar_jugadorB\x20+\x20.divisas'),_0x2ea930=document[_0x188f78(0x169)](_0x188f78(0x10a));_0x2ea930[_0x188f78(0x11a)]((_0x25008c,_0x3f5f5b)=>{const _0x115f77=_0x188f78;let _0x1476fe=parseFloat(_0x25008c[_0x115f77(0x147)])||0x0,_0x370542=_0x59d440[_0x3f5f5b][_0x115f77(0x147)];_0x1476fe!==0x0&&(saldo_jugadorB[_0x370542]?saldo_jugadorB[_0x370542]+=_0x1476fe:saldo_jugadorB[_0x370542]=_0x1476fe);}),displayResults();}window[_0x142e0c(0x118)]=function(){const _0x77754b=_0x142e0c;localStorage[_0x77754b(0x15a)](_0x77754b(0x159))&&(document[_0x77754b(0x14a)](_0x77754b(0x159))['value']=localStorage[_0x77754b(0x15a)](_0x77754b(0x159))),localStorage[_0x77754b(0x15a)](_0x77754b(0x14c))&&(document[_0x77754b(0x14a)](_0x77754b(0x14c))[_0x77754b(0x147)]=localStorage['getItem']('euroToUsdt'));};function saveToLocalStorage(){const _0x25298c=_0x142e0c;localStorage[_0x25298c(0x11d)](_0x25298c(0x159),document[_0x25298c(0x14a)](_0x25298c(0x159))[_0x25298c(0x147)]),localStorage[_0x25298c(0x11d)](_0x25298c(0x14c),document[_0x25298c(0x14a)]('euroToUsdt')['value']);}document[_0x142e0c(0x14a)](_0x142e0c(0x159))[_0x142e0c(0x10c)]('change',saveToLocalStorage),document[_0x142e0c(0x14a)](_0x142e0c(0x14c))[_0x142e0c(0x10c)]('change',saveToLocalStorage),document[_0x142e0c(0x10c)]('DOMContentLoaded',loadGameHistory);function calculatePoints(_0x21c1a0,_0x56653b){const _0x1f3a53=_0x142e0c;switch(_0x21c1a0){case _0x1f3a53(0x10e):return _0x56653b/1.5;case'EURO':return _0x56653b/1.4;case _0x1f3a53(0x13e):return _0x56653b/0x32;default:return 0x0;}}function calculatePoints(_0x5009c5,_0x58c0ca){const _0x248379=_0x142e0c;switch(_0x5009c5){case _0x248379(0x10e):return Math['round'](_0x58c0ca/1.5);case _0x248379(0x160):return Math[_0x248379(0x131)](_0x58c0ca/1.4);case _0x248379(0x13e):return Math[_0x248379(0x131)](_0x58c0ca/0x32);default:return 0x0;}}localStorage[_0x142e0c(0x15a)](_0x142e0c(0x162))&&(saldo_jugadorA['PUNTOS']=JSON[_0x142e0c(0x166)](localStorage['getItem'](_0x142e0c(0x162))));function _0x57a0(){const _0x2af030=['querySelector','euroToUsdt','click','select2:select','saldo_jugadorB','8xahxqK','monedaA','puntosA','.fiarB','thumbnail','Por\x20favor,\x20ingrese\x20una\x20cantidad\x20de\x20apuesta\x20para\x20el\x20jugador\x20A.','puntos_jugadorB','4663500DrqpeM','Jugador\x20B','usdtToEuro','getItem','historialPuntos','textContent','\x22\x20class=\x22img-flag\x22\x20/>\x20','728652VpWmbf','comisionA','EURO','none','puntos_jugadorA','select','apuestaBOutput','PUNTOS','parse','.divisas','winner','querySelectorAll','classList','target','display','#monedaB','#monedaA','appendChild','monedaB','block','amountWon','.cargar_jugadorB','data','addEventListener','element','USDT','<span><img\x20src=\x22','currency','9DHNDGL','showHistorial','popup','saldoA-CREDITOS','stringify','saldoA-EURO','puntosB','onload','add','forEach','remove','1042106CLwROM','setItem','ready','20274070aGWgDL','removeItem','reiniciarPuntos','toast',',\x20Monto\x20Ganado:\x20','</span>','checked','saldo_jugadorA','createElement','overlay','select2','.cargar_jugadorA','text','toLocaleString','push','.cargar_jugadorA\x20+\x20.divisas','Jugador\x20A','saldoA-USDT','round','historialPartidas',',\x20Ganador:\x20Jugador\x20','891975JsRZkl','execCommand','reiniciarHistorial','input','5608648sKNvDr','innerHTML','apuestaA','change','floor','_TO_','CREDITOS','Copy','jugador','show','.fiarA','div','DOMContentLoaded','322373rCyGhH','gameHistory','value','style','7NZdgSS','getElementById'];_0x57a0=function(){return _0x2af030;};return _0x57a0();}localStorage[_0x142e0c(0x15a)](_0x142e0c(0x156))&&(saldo_jugadorB['PUNTOS']=JSON[_0x142e0c(0x166)](localStorage[_0x142e0c(0x15a)](_0x142e0c(0x156))));function declareWinner(_0x58ebee){const _0x557230=_0x142e0c;let _0x550db8=parseFloat(document['getElementById'](_0x557230(0x13a))[_0x557230(0x147)]),_0x14394d=document[_0x557230(0x14b)](_0x557230(0x142))[_0x557230(0x125)],_0x360e2c=document[_0x557230(0x14b)](_0x557230(0x153))['checked'];if(isNaN(_0x550db8)||_0x550db8===0x0){alert(_0x557230(0x155));return;}let _0x2050f5=document[_0x557230(0x14a)](_0x557230(0x151))[_0x557230(0x147)],_0xa6d2ba=document[_0x557230(0x14a)](_0x557230(0x107))[_0x557230(0x147)],_0x54e3e3=convertCurrency(_0x550db8,_0x2050f5,_0xa6d2ba),_0x54fd79,_0x83a429,_0x68c6b8=calculatePoints(_0x2050f5,_0x550db8);if(!saldo_jugadorA[_0x557230(0x165)])saldo_jugadorA[_0x557230(0x165)]=0x0;saldo_jugadorA['PUNTOS']+=_0x68c6b8;if(!saldo_jugadorB[_0x557230(0x165)])saldo_jugadorB['PUNTOS']=0x0;saldo_jugadorB['PUNTOS']+=_0x68c6b8,localStorage[_0x557230(0x11d)](_0x557230(0x162),JSON['stringify'](saldo_jugadorA[_0x557230(0x165)])),localStorage[_0x557230(0x11d)](_0x557230(0x156),JSON[_0x557230(0x115)](saldo_jugadorB[_0x557230(0x165)])),_0x58ebee==='A'?(_0x83a429=getCommission(_0x550db8,_0x2050f5),_0x14394d||saldo_jugadorA[_0x2050f5]!==0x0?_0x54fd79=_0x550db8-_0x83a429:_0x54fd79=_0x550db8+_0x550db8-_0x83a429,saldo_jugadorA[_0x2050f5]+=_0x54fd79,saldo_jugadorB[_0xa6d2ba]-=_0x54e3e3,updateGameHistory(_0x58ebee,_0x54fd79,_0x2050f5)):(_0x83a429=getCommission(_0x54e3e3,_0xa6d2ba),_0x360e2c||saldo_jugadorB[_0xa6d2ba]!==0x0?_0x54fd79=_0x54e3e3-_0x83a429:_0x54fd79=_0x54e3e3+_0x54e3e3-_0x83a429,saldo_jugadorB[_0xa6d2ba]+=_0x54fd79,saldo_jugadorA[_0x2050f5]-=_0x550db8,updateGameHistory(_0x58ebee,_0x54fd79,_0xa6d2ba)),displayResults(),document[_0x557230(0x14a)](_0x557230(0x152))[_0x557230(0x15c)]=saldo_jugadorA['PUNTOS']||0x0,document[_0x557230(0x14a)]('puntosB')[_0x557230(0x15c)]=saldo_jugadorB[_0x557230(0x165)]||0x0;}document[_0x142e0c(0x10c)](_0x142e0c(0x144),function(){const _0x2f6a3f=_0x142e0c;document['getElementById'](_0x2f6a3f(0x152))['textContent']=saldo_jugadorA['PUNTOS']||0x0,document[_0x2f6a3f(0x14a)](_0x2f6a3f(0x117))[_0x2f6a3f(0x15c)]=saldo_jugadorB[_0x2f6a3f(0x165)]||0x0;}),document[_0x142e0c(0x14a)](_0x142e0c(0x112))[_0x142e0c(0x10c)](_0x142e0c(0x14d),openPopup),document['getElementById'](_0x142e0c(0x136))[_0x142e0c(0x10c)](_0x142e0c(0x14d),function(){const _0x3d9b0a=_0x142e0c;localStorage[_0x3d9b0a(0x120)](_0x3d9b0a(0x146)),displayGameHistory();}),document[_0x142e0c(0x14a)]('showHistorial')[_0x142e0c(0x10c)](_0x142e0c(0x14d),function(){openPopup(),loadGameHistory();});function openPopup(){const _0x1a146b=_0x142e0c;document[_0x1a146b(0x14a)](_0x1a146b(0x113))[_0x1a146b(0x148)]['display']=_0x1a146b(0x108),document['getElementById'](_0x1a146b(0x128))[_0x1a146b(0x148)][_0x1a146b(0x16c)]=_0x1a146b(0x108);}function closePopup(){const _0x1fdb0a=_0x142e0c;document['getElementById'](_0x1fdb0a(0x113))['style'][_0x1fdb0a(0x16c)]=_0x1fdb0a(0x161),document[_0x1fdb0a(0x14a)](_0x1fdb0a(0x128))['style'][_0x1fdb0a(0x16c)]=_0x1fdb0a(0x161);}function updateGameHistory(_0x574120,_0xfa570f,_0x5693db){const _0x391756=_0x142e0c,_0x468cdf={'date':new Date()[_0x391756(0x12c)](),'winner':_0x574120,'amountWon':_0xfa570f,'currency':_0x5693db};let _0xa6eeea=JSON[_0x391756(0x166)](localStorage[_0x391756(0x15a)](_0x391756(0x146))||'[]');_0xa6eeea[_0x391756(0x12d)](_0x468cdf),localStorage['setItem']('gameHistory',JSON[_0x391756(0x115)](_0xa6eeea)),displayGameHistory();}function displayGameHistory(){const _0x436950=_0x142e0c;let _0x1f38fe=JSON['parse'](localStorage[_0x436950(0x15a)]('gameHistory')||'[]'),_0xdb50b3=document[_0x436950(0x14a)](_0x436950(0x132));_0xdb50b3[_0x436950(0x139)]='',_0x1f38fe[_0x436950(0x11a)](_0x3c511f=>{const _0x6fd340=_0x436950;let _0x4264af=document[_0x6fd340(0x127)]('li');_0x4264af[_0x6fd340(0x15c)]='Fecha:\x20'+_0x3c511f['date']+_0x6fd340(0x133)+_0x3c511f[_0x6fd340(0x168)]+_0x6fd340(0x123)+_0x3c511f[_0x6fd340(0x109)]+'\x20'+_0x3c511f[_0x6fd340(0x110)],_0xdb50b3['appendChild'](_0x4264af);});}function loadGameHistory(){displayGameHistory();}document[_0x142e0c(0x14a)](_0x142e0c(0x136))[_0x142e0c(0x10c)](_0x142e0c(0x14d),resetGameHistory);function resetGameHistory(){const _0xb511c8=_0x142e0c;localStorage['removeItem'](_0xb511c8(0x146)),displayGameHistory();}function resetHistorialPuntos(){const _0x274b0b=_0x142e0c;localStorage[_0x274b0b(0x120)](_0x274b0b(0x15b)),document[_0x274b0b(0x14a)](_0x274b0b(0x15b))[_0x274b0b(0x139)]='';}document[_0x142e0c(0x14a)](_0x142e0c(0x121))[_0x142e0c(0x10c)](_0x142e0c(0x14d),resetHistorialPuntos);function displayResults(){const _0x25d34f=_0x142e0c;let _0x35c909=document[_0x25d34f(0x14b)](_0x25d34f(0x142))['checked'],_0xf06f96=document[_0x25d34f(0x14b)](_0x25d34f(0x153))[_0x25d34f(0x125)];!_0x35c909&&saldo_jugadorA[_0x25d34f(0x10e)]<0x0&&(saldo_jugadorA[_0x25d34f(0x10e)]=0x0),!_0x35c909&&saldo_jugadorA[_0x25d34f(0x160)]<0x0&&(saldo_jugadorA[_0x25d34f(0x160)]=0x0),!_0x35c909&&saldo_jugadorA[_0x25d34f(0x13e)]<0x0&&(saldo_jugadorA[_0x25d34f(0x13e)]=0x0),!_0xf06f96&&saldo_jugadorB[_0x25d34f(0x10e)]<0x0&&(saldo_jugadorB[_0x25d34f(0x10e)]=0x0),!_0xf06f96&&saldo_jugadorB[_0x25d34f(0x160)]<0x0&&(saldo_jugadorB[_0x25d34f(0x160)]=0x0),!_0xf06f96&&saldo_jugadorB[_0x25d34f(0x13e)]<0x0&&(saldo_jugadorB['CREDITOS']=0x0),document['getElementById'](_0x25d34f(0x130))[_0x25d34f(0x15c)]=saldo_jugadorA[_0x25d34f(0x10e)],document[_0x25d34f(0x14a)](_0x25d34f(0x116))[_0x25d34f(0x15c)]=saldo_jugadorA[_0x25d34f(0x160)],document['getElementById'](_0x25d34f(0x114))['textContent']=saldo_jugadorA[_0x25d34f(0x13e)],document[_0x25d34f(0x14a)]('saldoB-USDT')[_0x25d34f(0x15c)]=saldo_jugadorB[_0x25d34f(0x10e)],document[_0x25d34f(0x14a)]('saldoB-EURO')[_0x25d34f(0x15c)]=saldo_jugadorB['EURO'],document[_0x25d34f(0x14a)]('saldoB-CREDITOS')['textContent']=saldo_jugadorB[_0x25d34f(0x13e)],localStorage[_0x25d34f(0x11d)](_0x25d34f(0x126),JSON[_0x25d34f(0x115)](saldo_jugadorA)),localStorage['setItem'](_0x25d34f(0x14f),JSON[_0x25d34f(0x115)](saldo_jugadorB));}localStorage[_0x142e0c(0x15a)]('saldo_jugadorA')&&(saldo_jugadorA=JSON[_0x142e0c(0x166)](localStorage[_0x142e0c(0x15a)](_0x142e0c(0x126))));localStorage[_0x142e0c(0x15a)](_0x142e0c(0x14f))&&(saldo_jugadorB=JSON['parse'](localStorage[_0x142e0c(0x15a)]('saldo_jugadorB')));displayResults();const CURRENCIES=['USDT',_0x142e0c(0x160),_0x142e0c(0x13e)];function getBalanceString(_0x7db03e,_0x457dc6){return CURRENCIES['map'](_0xcd24ed=>{if(_0x7db03e[_0xcd24ed]!==0x0)return _0x457dc6+':\x20'+_0x7db03e[_0xcd24ed]+'\x0a\x20'+_0xcd24ed+'\x20';return'';})['join']('');}function _0x119b(_0xb92429,_0x262806){const _0x57a022=_0x57a0();return _0x119b=function(_0x119b20,_0x3c8035){_0x119b20=_0x119b20-0x104;let _0x10ca57=_0x57a022[_0x119b20];return _0x10ca57;},_0x119b(_0xb92429,_0x262806);}function copyToClipboard(_0x28b87d){const _0x2a264e=_0x142e0c,_0x406901=document[_0x2a264e(0x127)]('textarea');_0x406901[_0x2a264e(0x147)]=_0x28b87d,document['body'][_0x2a264e(0x106)](_0x406901),_0x406901[_0x2a264e(0x163)](),document[_0x2a264e(0x135)](_0x2a264e(0x13f)),_0x406901[_0x2a264e(0x11b)](),showToast();}function copyBalancesToClipboard(){const _0x3c98b7=_0x142e0c;let _0x4fa0dc=getBalanceString(saldo_jugadorA,_0x3c98b7(0x12f))+getBalanceString(saldo_jugadorB,_0x3c98b7(0x158));copyToClipboard(_0x4fa0dc);}function copyBalancesJugadorA(){let _0x5c70b4=getBalanceString(saldo_jugadorA,'Jugador\x20A');copyToClipboard(_0x5c70b4);}function copyBalancesJugadorB(){const _0x3b7616=_0x142e0c;let _0x4fdcc1=getBalanceString(saldo_jugadorB,_0x3b7616(0x158));copyToClipboard(_0x4fdcc1);}function showToast(){const _0x6da2e0=_0x142e0c;let _0x266f44=document['getElementById'](_0x6da2e0(0x122));_0x266f44[_0x6da2e0(0x16a)][_0x6da2e0(0x119)](_0x6da2e0(0x141)),setTimeout(()=>{const _0x473521=_0x6da2e0;_0x266f44[_0x473521(0x16a)][_0x473521(0x11b)](_0x473521(0x141));},0xbb8);}function resetSaldoA(){let _0xffdce=saldo_jugadorA['PUNTOS'];saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0,'PUNTOS':_0xffdce},displayResults();}function resetSaldoB(){const _0x234064=_0x142e0c;let _0x2b4b57=saldo_jugadorB[_0x234064(0x165)];saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0,'PUNTOS':_0x2b4b57},displayResults();}function resetAll(){const _0x276d5e=_0x142e0c;let _0x39fae7=saldo_jugadorA[_0x276d5e(0x165)],_0x52c995=saldo_jugadorB['PUNTOS'];saldo_jugadorA={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0,'PUNTOS':_0x39fae7},saldo_jugadorB={'USDT':0x0,'EURO':0x0,'CREDITOS':0x0,'PUNTOS':_0x52c995},document[_0x276d5e(0x14a)]('apuestaBOutput')[_0x276d5e(0x15c)]='',displayResults();}function resetPuntosA(){const _0x198bf7=_0x142e0c;let _0x1dd332=saldo_jugadorA[_0x198bf7(0x165)];updateHistorialPuntos('A',_0x1dd332),saldo_jugadorA[_0x198bf7(0x165)]=0x0,document[_0x198bf7(0x14a)](_0x198bf7(0x152))[_0x198bf7(0x15c)]=0x0;}function resetPuntosB(){const _0x13eb8c=_0x142e0c;let _0x43963d=saldo_jugadorB['PUNTOS'];updateHistorialPuntos('B',_0x43963d),saldo_jugadorB[_0x13eb8c(0x165)]=0x0,document[_0x13eb8c(0x14a)]('puntosB')[_0x13eb8c(0x15c)]=0x0;}function resetAllPuntos(){const _0x26317c=_0x142e0c;let _0x426735=saldo_jugadorA[_0x26317c(0x165)]||saldo_jugadorB[_0x26317c(0x165)];updateHistorialPuntos('A',_0x426735),updateHistorialPuntos('B',_0x426735),saldo_jugadorA[_0x26317c(0x165)]=0x0,saldo_jugadorB[_0x26317c(0x165)]=0x0,document[_0x26317c(0x14a)](_0x26317c(0x152))[_0x26317c(0x15c)]=0x0,document[_0x26317c(0x14a)](_0x26317c(0x117))[_0x26317c(0x15c)]=0x0;}function updateHistorialPuntos(_0x4dd0cd,_0x38b976){const _0x3940e3=_0x142e0c;let _0x36a5fb=JSON[_0x3940e3(0x166)](localStorage[_0x3940e3(0x15a)](_0x3940e3(0x15b))||'[]');_0x36a5fb[_0x3940e3(0x12d)]({'jugador':_0x4dd0cd,'puntos':_0x38b976,'fecha':new Date()[_0x3940e3(0x12c)]()}),localStorage[_0x3940e3(0x11d)](_0x3940e3(0x15b),JSON[_0x3940e3(0x115)](_0x36a5fb)),displayHistorialPuntos();}function displayHistorialPuntos(){const _0x19c157=_0x142e0c;let _0x7455b1=JSON[_0x19c157(0x166)](localStorage[_0x19c157(0x15a)](_0x19c157(0x15b))||'[]'),_0x46b8c9=document[_0x19c157(0x14a)](_0x19c157(0x15b));_0x46b8c9[_0x19c157(0x139)]='',_0x7455b1[_0x19c157(0x11a)](_0x3944fe=>{const _0x58bc1c=_0x19c157;let _0x585c09=document['createElement'](_0x58bc1c(0x143));_0x585c09[_0x58bc1c(0x15c)]='Jugador\x20'+_0x3944fe[_0x58bc1c(0x140)]+':\x20'+_0x3944fe['puntos']+'\x20puntos\x20-\x20'+_0x3944fe['fecha'],_0x46b8c9[_0x58bc1c(0x106)](_0x585c09);});}document['addEventListener']('DOMContentLoaded',displayHistorialPuntos),$(document)[_0x142e0c(0x11e)](function(){const _0x1cc70a=_0x142e0c;function _0xfcce47(_0x31ad7f){const _0x19aa3f=_0x119b;if(!_0x31ad7f['id'])return _0x31ad7f[_0x19aa3f(0x12b)];var _0x47943d=$(_0x31ad7f[_0x19aa3f(0x10d)])[_0x19aa3f(0x10b)](_0x19aa3f(0x154)),_0x7bfd0e=$(_0x19aa3f(0x10f)+_0x47943d+'\x22\x20class=\x22img-flag\x22\x20/>\x20'+_0x31ad7f['text']+_0x19aa3f(0x124));return _0x7bfd0e;};function _0x22f0eb(_0x28e21e){const _0x17fae6=_0x119b;if(!_0x28e21e['id'])return _0x28e21e[_0x17fae6(0x12b)];var _0x34a065=$(_0x28e21e[_0x17fae6(0x10d)])[_0x17fae6(0x10b)](_0x17fae6(0x154));return $(_0x17fae6(0x10f)+_0x34a065+_0x17fae6(0x15d)+_0x28e21e[_0x17fae6(0x12b)]+_0x17fae6(0x124));}$(_0x1cc70a(0x167))[_0x1cc70a(0x129)]({'templateResult':_0xfcce47,'templateSelection':_0x22f0eb});});