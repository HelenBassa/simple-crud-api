(()=>{var e={381:e=>{e.exports={OK:200,CREATED:201,NO_CONTENT:204,BAD_REQUEST:400,NOT_FOUND:404,INTERNAL_SERVER_ERROR:500}},250:(e,r,t)=>{const{v4:s,validate:n}=t(21),o=t(381),i=t(54);e.exports=new class{constructor(){this.persons=[]}getAllPersons(e){i({res:e,code:o.OK,body:this.persons})}getPerson({res:e,id:r}){if(n(r)){const t=this.persons.find((e=>e.id===r));i(t?{res:e,code:o.OK,body:t}:{res:e,code:o.NOT_FOUND,message:`Person with ${r} isn't exist`})}else i({res:e,code:o.BAD_REQUEST,message:`ID: ${r} - is invalid UUID`})}addPerson({res:e,person:r}){let t=s();if(r.hasOwnProperty("name")&&"string"==typeof r.name&&r.hasOwnProperty("age")&&"number"==typeof r.age&&r.hasOwnProperty("hobbies")&&Array.isArray(r.hobbies)&&(!r.hobbies.length||r.hobbies.every((e=>"string"==typeof e)))){const s={...r,id:t};return i({res:e,code:o.CREATED,body:s}),this.persons.push(s),s}i({res:e,code:o.BAD_REQUEST,message:"All fields are required, please check them:\n        NAME must be a string \n        AGE must be a number \n        HOBBIES must be an array of strings"})}editPerson({res:e,id:r,data:t}){if(n(r)){let s=this.persons.find((e=>e.id===r));if(s){if(s={...s,...t},s.hasOwnProperty("name")&&"string"==typeof s.name&&s.hasOwnProperty("age")&&"number"==typeof s.age&&s.hasOwnProperty("hobbies")&&Array.isArray(s.hobbies)&&(!s.hobbies.length||s.hobbies.every((e=>"string"==typeof e))))return this.persons=this.persons.map((e=>e.id===r?s:e)),i({res:e,code:o.OK,body:s}),s;i({res:e,code:o.BAD_REQUEST,message:"All fields are required, please check them:\n            NAME must be a string \n            AGE must be a number \n            HOBBIES must be an array of strings"})}else i({res:e,code:o.NOT_FOUND,message:`Person with ID: ${r} isn't exist`})}else i({res:e,code:o.BAD_REQUEST,message:`ID: ${r} - is invalid UUID`})}deletePerson({res:e,id:r}){n(r)?this.persons.find((e=>e.id===r))?(this.persons=this.persons.filter((e=>e.id!==r)),i({res:e,code:o.NO_CONTENT})):i({res:e,code:o.NOT_FOUND,message:`Person with ID: ${r} isn't exist`}):i({res:e,code:o.BAD_REQUEST,message:`ID: ${r} - is invalid UUID`})}}},738:(e,r,t)=>{const s=t(147),n=t(17),o=t(37);function i(e){console.log(`[dotenv][DEBUG] ${e}`)}const a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g,d=/\r\n|\n|\r/;function l(e,r){const t=Boolean(r&&r.debug),s={};return e.toString().split(d).forEach((function(e,r){const n=e.match(a);if(null!=n){const e=n[1];let r=n[2]||"";const t=r.length-1,o='"'===r[0]&&'"'===r[t];"'"===r[0]&&"'"===r[t]||o?(r=r.substring(1,t),o&&(r=r.replace(c,"\n"))):r=r.trim(),s[e]=r}else t&&i(`did not match key and value when parsing line ${r+1}: ${e}`)})),s}e.exports.config=function(e){let r=n.resolve(process.cwd(),".env"),t="utf8",a=!1;var c;e&&(null!=e.path&&(r="~"===(c=e.path)[0]?n.join(o.homedir(),c.slice(1)):c),null!=e.encoding&&(t=e.encoding),null!=e.debug&&(a=!0));try{const e=l(s.readFileSync(r,{encoding:t}),{debug:a});return Object.keys(e).forEach((function(r){Object.prototype.hasOwnProperty.call(process.env,r)?a&&i(`"${r}" is already defined in \`process.env\` and will not be overwritten`):process.env[r]=e[r]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=l},21:(e,r,t)=>{"use strict";t.r(r),t.d(r,{NIL:()=>w,parse:()=>b,stringify:()=>u,v1:()=>g,v3:()=>v,v4:()=>E,v5:()=>O,validate:()=>d,version:()=>T});const s=require("crypto");var n=t.n(s);const o=new Uint8Array(256);let i=o.length;function a(){return i>o.length-16&&(n().randomFillSync(o),i=0),o.slice(i,i+=16)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&c.test(e)},l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).substr(1));const u=function(e,r=0){const t=(l[e[r+0]]+l[e[r+1]]+l[e[r+2]]+l[e[r+3]]+"-"+l[e[r+4]]+l[e[r+5]]+"-"+l[e[r+6]]+l[e[r+7]]+"-"+l[e[r+8]]+l[e[r+9]]+"-"+l[e[r+10]]+l[e[r+11]]+l[e[r+12]]+l[e[r+13]]+l[e[r+14]]+l[e[r+15]]).toLowerCase();if(!d(t))throw TypeError("Stringified UUID is invalid");return t};let p,f,h=0,y=0;const g=function(e,r,t){let s=r&&t||0;const n=r||new Array(16);let o=(e=e||{}).node||p,i=void 0!==e.clockseq?e.clockseq:f;if(null==o||null==i){const r=e.random||(e.rng||a)();null==o&&(o=p=[1|r[0],r[1],r[2],r[3],r[4],r[5]]),null==i&&(i=f=16383&(r[6]<<8|r[7]))}let c=void 0!==e.msecs?e.msecs:Date.now(),d=void 0!==e.nsecs?e.nsecs:y+1;const l=c-h+(d-y)/1e4;if(l<0&&void 0===e.clockseq&&(i=i+1&16383),(l<0||c>h)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=c,y=d,f=i,c+=122192928e5;const g=(1e4*(268435455&c)+d)%4294967296;n[s++]=g>>>24&255,n[s++]=g>>>16&255,n[s++]=g>>>8&255,n[s++]=255&g;const b=c/4294967296*1e4&268435455;n[s++]=b>>>8&255,n[s++]=255&b,n[s++]=b>>>24&15|16,n[s++]=b>>>16&255,n[s++]=i>>>8|128,n[s++]=255&i;for(let e=0;e<6;++e)n[s+e]=o[e];return r||u(n)},b=function(e){if(!d(e))throw TypeError("Invalid UUID");let r;const t=new Uint8Array(16);return t[0]=(r=parseInt(e.slice(0,8),16))>>>24,t[1]=r>>>16&255,t[2]=r>>>8&255,t[3]=255&r,t[4]=(r=parseInt(e.slice(9,13),16))>>>8,t[5]=255&r,t[6]=(r=parseInt(e.slice(14,18),16))>>>8,t[7]=255&r,t[8]=(r=parseInt(e.slice(19,23),16))>>>8,t[9]=255&r,t[10]=(r=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=r/4294967296&255,t[12]=r>>>24&255,t[13]=r>>>16&255,t[14]=r>>>8&255,t[15]=255&r,t};function m(e,r,t){function s(e,s,n,o){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const r=[];for(let t=0;t<e.length;++t)r.push(e.charCodeAt(t));return r}(e)),"string"==typeof s&&(s=b(s)),16!==s.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+e.length);if(i.set(s),i.set(e,s.length),i=t(i),i[6]=15&i[6]|r,i[8]=63&i[8]|128,n){o=o||0;for(let e=0;e<16;++e)n[o+e]=i[e];return n}return u(i)}try{s.name=e}catch(e){}return s.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",s.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",s}const v=m("v3",48,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),n().createHash("md5").update(e).digest()})),E=function(e,r,t){const s=(e=e||{}).random||(e.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,r){t=t||0;for(let e=0;e<16;++e)r[t+e]=s[e];return r}return u(s)},O=m("v5",80,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),n().createHash("sha1").update(e).digest()})),w="00000000-0000-0000-0000-000000000000",T=function(e){if(!d(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},48:(e,r,t)=>{const s=t(250),n=t(381);e.exports=(e,r)=>{const t=e.url,o=e.url.split("/").filter((e=>!!e))[1];t===`/person/${o}`?s.deletePerson({res:r,id:o}):(r.statusCode=n.NOT_FOUND,r.write(`Cannot DELETE ${t}`),r.end())}},586:(e,r,t)=>{const s=t(250),n=t(381);e.exports=(e,r)=>{const t=e.url,o=t.split("/").filter((e=>!!e))[1];switch(t){case"/person":s.getAllPersons(r);break;case`/person/${o}`:s.getPerson({res:r,id:o});break;default:r.statusCode=n.NOT_FOUND,r.write(`Cannot GET ${t}`),r.end()}}},522:(e,r,t)=>{const s=t(250),n=t(381);e.exports=(e,r)=>{const t=e.url;if("/person"===t){const t=e.body;s.addPerson({res:r,person:t})}else r.statusCode=n.NOT_FOUND,r.write(`Cannot POST ${t}`),r.end()}},6:(e,r,t)=>{const s=t(250),n=t(381);e.exports=(e,r)=>{const t=e.url,o=e.url.split("/").filter((e=>!!e))[1];if(t===`/person/${o}`){const t=e.body;s.editPerson({res:r,id:o,data:t})}else r.statusCode=n.NOT_FOUND,r.write(`Cannot PUT ${t}`),r.end()}},934:e=>{e.exports=(e,r,t)=>{let s=[];e.on("data",(e=>{s.push(e)})),e.on("end",(()=>{e.body=Buffer.concat(s).toString(),"application/json"===e.headers["content-type"]&&(e.body=JSON.parse(e.body)),t(e,r)}))}},54:e=>{e.exports=({res:e,code:r,message:t="",body:s=""})=>{t&&(e.statusCode=r,e.write(t)),s?(e.statusCode=r,e.setHeader("Content-Type","application/json"),e.write(JSON.stringify(s))):e.statusCode=r,e.end()}},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},310:e=>{"use strict";e.exports=require("url")}},r={};function t(s){var n=r[s];if(void 0!==n)return n.exports;var o=r[s]={exports:{}};return e[s](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=t(685);t(738).config();const r=process.env.PORT||4e3;t(310);const s=t(586),n=t(522),o=t(6),i=t(48),a=t(934),c=t(381);e.createServer(((e,r)=>{switch(e.query=new URL(e.url,`http://${e.headers.host}`),e.method){case"GET":a(e,r,s);break;case"POST":a(e,r,n);break;case"PUT":a(e,r,o);break;case"DELETE":a(e,r,i);break;default:r.statusCode=c.BAD_REQUEST,r.write("No response"),r.end()}})).listen(r,(e=>{e?console.log(e):console.log(`Server is runnning on port ${r}`)}))})()})();