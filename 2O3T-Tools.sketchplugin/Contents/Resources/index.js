!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a={zh:{"intl.rename.select-action":"选中","intl.rename.select-object":"个对象","intl.rename.formula":"公式","intl.rename.preview":"预览","intl.rename.input-placeholder":"请输入替换内容...","intl.rename.button":"重命名","intl.rename.previewContainer.old-title":"更改前","intl.rename.previewContainer.now-title":"更改后","intl.rename.tags.group-original":"原始文本","intl.rename.tags.group-property":"属性","intl.rename.tags.group-sort":"排序","intl.rename.tags.group-text":"文本类型","intl.rename.tags.message":"以下为占位符(%公式%)的快捷方式, 可点击插入, 或在输入框中直接输入使用! ","intl.rename.tags.text-original":"图层命名","intl.rename.tags.hint-original":"保留原图层的命名内容","intl.rename.tags.text-uppercase":"大写命名","intl.rename.tags.hint-uppercase":"保留原图层的命名内容, 并将其转化为大写字母","intl.rename.tags.text-lowercase":"小写命名","intl.rename.tags.hint-lowercase":"保留原图层的命名内容, 并将其转化为小写字母","intl.rename.tags.text-first-uppercase":"首字母大写","intl.rename.tags.hint-first-uppercase":"保留原图层的命名内容, 并将其首字母转化为大写字母","intl.rename.tags.text-camel-case":"驼峰命名","intl.rename.tags.hint-camel-case":"保留原图层的命名内容, 并将其转化为标准驼峰命名方式","intl.rename.tags.text-title-case":"正规标题命名","intl.rename.tags.hint-title-case":"保留原图层的命名内容, 并将其转化为正规化的标题命名","intl.rename.tags.text-slice-length":"指定长度截取","intl.rename.tags.hint-slice-length":"截取指定长度的原图层的命名内容, s为开始位置(起始为1), l为截取长度.","intl.rename.tags.text-slice-position":"指定位置截取","intl.rename.tags.hint-slice-position":"截取指定位置的原图层的命名内容, s为开始位置(起始为1), e为截止位置.","intl.rename.tags.text-width":"获取宽度","intl.rename.tags.hint-width":"获取当前元素的宽度, 并将其占位符替换","intl.rename.tags.text-height":"获取高度","intl.rename.tags.hint-height":"获取当前元素的高度, 并将其占位符替换","intl.rename.tags.text-lowercase-sort":"小写字母排序","intl.rename.tags.hint-lowercase-sort":"以小写字母 a~z 进行替换","intl.rename.tags.text-uppercase-sort":"大写字母排序","intl.rename.tags.hint-uppercase-sort":"以大写字母 A~Z 进行替换","intl.rename.tags.text-page-name":"页面名称","intl.rename.tags.hint-page-name":"获取当前元素的页面名称, 并将其替换","intl.rename.tags.text-parent-name":"父元素名称","intl.rename.tags.hint-parent-name":"获取当前元素的父元素名称, 并将其替换","intl.rename.tags.text-numeric-asc":"数字升序","intl.rename.tags.hint-numeric-asc":"以从1开始的数字进行升序替换, N为位数, 多个N会在前面自动补零, 如: %NN%","intl.rename.tags.text-numeric-desc":"数字降序","intl.rename.tags.hint-numeric-desc":"以从选中元素的最大个数开始的数字进行降序替换, n为位数, 多个n会在前面自动补零, 如: %nn%","intl.rename.tags.text-numeric-asc-position":"指定数字升序","intl.rename.tags.hint-numeric-asc-position":"以从指定的数字(如2)开始的数字进行升序替换, N为位数, 多个N会在前面自动补零, 如: %NN2%","intl.rename.tags.text-numeric-desc-position":"指定数字降序","intl.rename.tags.hint-numeric-desc-position":"以从指定的数字(如2), 加上选中元素的最大个数, 开始进行降序替换, n为位数, 多个n会在前面自动补零, 如: %nn2%","intl.rename.tags.text-font-hex-color":"文字十六进制颜色","intl.rename.tags.hint-font-hex-color":"当前元素为文本时, 可获取文字的十六进制颜色, 并进行替换","intl.rename.tags.text-font-rgba-color":"文字RGBA颜色","intl.rename.tags.hint-font-rgba-color":"当前元素为文本时, 可获取文字的RGBA中的R值颜色, 并进行替换(其他G、B、A的值, 可通过替换公式中的r分别为g、b、a)","intl.rename.tags.text-font-size":"文字大小","intl.rename.tags.hint-font-size":"当前元素为文本时, 可获取文字字号大小, 并进行替换","intl.rename.tags.text-font-typeface":"字体名称","intl.rename.tags.hint-font-typeface":"当前元素为文本时, 可获取文字字体名称, 并进行替换","intl.iconfont.size":"大小","intl.iconfont.color":"颜色","intl.iconfont.color-placeholder":"十六进制","intl.setting.clear-cache-success":"清空缓存成功!","intl.setting.clear-cache":"清除缓存","intl.setting.change-language-success":"切换语言成功! 请重启插件!"},en:{"intl.rename.select-action":"Selected","intl.rename.select-object":" ","intl.rename.formula":"Formula","intl.rename.preview":"Preview","intl.rename.input-placeholder":"Please enter the replacement content.","intl.rename.button":"Replace","intl.rename.previewContainer.old-title":"Before change","intl.rename.previewContainer.now-title":"After change","intl.rename.tags.group-original":"Original","intl.rename.tags.group-property":"Property","intl.rename.tags.group-sort":"Sort","intl.rename.tags.group-text":"Text","intl.rename.tags.message":"The following is a shortcut for placeholders (% formula%) that can be clicked to insert, or entered directly in the input box for use!","intl.rename.tags.text-original":"Original","intl.rename.tags.hint-original":"Keep the naming content of the original layer.","intl.rename.tags.text-uppercase":"Uppercase","intl.rename.tags.hint-uppercase":"Keep the naming content of the original layer and convert it into capital letters.","intl.rename.tags.text-lowercase":"Lowercase","intl.rename.tags.hint-lowercase":"Keep the naming content of the original layer and convert it into lowercase letters.","intl.rename.tags.text-first-uppercase":"First capitalized","intl.rename.tags.hint-first-uppercase":"Keep the naming content of the original layer and convert its initials into capital letters.","intl.rename.tags.text-camel-case":"Camel case","intl.rename.tags.hint-camel-case":"Keep the naming content of the original layer and convert it into the standard hump naming method.","intl.rename.tags.text-title-case":"Title case","intl.rename.tags.hint-title-case":"Keep the naming content of the original layer and convert it into a normalized Title naming.","intl.rename.tags.text-slice-length":"Slice Length","intl.rename.tags.hint-slice-length":"Intercept the named content of the original layer of the specified length, s is the starting position (starting 1), L is the interception length.","intl.rename.tags.text-slice-position":"Slice Position","intl.rename.tags.hint-slice-position":"Intercept the naming content of the original layer at the specified position, s is the starting position (starting 1), e is the cut-off position.","intl.rename.tags.text-width":"Width","intl.rename.tags.hint-width":"Gets the width of the current element and replaces its placeholder.","intl.rename.tags.text-height":"Height","intl.rename.tags.hint-height":"Gets the height of the current element and replaces its placeholder.","intl.rename.tags.text-lowercase-sort":"Lowercase sorting","intl.rename.tags.hint-lowercase-sort":"Replace with lowercase letters a~z.","intl.rename.tags.text-uppercase-sort":"Uppercase sorting","intl.rename.tags.hint-uppercase-sort":"Replace with capital letters A~Z.","intl.rename.tags.text-page-name":"Page Name","intl.rename.tags.hint-page-name":"Get the page name of the current element and replace it.","intl.rename.tags.text-parent-name":"Parent Name","intl.rename.tags.hint-parent-name":"Gets the parent element name of the current element and replaces it.","intl.rename.tags.text-numeric-asc":"Numeric ASC","intl.rename.tags.hint-numeric-asc":"Replace the numbers starting from 1 in ascending order. N is the number of digits, and many N will automatically fill in the front, such as: %NN%.","intl.rename.tags.text-numeric-desc":"Numeric DESC","intl.rename.tags.hint-numeric-desc":"The number starting from the maximum number of selected elements is replaced in descending order. n is the number of digits, and many n will automatically fill in the front, such as: %nn%.","intl.rename.tags.text-numeric-asc-position":"Num. ASC - Position","intl.rename.tags.hint-numeric-asc-position":"Replace in ascending order with the number starting from the specified number (e.g. 2). N is the number of digits. Multiple N will automatically fill in the front, e.g. %NN2%.","intl.rename.tags.text-numeric-desc-position":"Num. DESC - Position","intl.rename.tags.hint-numeric-desc-position":"Starting with the specified number (e.g. 2) and the maximum number of selected elements, a descending substitution is performed. n is the number of digits, and multiple n will automatically fill in the front, such as: %nn2%.","intl.rename.tags.text-font-hex-color":"Hex Color","intl.rename.tags.hint-font-hex-color":"When the current element is text, the hexadecimal color of the text can be obtained and replaced.","intl.rename.tags.text-font-rgba-color":"RGBA Color","intl.rename.tags.hint-font-rgba-color":"When the current element is text, the R-value color in R G B of text can be obtained and replaced (the values of other G, B and A can be replaced by the values of R in the replacement formula being g, B and a, respectively).","intl.rename.tags.text-font-size":"Font Size","intl.rename.tags.hint-font-size":"When the current element is text, the font size can be obtained and replaced.","intl.rename.tags.text-font-typeface":"Typeface","intl.rename.tags.hint-font-typeface":"When the current element is text, the font name of the text can be obtained and replaced.","intl.iconfont.size":"Size","intl.iconfont.color":"Color","intl.iconfont.color-placeholder":"Hex.","intl.setting.clear-cache-success":"Clear the cache successfully!","intl.setting.clear-cache":"Clear cache","intl.setting.change-language-success":"Successful language switching! Please restart the plug-in!"}};t.default=a}]);