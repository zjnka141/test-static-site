(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{9626:function(e,t,a){"use strict";function MatomoTracker(){return null}a.r(t),a.d(t,{MatomoTracker:function(){return MatomoTracker}}),a(2265),t.default=MatomoTracker},7724:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return components_Navbar}});var s=a(7437),l=a(1396),r=a.n(l),n=a(2265),i=a(5494),o=a(345);let d=i.fC,c=i.xz,x=n.forwardRef((e,t)=>{let{className:a,align:l="center",sideOffset:r=4,...n}=e;return(0,s.jsx)(i.h_,{children:(0,s.jsx)(i.VY,{ref:t,align:l,sideOffset:r,className:(0,o.cn)("z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",a),...n})})});x.displayName=i.VY.displayName;var m=a(3089),h=a(3523),p=a(4033);let f={defaultLocale:"nl"};var svg_assets_UKFlag=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 30",className:t,children:[(0,s.jsx)("clipPath",{id:"t",children:(0,s.jsx)("path",{d:"M25,15h25v15zv15h-25zh-25v-15zv-15h25z"})}),(0,s.jsx)("path",{d:"M0,0v30h50v-30z",fill:"#012169"}),(0,s.jsx)("path",{d:"M0,0 50,30M50,0 0,30",stroke:"#fff",strokeWidth:"6"}),(0,s.jsx)("path",{d:"M0,0 50,30M50,0 0,30",clipPath:"url(#t)",stroke:"#C8102E",strokeWidth:"4"}),(0,s.jsx)("path",{d:"M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z",fill:"#C8102E",stroke:"#FFF",strokeWidth:"2"})]})},svg_assets_NLFlag=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 9 6",children:[(0,s.jsx)("rect",{fill:"#21468B",width:"9",height:"6"}),(0,s.jsx)("rect",{fill:"#FFF",width:"9",height:"4"}),(0,s.jsx)("rect",{fill:"#AE1C28",width:"9",height:"2"})]})};let getLanguage=e=>e.search(/\/en$/)>=0||e.search(/\/en\//)>=0?"en":f.defaultLocale;var components_LanguageSelect=()=>{let[e,t]=(0,n.useState)(!1),a=(0,p.usePathname)(),l=(0,p.useRouter)(),[r,i]=(0,n.useState)(getLanguage(a));(0,n.useEffect)(()=>{getLanguage(a)!==r&&i(getLanguage(a))},[a]);let changeLanguage=e=>{e!==r&&(i(e),a.includes(r)?l.push(a.replace("/".concat(r),"/".concat(e))):l.push("/".concat(e)))};return(0,s.jsxs)(d,{open:e,onOpenChange:t,children:[(0,s.jsx)(c,{asChild:!0,children:(0,s.jsxs)(m.z,{className:"bg-transparent w-fit px-0",children:["en"===r?(0,s.jsx)(svg_assets_UKFlag,{className:"w-7"}):(0,s.jsx)(svg_assets_NLFlag,{className:"w-7"})," ",(0,s.jsx)(h.Z,{className:"text-secondary-casper"})]})}),(0,s.jsxs)(x,{className:"w-40 p-0",align:"end",sideOffset:0,onClick:()=>t(!1),children:[(0,s.jsxs)("div",{className:"p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-100",onClick:()=>changeLanguage("nl"),children:[(0,s.jsx)(svg_assets_NLFlag,{className:"w-7"}),"Dutch"]}),(0,s.jsxs)("div",{className:"p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-100",onClick:()=>changeLanguage("en"),children:[(0,s.jsx)(svg_assets_UKFlag,{className:"w-7"}),"English"]})]})]})},u=a(8712),g=a(6061),j=a(2549);let v=u.fC,b=u.xz;u.x8;let N=u.h_,w=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(u.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black-deep/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",a),...l,ref:t})});w.displayName=u.aV.displayName;let y=(0,g.j)("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),k=n.forwardRef((e,t)=>{let{side:a="right",className:l,children:r,...n}=e;return(0,s.jsxs)(N,{children:[(0,s.jsx)(w,{}),(0,s.jsxs)(u.VY,{ref:t,className:(0,o.cn)(y({side:a}),l),...n,children:[r,(0,s.jsxs)(u.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",children:[(0,s.jsx)(j.Z,{className:"h-6 w-6"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});k.displayName=u.VY.displayName;let SheetHeader=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};SheetHeader.displayName="SheetHeader";let SheetFooter=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};SheetFooter.displayName="SheetFooter";let _=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(u.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",a),...l})});_.displayName=u.Dx.displayName;let z=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(u.dk,{ref:t,className:(0,o.cn)("text-sm text-slate-500 dark:text-slate-400",a),...l})});z.displayName=u.dk.displayName;var C=a(8004),components_MobileMenu=e=>{let{dict:t}=e,[a,l]=(0,n.useState)(!1),i=(0,p.usePathname)(),o=i.includes("/en")?"en":"nl",d="/"===i?"/":"/".concat(o);return(0,s.jsxs)(v,{open:a,onOpenChange:l,children:[(0,s.jsx)(b,{asChild:!0,children:(0,s.jsx)("button",{className:"outline-none",children:(0,s.jsx)(C.Z,{className:"h-6 w-6 text-brand-torea xl:hidden"})})}),(0,s.jsxs)(k,{side:"left",className:"w-4/5 pl-8 pr-2 md:w-[360px] md:pl-10 [&>button]:bg-white [&>button]:text-brand-valencia",children:[(0,s.jsx)(SheetHeader,{className:"border-none py-3 md:py-6"}),(0,s.jsx)(SheetFooter,{className:"overflow-auto border-none px-0",children:(0,s.jsx)(b,{asChild:!0,children:(0,s.jsxs)("div",{className:"w-full h-[calc(100svh-100px)] overflow-auto pr-4",children:[(0,s.jsxs)("div",{className:"mt-8 space-y-4 border-t pt-8 xl:hidden",onClick:()=>l(!1),children:[(0,s.jsx)(r(),{href:"".concat(d,"#corporator"),className:"block py-2 font-playfair text-xl text-secondary-arapawa hover:text-brand-valencia",children:t.our_approach}),(0,s.jsx)(r(),{href:"".concat(d,"#inspiration"),className:"block py-2 font-playfair text-xl text-secondary-arapawa hover:text-brand-valencia",children:t.inspiration_insight}),(0,s.jsx)(r(),{href:"".concat(d,"#register-trial"),className:"block py-2 font-playfair text-xl text-secondary-arapawa hover:text-brand-valencia",children:t.providers}),(0,s.jsx)(r(),{href:"/".concat(o,"/about"),className:"block py-2 font-playfair text-xl text-secondary-arapawa hover:text-brand-valencia",children:t.about}),(0,s.jsx)(r(),{href:"/".concat(o,"/confidential"),className:"block py-2 font-playfair text-xl text-secondary-arapawa hover:text-brand-valencia",children:t.confidential})]}),(0,s.jsx)("div",{className:"w-full border-t mt-20"}),(0,s.jsx)("div",{onClick:e=>e.stopPropagation(),className:"w-fit mt-4 ml-auto",children:(0,s.jsx)(components_LanguageSelect,{})})]})})})]})]})},components_Navbar=e=>{let{dict:t}=e,a=(0,p.usePathname)(),l=a.includes("/en")?"en":"nl",n="/"===a?"/":"/".concat(l);return(0,s.jsx)("div",{className:"top-4 xl:top-10 px-2 xl:px-10 absolute z-50 container left-1/2 -translate-x-1/2",children:(0,s.jsxs)("div",{className:"bg-white h-full px-3 xl:px-6 grid grid-cols-12 items-center rounded-xl text-black-deep py-3",children:[(0,s.jsxs)("div",{className:"flex items-center col-span-5",children:[(0,s.jsxs)("div",{className:"gap-8 hidden xl:flex",children:[(0,s.jsx)(r(),{href:"".concat(n,"#corporator"),children:t.our_approach}),(0,s.jsx)(r(),{href:"".concat(n,"#inspiration"),children:t.inspiration_insight}),(0,s.jsx)(r(),{href:"".concat(n,"#register-trial"),children:t.providers})]}),(0,s.jsx)(components_MobileMenu,{dict:t})]}),(0,s.jsx)("img",{src:"/assets/thrive.png",alt:"logo",className:"h-9 justify-self-center col-span-2"}),(0,s.jsxs)("div",{className:"flex gap-8 items-center justify-self-end  col-span-5",children:[(0,s.jsx)(r(),{href:"/".concat(l,"/confidential"),className:"hidden xl:flex",children:t.confidential}),(0,s.jsx)(r(),{href:"/".concat(l,"/about"),className:"hidden xl:flex",children:t.about}),(0,s.jsx)("a",{href:"http://app2.thrivepeople.nl",className:"px-5 py-2 text-sm bg-brand-torea text-white rounded-full",children:"Login"}),(0,s.jsx)("div",{className:"hidden xl:flex",children:(0,s.jsx)(components_LanguageSelect,{})})]})]})})}},3089:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(7437),l=a(2265),r=a(7256),n=a(6061),i=a(345);let o=(0,n.j)("inline-flex items-center justify-center rounded-full text-sm font-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 gap-2.5",{variants:{variant:{default:"bg-primary text-primary-foreground [&>svg]:duration-150 [&>svg]:transition [&>svg]:hover:text-brand-cream",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"text-brand-torea border border-input bg-background hover:bg-accent",secondary:"bg-secondary text-secondary-foreground",ghost:"hover:bg-accent hover:text-accent-foreground [&>svg]:hover:text-brand-torea",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-12 px-8 py-2",sm:"h-9 px-3",lg:"h-14 px-8",icon:"h-8 w-8 md:h-12 md:w-12 shrink-0"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,t)=>{let{className:a,variant:l,size:n,asChild:d=!1,...c}=e,x=d?r.g7:"button";return(0,s.jsx)(x,{className:(0,i.cn)(o({variant:l,size:n,className:a})),ref:t,...c})});d.displayName="Button"},1472:function(e,t,a){"use strict";a.d(t,{$N:function(){return h},Vq:function(){return o},cZ:function(){return m},fK:function(){return DialogHeader},hg:function(){return d}});var s=a(7437),l=a(2265),r=a(8712),n=a(2549),i=a(345);let o=r.fC,d=r.xz,c=r.h_;r.x8;let x=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",a),...l})});x.displayName=r.aV.displayName;let m=l.forwardRef((e,t)=>{let{className:a,children:l,...o}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-3xl max-h-[90vh] overflow-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",a),...o,children:[l,(0,s.jsxs)(r.x8,{className:"flex items-center justify-center absolute w-8 h-8 bg-black-deep text-white rounded-full right-4 top-4  transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[(0,s.jsx)(n.Z,{className:"",size:20,strokeWidth:2}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName;let DialogHeader=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};DialogHeader.displayName="DialogHeader";let h=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...l})});h.displayName=r.Dx.displayName;let p=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,i.cn)("text-sm text-slate-500 dark:text-slate-400",a),...l})});p.displayName=r.dk.displayName},345:function(e,t,a){"use strict";a.d(t,{cn:function(){return cn},o:function(){return validateEmail}});var s=a(7042),l=a(3986);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m)((0,s.W)(t))}let validateEmail=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},2180:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return sections_Footer}});var s=a(7437),l=a(2265),r=a(1472),components_PrivacyDialog=e=>{let{open:t,onChange:a,button:l,title:n,privacy:i}=e;return(0,s.jsxs)(r.Vq,{open:t,onOpenChange:a,children:[(0,s.jsx)(r.hg,{asChild:!0,children:l}),(0,s.jsxs)(r.cZ,{children:[(0,s.jsx)(r.fK,{className:"border-b pt-3 pb-6",children:(0,s.jsx)(r.$N,{children:n})}),(0,s.jsx)("div",{className:"whitespace-pre-line",children:i})]})]})},n=a(4033),components_TermDialog=e=>{let{button:t,title:a,terms:l}=e,{lang:i}=(0,n.useParams)();return(0,s.jsxs)(r.Vq,{children:[(0,s.jsx)(r.hg,{asChild:!0,children:t}),(0,s.jsxs)(r.cZ,{children:[(0,s.jsx)(r.fK,{className:"border-b pt-3 pb-6",children:(0,s.jsx)(r.$N,{children:a})}),(0,s.jsx)("div",{className:"whitespace-pre-line",children:l})]})]})},i=a(1271),o=a(8783),d=a(6539),c=a(7461),sections_Footer=e=>{let{dict:t,terms:a,privacy:r}=e,x=(0,n.useSearchParams)(),m=x.get("privacy"),[h,p]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{m&&!h&&p(!0)},[m]),(0,s.jsx)("footer",{className:"w-full bg-secondary-arapawa pt-14 lg:pt-20 pb-14 px-4 lg:px-10",id:"footer",children:(0,s.jsxs)("div",{className:"container px-0",children:[(0,s.jsx)("div",{className:"flex items-end justify-center md:justify-start",children:(0,s.jsx)("img",{src:"/assets/thrive-white.png",alt:"logo",className:"h-12"})}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between mt-10 gap-5 items-stretch",children:[(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 md:gap-5 text-white text-sm mt-1 justify-self-end md:justify-self-start",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[(0,s.jsx)("p",{className:"font-bold text-xs uppercase",children:"Contact Us"}),(0,s.jsxs)("a",{className:"ml-0 md:ml-20 flex gap-2.5 items-center py-1 px-2 md:py-2.5 md:px-4 rounded-full bg-white text-black-deep w-fit",href:"tel:0853032867",children:["085 - 3032867 ",(0,s.jsx)(i.Z,{className:"text-brand-valencia",size:20})]}),(0,s.jsxs)("a",{className:"ml-0 md:ml-10 flex gap-2.5 items-center py-1 px-2 md:py-2.5 md:px-4 rounded-full bg-white text-black-deep w-fit cursor-pointer",href:"mailto:hello@thrivepeople.nl",children:["hello@thrivepeople.nl ",(0,s.jsx)(o.Z,{className:"text-brand-valencia",size:20})]})]}),(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center md:items-start",children:[(0,s.jsx)("p",{className:"font-bold text-xs uppercase",children:"Located at"}),(0,s.jsx)("img",{src:"/assets/Apollo-14-logo.png",alt:"apollo",className:"w-32 my-2"}),(0,s.jsxs)("p",{children:["Saturnusstraat 14",(0,s.jsx)("br",{})," 2516 AH Den Haag"]})]})]})}),(0,s.jsxs)("div",{className:"flex-1 flex justify-center md:justify-between flex-col lg:flex-row items-center",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"flex gap-6 md:self-end justify-self-end mt-4 md:mt-0",children:[(0,s.jsx)("a",{className:"w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer",href:"https://www.instagram.com/thrive.people/",target:"_blank",children:(0,s.jsx)(d.Z,{className:"text-secondary-arapawa",size:22,strokeWidth:3})}),(0,s.jsx)("a",{className:"w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer",href:"https://www.linkedin.com/company/thrivepeople",target:"_blank",children:(0,s.jsx)(c.Z,{className:"text-secondary-arapawa fill-current",size:20,strokeWidth:1})})]})]})]}),(0,s.jsx)("div",{className:"mt-11 w-full h-[1px] bg-secondary-arapawa-light"}),(0,s.jsxs)("div",{className:"flex justify-between items-center md:items-end mt-10 flex-col-reverse md:flex-row",children:[(0,s.jsx)("p",{className:"md:hidden text-white text-xs",children:"Copyright \xa9 2023 Thrive People"}),(0,s.jsxs)("div",{className:"flex items-center gap-8 text-white text-xs mb-2 mt-16 md:mt-0",children:[(0,s.jsx)(components_TermDialog,{button:(0,s.jsx)("p",{className:"cursor-pointer",children:t.terms}),title:t.terms,terms:a}),(0,s.jsx)(components_PrivacyDialog,{button:(0,s.jsx)("p",{className:"cursor-pointer",children:t.privacy}),title:t.privacy,privacy:r,open:h,onChange:p}),(0,s.jsx)("a",{className:"hidden",href:"https://www.thrivepeople.nl/nl/privacy",children:"Privacy"}),(0,s.jsx)("p",{className:"hidden md:block",children:"Copyright \xa9 2023 Thrive People"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"uppercase font-bold text-xs text-white text-center md:text-right",children:"supported by"}),(0,s.jsx)("img",{src:"/assets/ImpactCity.png",alt:"",className:"w-32 mt-2.5"})]})]})]})})}},2489:function(){}}]);