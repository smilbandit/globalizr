window.Globalizr = (function(window,document,undefined){
  
   var docElement   = document.documentElement,
       classes      = [],
       version      = '0.2',
       ret          = {},
       domain       = document.domain.split('.'),
       domainLength = domain.length - 1,
       ccSLD        = 0,
       lang         = navigator.userLanguage || navigator.language,
       charset      = document.defaultCharset || document.charset || document.inputEncoding; 
       
   // Start the domain related code
   if (domainLength > -1) {
     
      classes.push(domain[domainLength]);
      
      // Check if this is a ccTLD uses a country code second level domain
      if ('in,id,il,uk,nz,jp,kr,ck'.indexOf(domain[domainLength]) > 0) { 
         ccSLD = -1; 
         // push the ccSLD
         classes.push(domain[domainLength-1]); 
      }

      // get ccSLD or Domain name
      if ((domainLength+ccSLD) > 0) { 
         classes.push(domain[domainLength-1+ccSLD]); 
      } else { 
         classes.push('no-domain');  // should only fire for localhost
      }

      // get Host if there isn't a ccSLD or SLD if there is
      if ((domainLength+ccSLD) > 1) { 
         classes.push(domain[domainLength-2+ccSLD]); 
      } else if (ccSLD == 0) { 
        classes.push('no-host'); 
      }

      // get Host if this ccTLD uses ccSLD's
      if ((domainLength+ccSLD) > 2) { 
         classes.push(domain[domainLength-3+ccSLD]); 
      } else if (ccSLD != 0) { 
        classes.push('no-host');
      }
   } else {
      classes.push('no-tld no-domain no-host');  // should only fire when viewing via filesystem
   }
   
   classes.push(lang, charset);
   
   docElement.className += ' ' + classes.join(' ');
   return ret;
   
})(this, this.document);