'use strict';

export const extendOptions = function(a, b){
    for ( let i in b ){
        a[i] = b[i];
    }
    return a;
}

export const typedof = function(obj, type){
    const _type = Object.prototype.toString.call(obj).split(' ')[1].replace(/\]$/, '');
    if ( type ){
        return _type == type;
    }else{
        return _type;
    }
}

export const isElement = function(el){
    const type = typedof(el);
    return /^HTML/i.test(type) && /Element$/i.test(type);
}

export const compile = function(_component){
    if (
        !_component.prototype
        || (
            _component.super
            && _component.super.name === 'Vue'
        )
    ) return _component;

    return (new _component()).$_install()._vue_options;
}

export const addClass = function(el, cls){
    if (!el) return;
    el.$node.classList.add(cls);
}

export const removeClass = function(el, cls){
    if (!el) return;
    if ( el.$node.classList.contains(cls) ){
        el.$node.classList.remove(cls);
    }
}
