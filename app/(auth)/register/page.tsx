import AuthForm from '@/components/ui/AuthForm';
import { useState, ChangeEvent, FormEvent } from 'react';


const Register = () => {
  return (
    <div className='bg-green-700 h-screen'>
      <AuthForm type='register'/>
    </div>


  );
};

export default Register;
