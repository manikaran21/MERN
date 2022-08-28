import React , { Component } from 'react' ;

 class FormReact extends Component {

    constructor(props){
         super(props) ;
         this.state = {
             fname:"",
             lname:"",
             adds1:"",
             adds2:"",
             city:"",
             state:"",
             pincode:"",
             country:""

         }

         this.handle = this.handle.bind(this);
         this.validate = this.validate.bind(this) ;
        
    }
    handle = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }
    validate = (e) => {
        
       let isnum = /^\d+$/.test(this.state.pincode);
       e.preventDefault();
       console.log("form is submitted");
       if(this.state.fname.length< 8 || this.state.lname.length < 8){
           alert("minimum length of the field is 8 characters") ;
           return false ;
       }
       if(this.state.adds1 < 32){
        alert("minimum length of the field is 32 characters") ;
        return false ;
       }
       if(this.state.pincode.length != 6 || !isnum){
        alert("exact length of the field is 6 characters and all are numbers") ;
        return false ;
       }

       return true ;
       
    }
    
    render(){
        return(
            <div className="container" >
                <h1>checkout</h1>
      <h3 style={{textAlign:"left"}}>shipping address</h3> <br/>
      <form onSubmit={this.validate}>
        <div style={{display:"flex"}}>
        <input style={{marginRight:"4px"}}className="form-control" type="text" placeholder="First Name *" value={this.state.fname} onChange={this.handle} name="fname" required/> 
        <input style={{marginLeft:"4px"}} className="form-control" type="text" placeholder="Last Name *" value={this.state.lname}  onChange={this.handle} name="lname" required/>  
        </div>
        <br/>
        <input className="form-control" type="text" placeholder="Address Line 1 *" value={this.state.adds1} onChange={this.handle} name="adds1" required/>    
       <br/>
        <input className="form-control" type="text" placeholder="Address Line 2" value={this.state.adds2} onChange={this.handle} name="adds2"/>    
       <br/>
       <div style={{display:"flex"}}>
        <input style={{marginRight:"4px"}} className="form-control" type="text" placeholder="City *" value={this.state.city} onChange={this.handle} name="city" required/>                 
        <input style={{marginLeft:"4px"}} className="form-control" type="text" placeholder="State"  value={this.state.state} onChange={this.handle} name="state"/>       
        
        </div>
        <br/>
        <div style={{display:"flex"}}>
        <input style={{marginRight:"4px"}} className="form-control" type="text" placeholder="Postal Code *"     value={this.state.pincode} onChange={this.handle} name="pincode" required/>      
        <input style={{marginLeft:"4px"}} className="form-control" type="text" placeholder="Country  *" value={this.state.country} onChange={this.handle} name="country" required/>         
        </div>
        <br/>
        <div style={{display:"flex"}}>
        <input style={{marginTop:"5px"}} type="checkbox" /><p style={{marginLeft:"5px"}}>use above address for payment details</p> <br/>
        </div>
       <br/>
       <div style={{textAlign:"right"}}>
        <button className="btn btn-primary"type="submit" >Next</button> 
        </div>
      </form>
            </div>
        );
    }
}


export default FormReact ;