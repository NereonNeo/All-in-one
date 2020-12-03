import * as Yup from 'yup'

const basicFormSchema = Yup.object().shape({
    firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Required'),
    email:Yup.string()
    .email('Invalid Email')
    .required('Required'),
    password:Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

})
export default basicFormSchema