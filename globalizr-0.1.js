window.Globalizr = (function(window,document,undefined){
  
   var docElement = document.documentElement,
       classes = [],
       lang = '',
       version = '0.1',
       ret = {},
       d = document.domain.split('.'),
       l = d.length-1,
       s = 0,
       language = window.navigator.userLanguage || window.navigator.language;
       
   classes.push(d[l]);
   classes.push(language);
   
   if ('in,id,il,uk,nz,jp,kr,ck'.indexOf(d[l])>0){ s = -1; classes.push(d[l-1]); }
   if ((l+s) > 1) { classes.push(d[d.length-2+s]); }
   if ((l+s) > 1) { classes.push(d[d.length-3+s]); } else { classes.push('no-host'); }
   if (document.defaultCharset!=undefined) { classes.push(document.defaultCharset); } else { classes.push('no-defaultcharset'); }
   if (document.charset!=undefined) { classes.push(document.charset); } else { classes.push('no-charset'); }
   if (document.inputEncoding!=undefined) { classes.push(document.inputEncoding); } else { classes.push('no-inputencoding'); }
   
   docElement.className += classes.join(' ');
   return ret;
   
})(this,this.document);