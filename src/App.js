import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='background'></div>
      <div className='main-container'>
        <div className='content'>
          <div className='profile-image'></div>
          <div className='logo'></div>
          <div className='sub-title'>עקבו אחרי בפלטפורמות</div>
          <div className='links-container'>
            <div className='row-container'>
              <a
                target='_blank'
                href='https://www.youtube.com/@-asafy8256'
                rel='noreferrer'
              >
                <div className='link youtube'></div>
              </a>
              <a
                target='_blank'
                href='https://www.instagram.com/asaf_abramoviz/'
                rel='noreferrer'
              >
                <div className='link instagram'></div>
              </a>
              <a
                target='_blank'
                href='https://open.spotify.com/artist/0N6nQ7oHqLhCxAMvPo7ww1?si=ERbA_s4ZTauOGlPPF4vajQ'
                rel='noreferrer'
              >
                <div className='link spotify'></div>
              </a>
            </div>
            <div className='row-container'>
              <a
                target='_blank'
                href='https://music.apple.com/il/artist/%D7%90%D7%A1%D7%A4%D7%99/1506017989?l=iw'
                rel='noreferrer'
              >
                <div className='link apple-music'></div>
              </a>
              <a
                target='_blank'
                href='https://www.tiktok.com/@asafabramoviz1'
                rel='noreferrer'
              >
                <div className='link tiktok'></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
