import Head from 'next/head';
import { useState, useEffect } from 'react';
import Script from 'next/script';

const ArithmeticGame = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Here you can initialize your game logic
    // Arithmetic.init(...) equivalent in React way
  }, []);

  // Define your game logic and handlers here

  return (
    <>
      <Head>
        <title>Arithmetic Game – Online Speed Drill</title>
        <link href='/app.css' rel='stylesheet' />
      </Head>

      <div id='game'>
        <span className='left'>Seconds left:</span>
        <span className='correct'>Score: {score}</span>
        <div className='banner'>
          <div className='start'>
            <span className='problem'></span>
            =
            <input className='answer' />
          </div>
          <div className='end'>
            <p className='correct'>Score: {score}</p>
            <p>
              <a href='/game?key=a7220a92'>Try again</a>
              or <a href="/">change settings</a>.
            </p>
          </div>
        </div>
      </div>

      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js' strategy="beforeInteractive"></Script>
      <Script src='/app.js' strategy="afterInteractive"></Script>

      {/* Google Analytics Script */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-4847317-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        `}
      </Script>
    </>
  );
};

export default ArithmeticGame;
