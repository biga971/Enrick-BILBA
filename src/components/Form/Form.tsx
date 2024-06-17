import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

//import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

import { sendMail } from '../../services'

export function Form() {
  const [state, handleSubmit] = useForm('./my-handling-form')
  const [validEmail, setValidEmail] = useState(false)
  const [email, setEmail] = useState('')
  //const [isHuman, setIsHuman] = useState(true)
  const isHuman = true
  const [message, setMessage] = useState('')

  
  const onClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      email: email,
      message: message
    }
    const response = await sendMail(body)
    console.log(response)

    if (response.response.accepted[0] === undefined) {
      toast.error('Email failed to send!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      })
    }else if(response.response.accepted[0] === "enrick.bilba@icloud.com") {
      handleSubmit(event)
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }


  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }
  
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }
  return (
    <Container>
      <h2>Contactez-moi via le formulaire</h2>
      <form  onSubmit={onClick} >
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
            setEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Ecrivez votre message."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* <ReCAPTCHA
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA> */}
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Envoyer
        </button>
       </form> 
      <ToastContainer />
    </Container>
  )
}
