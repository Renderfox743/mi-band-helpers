export default function(t,e,_,o,i){
    var n=$app_require$;
    !function(t,e,_,o){
        t.setTimeout;
        var i,r,a=t.setInterval,c=(t.clearTimeout,t.clearInterval),p=t.$app_require$||n;
        i={379:t=>{t.exports=function(t,e,_){
            "use strict";
            Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;
            var v=_(("@app-module/system.vibrator")),m=_(("@app-module/system.prompt"));
            function wrap(e){return e&&e.__esModule?e:{default:e}}
            var vibrator=wrap(v),prompt=wrap(m);
            e.default={
                private:{},
                vibrate(){
                    vibrator.default.vibrate({mode:"long"}); // LONG vibration
                    prompt.default.showToast({message:"Vibrated",duration:1000});
                },
                test(){
                    prompt.default.showToast({message:"Test",duration:500});
                }
            };
            const vm=e.default||t.exports,r=["public","protected","private"];
            if(vm.data&&r.some(function(t){return vm[t]}))throw new Error('页面VM对象中的属性data不可与"'+r.join(",")+'"同时存在，请使用private替换data名称');
            vm.data||(vm.data={},vm._descriptor={},r.forEach(function(t){
                let e=typeof vm[t];if("object"===e){vm.data=Object.assign(vm.data,vm[t]);
                for(const e in vm[t])vm._descriptor[e]={access:t};}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")
            }))
        }},
        920:t=>{t.exports=[[[[0,"page"]],{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"192px",height:"490px",backgroundColor:"#000000"}],[[[0,"btn"]],{width:"160px",height:"160px",backgroundColor:"#44AA44",borderRadius:"80px",justifyContent:"center",alignItems:"center"}],[[[0,"txt"]],{fontSize:"24px",color:"#FFFFFF",fontWeight:"bold"}]]},
        784:t=>{t.exports=function(t){
            const e=t||this;
            return aiot.__ce__("div",{__vm__:e,__opts__:{classList:["page"]}},[
                aiot.__ce__("div",{__vm__:e,__opts__:{classList:["btn"],events:{click:function(){e.vibrate()}}}},[
                    aiot.__ce__("text",{__vm__:e,__opts__:{classList:["txt"],value:"TAP"}})
                ])
            ])
        }},
        490:(t,e,_)=>{var i=_(920),n=_(379),r=_(784);n({},o,p),o.default.template=r,o.default.style=i,t.exports=o.default}};
        var r={};
        function t(e){var _=r[e];if(void 0!==_)return _.exports;var o=r[e]={exports:{}};return i[e](o,o.exports,t),o.exports}
        t(490)
    }(t,0,0,o)
}
