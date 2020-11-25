import React from 'react';
import "./style.css";

export default class Hello extends React.Component{
    state={
        loading: true,
        array: [],
        handle:"",
        imageurl:'',
        rating: "",
        data:{
            labels:[],
            datasets:[
                {
                    label: "Video Mades",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: []
                },
            ]
        }
    }

    async fetchData(){
        const url ="https://codeforces.com/api/user.rating?handle=";
        const tobefetched = `${url}${this.state.handle}`;
        console.log(this.state.handle);
        const response = await fetch(tobefetched);
        const datatemp = await response.json();
        this.setState({array: datatemp.result})
      
        
        console.log(datatemp)
        const url2 ="https://codeforces.com/api/user.info?handles=";
        const tobefetched2 = `${url2}${this.state.handle}`;
        const response2 = await fetch(tobefetched2);
        const data2 = await response2.json();
        console.log(data2)
        this.setState({imageurl: data2.result[0].titlePhoto})
        this.setState({rating: data2.result[0].rating})
        console.log(this.state.imageurl);

    }
   


    render(){

        return (
            <div>
                <div style={{padding: 40,alignContent: "center",backgroundColor: "#1abc9c",color: 'white',fontSize: 30}} >Rating Changes</div>
            <div><input style={{padding: 10,fontSize: 20,marginLeft: 20}} placeholder='Search Handle' onChange={(text)=>this.setState({handle: text.target.value})}
              onKeyPress={event => {
                  if(event.key === 'Enter')
                  {
                      this.fetchData();
                  }
              }}
            
            /></div>
            

            <div style={{fontSize: 20,fontFamily: "fantasy",backgroundColor: "tomato",justifyContent: "center",marginRight: 1300,float: 'left'}}>Current Rating {this.state.rating}</div>
            <div style={{float: "left"}}><img src={this.state.imageurl}/></div>
            
            
        <div style={{float: "left"}}>
        <table id="styled-table">
        <thead id="styled-table">
        <tr>
            <th>ContestId</th>
            <th>ContestName</th>
            <th>Handle</th>
            <th>NewRating</th>
            <th>OldRating</th>
            <th>Rank</th>
        </tr>
        </thead>
        <tbody>
               {this.state.array.map(person => (
                <tr style={{'backgroundColor':'#ffa500'}}>
                    
             <td>{person.contestId}</td><td>{person.contestName}</td><td>{person.handle}</td><td>{person.newRating}</td><td>{person.oldRating}</td><td>{person.rank}</td>
                    
                </tr>

            ))} 
        </tbody>
        </table>
        </div>
        </div>)
    }
}