"use strict";(self["webpackChunkvue_tilda"]=self["webpackChunkvue_tilda"]||[]).push([[844],{1844:function(e,t,o){o.r(t),o.d(t,{default:function(){return S}});var r=o(6252);function c(e,t,o,c,s,i){const n=(0,r.up)("header-main"),l=(0,r.up)("projects-header"),a=(0,r.up)("projects-list");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n),(0,r.Wm)(l,{onAddProject:i.addNewProject},null,8,["onAddProject"]),(0,r.Wm)(a,{projects:s.allProjects,onRemoveProject:i.removeProject},null,8,["projects","onRemoveProject"])],64)}o(7658);var s=o(3274),i=o(5467);const n={class:"projects-header"},l=(0,r._)("div",{class:"projects-header__left"},[(0,r._)("h5",{class:"left-title"},"Мои сайты:")],-1),a={class:"projects-header__right"},d=(0,r._)("span",{class:"add-project__icon"},[(0,r._)("img",{src:i,alt:"add-icon"})],-1),p=(0,r._)("span",{class:"add-project__text"},"Создать новый сайт",-1),j=[d,p];function m(e,t,o,c,s,i){return(0,r.wg)(),(0,r.iD)("div",n,[l,(0,r._)("div",a,[(0,r._)("button",{class:"add-project",onClick:t[0]||(t[0]=(...e)=>i.addNewProject&&i.addNewProject(...e))},j)])])}var u={name:"ProjectsHeader",methods:{addNewProject(){this.$emit("addProject")}}},_=o(3744);const h=(0,_.Z)(u,[["render",m]]);var v=h;const P={key:0,class:"projects list-unstyled"},w=(0,r._)("li",{class:"projects__empty"},null,-1),g={key:1,class:"empty-projects"};function M(e,t,o,c,s,i){const n=(0,r.up)("project-card");return o.projects.length?((0,r.wg)(),(0,r.iD)("ul",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.projects,((e,t)=>((0,r.wg)(),(0,r.j4)(n,{"index-project":t+1,key:e.id,project:e,onRemoveProject:i.removeProject},null,8,["index-project","project","onRemoveProject"])))),128)),w])):((0,r.wg)(),(0,r.iD)("h3",g,"Добавьте ваш первый сайт."))}var f=o(3577),k=o(9963);const y={class:"project-item__content"},b={class:"content-footer"},x=(0,r._)("svg",{class:"icon",width:"24",height:"24",role:"img"},[(0,r._)("use",{href:"#edit-icon"})],-1),C=(0,r._)("span",{class:"text"},"Редактировать сайт",-1),D=(0,r._)("svg",{class:"icon",width:"14",height:"14",role:"img"},[(0,r._)("use",{"xlink:href":"#external-icon"})],-1),$=(0,r._)("span",{class:"text"},"Открыть сайт",-1),N=[D,$],Z=(0,r._)("svg",{id:"more-card-options",class:"icon",width:"24",height:"24",role:"img"},[(0,r._)("use",{href:"#more-icon"})],-1),H=[Z];function O(e,t,o,c,s,i){const n=(0,r.up)("router-link"),l=(0,r.up)("project-card-menu");return(0,r.wg)(),(0,r.iD)("li",{class:"project-item",onClick:t[3]||(t[3]=t=>e.$router.push(`/project/${o.project.id}`))},[(0,r._)("div",y,[(0,r.Wm)(n,{to:`/project/${o.project.id}`,class:"content-header"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,f.zw)(o.project.title+" "+o.project.id),1)])),_:1},8,["to"]),(0,r._)("div",b,[(0,r.Wm)(n,{to:`/project/${o.project.id}`,class:"content-footer__edit"},{default:(0,r.w5)((()=>[x,C])),_:1},8,["to"]),(0,r._)("button",{onClick:t[0]||(t[0]=(0,k.iM)((()=>{}),["stop"])),class:"content-footer__visit"},N)]),(0,r._)("button",{onClick:t[1]||(t[1]=(0,k.iM)(((...e)=>i.showModal&&i.showModal(...e)),["stop"])),class:"project-item__more"},H),(0,r.Wm)(l,{"modal-open":s.modalVisible,"onUpdate:modalOpen":t[2]||(t[2]=e=>s.modalVisible=e),"index-project":o.indexProject,onRemoveProject:i.removeProject},null,8,["modal-open","index-project","onRemoveProject"])])])}const R=(0,r._)("h4",{class:"moreModal-title"},"Настройки сайта",-1),W={class:"moreModal-list list-unstyled"},V=(0,r._)("li",{class:"moreModal-list__item"},[(0,r._)("button",{class:"item-button"},"Переименовать")],-1),A={class:"moreModal-list__item"};function Y(e,t,o,c,s,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o.modalOpen?((0,r.wg)(),(0,r.iD)("div",{key:0,onClick:t[0]||(t[0]=(0,k.iM)(((...e)=>i.hideModal&&i.hideModal(...e)),["stop"])),class:"overlay"})):(0,r.kq)("",!0),o.modalOpen?((0,r.wg)(),(0,r.iD)("div",{key:1,onClick:t[2]||(t[2]=(0,k.iM)((()=>{}),["stop"])),class:"moreModal"},[R,(0,r._)("ul",W,[V,(0,r._)("li",A,[(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>i.removeProject&&i.removeProject(...e)),class:"item-button"},"Удалить")])])])):(0,r.kq)("",!0)],64)}var q={name:"ProjectCardMenu",emits:["remove-project"],props:{indexProject:Number,modalOpen:{type:Boolean,default:!1}},methods:{hideModal(){this.$emit("update:modalOpen",!1)},removeProject(){this.$emit("remove-project",this.indexProject)}}};const L=(0,_.Z)(q,[["render",Y]]);var U=L,z={name:"ProjectCard",emits:["remove-project"],components:{ProjectCardMenu:U},props:{indexProject:Number,project:{type:Object}},data(){return{modalVisible:!1}},methods:{showModal(){this.modalVisible=!0},removeProject(e){this.$emit("remove-project",e)}}};const B=(0,_.Z)(z,[["render",O]]);var K=B,E={name:"ProjectList",emits:["remove-project"],components:{ProjectCard:K},props:{projects:{type:Array}},methods:{removeProject(e){this.$emit("remove-project",e)}}};const F=(0,_.Z)(E,[["render",M]]);var G=F,I=o(9683),J={name:"ProjectsPage",emits:["remove-project"],components:{HeaderMain:s.Z,ProjectsHeader:v,ProjectsList:G},data(){return{allProjects:[{id:1,title:"My project"},{id:2,title:"My project"},{id:3,title:"My project"}]}},methods:{addNewProject(){let e=(0,I.Z)(this.allProjects);this.allProjects.push({id:e,title:"My project"})},removeProject(e){this.allProjects.splice(e-1,1)}}};const Q=(0,_.Z)(J,[["render",c]]);var S=Q}}]);
//# sourceMappingURL=844.e4675781.js.map