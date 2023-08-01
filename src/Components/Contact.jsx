import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type='text' placeholder='Full Name' required />
        <input type='text' placeholder='Type Your Email' required />
        <textarea placeholder='Wrete here.............' name='message'></textarea>
      <input type='submit' value='Send' />
      </form>
    </div>
  )
}
