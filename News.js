import React,{Component} from 'react';
import Newscomponent from './Newscomponent.js';
import Spinner from'./Spinner.js';
import Proptypes from 'prop-types';
export default class News extends Component{
    constructor(){
      super();
      this.state={
        articles:[],
        totalResults:0,
        page:1,
        loading:false,

      }
    }
    defultProps={
       country:'us',
       pageSize:'8'
    }
    Proptypes={
       country:Proptypes.string,
       pageSize:Proptypes.number,
       category:Proptypes.string

    }
    componentDidMount(){
    let lk=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=596426aefd2d45ce8ba80405698015c5&page=1&pageSize=${this.props.pageSize}`;
  //   let p=await fetch(lk);
  //   let data=await p.json();
  //   console.log(data);
  //   this.setState({articles:data.articles})
    let p=fetch(lk);
    p.then((value1)=>{
      return value1.json();
    }).then((value2)=>{
      this.setState({articles:value2.articles,totalResults:value2.totalResults})
    })
   }
    handleprevclick(){
      console.log("Previous Click");
      let lk=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=596426aefd2d45ce8ba80405698015c5&page=${ this.state.page - 1}&pageSize=20`;
      this.setState({loading:true});
  //   let p=await fetch(lk);
  //   let data=await p.json();
  //   console.log(data);
  //   this.setState({articles:data.articles})
    let p=fetch(lk);
    p.then((value1)=>{
      return value1.json();
    }).then((value2)=>{
      this.setState({articles:value2.articles,page:this.state.page - 1})
    }
    )
      
    }
    
    handlenextclick(){
      console.log("Next Click");
      let lk=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=596426aefd2d45ce8ba80405698015c5&page=${this.state.page + 1}&pageSize=4`;
      this.setState({loading:true});
  //   let p=await fetch(lk);
  //   let data=await p.json();
  //   console.log(data);
  //   this.setState({articles:data.articles})
      let p=fetch(lk);
      p.then((value1)=>{
      return value1.json();
      }).then((value2)=>{
      this.setState({articles:value2.articles,loading:false,page:this.state.page + 1})
      }
      )
      
      
      
    
    //   console.log("Next Click");
    // }
}
    render(){
        
      return(
        <div>
         <div className="text-center"><h2>News Monkey-Top Headlines</h2></div>
         {this.state.loading?<Spinner/>:<></>}
        <div className="container my-3" >
          <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col md-4" key={element.url} >
           <Newscomponent title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""}/>
           </div>
          })}
           </div>
         </div>
         <div className="container d-flex justify-content-around">
         <button type="button" disabled={this.state.page<2} className="btn btn-dark" onClick={this.handleprevclick}>&larr;Previous</button>
         <button type="button" disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handlenextclick}>Next&rarr;</button>
         </div>
        </div>

        )
    }     
}