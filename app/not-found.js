export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      background: '#121212',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Oops! The page you are looking for does not exist.<br />
        Try going back to the <a href="/" style={{ color: '#4fd1c5', textDecoration: 'underline' }}>home page</a>.
      </p>
    </div>
  );
} 