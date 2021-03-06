import React from 'react'
import withAuthorization from '../../components/hoc/withAuthorization'
import ServiceItem from '../../service/ServiceItem'
import { fetchReceivedOffers, changeOfferStatus } from '../../actions'
import { connect } from 'react-redux';

class ReceivedOffers extends React.Component {


      componentDidMount() {
      const { auth } = this.props
      this.props.fetchReceivedOffers(auth.user.uid)
    }


    acceptOffer = offerId => {
      this.props.changeOfferStatus(offerId, 'accepted')
    }

    declineOffer = offerId => {
     
      this.props.changeOfferStatus(offerId, 'declined')
    }

    statusClass = status => {
      if(status === 'pending') return 'is-warning'
      if(status === 'accepted') return 'is-success'
      if(status === 'declined') return 'is-danger'
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
                                  <div className={`tag is-large ${this.statusClass(o.status)}`}>
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
                                  { o.status === 'pending' &&
                                    <div>
                                    <hr />
                                    <button onClick={() => this.acceptOffer(o.id)} className="button is-success s-m-r">Accept</button>
                                    <button onClick={() => this.declineOffer(o.id)} className="button is-danger">Decline</button>
                                  </div>
                                  }
                                  
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

const mapDispatchToProps = () => ({
  changeOfferStatus,
  fetchReceivedOffers
})

export default withAuthorization(connect(mapStateToProps, mapDispatchToProps())(ReceivedOffers))