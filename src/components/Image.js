import React, {Component} from 'react';
import wp from '../tools/Api';
export default class Image extends Component{

    constructor (props){
        super(props);

        this.state = {
            url : false,
            alt : false
        }
    }

    UNSAFE_componentWillMount(){
        let t = this;
        if (this.props.id){
            wp.media().id(this.props.id).get(function(err, image){
                if (!err){
                    t.setState({
                        alt: image.alt_text,
                        url: image.media_details.sizes[t.props.size].source_url
                    });
                }
            });
        }
    }

    render() {
        if (!this.state.url){
            return null;
        }

        return(<img className="article-img "src={this.state.url} alt={this.state.alt}/>)
    }

}