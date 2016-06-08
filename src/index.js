import { ready, bootstrap, webview, Promise, $define, widgets, component } from './main';

require('normalize.css');
require('./css/matrix.scss');

// class Tab extends component {
//     constructor(){
//         super();
//     }
//
//     _template(){
//         return `<div class="tab">tab</div>`;
//     }
// }
//
//
// $define('tab', Tab);
//
// console.log(widgets)


class a extends webview {
    constructor(node){
        super(node);
    }
    a(){
        this.$back('/')
    }
    b(){
        this.$reback('/')
    }
    render(){
        return {
            template: `
                <h1 class="ddd" v-back url="/">a back</h1>
                <h1 class="ddd" v-reback url="/">a reback</h1>

                <h1 class="ddd" @click="a">a back</h1>
                <h1 class="ddd" @click="b">a reback</h1>
            `,
            methods: {
                a: this.a,
                b: this.b
            },
            ready(){
                //console.log(this)
            }
        }
    }
}

class b extends webview {
    constructor(node){
        super(node);
    }
    a(){
        this.$forward('/a/b/c')
    }
    b(){
        this.$redirect('/a/b/c')
    }
    render(){
        return {
            template: require("./temp/index.html"),
            methods: {
                a: this.a,
                b: this.b
            },
            ready(){
                //console.log(this)
            }
        }
    }
}


class flex extends webview {
    constructor(node){
        super(node);
    }
    render(){
        return {
            template: require("./temp/flex.html"),
            ready(){
                //console.log(this)
            }
        }
    }
}



ready(function(){
    const app = bootstrap();

    app.on('route:start', function(){
        console.log('route start');
    })

    app.on('route:end', function(){
        console.log('route end');
    })

    app.on('ready', function(){
        console.log('ready');
    })

    app.at('/', function(next){
        app.publish(b, next);
    })
    app.at('/flex', function(next){
        app.publish(flex, next);
    })

    app.at('/a/b/c', function(next){
        app.publish(a, next);
    })

    app.listen();
})
