(window.QJP=window.QJP||[]).push([[37,113],{"9wf9":function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",function(){return r});var n=a("q1tI"),s=a("0cfB"),l=a("CKMF"),i=a("KNMg");function r(t,a){var r=Object(s.hot)(e)(i.a);Object(l.a)(n.createElement(r,{defaultSelectedIndex:t.defaultSelectedTestimonialIndex,testimonials:t.testimonials}),a)}}.call(this,a("3UD+")(e))},KNMg:function(e,t,a){"use strict";a.d(t,"a",function(){return T});var n=a("iCc5"),s=a.n(n),l=a("FYw3"),i=a.n(l),r=a("mRg0"),o=a.n(r),c=a("q1tI"),m=a.n(c),d=a("TSYQ"),u=a.n(d),p=a("QLaP"),f=a.n(p),h=a("6MVV"),I=a("Fgiy"),g=a("rEOn"),E=a("1W/9"),N=a("sPjC").default,T=function(e){function t(a){s()(this,t);var n=i()(this,e.call(this,a));return n.handleClickUser=function(e){Object(h.a)("homepage_testimonial_clicked",{selectedUserId:n.props.testimonials[e].userId,selectedUserDisplayName:n.props.testimonials[e].displayName}),n.setState({selectedIndex:e})},f()(a.defaultSelectedIndex>=0&&a.defaultSelectedIndex<a.testimonials.length,"Testimonials are hard-coded and one will always be selected by default"),n.state={selectedIndex:a.defaultSelectedIndex},n}return o()(t,e),t.prototype.getSelectedQuote=function(){return this.props.testimonials[this.state.selectedIndex].quote},t.prototype.renderTestimonialUser=function(e,t){var a=u()("Testimonials-user",{isSelected:e===this.state.selectedIndex});return m.a.createElement("div",{className:a,key:e},m.a.createElement(g.a,null,m.a.createElement(E.a,{onClick:this.handleClickUser.bind(null,e)},m.a.createElement("div",{"aria-label":N("en-US","An image of {name}",{name:t.displayName}),className:"Testimonials-displayImage",role:"img",style:{backgroundImage:"url("+t.displayImageUrl+")"}}))),m.a.createElement(g.a,{className:"Testimonials-username"},m.a.createElement(E.a,{to:t.profileUrl},t.displayName),m.a.createElement("span",{className:"Testimonials-userStatus"},t.userType)))},t.prototype.render=function(){var e=this,t=this.props.testimonials;return m.a.createElement("div",{className:"Testimonials"},m.a.createElement(g.a,null,m.a.createElement("span",{className:"Testimonials-header"},m.a.createElement(I.a,{_precomputed:N("en-US","TESTIMONIALS",{})}))),m.a.createElement(g.a,{className:"Testimonials-container"},m.a.createElement(g.a,{className:"Testimonials-quote"},m.a.createElement("span",null,this.getSelectedQuote())),m.a.createElement(g.a,{className:"Testimonials-users"},t.map(function(t,a){return e.renderTestimonialUser(a,t)}))))},t}(c.PureComponent)},oHIN:function(e,t,a){"use strict";QWait("Quizlet.Common.i18n",function(){a.r(t),function(e){var t=a("QLaP"),n=a.n(t),s=a("zRkw"),l=a("9wf9");QWait("dom","Quizlet.homepageData",function(){var t=s.a.homepageData;n()(t,"Missing Quizlet.homepageData");var a=e.document.querySelector(".Homepage-testimonials .Testimonials");Object(l.default)(t,a)})}.call(this,a("yLpj"))})}},[["oHIN",1,2,0]]]);
//# sourceMappingURL=homepage.940c71e65aaa42c4d168.a.js.map