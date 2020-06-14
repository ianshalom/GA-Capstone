import React from 'react'
import withAuthorization from '../../components/hoc/withAuthorization'
import ServiceItem from '../../service/ServiceItem'
import { fetchReceivedOffers } from '../../actions'
import { connect } from 'react-redux';

class ReceivedOffers extends React.Component {


      componentDidMount() {
      const { auth } = this.props
      this.props.dispatch(fetchReceivedOffers(auth.user.uid))
    }


    render(){
      const { offers } = this.props
        return(
             <div className="container">
                  <div className="content-wrapper">
                    <h1 className="title">Received Offers</h1>
                    <div className="columns">
                    { offers.map(o => (
                      <div 
                        key={o.id}
                        className="column is-one-third">
                                <ServiceItem
                                  noButton
                                  className="offer-card"
                                  service={o.service}>
                                  <div className="tag is-large">
                                    {o.status}
                                  </div>
                                  <hr />
                                  <div className="service-offer">
                                    <div>
                                      <span className="label">From User:</span> {o.fromUser.userProfile.fullName}
                                    </div>
                                    <div>
                                      <span className="label">Note:</span> {o.note}
                                    </div>
                                    <div>
                                      <span className="label">Price:</span> ${o.price}
                                    </div>
                                    <div>
                                      <span className="label">Time:</span> {o.time} hours
                                    </div>
                                  </div>
                                </ServiceItem>
                               </div>  
                           
                      )          
                    )
                     }
                      

                      
                    </div>
                  </div>
                </div>

            )
      }
    }
 const mapStateToProps = (state) => {
    return {
      offers: state.offers.received
    }
  }


export default withAuthorization(connect(mapStateToProps)(ReceivedOffers))