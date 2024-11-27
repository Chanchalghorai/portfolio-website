const Contact = () => {
    return (
      <section id="contact" style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
        <h2>Contact</h2>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
          <input type="text" placeholder="Name" style={{ padding: '10px', marginBottom: '10px' }} />
          <input type="email" placeholder="Email" style={{ padding: '10px', marginBottom: '10px' }} />
          <textarea placeholder="Message" style={{ padding: '10px', marginBottom: '10px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#282c34', color: '#fff' }}>Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  