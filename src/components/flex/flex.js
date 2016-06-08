import Component from '../../app/component';

export default class Flex extends Component {
    constructor(){
        super();
        this.name = 'flex';
    }

    _computed(options){
        if ( !options ){ options = {} }
        options.style = function(){
            const styles = [];

            return styles.join(';');
        }

        options.class = function(){
            const classes = [];

            classes.push('mx-flex-direction-' + this.direction);

            if ( this.justify ){
                classes.push('mx-flex-justify-' + this.justify);
            }

            if ( this.alignItem ){
                classes.push('mx-flex-align-item-' + this.alignItem);
            }

            if ( this.alignContent ){
                classes.push('mx-flex-align-content-' + this.alignContent);
            }

            if ( this.wrap ){
                classes.push('mx-flex-wrap-' + this.wrap);
            }

            return classes.join(' ');
        }


        if ( typeof this.computed === 'function' ){
            options = this.computed(options);
        }
        return options;
    }

    _template(){
        if ( typeof this.template === 'function' ){
            return this.template();
        }
        return `<div class="mx-flex-box" :class="class" :style="style"><slot></slot></div>`;
    }

    _props(props){
        if ( !props ){ props = {} };

        // row|column|row-reverse|column-reverse
        props.direction = {
            type: String,
            default: 'row'
        }

        // start|center|end|between|around
        props.justify = String;

        // start|center|end|between|around
        props.alignItem = String;

        // start|center|end|between|around
        props.alignContent = String;

        // wrap|nowrap|wrap-reverse
        props.wrap = String;

        if ( typeof this.props === 'function' ){
            props = this.props(props);
        }

        return props;
    }
}
