function Footer() {
  return (
    <>
      <footer className="text-white" style={{ background: '#080b05' }}>
        {/* <!-- Site footer --> */}
        <div className="container-fluid flex space-x-8 justify-center">
          <img style={{ width: 25 }} src="/images/facebook.png" alt="facebook" />
          <img style={{ width: 25 }} src="/images/instagram.png" alt="instagram" />
          <img style={{ width: 25 }} src="/images/youtube.png" alt="youtube" />
        </div>

        <hr className="w-1/2 mx-auto my-5" />

        <p className='text-center'>Copyright © Learner's Lounge</p>
        <p className='text-center'>All Rights Reserved</p> <br />

      </footer>
    </>
  )
}

export default Footer