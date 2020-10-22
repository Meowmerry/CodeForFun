import React, { useState } from 'react';
// import {ThemeContext, LocaleContext} from './context'

// export default class Greeting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Merry",
//             surname: "Popins"
//         }
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleNameChange = this.handleNameChange.bind(this);
//     }
//     handleNameChange(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }
//     handleSurnameChange(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }

//     render() {

//         return (
//             <div>
//                 <form>
//                     <div class="form-group">
//                         <label for="exampleInputEmail1">Email address</label>
//                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"
//                             value={this.state.name} 
//                             onChange={this.handleNameChange}
//                             />
//                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SureName"
//                             value={this.state.surname} 
//                             onChange={this.handleSurnameNameChange}
//                             />
//                     </div>
//                 </form>
//             </div>
//         )
//     }

// }

export default function Greeting(props) {

    const [name, setName] = useState("Merry"); // set initial state name
    const [surname, setSerName] = useState("Poppins"); // set initial state surname

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSurNameChange = (e) => {
        setSerName(e.target.value);
    }
    // function handleNameChange(e){
    //     setName(e.target.value);
    // }

    return (
        <div>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <br/>
                    <label for="exampleInputEmail1">Surname</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SurName"
                        value={surname}
                        onChange={handleSurNameChange}
                    />
                </div>
            </form>
            </div>
        </div>

    )
}

