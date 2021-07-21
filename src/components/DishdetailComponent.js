import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


    
    function RenderDish({dish}){
        console.log("the dish detail  is rendered");
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


    function RenderComments({comments}){
        if (comments != null){
            const feedback = comments.map((post)=>{
                return (
                    <li key={post.id}>
                        <div className="m-2">{post.comment}</div>
                        <div className="m-2">{`--${post.author} ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.date)))}`}</div>
                    </li>
                );
            });
            return (
            
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {feedback}
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

    const DishDetail = (props) => {
        if (props.dish != null){
            return (
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.dish.comments}/>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }

    }

    



export default DishDetail;