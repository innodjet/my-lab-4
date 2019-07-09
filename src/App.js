import React , {useState} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  const [contactData, setContactData] = useState([
    {
      id: 0,
      firstName: 'NIK',
      lastName: 'DJETELI',
      age: '28',
      updateMode: false
    },
    {
      id: 1,
      firstName: 'Derick',
      lastName: 'Rose',
      age: '38',
      updateMode: false
    }
  ]);

  const [newContactData , setNewContactData] = useState([ ]);

  const [messageStatus , setMessageStatus] = useState([ 
    {
      message: '',
      type: 0, // 0 - Error , 1 - Success
      display: false // true - visible , false - hide
    },
  ]);

  const clear = () => {
    // Success message
    const prepData = [{
      message: '',
      type: 0, // 0 - Error , 1 - Success
      display: false // true - visible , false - hide
    }];
    setMessageStatus([...prepData]);
  }

  // Handle input changes in the form. 
  const handleInputEvent = (event) => {
    event.preventDefault()
    const target  = event.target;
    const name = target.name;
    const value = target.value;
    const id = target.id;
    const newData = contactData.map( (el) => {
      if ( name.toString() === 'firstName' && el.id === parseInt(id) ) { 
        el.firstName = value; 
      } else { 
        if ( name.toString() === 'lastName'  && el.id === parseInt(id)) { 
          el.lastName = value; 
        } else { 
          if ( name.toString() === 'age' && el.id === parseInt(id) ) {
            el.age = value; 
          } 
        }
      }
      return el;
    });
    setContactData(newData);
  };

  // Handle input changes in the form. 
  const handleInputEventNew = (event) => {
    event.preventDefault();
    const target  = event.target;
    const name = target.name;
    const value = target.value;
    const id = target.id;
    const newData = newContactData.map( (el) => {
      if ( name.toString() === 'firstName' && el.id === parseInt(id) ) { 
        el.firstName = value; 
      } else { 
        if ( name.toString() === 'lastName'  && el.id === parseInt(id)) { 
          el.lastName = value; 
        } else { 
          if ( name.toString() === 'age' && el.id === parseInt(id) ) {
            el.age = value; 
          } 
        }
      }
      return el;
    });
    setNewContactData(newData);
  };

  const editContact = ( id ) => {
    clear();
    const newData = contactData.map( (el) => {
      if ( el.id === parseInt(id) ) { 
        el.updateMode = true; 
      } 
      return el;
    });
    setContactData(newData);
  };

  const deleteContact = ( id ) => {
    clear();
    const newData = contactData.filter( (el) => {
      return ( el.id !== parseInt(id) );
    });
    setContactData(newData);
  };

  const saveContact = ( id ) => {
    clear();
    const data = contactData.filter( el => {
      return el.id === parseInt(id);
    });
   if ( validateForm(data) === 1 ) {
      const newData = contactData.map( (el) => {
        if ( el.id === parseInt(id) ) { 
          el.updateMode = false; 
        } 
        return el;
      });
      setContactData(newData);
      // Success message
      const prepData = [{
        message: 'Your contact have been successfully saved',
        type: 1, // 0 - Error , 1 - Success
        display: true
      }];
      setMessageStatus([...prepData]);
   } 
  };

  const saveNewContact = ( id ) => {
    clear();
    const data = newContactData.filter( el => {
      return el.id === parseInt(id);
    });
    if ( validateForm(data) === 1 ) {
      // add element in the main data;
      const newData1 = newContactData.filter( (el) =>{
        if (el.id === id ) { 
          el.updateMode = false;
          return el; 
        }
      });
      const newData = [...contactData,...newData1];
      // remove that element from the arry since add operation is complete.
      const newData2 = newContactData.filter( (el) =>{
          return (el.id !== id );
      });
      setContactData(newData);
      setNewContactData(newData2);
      // Success message
      const prepData = [{
        message: 'Your contact have been successfully added',
        type: 1, // 0 - Error , 1 - Success
        display: true
      }];
      setMessageStatus([...prepData]);
    }
  };

  const addNewContact = () => {
    clear();
    const id = newContactData.length === 0 ? (contactData.length+1):
               (newContactData[newContactData.length-1].id + 1);
    const data = [{
      id: id,
      firstName: '',
      lastName: '',
      age: '',
      updateMode: true
    }];
    let result = [...newContactData,...data];
    setNewContactData(result);
  }

  const validateForm = (data) => {
    let isfieldsEmpty = false, isFirstNameValid = true , isLastNameValid = true, isAgeValid = true;
    // Check if form is not empty
    if (data[0].firstName === '' ||
        data[0].lastName === ''  ||
        data[0].age === '' ) {
        isfieldsEmpty = true;
        const prepData = [{
          message: 'All the fields are requiered',
          type: 0, // 0 - Error , 1 - Success
          display: true
        }];
        setMessageStatus([...prepData]);
    } 

    // First name must be <= 45 characters
    if ( isfieldsEmpty === false && 
         data[0].firstName.length > 45 ) {
      isFirstNameValid=false;
      const prepData = [{
        message: 'First Name length must be less than 45 Characters',
        type: 0, // 0 - Error , 1 - Success
        display: true
      }];
      setMessageStatus([...prepData]);
    }

    // Last name must be <= 45 characters
    if ( isfieldsEmpty === false   && 
         isFirstNameValid === true && 
         data[0].lastName.length > 45 ) {
      isLastNameValid=false;
      const prepData = [{
        message: 'Last Name length must be less than 45 Characters',
        type: 0, // 0 - Error , 1 - Success
        display: true
      }];
      setMessageStatus([...prepData]);
    } 

    // Age must be numeric
    if ( isfieldsEmpty === false   && 
         isFirstNameValid === true && 
         isLastNameValid === true  && 
         isNaN(parseInt(data[0].age)) === true ) {
      isAgeValid = false;
      const prepData = [{
        message: 'Age must be numeric',
        type: 0, // 0 - Error , 1 - Success
        display: true
      }];
      setMessageStatus([...prepData]);
    } 
    
    // Final check
    if ( isfieldsEmpty === false   &&
         isFirstNameValid === true &&
         isLastNameValid === true  && 
         isAgeValid === true ) {
      return 1;
    } else { return 0; }
  }

  return (
    <div className="App">
      <Nav></Nav>
      <Body contactData={ contactData }  
            editContact={ editContact }
            deleteContact={ deleteContact }
            saveContact={ saveContact }
            saveNewContact={ saveNewContact }
            newContactData={ newContactData }
            addNewContact={ addNewContact }
            messageStatus={ messageStatus }
            handleInputEventNew={ handleInputEventNew }
            handleInputEvent={ handleInputEvent } >
      </Body>
      <Footer></Footer>
    </div>
  );

}

export default App;
