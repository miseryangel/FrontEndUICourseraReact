import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
        
    }
    
    renderDish(dish){

        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src = {dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }


    renderComments(dish){
        if (dish.comments != null){
            const comments = dish.comments.map((post)=>{
                console.log(dish.id);
                return (
                    <li key={post.id}>
                        <div className="m-2">{post.comment}</div>
                        <div className="m-2">{`--${post.author} ${new Date(post.date)}`}</div>
                    </li>
                );
            });
            return (
            
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
        // const menu = this.state.dishes.map((dish) => {
        //     return (
        //       <div key={dish.id} className="col-12 mt-5">
        //         <Media tag="li">
        //           <Media left middle>
        //               <Media object src={dish.image} alt={dish.name} />
        //           </Media>
        //           <Media body className="ml-5">
        //             <Media heading>{dish.name}</Media>
        //             <p>{dish.description}</p>
        //           </Media>
        //         </Media>
        //       </div>
        //     );
        // });
    }

    render() {
        if (this.props.selectedDish != null){
            return (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }

    }

    
}


export default DishDetail;