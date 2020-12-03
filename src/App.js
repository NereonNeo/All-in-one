import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react';
import { Formik, Field, Form } from "formik";
import basicFormSchema from './sets/basicFormSchema';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToFirebase, sendToFireStore } from './redux/actions';

function App() {

  const dispatch = useDispatch()
  const fireData = useSelector(state => state.app.data)

  function getData() {
    dispatch(fetchToFirebase())
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(fireData, "dataState");
  return (
    <div className="App">
      <header className="App-header">
        <Formik
        initialValues={{
          email:'',
          firstName:'',
          password:''
        }}
        
        validationSchema={basicFormSchema}
        onSubmit={values => {
            dispatch(sendToFireStore(values))
        }}
        render={({errors,touched})=>(
          <Form className="form-container">
             <label htmlFor="email">Email</label>
             <div className="erors">
               
          <Field
            name="email"
            placeholder="Your email please"
            type="email"
          />
          {
            errors.email &&
            touched.email &&<div className="erors"> <p>{errors.email}</p> </div>
          }
           <Field name="firstName"placeholder="Your Name please" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
          </div>
          <Field name="password"placeholder="Your Password please" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}

        <button type="submit">Submit</button>
        </Form>
        )}
      />
    {fireData.map((item,index) => {
        return(
          <div className="" key={index}>
            <div className="render-wrap">
          <h2>firstName:{item.title.firstName}</h2>
          <h3>Email:{item.title.email}</h3>
          <h3>password:{item.title.password}</h3>
            </div>
          </div>
        )
      })}
      </header>
    </div>
  );
}

export default App;
