(this.webpackJsonpquizzical=this.webpackJsonpquizzical||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(9),i=c.n(a),r=c(8),o=c(2),u=c(6),l=(c(14),c(0)),j=function(e){return Object(l.jsxs)("div",{className:"start-screen",children:[Object(l.jsx)("h1",{className:"quiz-title",children:"Quizzical"}),Object(l.jsx)("p",{className:"quiz-description",children:"A simple general knowledge trivia game"}),Object(l.jsx)("button",{className:"start-quiz-button",onClick:e.startGame,children:"Start Game"})]})},b=c(3);var d=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(u.a)(a,2),d=i[0],O=i[1],m=Object(n.useState)(!0),h=Object(u.a)(m,2),f=h[0],p=h[1];function x(){fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{id:Object(b.a)(),incorrect_answers:[].concat(Object(r.a)(e.incorrect_answers.map((function(e){return{answer:e,isSelected:!1,id:Object(b.a)()}}))),[{answer:e.correct_answer,isSelected:!1,id:Object(b.a)()}])})}));O(t)}))}Object(n.useEffect)((function(){x()}),[]),console.log(d);var v=d.map((function(e){var t=Object(r.a)(e.incorrect_answers);return Object(l.jsxs)("div",{className:"question-container",children:[Object(l.jsx)("div",{className:"question",children:e.question}),Object(l.jsx)("div",{className:"answers",children:t.map((function(e){return Object(l.jsx)("div",{className:"answer",onClick:function(){return t=e.id,void O((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{incorrect_answers:e.incorrect_answers.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{isSelected:!e.isSelected}):e}))})}))}));var t},style:{backgroundColor:e.isSelected?"hsl(230, 61%, 90%)":"none",border:e.isSelected?"0.794239px solid hsl(230, 61%, 90%)":"0.794239px solid #4d5b9e"},children:e.answer},Object(b.a)())}))}),Object(l.jsx)("hr",{className:"question-divider"})]},Object(b.a)())})),w=f?Object(l.jsxs)("div",{className:"quiz-button-section",children:[Object(l.jsx)("p",{className:"quiz-score",children:"You scored 5/5 correct answers"}),Object(l.jsx)("button",{className:"quiz-button",onClick:function(){x(),p((function(e){return!e}))},children:"Play again"})]}):Object(l.jsx)("div",{className:"quiz-button-section",children:Object(l.jsx)("button",{className:"quiz-button",children:"Check answer"})}),q=Object(l.jsxs)(l.Fragment,{children:[v,w]});return Object(l.jsx)(l.Fragment,{children:c?q:Object(l.jsx)(j,{startGame:function(){s(!0)}})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e93d8500.chunk.js.map