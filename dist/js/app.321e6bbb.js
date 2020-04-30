(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Project_Failure_Calculator/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},4830:function(e,t,i){},"4ae7":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",attrs:{id:"app"}},[i("Jumbotron"),e._l(this.groupingData,(function(t,n){return i("GroupingCard",{key:n,attrs:{description:t["description"],terms:t["terms"],name:n,activated:e.makeSuccessCardVisible,addValuesToCalculatorState:e.addValuesToCalculatorState}})})),this.successCardVisible?i("SuccessCard",{attrs:{calc:e.calculateResults,result:e.results,failureThreshold:e.failureThreshold}}):e._e(),i("Footer")],2)},s=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"jumbotron"},[i("h1",{staticClass:"display-4"},[e._v("Project Failure Calculator")]),i("hr",{staticClass:"my-4"}),i("p",[i("b",[e._v("Guide:")])]),i("p",[e._v(" To operate this tool with maximum effectiveness, it is imperivate that you answer the questions as best you can and as truthfully as possible. Starting from "),i("i",[e._v("External Communication Management")]),e._v(", make your way down the list until you have answered "),i("u",[e._v("every")]),e._v(' statement and click the "Calculate" button. '),i("br"),e._v("Your potential chance of failure will be displayed. ")])])}],c={},l=c,d=(i("ca93"),i("2877")),u=Object(d["a"])(l,r,o,!1,null,"93c24cbe",null),h=u.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grouping container card",attrs:{id:"grouping_1"}},[i("table",{staticClass:"table card-body"},[i("thead",[i("tr",[i("th",{staticClass:"grouping__term_table_th"},[i("h3",[e._v(e._s(this.name))]),i("p",[e._v(e._s(this.description))])]),i("th",{staticClass:"grouping__term_table_th"},[e._v("No Impact")]),i("th",{staticClass:"grouping__term_table_th"},[e._v("Little Impact")]),i("th",{staticClass:"grouping__term_table_th"},[e._v("Some Impact")]),i("th",{staticClass:"grouping__term_table_th"},[e._v("Moderate Impact")]),i("th",{staticClass:"grouping__term_table_th"},[e._v("Strong Impact")])])]),i("tbody",e._l(this.terms,(function(t){return i("tr",{key:t.name},[i("td",{staticClass:"grouping__term_table_td"},[i("p",{staticClass:"grouping__term_table_title card-title"},[e._v(e._s(t.name))]),i("p",{staticClass:"card-text"},[e._v(e._s(t.description))])]),e._l(e.totalNumOfOptions,(function(n){return i("td",{key:n,staticClass:"grouping__term_table_td"},[i("input",{staticClass:"grouping__term__input",attrs:{type:"radio",name:e.radioName(t.name)},domProps:{value:n-1},on:{change:function(i){return e.buttonActivated(i,t.weighting)}}})])}))],2)})),0)])])},m=[],g={props:{description:String,terms:Array,name:String,activated:Function,addValuesToCalculatorState:Function},data(){return{totalNumOfOptions:5}},methods:{radioName(e){return e.toLowerCase().replace(/ /g,"_")},buttonActivated(e,t){this.activated(),this.addValuesToCalculatorState(e.target.name,parseInt(e.target.value,10),t)}}},f=g,_=(i("cc78"),Object(d["a"])(f,p,m,!1,null,"0256bf0c",null)),v=_.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"results container card",attrs:{id:"results"}},[i("div",{staticClass:"card-body"},[e.called?e._e():i("h3",{staticClass:"card-title",attrs:{id:"results__text"}},[e._v("Calculate your chance of failure")]),e.called?i("h4",{staticClass:"alert",class:{"alert-danger":e.isBadResult(),"alert-success":!e.isBadResult()}},[e._v(e._s(this.result.toFixed(2))+"% chance of project failure")]):e._e(),i("button",{staticClass:"btn btn-primary",attrs:{id:"results__btn"},on:{click:this.calculateResults}},[e._v("Calculate")])])])},w=[],y={props:{calc:Function,result:Number,failureThreshold:Number},data(){return{called:!1}},methods:{calculateResults(){this.called=!0,this.calc()},isBadResult(){return this.result>this.failureThreshold}}},T=y,C=(i("c43a"),Object(d["a"])(T,b,w,!1,null,"09d592b2",null)),S=C.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"text-muted footer"},[i("div",{staticClass:"container"},[i("p",[e._v("Produced by Nick Leslie and Max Owens")])])])}],x=(i("7525"),{}),P=Object(d["a"])(x,j,k,!1,null,"7cbf7834",null),M=P.exports,O=i("8e00"),I={name:"App",components:{Jumbotron:h,GroupingCard:v,SuccessCard:S,Footer:M},data(){return{groupingData:O,successCardVisible:!1,results:0,failureThreshold:50,calculatorState:{}}},methods:{makeSuccessCardVisible(){this.successCardVisible=!0},addValuesToCalculatorState(e,t,i){this.calculatorState[e]={value:t,weighting:i}},calculateResults(){let e=0,t=0;for(let i in this.calculatorState)t++,e+=this.calculatorState[i].value*this.calculatorState[i].weighting;this.results=e/t*100/4}}},R=I,q=(i("034f"),Object(d["a"])(R,a,s,!1,null,null,null)),E=q.exports;i("4989"),i("ab8b");n["a"].config.productionTip=!1,new n["a"]({render:e=>e(E)}).$mount("#app")},"6e62":function(e,t,i){},7525:function(e,t,i){"use strict";var n=i("f06e"),a=i.n(n);a.a},"85ec":function(e,t,i){},"8e00":function(e){e.exports=JSON.parse('{"External Communication Management":{"description":"The methods and means of which a team communicate with all external parties involved in the development of the project, such as the primary stakeholders and vendor representatives. This can include how well external stakeholders are interacted with, how their needs are handled, if they are ready and trained to handle the deployment of the project. ","terms":[{"name":"Ineffective External Interaction","description":"This is the description","weighting":1},{"name":"Poor stakeholder management or Lack of Stakeholder Engagement","description":"This is the description","weighting":1},{"name":"Poor Vendor Management","description":"This is the description","weighting":1},{"name":"Poor Contract Management","description":"This is the description","weighting":1},{"name":"Sector Readiness/Training","description":"This is the description","weighting":1},{"name":"Inadequate Customer Support","description":"This is the description","weighting":1}]},"Budget management":{"description":"Represents the level of control a team has over their financial resources. There are a variety of different factors which impact and influence budget management differently but are all significant. Important factors to consider are budget overruns/mismanagement and how well resources are dispersed across the production timeline.","terms":[{"name":"Unplanned expenditures","description":"This is the description","weighting":1},{"name":"Poor Budget Management","description":"This is the description","weighting":1},{"name":"Inadequate Resource Allocation","description":"This is the description","weighting":1}]},"Leadership and Team (Internal) Management":{"description":"Best represents the composition of a team and how it is controlled, dictated, and lead, such as the strength and confidence of whomever oversees the project, and the overall composition and culture of the team members. This also includes staff morale, managing and removing roadblocks. This also includes risk management and how leadership and members of the team minimize or remove risks in the project.","terms":[{"name":"Untrained staff/Resources","description":"This is the description","weighting":1},{"name":"Inexperienced Leadership","description":"This is the description","weighting":1},{"name":"Weakness of Project Execution","description":"This is the description","weighting":1},{"name":"Poor Project Management and Governance","description":"This is the description","weighting":1},{"name":"Poor Culture and staff morale","description":"This is the description","weighting":1},{"name":"Poor Risk Management","description":"This is the description","weighting":1}]},"Change and Scope Management":{"description":"Describes the level of control and understanding the team has of the requirements set before them. Managing change is important to prepare for expected and unexpected modifications. Managing scope is the understand what is required for the project to succeed and ensuring scope-creep (uncontrolled growth of project requirements) is managed and expectations are contained.","terms":[{"name":"Scope Creep","description":"This is the description","weighting":1},{"name":"Change Management","description":"This is the description","weighting":1}]},"Time Management":{"description":"Time Management is the method for controlling and directing the tasks needed for the project to be completed within a given time frame and reaching pre-determined milestones. Missed milestones and inadequate scheduling of the project timeline are key risk factors that could issues in our groupings, such as increased risk and increased spending. Lack of Time Management can also decrease Quality Assurance as the timeline is changed to ensure the project is delivered on time.","terms":[{"name":"Missed Milestones","description":"This is the description","weighting":1},{"name":"Poor Schedule Management","description":"This is the description","weighting":1}]},"Quality Assurance":{"description":"The technique involving constant and efficient checking on all aspects quality of the product being produced. Aspects such as testing, various system integrations and customer support all fall under this category. If testing requirements decrease or are not performed, this is a good indicator that the delivered product could contain defects. Lack of following industry best practices (ITIL, etc) could cause the project to fail.","terms":[{"name":"Lack of Testing","description":"This is the description","weighting":1},{"name":"Lack of adherence to Industry Best Practices","description":"This is the description","weighting":1},{"name":"Poor System Intergration","description":"This is the description","weighting":1},{"name":"Project Defects","description":"This is the description","weighting":1}]},"Planning/Requirements Gathering":{"description":"This category is the acquiring and managing of necessary resources and applicable systems for the project to come fully into complete, functional fruition.","terms":[{"name":"Poor Service Requirement","description":"This is the description","weighting":1},{"name":"Poor Service Design","description":"This is the description","weighting":1},{"name":"Poor Requirements Analysis","description":"This is the description","weighting":1},{"name":"Lack of Requirements Research","description":"This is the description","weighting":1}]}}')},c43a:function(e,t,i){"use strict";var n=i("4ae7"),a=i.n(n);a.a},ca93:function(e,t,i){"use strict";var n=i("4830"),a=i.n(n);a.a},cc78:function(e,t,i){"use strict";var n=i("6e62"),a=i.n(n);a.a},f06e:function(e,t,i){}});
//# sourceMappingURL=app.321e6bbb.js.map