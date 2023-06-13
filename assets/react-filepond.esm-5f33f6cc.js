import{P as d,y as s}from"./index-b4df7fd9.js";import{c as a,s as c}from"./upload-65f5d966.js";import{F as b,r as C}from"./upload-65f5d966.js";import"./firebase-81e38809.js";import"./file-0caebfe7.js";/*!
 * react-filepond v7.1.2
 * A handy FilePond adapter component for React
 * 
 * Copyright (c) 2022 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */const u=c(),h=["setOptions","on","off","onOnce","appendTo","insertAfter","insertBefore","isAttachedTo","replaceElement","restoreElement","destroy"];class S extends d.Component{constructor(e){super(e),this.allowFilesSync=!0}componentDidMount(){if(this._input=this._element.querySelector('input[type="file"]'),this._inputClone=this._input.cloneNode(),!u)return;const e=Object.assign({},this.props);if(e.onupdatefiles){const t=e.onupdatefiles;e.onupdatefiles=n=>{this.allowFilesSync=!1,t(n)}}this._pond=a(this._input,e),Object.keys(this._pond).filter(t=>!h.includes(t)).forEach(t=>{this[t]=this._pond[t]})}componentWillUnmount(){if(!this._pond)return;const e=document.createElement("div");e.append(this._pond.element),e.id="foo",this._pond.destroy(),this._pond=void 0,this._element.append(this._inputClone)}shouldComponentUpdate(){return this.allowFilesSync?!0:(this.allowFilesSync=!0,!1)}componentDidUpdate(){if(!this._pond)return;const e=Object.assign({},this.props);delete e.onupdatefiles,this._pond.setOptions(e)}render(){const{id:e,name:t,className:n,allowMultiple:i,required:o,captureMethod:p,acceptedFileTypes:r}=this.props;return s("div",{className:"filepond--wrapper",ref:l=>this._element=l},s("input",{type:"file",name:t,id:e,accept:r,multiple:i,required:o,className:n,capture:p}))}}export{S as FilePond,b as FileStatus,C as registerPlugin};
