import React from 'react'
import withAuthorization from '../../components/hoc/withAuthorization'
import ServiceItem from '../../service/ServiceItem'

class SentOffers extends React.Component {
  render() {

    return(
      <div className="container">
            <div className="content-wrapper">
              <h1 className="title">Sent Offers</h1>
              <div className="columns">
                <div className="column is-one-third">
                  
                </div>
              </div>
            </div>
          </div>

      )
  }
}


export default withAuthorization(SentOffers)