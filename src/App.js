import './App.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';

const acording = [
  {
    titel: "How does Parkmane seperate itseld from other domain name parking companies?",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    titel: "How does Parkmane seperate itseld from other domain name parking companies?",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    titel: "How does Parkmane seperate itseld from other domain name parking companies?",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    titel: "How does Parkmane seperate itseld from other domain name parking companies?",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
]
const data = {
  Domains: [
    {
      extension: ".COM",
      price: "$5.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU",
      price: "$7.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".AL",
      price: "$10.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".US",
      price: "$8.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".MK",
      price: "$0.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".UK",
      price: "$8.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".CH",
      price: "$15.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".DE",
      price: "$25.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'Web Hosting': [
    {
      extension: ".AL",
      price: "$0.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".UK",
      price: "$8.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".CH",
      price: "$15.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".COM",
      price: "$25.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'Dedicated Service': [
    {
      extension: ".KS",
      price: "$3.59/yr",
      priceDescription: "Instead of $10.99/yr"

    },
    {
      extension: ".RKS",
      price: "$7.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU",
      price: "$5.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".DE",
      price: "$6.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'Virtual Cloud Servers': [
    {
      extension: ".COM",
      price: "$5.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU",
      price: "$7.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".AL",
      price: "$10.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".US",
      price: "$8.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'WordPress Hosting': [
    {
      extension: ".RKS",
      price: "$8.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".AL",
      price: "$10.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".BE",
      price: "$10.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".KS",
      price: "$3.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'Email Hosting': [
    {
      extension: ".AL",
      price: "$8.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU.UK",
      price: "$2.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".RKS",
      price: "$1.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".INFO",
      price: "$7.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'VPS Hosting Servers': [
    {
      extension: ".MK",
      price: "$23.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU",
      price: "$25.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".PL",
      price: "$50.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".CZ",
      price: "$7.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
  'Free Hosting': [
    {
      extension: ".DE",
      price: "$13.00/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".EU.UK",
      price: "$12.90/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".US",
      price: "$10.59/yr",
      priceDescription: "Instead of $10.99/yr"
    },
    {
      extension: ".CH",
      price: "$6.59/yr",
      priceDescription: "Instead of $10.99/yr"
    }
  ],
}

function App() {

  const [toggleAbout, setToggleAbout] = useState(true);
  function openAbout() {
    setToggleAbout(!toggleAbout);
  }
  const [toggleAcordion, setToggleAcordion] = useState(true);
  function acordionHandler() {
    setToggleAcordion(!toggleAcordion);
  }
  const [show, setShow] = useState();
  function showopen(props) {
    show === props ? setShow() : setShow(props)
  }

  return (
    <div>
      <div class="navbar-tabs-wrapper">
        <Tabs>
          <TabList className={"navbar-menu"}>
            <div className='tabs'>
              {
                Object.keys(data).map(tab => {
                  return (
                    <Tab key={tab}>{tab}</Tab>
                  )
                })
              }
            </div>
          </TabList>
          {
            Object.keys(data).map(key => {
              return (
                <TabPanel key={key}>
                  <div className="cards-holder" key={key}>
                    {
                      data[key].map((item) => {
                        return (
                          <div className="cardcontainer" key={item.extension}>
                            <div className="text-wrapper">
                              <div className="card-titel">
                                <h1>{item.extension}</h1>
                              </div>
                              <div className="card-description">
                                <h1>{item.price}</h1>
                                <p>{item.priceDescription}</p>
                              </div>
                            </div>
                            <div className="button">
                              <button className="buy-button">Buy Now</button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </TabPanel>
              )
            })
          }
        </Tabs>
        <div className='item-wrapper'>
          <div className='item-toggle'>
            <div className='itemHolder'>
              <div className='text-holder' onClick={acordionHandler}>
                <h1>Why park a domain name in Parkmane ?</h1>
                <div className='holding-icon'>
                  <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z" /></svg>
                </div>
              </div>
            </div>
            <div className={`toggle-text ${toggleAcordion ? "inactive" : ""}`}>
              <h1>Parkmane is the leading industry standard dor domain name parking and monetization services. We offer a wide variety of services to help you achieve success</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="list_items-wrapper">
        <div className="list_item" onClick={openAbout}>
          <div className="list_icon-wrapper">
            <div className="list_icon">
              <svg>
                <use href="#healthicons-ui-user-profile-outline"></use>
              </svg>
            </div>
          </div>
          <div className="list_information">
            <h1 className="list_information-title">About</h1>
            <p className="list_information-description">4 article in this Topic</p>
          </div>
          <div className='holding-icon'>
            <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z" /></svg>
          </div>
        </div>
        {acording.map((item, index) => {
          return (
            <div className={`toggle-title ${toggleAbout ? "inactive" : ""}`}>
              <div className='holding-title' onClick={() => showopen(index)}>
                <h1 className="aboutlist-title">{item.titel}</h1>
                <div className='open-icon'>
                  <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z" /></svg>
                </div>
                {show === index && <div className='holding-information'>
                  <h1>{item.des}</h1>
                </div>}
              </div>
            </div>
          )
        })}
      </div>
      <svg className='hide'>
        <symbol viewBox="0 0 30 30" id="healthicons-ui-user-profile-outline">
          <svg width="32" height="32" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" clip-rule="evenodd" /><path d="M12 35.63c0-1.033.772-1.906 1.8-2.02c7.715-.854 12.72-.777 20.418.019a1.99 1.99 0 0 1 1.108 3.472c-9.085 7.919-14.277 7.81-22.686.008c-.41-.38-.64-.92-.64-1.478Z" /><path fill-rule="evenodd" d="M34.115 34.623c-7.637-.79-12.57-.864-20.206-.019A1.028 1.028 0 0 0 13 35.631c0 .286.119.557.32.745c4.168 3.866 7.326 5.613 10.413 5.624c3.098.011 6.426-1.722 10.936-5.652a.99.99 0 0 0-.554-1.724ZM13.69 32.616c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 1.662 5.221c-4.575 3.988-8.385 6.16-12.257 6.145c-3.883-.014-7.525-2.223-11.766-6.158A3.018 3.018 0 0 1 11 35.63a3.028 3.028 0 0 1 2.69-3.015Z" clip-rule="evenodd" /><path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" /><path fill-rule="evenodd" d="M24 26a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" clip-rule="evenodd" /></g></svg>
        </symbol>
      </svg>
    </div>
  );
}

export default App;
