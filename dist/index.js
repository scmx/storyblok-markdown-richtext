var t=require("@tiptap/pm/markdown"),e=require("markdown-it"),r=require("@tiptap/pm/model");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=/*#__PURE__*/a(e);const o=new r.Schema({nodes:{doc:{content:"block+"},paragraph:{content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:()=>["p",0]},blockquote:{content:"block+",group:"block",parseDOM:[{tag:"blockquote"}],toDOM:()=>["blockquote",0]},horizontal_rule:{group:"block",parseDOM:[{tag:"hr"}],toDOM:()=>["div",["hr"]]},heading:{attrs:{level:{default:1}},content:"inline*",group:"block",defining:!0,parseDOM:[{tag:"h1",attrs:{level:1}},{tag:"h2",attrs:{level:2}},{tag:"h3",attrs:{level:3}},{tag:"h4",attrs:{level:4}},{tag:"h5",attrs:{level:5}},{tag:"h6",attrs:{level:6}}],toDOM:t=>["h"+t.attrs.level,0]},code_block:{content:"text*",group:"block",code:!0,defining:!0,attrs:{params:{default:""}},parseDOM:[{tag:"pre",preserveWhitespace:!0,getAttrs:t=>({params:"string"!=typeof t?t.getAttribute("data-params"):""})}],toDOM:t=>["pre",t.attrs.params?{"data-params":t.attrs.params}:{},["code",0]]},ordered_list:{content:"list_item+",group:"block",attrs:{order:{default:1},tight:{default:!1}},parseDOM:[{tag:"ol",getAttrs:t=>({order:"string"!=typeof t&&t.hasAttribute("start")?Number(t.getAttribute("start")):1})}],toDOM:t=>["ol",{start:1===t.attrs.order?null:t.attrs.order},0]},bullet_list:{content:"list_item+",group:"block",attrs:{tight:{default:!1}},parseDOM:[{tag:"ul",getAttrs:t=>({tight:"string"!=typeof t?t.hasAttribute("data-tight"):""})}],toDOM:t=>["ul",{"data-tight":t.attrs.tight?"true":null},0]},list_item:{content:"paragraph block*",defining:!0,parseDOM:[{tag:"li"}],toDOM:()=>["li",0]},text:{group:"inline",toDOM:t=>t.text?document.createTextNode(t.text):""},image:{inline:!0,attrs:{src:{},alt:{default:null},title:{default:null},source:{default:null},copyright:{default:null},meta_data:{default:{}}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:t=>({src:"string"!=typeof t?t.getAttribute("src"):"",title:"string"!=typeof t?t.getAttribute("title"):"",alt:"string"!=typeof t?t.getAttribute("alt"):"",source:"string"!=typeof t?t.getAttribute("source"):"",copyright:"string"!=typeof t?t.getAttribute("copyright"):"",meta_data:"string"!=typeof t?t.getAttribute("meta_data"):""})}],toDOM:t=>["img",t.attrs]},hard_break:{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:()=>["br"]}},marks:{italic:{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:t=>"italic"===t&&null}],toDOM:()=>["em"]},bold:{parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-weight",getAttrs:t=>"string"==typeof t?/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null:null}],toDOM:()=>["bold"]},link:{attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:t=>({href:"string"!=typeof t?t.getAttribute("href"):"",title:"string"!=typeof t?t.getAttribute("title"):""})}],toDOM:t=>["a",t.attrs]},code:{parseDOM:[{tag:"code"}],toDOM:()=>["code"]}}}),i=new t.MarkdownParser(o,l.default("commonmark",{html:!1}),{blockquote:{block:"blockquote"},paragraph:{block:"paragraph"},list_item:{block:"list_item"},bullet_list:{block:"bullet_list"},ordered_list:{block:"ordered_list",getAttrs:t=>({order:+t.attrGet("order")||1})},heading:{block:"heading",getAttrs:t=>({level:+t.tag.slice(1)})},code_block:{block:"code_block"},fence:{block:"code_block",getAttrs:t=>({params:t.info||""})},hr:{node:"horizontal_rule"},image:{node:"image",getAttrs:t=>({src:t.attrGet("src"),title:t.attrGet("title")||null,alt:t.children[0]&&t.children[0].content||null})},hardbreak:{node:"hard_break"},em:{mark:"italic"},strong:{mark:"bold"},link:{mark:"link",getAttrs:t=>({href:t.attrGet("href"),title:t.attrGet("title")||null})},code_inline:{mark:"code"}});exports.markdownToRichtext=t=>t?i.parse(t).toJSON():{};
//# sourceMappingURL=index.js.map
