import React from 'react';
function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='' />
        </div>
        <div className='col-6 p-5'>
          <h1 className='mt-3'>Largest stocks borker in India</h1>
          <p className='mb-5'>2 million BullionX clients contribute to over 15% of all valumes in India daily by trading and investing in: </p>

          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bond and govt. secrities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='' style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;