(self.webpackChunk=self.webpackChunk||[]).push([[1929],{432:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-6574c431",path:"/_draft/Javascript/Scope%20and%20Hoisting.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Date: 2021-03-24",slug:"date-2021-03-24",children:[]},{level:2,title:"Scope and Hoisting / 스코프와 호이스팅",slug:"scope-and-hoisting-스코프와-호이스팅",children:[{level:3,title:"switch문에서의 블록",slug:"switch문에서의-블록",children:[]}]}],filePathRelative:"_draft/Javascript/Scope and Hoisting.md",git:{updatedTime:null,contributors:[]}}},8993:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var p=a(6252);const e=(0,p.uE)('<h2 id="date-2021-03-24" tabindex="-1"><a class="header-anchor" href="#date-2021-03-24" aria-hidden="true">#</a> Date: 2021-03-24</h2><h2 id="scope-and-hoisting-스코프와-호이스팅" tabindex="-1"><a class="header-anchor" href="#scope-and-hoisting-스코프와-호이스팅" aria-hidden="true">#</a> Scope and Hoisting / 스코프와 호이스팅</h2><p>ES5까지의 변수(<code>var</code>)는 함수 단위의 스코프에서 선언되었다. 즉 코드 블록(<code>{ }</code>) 내부에서 새로운 변수를 선언한다고 하더라도, 해당 변수는 함수 레벨의 스코프(가장 위)에 정의된다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>var b = 2</code>는 내부의 블록 내에서 선언되었기 때문에 일반적인 언어라면 <code>console.log(b)</code>는 동작하지 않아야 한다. 하지만 자바스크립트는 <code>var b</code>의 선언이 <code>showScope</code> 함수 레벨로 호이스팅되었기 때문에 <code>console.log(b)</code>가 내부의 블록 내의 <code>b</code>의 값이 접근할 수 있게 된다.</p><p>즉 위의 코드는 아래와 같이 동작한다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a<span class="token punctuation">;</span>\n  <span class="token keyword">var</span> b<span class="token punctuation">;</span>\n\n  a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">{</span>\n    b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>위와 같은 동작을 &#39;호이스팅&#39;이라고 하며, 일반적인 언어와 다른 방식으로 동작하기 때문에 혼란스러운 코드가 되기 쉽다. 때문에 ES6부터는 <code>let</code>과 <code>const</code>라는 값 정의 키워드를 추가해 블록 수준 스코프로 정의할 수 있게 되었다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showHoisting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined;</span>\n  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showNonHoisting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: can&#39;t access lexical declaration &#39;a&#39; before initialization</span>\n  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">showScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: b is not defined</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>실 개발에 그다지 도움이 되는 내용은 아니지만, <code>let</code>과 <code>const</code>역시 문법적으로 추가된 구문(syntactic sugar)에 불과하다. 즉 내부적으로는 호이스팅되어 있다(다만 값이 평가될 때까지 접근할 수는 없기 때문에 실질적으로 호이스팅되지 않는 것과 같은 결과를 갖는다).</p><h3 id="switch문에서의-블록" tabindex="-1"><a class="header-anchor" href="#switch문에서의-블록" aria-hidden="true">#</a> switch문에서의 블록</h3><p>switch문에서 <code>case</code>에 해당하는 구문에 들여쓰기를 하는데, 이 들여쓰기는 블록으로 구분되지 않는다. 즉 다음과 같은 경우 에러가 발생한다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>something<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>\n    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>\n    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Uncaught SyntaxError: redeclaration of let a</span>\n<span class="token comment">// note: Previously declared at line 3, column 8</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>어찌보면 당연한 얘긴데, <code>case</code>문의 내용은 중괄호로 감싸고 있지 않기 때문이다. 즉 <code>case</code>의 구문들은 모두 <code>switch</code>문의 블록 레벨에 정의되어 있으며, <code>switch-case</code>의 작동 방식에 따라 <code>goto</code>하는 방식으로 작동한다.</p>',14),t=(0,p.Uk)("따라서 같은 이름의 값을 정의하고자 한다면, 중괄호로 블록을 나눠 주어야 한다. Airbnb의 "),c={href:"https://github.com/airbnb/javascript#comparison--switch-blocks",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("JavaScript Style Guide"),l=(0,p.Uk)("에서는 중괄호를 쓸 것을 권장하고 있다."),u={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",c,[o,(0,p.Wm)(a)]),l])],64)}}}}]);