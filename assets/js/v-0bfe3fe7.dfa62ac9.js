(self.webpackChunk=self.webpackChunk||[]).push([[4389],{2389:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-0bfe3fe7",path:"/_draft/Typescript/01%20-%20Typescript%20basic.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Date: 2021-02-17",slug:"date-2021-02-17",children:[]},{level:2,title:"Typescript 기초1",slug:"typescript-기초1",children:[{level:3,title:"타입을 갖는 Javascript",slug:"타입을-갖는-javascript",children:[]},{level:3,title:"Unions",slug:"unions",children:[]},{level:3,title:"Generics",slug:"generics",children:[]},{level:3,title:"구조적 타입 시스템(Structural Type System)",slug:"구조적-타입-시스템-structural-type-system",children:[]},{level:3,title:"타입 선언",slug:"타입-선언",children:[]},{level:3,title:"타입 단언(Type assertions)",slug:"타입-단언-type-assertions",children:[]}]}],filePathRelative:"_draft/Typescript/01 - Typescript basic.md",git:{updatedTime:null,contributors:[]}}},4490:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var e=a(6252);const t=(0,e.Wm)("h2",{id:"date-2021-02-17",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#date-2021-02-17","aria-hidden":"true"},"#"),(0,e.Uk)(" Date: 2021-02-17")],-1),p=(0,e.Wm)("h2",{id:"typescript-기초1",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#typescript-기초1","aria-hidden":"true"},"#"),(0,e.Uk)(" Typescript 기초1")],-1),o=(0,e.Uk)("from "),c={href:"https://typescript-kr.github.io/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Typescript-kr"),i=(0,e.Uk)(" 트렌드 따라잡기"),r=(0,e.uE)('<h3 id="타입을-갖는-javascript" tabindex="-1"><a class="header-anchor" href="#타입을-갖는-javascript" aria-hidden="true">#</a> 타입을 갖는 Javascript</h3><ul><li>동적 프로그래밍을 지원하는 자바스크립트는 하나의 변수에 수많은 타입의 데이터를 넣을 수 있음</li><li>타입이 없는 프로그래밍은 유연하지만 의도하지 않은 값을 넣는 등의 행위가 발생할 수 있음. 이를 대체하기 위해 타입스크립트가 등장</li><li>Typescript는 자체로는 사용이 불가능하며, 컴파일해 Javascript 결과물을 활용함</li><li>문법 자체는 일반적인 정적 언어와 비슷한 느낌?</li></ul><h3 id="unions" tabindex="-1"><a class="header-anchor" href="#unions" aria-hidden="true">#</a> Unions</h3><p>여러 타입 중 하나임을 선언하는 방법</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myBool</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">windowStates</span> <span class="token operator">=</span> <span class="token string">&#39;open&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;closed&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;minimized&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>JSDoc과 같은 사용 방식(JSDoc이 이쪽 방법을 따르는 걸수도)</p><h3 id="generics" tabindex="-1"><a class="header-anchor" href="#generics" aria-hidden="true">#</a> Generics</h3><p>자바의 그것, 혹은 C++의 템플릿과 같음</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Backpack<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">const</span> backpack<span class="token operator">:</span> Backpack<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> object <span class="token operator">=</span> backpack<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// string타입에 number를 넣고 있으므로 불가능</span>\nbackpack<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="구조적-타입-시스템-structural-type-system" tabindex="-1"><a class="header-anchor" href="#구조적-타입-시스템-structural-type-system" aria-hidden="true">#</a> 구조적 타입 시스템(Structural Type System)</h3><ul><li>타입 검사는 값이 있는 형태에 집중. 즉 두 객체가 같은 형태를 가지면 같은 것으로 간주됨</li><li>같은 형태를 가진 값이 있다면 다른 값이 있어도 상관 없음</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>\n  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>p<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Point와는 관계 없는 값을 포함함</span>\n\n<span class="token function">printPoint</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Point타입이 아님에도 불구하고 x, y값을 갖고 있기 때문에 1/2가 출력됨</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="타입-선언" tabindex="-1"><a class="header-anchor" href="#타입-선언" aria-hidden="true">#</a> 타입 선언</h3><ul><li>배열을 선언할 때는 타입 뒤에 배열임을 선언하는 방법(<code>number[]</code>)과, 제네릭 배열 타입을 쓰는 방법(<code>Array&lt;number&gt;</code>) 둘 다 가능</li><li>타입과 개수를 고정시켜 선언하면 튜플 타입으로 사용 가능(<code>[string, number]</code>) <ul><li>당연한 얘기지만 실제 튜플은 아님</li></ul></li><li>열거형(<code>enum</code>)타입 제공</li><li>알 수 없는 타입은 <code>any</code>타입을 사용</li><li>전체의 타입을 알고있는 것이 아닐 경우에도 <code>any</code>를 사용</li><li>반환 값이 없을 때 <code>void</code>를 반환; 실질적인 값은 <code>undefined</code>와 같다</li><li><code>never</code>를 반환하는 함수는 함수의 끝에 도달하지 못함을 의미(예외처리가 발생하거나 무한 루프 등)</li><li>원시 타입이 아닌 객체를 나타낼 때는 <code>Object</code>가 아닌 <code>object</code>를 사용(<code>Object</code>는 <code>object</code>의 프로토타입 개념이므로 지정된 함수 등을 실행시킬 수 없다)</li></ul><h3 id="타입-단언-type-assertions" tabindex="-1"><a class="header-anchor" href="#타입-단언-type-assertions" aria-hidden="true">#</a> 타입 단언(Type assertions)</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;this is a string&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>JSX와 함께 사용하면 <code>as-</code>스타일만 허용</li></ul>',17),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,p,(0,e.Wm)("p",null,[o,(0,e.Wm)("a",c,[l,(0,e.Wm)(a)]),i]),r],64)}}}}]);